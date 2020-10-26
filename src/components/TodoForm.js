import React, {Component} from 'react';

export default class TodoForm extends Component{
    constructor() {
        super();
        this.state = {
            todoDescription: ''
        };
    }

    updateTodoDescription(evt){
        this.setState({
            todoDescription: evt.target.value
        })
    }

    addTodoDescription(evt){
        evt.preventDefault();
        this.props.description(this.state.todoDescription); //update props with state
        this.setState({
            todoDescription: ''
        })
    }

    render(){
        return(
            <form onSubmit={e => this.addTodoDescription(e)}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="todo_text" className="sr-only">Todo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="todo_text"
                            value={this.state.todoDescription}
                            onChange={this.updateTodoDescription.bind(this)} />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary mb-2">
                            Añadir
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}