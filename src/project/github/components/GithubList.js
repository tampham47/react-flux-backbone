var React = require('react');


module.exports = React.createClass({
    render: function() {
        if(this.props.GithubStore.size() === 0) {
            return <p>No results.</p>
        }

        return <ul className='list-inline'>
            {this.props.GithubStore.map((result)=>
                <li key={result.cid}>
                    <img className="img-thumbnail" src={result.getPhoto()} />
                </li>
            )}
        </ul>
    }
});
