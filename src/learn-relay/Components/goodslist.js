


import React from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { count } from '../actions'; 
import {getGoods} from '../selectors';


class GoodsList extends React.Component {

	constructor(props){
		super(props);

		console.log('goods',this);
	}

	componentWillReceiveProps(nextProps){
		this.props.count();
	}

	render () {
	 return (
	  <div>
		   <ul>
		   		{this.props.goods.map((g, i) =>
		   		<li key={i}>{`${g.name} - ${g.price}$`}</li>)}
		   </ul>
	  </div>
	 )
	}
}

const mapStateToProps = (state) => {
 return {
 	goods: getGoods(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ count },dispatch);
const container = connect(mapStateToProps, mapDispatchToProps)(GoodsList);

export default container;
