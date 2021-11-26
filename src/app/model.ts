export class Model {
    user;
    items;

    constructor() {
        this.user = "Elvin";
        this.items = [
                        new TodoItem("Spor",true),
                        new TodoItem("Seher yemeyi",false),
                        new TodoItem("Kitab oxumaq",false),
                        new TodoItem("Film",false)
                     ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}