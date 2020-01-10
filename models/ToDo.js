module.exports = (models, Schema) => {

    const ToDo = new Schema ({
        ToDoItem: String,
        Completed:  {
            type: Boolean,
            default: false
        }
    })

    return models('ToDo', ToDo)
}