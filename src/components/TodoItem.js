import React, {Component} from 'react';

export default class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            todoDescription: props.children
        };
    }

    onEditMode(){
        if(this.state.editMode){
            const {onUpdateTodo} = this.props;
            onUpdateTodo(this.state.todoDescription)
        }
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleChange(evt){
        this.setState({todoDescription: evt.target.value});
    }

    dynamicComponents(){
        let input, actionButton;
        const {editMode, todoDescription} = this.state;
           
        if (editMode) {
            input = (
                <input
                    type="text"
                    className="form-control"
                    value={todoDescription}
                    onChange={(e) => this.handleChange(e)} />
            );
            actionButton = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)} >
                    Actualizar
                </button>
            );
        } else {
            input = todoDescription;
            actionButton = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)} >
                    Editar
                </button>
            );
        }

        return {input, actionButton};
    }

    render(){
        const {index, onRemove} = this.props;
        const dynamicComponents = this.dynamicComponents();

        return(
            <tr style={{textAlign:'center'}}>
                <td>{index + 1}</td>
                <td>{dynamicComponents.input}</td>
                <td>
                    <div className="btn-group" role="group">
                        {dynamicComponents.actionButton}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onRemove}
                        >
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}