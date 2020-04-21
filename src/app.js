import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, '1234');

ReactDOM.render(template, document.getElementById('app'));