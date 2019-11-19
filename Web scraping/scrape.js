const request = require("request");
const cheerio = require("cheerio");

request("https://www.freecodecamp.org/news/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);

    const siteHeading = $(".post-feed");
    // console.log(siteHeading.text());

    const output = siteHeading
      .children("article")
      .next()
      .text();
    console.log(output);
  }
});
