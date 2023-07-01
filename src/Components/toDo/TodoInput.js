import React, { useState } from 'react';
import "./styles/TodoInput.css";

function TodoInput(props){

    const [currentText, setCurrentText] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setCurrentText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentText.length)
            return;
        setCurrentText("");
        props.updateList(currentText);
    }

    const getInputForm = () => {
        return (
            <div className='todo-input-form-wrapper'>
                <form className='todo-input-form' onSubmit={handleSubmit}>
                    <input placeholder='Enter task' onChange={handleChange} type="text" value={currentText} />
                    <button>Add</button>
                </form>
            </div>
        )
    }

        return (
            <div className="todo-input-wrapper">
                {getInputForm()}
            </div>
        )
}

export default TodoInput;
