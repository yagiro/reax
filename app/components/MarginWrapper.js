import React from 'react';

const MarginWrapper = props => (
    <div style={{ margin: props.margin || 0 }}>{ props.children }</div>
);

export default MarginWrapper;