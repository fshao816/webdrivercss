var glob = require('glob'),
    fs   = require('fs');

module.exports = function(res,done) {

    /**
     * save screenshot buffer for later
     */
    this.screenshot = new Buffer(res.value, 'base64');

    glob(this.filenameCurrent, {}, function(err,files) {

        /**
         * if no files were found continue
         */
        if(files.length === 0) {
            return done();
        }

        this.isComparable = true;
        this.filename = this.filenameNew;

        return done();

    }.bind(this));
};