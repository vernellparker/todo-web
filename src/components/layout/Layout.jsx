import React, { Component, Fragment } from 'react';
import List from '../list/List';
import TodoForm from "../todo-form/todo-form";

class Layout extends React.Component{



    render() {
        return (
            <Fragment>
                <div className={"jumbotron"}>
                    <h1>ToDo List</h1>
                    <h2>Created for training</h2>
                </div>
                <List url={'http://localhost:8080/api/tasks'} />
            </Fragment>
        )
    }
}


export default Layout;