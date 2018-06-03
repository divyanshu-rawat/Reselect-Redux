

import React from 'react';
import ReactDom from 'react-dom';

class Buttons extends React.Component {
	render () {
	 return (
		  <div style={{display: 'flex'}}>
			   <button onClick={() => this.props.setSorted(true)}>
			     Show Sorted
			   </button>
			    <button onClick={() => this.props.setSorted(false)}>
			      Show Unsorted
			   </button>
		  </div>
	 )
	}
}

export default Buttons;