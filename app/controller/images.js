var image_parser = require('./image_parser');
var regex = APP.utils.regex

function images() {
    this.getImages = function (req,res) {

        req.query.url = req.query.url || "http://xaxa-net.ru/prikol_pics/"

        var result = regex.host_name.exec(req.query.url)
        // console.log(result)
        if (!result){
            res.send(401, 'invalid url')
            return;
        } else {
            var host_name = result[0];
            host_name = result[0].substr(0,host_name.length-1);
        }
        
        image_parser.parsePage({
            host_name: host_name,
            url: req.query.url,
            cb: function(images) {
                // console.error(images)
                res.send(images);
            }
        });
    }

    this.voteUp = function(req,res) {

        if(!req.query.url) {
            res.send(400, 'Sorry, arguments is invalid')
            return;
        }

        console.log('vote upped');

        res.send('Vote upped!');

    }

    this.voteDown = function(req,res) {

        if(!req.query.url) {
            res.send(400, 'Sorry, arguments is invalid')
            return;
        }

        console.log('vote downed');

        res.send('Vote downed!');

    }
}

module.exports = (function(){
    return new images();
})();