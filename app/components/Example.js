import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeColor } from '../actions/actions';
import config from '../config';

class Example extends Component {
    constructor() {
        super();
        this.state = {
            wasColorClicked: false
        };
    }
    render() {
        const wasColorClicked = this.state.wasColorClicked;
        return(
            <div className="flex-col">
                <div onClick={ this.onColorClick.bind(this) } className="clickable">
                    <Color color={ this.props.color }/>
                </div>
                { wasColorClicked ? null : <span className="footer-text">Click on the color.</span> }
            </div>
        );
    }

    onColorClick() {
        this.state.wasColorClicked = true;
        this.props.randomizeColor();
    }
}

const Color = (props) => (<div style={{ color: props.color, fontSize: '40px', transition: config.colorTransition }}>{ props.color }</div>);

const mapStateToProps = state => {
    return {
        color: state.example.color,
        wasColorClicked: state.example.wasColorClicked
    }
};

const mapDispatchToProps = dispatch => ({
    randomizeColor: () => dispatch(randomizeColor())
});


export default connect(mapStateToProps, mapDispatchToProps)(Example);