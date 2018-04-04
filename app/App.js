import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./sass/index.scss');
import store from './store';
import { hot } from 'react-hot-loader';

class App extends Component {
    render() {
        let color = '#ce80c6';
        return (
            <div className="flex-col">
                <Title color={ color }>Reax</Title>
                <SubTitle>React &amp; Redux Starter</SubTitle>
                <CreditFooter color={ color }/>
            </div>
        )
    }
}

const Title = props => (
    <div className="title" style={{ 
        color: props.color || "#ce80c6",
        marginBottom: '-15px',
    }}>
        { props.children }
    </div>
);

const SubTitle = () => (
    <div className="sub-title" style={{ color: '#584a57' }}>React &amp; Redux Starter</div>
);

const CreditFooter = props => (
    <div className="footer-text">
        Created with <span style={{
            color: props.color || '#ce80c6',
            fontWeight: 'bold',
        }}>
            &lt;3
        </span> by Yagiro
    </div>
);

export default hot(module)(App);