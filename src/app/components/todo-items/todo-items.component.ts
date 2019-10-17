import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  // Toggle
  onToggle(todo: Todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on service
    this.todoService.toggleCompleted(todo).subscribe();
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
