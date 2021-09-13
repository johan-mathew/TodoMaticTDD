import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';



describe('<Todo/>',()=>{

    let todo;
    let toggleTaskCompleted;
    let deleteTask;
    let editTask;


    beforeEach(async() =>{

        toggleTaskCompleted=jest.fn().mockName("toggleTaskCompleted");
        editTask=jest.fn().mockName("editTask");
        deleteTask=jest.fn().mockName("deleteTask");
        ({todo}=render(<Todo
            id='task-0'
            name='text'
            completed={true}
            key= 'task-0'
            editTask={editTask}
            deleteTask={deleteTask}
            toggleTaskCompleted={toggleTaskCompleted}/>
            )
        );
    });
    it("Toggle Event Completed",()=>{ 
        userEvent.click(document.querySelector('input[type=checkbox]'))
        expect(toggleTaskCompleted).toBeCalledWith("task-0");
    })
    it("edit task ",()=>{
        userEvent.click(document.querySelector("button#edit-button"));
        userEvent.type(document.querySelector("#task-0"),"New{space}edited{space}task");
        userEvent.click(document.querySelector("button#editing-save-button"));
        expect(editTask).toHaveBeenCalledWith('task-0',"New edited task");
    })
    it("delete task ",()=>{
        userEvent.click(document.querySelector("button#delete-button"));
        expect(deleteTask).toHaveBeenCalledWith('task-0');
    })
})