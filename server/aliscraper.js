const scrape = require('aliexpress-product-scraper-forker');
const product = scrape('32720585644');

product.then(res => {
  console.log('The JSON: ', res);

});