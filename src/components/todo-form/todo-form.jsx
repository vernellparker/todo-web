import React from 'react'
import {addTodoTask} from "../../libs/serviceCalls";


class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskId: 0,
            title: '',
            taskDescription: ''
        }
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        addTodoTask(this.state);
        this.props.handleUpdate();
    };


    handleChange = (e) =>{
        const {value, name} = e.target;
      this.setState({[name]: value, taskId: this.state.taskId + 1}
        )
    };


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">To-Do Title</label>
                    <input type="text" className="form-control" name="title"
                           placeholder="Todo Title" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">To-Do Description</label>
                    <textarea className="form-control" name="taskDescription"
                           placeholder="Todo Description" rows={'2'} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-success float-right">Add</button>
            </form>
        )
    }
}

export default TodoForm;