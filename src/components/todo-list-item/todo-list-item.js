import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    
        constructor(){
            super();

            this.state = {
                done: false,
                important: false
            }
            this.onLabelClick =()=> {
                this.setState((state) => {
                    return {
                        done: !state.done
                    }
                });
            }
                
            this.onMarkImportant =()=> {
                this.setState((state) => {
                    return {
                        important: !state.important
                    };
                });
            };
        };
      

    render() {
        const {label, onDeleted} = this.props;
        const { done, important } = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span  
                className='todo-list-item-label'
                onClick = {this.onLabelClick}>
                { label }
            </span>
            <button type='button' 
            className='btn btn-outline-success btn-sm float-end'
            onClick={this.onMarkImportant}>
                <i className="bi bi-exclamation-square-fill"></i>
            </button>
    
            <button type='button'
            className='btn btn-outline-danger btn-sm float-end'
            onClick={onDeleted} >
                <i className="bi bi-trash"></i>
                
            </button>
            </span>
        );
    };
}; 

