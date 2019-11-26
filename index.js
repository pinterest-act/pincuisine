#! /usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');

request("https://www.thepinchefs.com/menu", function(err, resp, body) {
    if (err)
        throw err;
    $ = cheerio.load(body);
    var lunch = $(".paragraph:nth-of-type(3) strong:nth-of-type(1)").text()
    var dinner = $(".paragraph:nth-of-type(3) strong:nth-of-type(2)").text()
    console.log("");
    console.log(lunch.blue);
    console.log($(".paragraph:nth-of-type(3) > font:nth-of-type(1)").html().replace(/<[^>]*>/g, "\n"));
    console.log("");
    console.log(dinner.blue);
    console.log($(".paragraph:nth-of-type(3) > font:nth-of-type(2)").html().replace(/<[^>]*>/g, "\n"));
    console.log("");
});
