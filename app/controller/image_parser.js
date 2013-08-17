var regex = APP.utils.regex

function Parser() {
    var me = this;

    // params.url
    // params.cb
    this.parsePage = function(params) {
        if(!params.url) {
            console.error('image_parser.parsePage url undefined')
            return;
        }
        if(!params.cb) {
            console.error('image_parser.parsePage cb undefined')
            return;
        }
        if(!params.host_name) {
            console.error('image_parser.parsePage host_name undefined')
            return;
        }

        APP.modules.request(params.url, function(error, response, body) {
            
            if(error) params.cb();

            $ = APP.modules.cheerio.load(body);

            var images = [];
            for(var key in $('img')){
                if ($('img')[key].attribs) {
                    var img_src = $('img')[key].attribs.src
                    
                    if(!regex.host_name.exec(img_src)){
                        img_src = params.host_name + img_src;
                    }

                    console.log(img_src);
                    images.push({url:img_src})
                }
            }
            params.cb(images);
        });
    }
    return this;
}

module.exports = Parser();
