//modules
const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const SEARCH_URL = 'https://www.yardsalesearch.com/garage-sales.html?zip='
const SALE_URL = 'https://www.yardsalesearch.com/yss-garage-sale.jsp?id='
const ZIP = '70433'
//const ZIP = '47906'
//


const getSaleByID = (id) => {

    const url = SALE_URL + id;
   
    got(url)
        .then(response => {
            const $ = cheerio.load(response.body);
            
            const sales_header = $('div .upgrade-header-content').text().trim();
            const name = $('h1[itemprop=name]').text().trim();
            const location = $('div[itemprop=location]').text().trim();
            //when is the one most likely to break because it is not based on an itemprop
            const when = $('div .info').has('meta[itemprop=startDate]').text()
                .replace(/\s\s+/g, '\n').trim();
            const startDate = $('meta[itemprop=startDate]').attr('content');
            const endDate = $('meta[itemprop=endDate]').attr('content');
            const description = $('div[itemprop=description]').text().trim();

            console.log('id:', id);
            console.log('name:', name);
            console.log('sales-header:', sales_header);
            console.log('location:', location);
            console.log('when:', when);
            console.log('startDate:', startDate);
            console.log('endDate:', endDate);
            //descritions work, just take up a lot of room in the console
            console.log('description:', description);
            
            console.log('\n');
            
        })
        .catch( err => {
            console.log(err);
        });

}

const getSalesByZip = (zip) => {
    const url = SEARCH_URL + zip;
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

            for(var i = 0; i < rootEventListDivs.length; i++){
                const div = rootEventListDivs[i];
                const divClass = div.attribs.class;
                const divItemType= div.attribs.itemtype;
                
                // if it is a desired yard sale
                if (divItemType === 'http://schema.org/Event') {
                    
                    //get the id of the sale
                    const id = div.attribs.id.trim();

                    //get the details of the sale by its id
                    getSaleByID(id);
                }
                
                //stop the loop if you get to another eventList
                //event lists after this are not yard sales near the zip
                if(divClass === 'eventList clearFix') {
                    break;
                }
            }

        })
        .catch(err => {
            console.log(err);
        });

}

getSalesByZip(ZIP);