const request = require("request");
const cheerio = require("cheerio");

request("https://www.freecodecamp.org/news/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);

    const siteHeading = $(".post-card-title");
    console.log(siteHeading.text());
  }
});
