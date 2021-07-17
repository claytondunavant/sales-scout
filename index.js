//modules
const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');
const { end } = require('cheerio/lib/api/traversing');
const { resolve } = require('path');

const SEARCH_URL = 'https://www.yardsalesearch.com/garage-sales.html?zip='
const SALE_URL = 'https://www.yardsalesearch.com/yss-garage-sale.jsp?id='

const ZIP = '47906'

const getSaleByID = async (id) => {

    const url = SALE_URL + id;
    
    try {
        const response = await got(url);

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
        
        const yardSale = {
            id: id,
            name: name,
            sales_header: sales_header,
            location: location,
            when: when,
            startDate: startDate,
            endDate: endDate,
            description: description,
        }
        
        return yardSale
    } catch (err) {
        throw new Error("Error fetching sale", id);
    }

}

const getSalesByZip = async (zip) => {

    const url = SEARCH_URL + zip;
    
    let zipSales = []
    
    try {

        const response = await got(url);

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
                try {
                    const sale = await getSaleByID(id);

                    zipSales.push(sale);
                } catch (err) {
                    console.log(err);
                }

            }
            
            //stop the loop if you get to another eventList
            //event lists after this are not yard sales near the zip
            if(divClass === 'eventList clearFix') {
                return zipSales;
            }
        }
    } catch (err) {
        console.log(err);
    }

}

const main = async () => {
    const sales = await getSalesByZip(ZIP)
    console.log(sales)
    console.log(sales.length)
}

main();