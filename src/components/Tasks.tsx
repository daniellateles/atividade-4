import React from 'react';

function Tasks() {
    const tasks = [
        'Tarefa 1',
        'Tarefa 2',
        'Tarefa 3',
        'Tarefa 4',
        'Tarefa 5'
    ];

    return (
        <div>
            <h1>Tarefas</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
