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
    this.state = {
      todoData:[
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
      ]
    }
    this.maxId = 100;
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
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    this.setState(({todoData})=> {
      const newArr =[
        ...todoData, newItem
      ]
      return {
        todoData: newArr
      }
    });
  };

  onToggleImportant = (id) => {
    console.log('Toggle Important, id')
  }

  onToggleDone = (id)=> {
    console.log('Toggle Done, id')
  }

  render() {
    return (
      <div className='todo-app'>
          <AppHeader toDo={1} done={3} />
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