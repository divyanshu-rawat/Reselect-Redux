


import React from 'react';
import ReactDom from 'react-dom';

class GoodsList extends React.Component {
render () {
 return (
  <div>
	   <ul>
	   		{this.props.goods.map((g, i) =>
	   		<li key={i}>{`${g.get('name')} - ${g.get('price')}$`}</li>)}
	   </ul>
  </div>
 )
}
}

export default GoodsList;