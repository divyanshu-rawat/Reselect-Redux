
import GoodsList from '../Components/goodslist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { count } from '../actions'; 


const mapStateToProps = (state) => {
 return {
 	goods: getGoods(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ count },dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);


// function mapStateToProps = () =>{
// 	return getGoods(state);
// }

// function mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators( { count }, dispatch);
// }