

import Buttons from '../Components/buttons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSorted } from '../actions';


const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ setSorted }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);


