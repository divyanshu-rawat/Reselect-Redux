
import GoodsList from '../Components/goodslist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { count } from '../actions'; 


const mapStateToProps = (state) => {

	console.log('mere pass',state);
 return {
 	goods: getGoods(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ count },dispatch);
const container = connect(mapStateToProps, mapDispatchToProps)(GoodsList);

export default container;
