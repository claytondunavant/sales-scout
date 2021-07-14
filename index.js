//modules
const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');
const { children } = require('cheerio/lib/api/traversing');

const BASEURL = 'https://www.yardsalesearch.com/garage-sales.html?zip='
const ZIP = '70433'
//const ZIP = '47906'

const url = BASEURL + ZIP


got(url)
    .then(response => {
        const $ = cheerio.load(response.body);
        
        //each page has three eventLists
        //the first one is a parent one that the other two fall under
        //the two eventList chlidren have events we do not want
        //that is why we loop though the events until we get to the first eventList child
        
        //go into initial eventList
        const rootEventList = $('div .eventList')[0];

        //loop through divs in parent eventList
        //using a for loop for the break statement
        const rootEventListDivs = $('div', rootEventList);

        var counter = 0;
        for(var i = 0; i < rootEventListDivs.length; i++){
            const div = rootEventListDivs[i];
            const divClass = div.attribs.class;
            const divItemType= div.attribs.itemtype;
            
            // if it is a yard sale
            if (divItemType === 'http://schema.org/Event') {
                counter++;
                console.log("event", counter);
            }
            
            //stop the loop if you get to another eventList
            if(divClass === 'eventList clearFix') {
                console.log('stop!');
                break;
            }
        }

    })
    .catch(err => {
        console.log(err);
    });