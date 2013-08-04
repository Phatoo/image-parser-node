

function router(app){

	app.get("/", function (req, res) {
		var index_html = require('fs').readFileSync(__dirname+'/public/index.html');
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', index_html.length);
        res.end(index_html)
	})	

	app.get("/images", require("./controller/images").getImages)
}

module.exports = router;

