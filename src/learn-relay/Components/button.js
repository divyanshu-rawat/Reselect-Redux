

class Buttons extends React.Component {
	render () {
	 return (
		  <div style={{display: 'flex'}}>
			   <button style={buttonStyle} onClick={() => this.props.setSorted(true)}>
			     Show Sorted
			   </button>
			    <button style={buttonStyle} onClick={() => this.props.setSorted(false)}>
			      Show Unsorted
			   </button>
		  </div>
	 )
	}
}

export default Buttons;