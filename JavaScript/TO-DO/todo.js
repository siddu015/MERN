let todo = [];

let req = prompt("Enter your Request: ")

while(true) {
    if(req === 'quit') {
        console.log('Quitting app!')
        break
    }

    if(req === 'list') {
        for(let i = 0; i < todo.length; i++)
            console.log(i, todo[i])
    } else if(req === 'add') {
        let task = prompt("Enter the task you want to add: ")
        todo.push(task)
        console.log('Task added')
    } else if(req === "delete") {
        let index = prompt("Enter the index of the task you want to delete: ")
        todo.splice(index, 1)
        console.log("Deleted successfully")
    }

    req = prompt("Enter your Request: ")
}
