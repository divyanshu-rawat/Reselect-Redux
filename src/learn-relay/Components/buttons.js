

import React from 'react';
import ReactDom from 'react-dom';
// import buttoncontainer from '../Containers/buttoncontainers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSorted } from '../actions';

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

// const mapStateToProps = (state) => {
// 	return {}
// }

// const mapDispatchToProps = (dispatch) => bindActionCreators({ setSorted }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

export default Buttons;