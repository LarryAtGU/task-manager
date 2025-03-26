// model.ts
import Task from "./interface";

let tasks: Task[] = [];

export function addTask(title: string): void {
  const newTask: Task = { id: tasks.length + 1, title, completed: false };
  tasks.push(newTask);
}

export function listTasks(): Task[] {
  return tasks;
}

export function completeTask(id: number): boolean {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    return true;
  }
  return false;
}
