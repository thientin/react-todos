import React from 'react';
import TodosListHeader from './todos-list-header';
import _ from 'lodash';
import TodosListItem from './todos-list-item'
export default class TodosList extends React.Component{
	
	renderItems(){
		
		const props = _.omit(this.props,'todos')
		return _.map(this.props.todos, (todo,index) => <TodosListItem key={index} {...todo} {...this.props}  />);
	}
	render( ){
		console.log(this.props.todos);
		return (
			<table>
				<TodosListHeader />
				<tr>
					{this.renderItems()}
				</tr>
			</table>
		);
	}

}