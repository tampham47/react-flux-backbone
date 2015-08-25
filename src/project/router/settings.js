module.exports = {
    /**
     * set the application routes with their name defined as a constant
     * @example "url/:id": "name"
     */
    ROUTE_ROUTES: {
        "todos": 'todos',
        "flickr": 'flickr',
        "flickr/:query": 'flickr',
        "github": 'github',
        "github/:query": 'github',
        "help": 'help'
    },

    // default route when undefined
    ROUTE_DEFAULT: 'index'
};
