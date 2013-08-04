var image_parser = APP.utils.image_parser


function images() {
    this.getImages = function (req,res) {
        var images = image_parser.parsePage({
            url:'http://thechive.com/2012/01/19/hump-day-a-day-late-and-a-dollar-extra-69-photos/',
            cb: function(images) {
                console.error(images)
                res.send(images);
            }
        });        
    }
}

module.exports = (function(){
    return new images();
})();