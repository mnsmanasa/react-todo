import { Subject } from 'rxjs';

const subject = new Subject();

export const toDoService = {
    addTodo: (name,description) => subject.next({ todoName: name, description: description }),
    clearTodo: () => subject.next(),
    getTodo: () => subject.asObservable()
};