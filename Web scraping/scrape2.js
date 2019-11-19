const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.txt");

writeStream.write(`Title,Link \n`);

request("https://www.freecodecamp.org/news/", (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);

    $(".post-card-content").each((i, el) => {
      const title = $(el)
        .find(".post-card-title")
        .text()
        .trim();

      const link = $(el)
        .find("a")
        .attr("href");
      writeStream.write(`${title}, ${link} \n`);
    });
    console.log("done");
  }
});
