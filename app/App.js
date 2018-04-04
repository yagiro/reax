import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./sass/index.scss');
import config from './config'

import Example from './components/Example';
import MarginWrapper from './components/MarginWrapper';

class App extends Component {
    render() {
        let color = this.props.color;
        return (
            <div className="flex-col">
                <Title color={ color }>Reax</Title>
                <SubTitle>React &amp; Redux Starter</SubTitle>
                <MarginWrapper margin="50px"><Example/></MarginWrapper>
                <CreditFooter color={ color }/>
            </div>
        )
    }
}

const Title = props => (
    <div className="title" style={{ 
        color: props.color || config.defaultColor,
        transition: config.colorTransition,
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
            color: props.color || config.defaultColor,
            fontWeight: 'bold',
            transition: config.colorTransition,
        }}>
            &lt;3
        </span> by Yagiro
    </div>
);

const mapStateToProps = state => ({
    color: state.example.color
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);