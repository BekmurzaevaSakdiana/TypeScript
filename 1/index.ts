import axios from 'axios'
const url='https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id:number,
    title:string,
    completed:boolean,
}


axios.get(url).then(res=>{
    const todo=res.data;

    const id=todo.id
    const title=todo.title
    const completed=todo.completed

    console.log(
        `
        Todo ID:${id}
        Todo Title:${title}
        IS todo completed:${completed}
        `
    );
    
})