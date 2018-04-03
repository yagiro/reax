import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./sass/index.scss');

import Example from './components/Example';

class App extends Component {
    render() {
        return (
            <div className="flex-col">
                <div className="title" style={{ marginBottom: '-15px', color: '#ce80c6' }}>Reax</div>
                <div className="sub-title" style={{ color: '#584a57' }}>React &amp; Redux Starter</div>
                <div style={{ margin: '60px' }}><Example/></div>
                <div className="footer-text">
                    Created with <span style={{ color: '#ce80c6', fontWeight: 'bold' }}>&lt;3</span> by Yagiro
                </div>
            </div>
        )
    }
}

export default App;