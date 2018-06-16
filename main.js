var colors = require('colors');

var stationList = [
  	{    url:"https://www.reddit.com/r/hiphopheads/.rss"},
	{    url:"https://www.theverge.com/rss/index.xml"},
    {   url:"http://feeds.reuters.com/Reuters/worldNews"},
    {   url:"https://www.reddit.com/r/politics/.rss"},
    {   url: "https://www.reddit.com/r/television/.rss"},
    {   url: "https://www.reddit.com/r/linux/.rss"}
    
];



var parser = require('dlm-rss-parser');


function update() {

  console.log('\033c')
  console.log("Todays News".yellow);

  for (let i = 0; i < stationList.length; i++) {
    parser.parseURL(stationList[i].url, function (err, parsed) {
      ///console.log(parsed.feed.entries[0].title);

      stationList[i].story = parsed.feed.entries[0].title;
      stationList[i].id = parsed.feed.title;

      console.log(stationList[i].id.red + ":".red + " " + stationList[i].story);
    })
  }
}

update();

setInterval(function () {
  update()
}, 300000);