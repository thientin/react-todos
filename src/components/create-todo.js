import React from 'react';
export default class CreateTodo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: null
		};
	}
	renderError(){
		if(!this.state.error){
			return null;
		}
		return <div style={{color: 'red'}}>{this.state.error}</div>
	}
	render( ){
		return (
			
				<form onSubmit={this.handleCreate.bind(this)}>
					<input type="text" placeholder = "What to do " ref="createInput" />
					<button>Create</button>
					{this.renderError()}
				</form>
			
		)
	}
	handleCreate(event){
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput = this.validateInput(task);
		if(validateInput){
			this.setState({error: validateInput });	
			return;
		}
		this.setState({error:null});
		this.props.createTask(task);

		this.refs.createInput.value= '';
	}
	validateInput(task){
		if(!task){
			console.log("Empty task");
			return "please enter a task !!!";
		} else if (_.find(this.props.todos,todo => todos.task === task)) {
			console.log(todo.task)
			console.log(task)
			console.log("Task already exists");
			return "Task already exists";
		}
		else {
			console.log("New task adding")
			console.log(task)
			return null;
		}
	}
}