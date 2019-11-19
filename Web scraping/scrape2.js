const request = require("request");
const cheerio = require("cheerio");

request("https://www.freecodecamp.org/news/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);

    $(".post-card-content").each((i, el) => {
      const title = $(el)
        .find(".post-card-title")
        .text()
        .trim();

      console.log(title);
    });
  }
});
