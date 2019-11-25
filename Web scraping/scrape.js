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
    // console.log(output);

    $(".inner").each((i, el) => {
      const item = $(el)
        .text()
        .toUpperCase();
      const link = $(el).attr("href");
      // console.log(item);
    });
  }
});

let options = {
  url:
    "https://api.github.com/repos/Md-Mudassir/SmartWatch/stats/code_frequency?client_id=c8ba9f97b0b64677111c&client_secret=e50f85e441448b3ffae5c6f5edf36f83e9277534",

  headers: {
    "User-Agent": "request"
  }
};

function callback(error, response, body) {
  console.log(JSON.stringify(jsonBody, null, 2));
}
request(options, callback);

fetch(
  "https://api.github.com/repos/Md-Mudassir/SmartWatch/stats/code_frequency?client_id=c8ba9f97b0b64677111c&client_secret=e50f85e441448b3ffae5c6f5edf36f83e9277534"
).then(res => console.log(res.json()));
