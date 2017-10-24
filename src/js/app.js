import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Sam extends Component {
    render() {
        return (
            <div>I am the Component</div>
        )
    }
};

render(<Sam />, document.getElementById('app'));
