import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeColor } from '../actions/actions';

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
                { wasColorClicked ? null : <span className="footer-text">Click on the color.</span> }
                <div style={{ marginBottom: '10px' }}
                    onClick={ this.onColorClick.bind(this) }
                    className="clickable">
                    <Color color={ this.props.color }/>
                </div>
            </div>
        );
    }

    onColorClick() {
        this.state.wasColorClicked = true;
        this.props.randomizeColor();
    }
}

const Color = (props) => (<div style={{ color: props.color, fontSize: '40px', transition: 'color 0.5s ease' }}>{ props.color }</div>);

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