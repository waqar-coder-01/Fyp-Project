import React, { Component } from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css"; // Ensure the CSS file has appropriate styles

class App extends Component {
    state = {
        tasks: [],
        currentTask: "",
    };

    // Handle input change
    handleChange = (event) => {
        this.setState({ currentTask: event.target.value });
    };

    // Handle form submission
    handleSubmit = (event) => {
        event.preventDefault();
        const { tasks, currentTask } = this.state;

        if (currentTask.trim()) {
            const newTask = {
                _id: Date.now().toString(),
                task: currentTask,
                completed: false,
            };

            this.setState({
                tasks: [...tasks, newTask],
                currentTask: "",
            });
        }
    };

    // Handle task completion toggle
    handleUpdate = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) =>
                task._id === id ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    // Handle task deletion
    handleDelete = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task._id !== id),
        }));
    };

    render() {
        const { tasks, currentTask } = this.state;

        return (
            <div className="app">
                <header className="app-header">
                    <h1>Waqar To-Do List</h1>
                </header>
                <div className="main-content">
                    <Paper elevation={3} className="todo-container">
                        <form onSubmit={this.handleSubmit} className="task-form">
                            <TextField
                                variant="outlined"
                                size="small"
                                className="task-input"
                                value={currentTask}
                                required
                                onChange={this.handleChange}
                                placeholder="Add New TO-DO"
                            />
                            <Button
                                className="add-task-btn"
                                color="primary"
                                variant="outlined"
                                type="submit"
                            >
                                Add Task
                            </Button>
                        </form>
                        <div className="tasks-list">
                            {tasks.map((task) => (
                                <Paper key={task._id} className="task-item">
                                    <Checkbox
                                        checked={task.completed}
                                        onClick={() => this.handleUpdate(task._id)}
                                        color="primary"
                                    />
                                    <div
                                        className={
                                            task.completed
                                                ? "task-text completed"
                                                : "task-text"
                                        }
                                    >
                                        {task.task}
                                    </div>
                                    <Button
                                        onClick={() => this.handleDelete(task._id)}
                                        color="secondary"
                                        className="delete-task-btn"
                                    >
                                        Delete
                                    </Button>
                                </Paper>
                            ))}
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default App;
