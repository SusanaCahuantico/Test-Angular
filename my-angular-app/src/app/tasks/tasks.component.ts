import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: string[] = [];

  addTask(): void {
    const newTaskText = (document.getElementById("newTask") as HTMLInputElement)?.value ?? '';
    if (newTaskText) { 
      console.log('TASK')
      this.tasks.push(newTaskText);
    }
  }
}