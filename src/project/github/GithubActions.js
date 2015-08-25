var constants = require('./constants');
var dispatch = require('project/shared/helpers/dispatch');
var Backbone = require('backbone');


module.exports = {
    find: function(query) {
        dispatch(constants.GITHUB_FIND, { query: query });
        Backbone.$.getJSON(
            "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
                tags: query,
                format: 'json'
            }, function(results) {
                if(results && results.items) {
                    dispatch(constants.GITHUB_FIND_SUCCESS, { items: results.items });
                } else {
                    dispatch(constants.GITHUB_FIND_FAIL);
                }
            });
    }
};
