import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './components/basic';
import B1 from './components/b1';
import B2 from './components/b2';

ReactDOM.render(
	<div>
	  <Basic />
	  <B1 name="Stop" />
	  <B2 name="Go" />
	</div>,
  document.getElementById('sw-root')
);
