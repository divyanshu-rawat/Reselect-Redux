
import GoodsList from '../Components/goodslist';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
 return {
 	goods: getGoods(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ count },dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);