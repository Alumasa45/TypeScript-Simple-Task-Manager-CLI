interface Task {
    id: number;
    Title: string;
    Description: string;
    isComplete: boolean;
}

class TaskManager <T extends Task> {
    private tasks: T[] = [];

    addTask (task:T):void{
        this.tasks.push(task);
    }

    markComplete (taskid: number): void{
        const task = this.tasks.find(task => task.id === taskid);
        if (task) {
            task.isComplete = true;
        } else {
            console.log('Task with ID ${taskid}not found');
        }
    }

    listtasks () : void {
        this.tasks.forEach(task => {
            console.log('${task.id} : ${task.title} - ${task.isComplete? "complete": "incomplete"}');
        })
    }

    filtertask (isComplete: boolean) : T[] {
        return this.tasks.filter(task=> task.isComplete === isComplete);
    }
}

const Manager = new TaskManager<Task>();
Manager.addTask({id: 1, Title: "Complete typescript tutorial", Description: "Dave Gray", isComplete: true});
Manager.addTask({id: 2, Title: "Watch", Description: "Love Island S3ep24", isComplete: true});
Manager.addTask({id: 3, Title: "Clothes", Description: "Unhang all the clothes", isComplete: false});
Manager.addTask({id: 4, Title: "Tokens", Description: "Pay electricity tokens", isComplete: true});
Manager.listtasks();
console.log(Manager);
// console.log(Manager.filtertask(true));
// console.log(Manager.filtertask(false));