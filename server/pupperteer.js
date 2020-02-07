const puppeteer = require('puppeteer');


(async function getData() {
    try{
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1')
        
        await page.goto("https://es.aliexpress.com/item/4000052934564.html")
        await page.waitForSelector('.product-price')
         
          const sections = await page.$('.product-price')
          console.log(sections.length)

        console.log("its the showing")

        // const titulo = await page.$$('.product-title')
        // console.log(titulo.length)
    } catch (e){
        console.log('nuestro error', e)
    }
    

})();