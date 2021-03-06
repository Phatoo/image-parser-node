global.APP = {}
global.CFG = require('./config')

APP.modules = {
	request: require('request'),
    cheerio: require('cheerio'),
	brain: require('brain'),
	cv: require('opencv')
}

APP.utils = {
	regex: require('./regex')
}


var express = require('express');
var app = express();

app.configure(function(){
	app.listen(5000);
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname+"/public"));
	require('./router')(app);
})

console.log('Server started on port', 5000)

// cv.readImage("./examples/test.jpg", function(err, im){
//   im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
//     for (var i=0;i<faces.length; i++){
//       var x = faces[i]
//       im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
//     }
//     im.save('./out.jpg');
//   });
// })



// var data = [
// 	// {input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
// 	// {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
// 	{input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}
// ]

// var options = {
//   errorThresh: 0.004,  // error threshold to reach
//   iterations: 10,   // maximum training iterations
//   log: true,           // console.log() progress periodically
//   logPeriod: 10        // number of iterations between logging
// }

// var net = new APP.modules.brain.NeuralNetwork();
// net.train(data, options);
// console.log(net.run({r:0.2, g:0.9, b:0.9}))