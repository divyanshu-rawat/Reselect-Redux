
import GoodsList from '../Components/goodslist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { count } from '../actions';
import {getGoods} from '../selectors';



const mapStateToProps = (state) => {

	console.log('mere pass',state);
 return {
 	goods: getGoods(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ count },dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);

