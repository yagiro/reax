import React, { Component } from 'react';
require('./sass/index.scss');

class App extends Component {
    render() {
        return (
            <div className="flex-row">
                <div>
                    <h1>React Starter</h1>
                    <h4>Created with love by Yakir Rabinovich</h4>
                </div>
            </div>
        )
    }
}

export default App