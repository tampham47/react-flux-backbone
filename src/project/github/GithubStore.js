var Backbone = require('backbone');
var Store = require('project/shared/libs/Store');
var constants = require('./constants');


var GithubResult = Backbone.Model.extend({
    getPhoto: function() {
        return this.get('media').m;
    }
});


class GithubCollection extends Store.Collection {
    constructor() {
        this.model = GithubResult;
        super();
    }

    handleDispatch(payload) {
        switch (payload.actionType) {
            case constants.GITHUB_FIND_SUCCESS:
                this.reset();
                this.add(payload.items);
                break;
        }
    }
}

module.exports = new GithubCollection();
