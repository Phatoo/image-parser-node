function Parser(){
    var me = this;

    var _allowedFormats = [".png",".jpg"]
    var _tags = {};
    _tags.img = "img"



























    // params.url
    // params.cb
    this.parsePage = function(params){
        if(!params.url)
            console.error('image_parser.parsePage url undefined')
        if(!params.cb)
            console.error('image_parser.parsePage cb undefined')

        APP.modules.request(params.url, function(error, response, body) {
            $ = APP.modules.cheerio.load(body);

            var images = []
            for(var key in $('img')){
                if ($('img')[key].attribs) {
                    images.push({url:$('img')[key].attribs.src})
                }
            }
            params.cb(images);
        });
    }
    return this;
}

// console.log(JSON.stringify(new Parser()))

module.exports = Parser();
