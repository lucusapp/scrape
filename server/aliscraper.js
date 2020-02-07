const scrape = require('aliexpress-product-scraper-forker');
const product = scrape('32788344921');

product.then(res => {
  console.log('The JSON: ', res);

});