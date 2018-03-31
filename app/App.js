import React, { Component } from 'react';
import { connect } from 'react-redux';
require('../sass/index.scss');

import Example from './components/Example';

class App extends Component {
    render() {
        return (
            <div className="flex-col">
                <span className="title">Reax</span>
                <span className="sub-title">React &amp; Redux Starter</span>
                <span className="sub-title">Created with love by Yakir Rabinovich</span>
                <div style={{ marginTop: '20px' }}><Example/></div>
            </div>
        )
    }
}

export default App;