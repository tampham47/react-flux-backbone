var React = require('react');
var storeMixin = require('project/shared/helpers/storeMixin');
var RouterActions = require('project/router/RouterActions');

// var FlickrActions = require('../FlickrActions');
// var FlickrStore = require('../FlickrStore');
// var FlickrForm = require('./FlickrForm');
// var FlickrList = require('./FlickrList');

var GithubActions = require('../GithubActions');
var GithubStore = require('../GithubStore');
var GithubForm = require('./GithubForm');
var GithubList = require('./GithubList');


module.exports = React.createClass({
    mixins: [storeMixin(GithubStore)],

    getInitialState: function() {
        return {
            GithubStore: GithubStore
        };
    },

    componentDidMount: function() {
        if(this.props.routeParams && this.props.routeParams[0]) {
            GithubActions.find(this.props.routeParams[0]);
        }
    },

    componentWillReceiveProps: function(newProps) {
        if(newProps.routeParams && newProps.routeParams[0]) {
            GithubActions.find(newProps.routeParams[0]);
        }
    },

    onSearch: function(query) {
        RouterActions.navigate("github/"+ encodeURIComponent(query));
    },

    render: function() {
        return <div>
            <GithubForm onSearch={this.onSearch} value={this.props.routeParams[0]} />
            <GithubList GithubStore={this.state.GithubStore} />
        </div>
    }
});
