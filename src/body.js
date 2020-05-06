import {truncate} from './truncate'

export function generateBody(current_project) {
    let body = document.createElement('div')
    body.id = 'todo-list'
    for (const todo of current_project.getTodoItems()) {
        let todoItem = document.createElement('div')
        todo.completed ? todoItem.className = 'completed todo-item collapsed' : todoItem.className = 'todo-item collapsed';
        let todoMainInfo = document.createElement('div');
        todoMainInfo.className = 'todo-main';

        let priority = document.createElement('div');
        priority.innerHTML = `
        <span id="priority-1"></span>
        <span id="priority-2"></span>
        <span id="priority-3"></span>    
    `
        priority.className = `priority priority-${todo.priority}`

        let todoTitle = document.createElement('span')
        todoTitle.className = 'todo-title'
        todoTitle.innerText = truncate(todo.title, 13, 10).toUpperCase()

        let todoDate = document.createElement('span')
        todoDate.className = 'todo-date'
        todoDate.innerText = todo.due_date

        let todoCompleted = document.createElement('input')
        todoCompleted.type = 'checkbox'
        todoCompleted.className = 'todo-completed'

        let todoDesc = document.createElement('p')
        todoDesc.className = 'todo-desc'
        todoDesc.innerText = todo.description

        todoMainInfo.appendChild(priority)
        todoMainInfo.appendChild(todoTitle)
        todoMainInfo.appendChild(todoDate)
        todoMainInfo.appendChild(todoCompleted)
        
        let fullTitle = document.createElement('span')
        fullTitle.className = 'full-todo-title'
        fullTitle.innerText = todo.title

        let editButton = document.createElement('span')
        editButton.id = 'edit-item'
        editButton.innerText = 'Edit'

        let secondaryInfo = document.createElement('div')
        secondaryInfo.className = 'todo-secondary'

        todoItem.appendChild(todoMainInfo)
        secondaryInfo.appendChild(fullTitle)
        secondaryInfo.appendChild(editButton)
        secondaryInfo.appendChild(todoDesc)
        todoItem.appendChild(secondaryInfo)
        
        body.appendChild(todoItem)
    }
    return body
}