import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public setItemID: any;
  public setItemIndex: any[] = [];

  todoItems: any[] = [];
  filterItems: any[] = [];  // for filtering data
  todoObject: any = { itemID: '0', itemText: '' };
  public todoItemDone = false;
  newTodo: string = '';


  saveData() {
    localStorage.setItem("todoList", JSON.stringify(this.todoItems))
  }

  addTodoItem() {
    // debugger
    this.todoObject.itemID = this.todoItems.length + 1;
    this.todoItems.unshift(this.todoObject);
    this.saveData();
    this.todoObject = { itemID: '', itemText: '' }
    this.filterItems = this.todoItems;
  }

  editTodo(index: number) {
    let filterData = this.todoItems[index];
    this.todoObject.itemText = filterData.itemText;
    this.todoObject.itemID = filterData.itemID;
    // console.log(this.todoObject);

  }

  isCheckedCheckbox() {
    const checkedCount = this.todoItems.filter(m => m.isChecked == true).length;
    if (checkedCount !== 0) {
      return true
    }
    else {
      return false
    }
  }

  removeItems() {
    const checkRecords = this.todoItems.filter(m => !m.isChecked);
    this.todoItems = checkRecords;
    this.filterItems = this.todoItems
    this.saveData();
  }

  onfilterItems(search: string) {
    const filterData = this.todoItems.filter(f => f.itemText.toLowerCase().includes(search.toLowerCase()));
    console.log(filterData);

    if (filterData.length !== 0) {
      this.filterItems = filterData;
    }
    else {
      if (this.todoObject.itemText == '') {
        this.filterItems = this.todoItems;
      }
    }
  }

  processDone(index: number) {
    if (this.setItemIndex.includes(index)) {
      this.setItemIndex = this.setItemIndex.filter((i) => { return i !== index });
    } else {
      this.setItemIndex.push(index);
    }
  }

  removesingletodo(index: number) {
    // this.setItemIndex.filter((i) => {return i !== index});
    debugger
    this.filterItems[index].isChecked = false;
    this.todoItems.splice(index, 1);
    this.filterItems = this.todoItems
    // this.saveData();     
    console.log(this.filterItems[index].isChecked);
  }

  ngOnInit(): void {
    const localData = localStorage.getItem("todoList");
    if (localData != null) {
      this.todoItems = JSON.parse(localData);
      this.filterItems = this.todoItems;
    }
  }


}
