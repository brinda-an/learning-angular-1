import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  taskdata:string ="";
  taskList = [{title:"Task1", done: false}, {title: "Task2", done: true}];

  addTask(){
    let newTask = {
      title: this.taskdata,
      done: false
    }
    this.taskList.push(newTask);
    this.taskdata="";
  }

  updateTask(status, taskIndex) {
    let len = this.taskList.length;
    this.taskList[len-taskIndex-1].done = status;
  }

  clearTask(){
    this.taskList=[];
  }
}
