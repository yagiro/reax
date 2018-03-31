import React, { Component } from 'react';
require('../sass/index.scss');

class App extends Component {
    render() {
        return (
            <div className="flex-col">
                <span className="title">Reax</span>
                <span className="sub-title">React &amp; Redux Starter</span>
                <span className="sub-title">Created with love by Yakir Rabinovich</span>
            </div>
        )
    }
}

export default App