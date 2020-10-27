import React, {Component} from 'react';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoItemHead from './TodoItemHead';

export default class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    updateTodoFromList(updated, index){
        let list = this.state.todos.slice();
        list[index] = updated;
        this.setState({todos: list});
    }

    removeTodoFromList(index){
        this.setState(state => ({
            todos: state.todos.filter((item, j) => index !== j)
        }));
    }

    addTodoToList(newTodo){
        if (newTodo){
            this.setState({
                todos: [
                    ...this.state.todos,
                    newTodo
                ]
            })
        }
    }

    render(){
        const {todos} = this.state;

        if (!todos.length) {
            return(
                <div>
                    <TodoForm
                        description={(inputText) => this.addTodoToList(inputText)} />
                    <div className="alert alert-danger">No hay datos</div>
                </div>
            )
        }

        return (
            <div className="col-md-12">
                <TodoForm
                    description={(inputText) => this.addTodoToList(inputText)} />
                <table className="table">
                    <TodoItemHead/>
                    <tbody>
                        {
                            todos.map((todo, index) => 
                                <TodoItem
                                    key={todo}
                                    onUpdateTodo={(todoUpdated) => this.updateTodoFromList(todoUpdated, index)}
                                    onRemove={() => this.removeTodoFromList(index)}
                                    index={index} >
                                        {todo}
                                </TodoItem>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}