import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './components/basic';
import B1 from './components/b1';

ReactDOM.render(
	<div>
	  <Basic />
	  <B1 name="Stop" />
	  <B1 name="Go" />
	</div>,
  document.getElementById('sw-root')
);
