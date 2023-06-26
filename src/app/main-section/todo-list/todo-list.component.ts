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
  // newTodo: string = '';
  
  // for record update
  index:number = 0;
  updateRecord: boolean = false;

  selectAll: boolean = false;

  saveData() {
    localStorage.setItem("todoList", JSON.stringify(this.todoItems))
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
    this.filterItems[index].isChecked = false;
    this.todoItems.splice(index, 1);
    this.filterItems = this.todoItems
  }

  addTodoItem() {
    if (this.updateRecord) {
      this.filterItems[this.index].itemText = this.todoObject.itemText;
      this.filterItems[this.index].isChecked = false;
      this.saveData();
      this.todoObject = { itemID: '', itemText: '' };
      this.updateRecord = false;     
             
    } else {
      this.todoObject.itemID = this.todoItems.length + 1;
      this.todoItems.unshift(this.todoObject);
      this.saveData();
      this.todoObject = { itemID: '', itemText: '' }
      this.filterItems = this.todoItems;
    }
  }

  editTodo(index: number) {
    this.updateRecord = true
    this.index = index;
    let filterData = this.todoItems[index];
    this.todoObject.itemText = filterData.itemText;
  }

  toggleSelectAll() {
    //  this.filterItems.forEach(check => { 
    //    console.log(check);      
    //    check.isChecked = this.selectAll});

    for(let check of this.filterItems){
      check.isChecked = this.selectAll
    }
    // this.filterItems.forEach(obj => obj.isChecked = this.selectAll);
    
  }  

  ngOnInit(): void {
    const localData = localStorage.getItem("todoList");
    if (localData != null) {
      this.todoItems = JSON.parse(localData);
      this.filterItems = this.todoItems;
    }
  }
}
