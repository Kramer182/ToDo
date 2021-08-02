import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

export default class App extends React.Component {

  

  constructor(){
    super();
    this.maxId = 100;
    this.state = {
      todoData:[
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch'),
      ]
    }
    
  };

  createTodoItem(label){
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };
  deleteItem = (id)=> {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex((el)=> el.id === id);
      
      const newArray = [...todoData.slice(0, idx),
         ...todoData.slice(idx+1)];
      return {
        todoData: newArray
      }
    });
  }
  
  addItem = (text)=> {
    const newItem = this.createTodoItem(text);

    this.setState(({todoData})=> {
      const newArr =[
        ...todoData, newItem
      ]
      return {
        todoData: newArr
      }
    });
  };

  onToggleDone = (id)=> {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      const newArray = [...todoData.slice(0,idx), newItem, ...todoData.slice(idx+1)];
      return {todoData: newArray};
    });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important};
      const newArray = [...todoData.slice(0,idx), newItem, ...todoData.slice(idx+1)];
      return {todoData: newArray};
    });
  }

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    return (
      <div className='todo-app'>
          <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
          <TodoList todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant ={this.onToggleImportant}
          onToggleDone ={this.onToggleDone} />
          <ItemAddForm onItemAdded ={this.addItem} />      
        </div>
    );
  }
  
};