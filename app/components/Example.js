import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomizeColor } from '../actions/actions';

class Example extends Component {
    render() {
        return(
            <div className="flex-col">
                <button onClick={ this.props.randomizeColor }>Click Me</button><br/>
                <Color color={ this.props.color }/>
            </div>
        );
    }
}

const Color = (props) => (<div style={{ color: props.color, fontSize: '30px' }}>{ props.color }</div>);

const mapStateToProps = state => {
    return {
        color: state.example.color
    }
};

const mapDispatchToProps = dispatch => ({
    randomizeColor: () => dispatch(randomizeColor())
});


export default connect(mapStateToProps, mapDispatchToProps)(Example);