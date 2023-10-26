const TaskForm = ({
    createTask,
    name,
    handleInputChange,
    isEditing,
    updateTask,
  }) => {
    return (
      <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
        <input
          type="text"
          placeholder="Agregar Tarea"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? "Editar" : "Agregar"}</button>
      </form>
    );
  };
  
  export default TaskForm;