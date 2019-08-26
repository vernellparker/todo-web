import React, { Component,Fragment } from 'react';
import {getToDoList, removeTodoTask} from '../../libs/serviceCalls';
import {ListItem} from "../list-item/list-item";
import TodoForm from "../todo-form/todo-form";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            didUpdate: false,
            date: new Date()
        };

    }

    componentDidMount() {
        getToDoList(this.props.url).then((response) => {
            this.setState({ tasks: response.data.tasks });
        }).catch(ex => console.log(ex));
        this.setState({didUpdate:false});

    }


    handleUpdate = () =>{

        this.setState({didUpdate: true});
        console.log(this.state)
    };

    handleDelete = (taskId) =>{
        removeTodoTask(taskId).then((response)=>{
            this.setState({task: response.data.tasks});
        }).catch(ex => console.log(ex));
        this.setState({didUpdate: true});
    };

    render() {
        const { tasks, date } = this.state;
        return (
            <Fragment>
                <TodoForm handleUpdate={this.handleUpdate}/>
                <br/>
                <br/>
                <div className="card">
                    <div className="card-header">
                        {date.toString()}
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            tasks ?
                                tasks.map((task,index) => {
                                    return (<ListItem key={index} task={task} handleDelete={this.handleDelete}/>)
                                }) : null
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default List;