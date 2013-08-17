var util = require('util');

var images = require("./controller/images");

function router(app){

	app.get("/", function (req, res) {
		var index_html = require('fs').readFileSync(__dirname+'/public/index.html');
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', index_html.length);
        res.end(index_html)
	})	

	// console.log(util.inspect(images, false, null));

	app.get("/images", images.getImages);
	app.post("/images/voteup", images.voteUp);
	app.post("/images/votedown", images.voteDown);
}

module.exports = router;

