import React, { useState } from "react";


const TodoList = () =>{
    const [state, setState] =  useState({
        todo: '',
        todolist: []
    })
    const [edit, setEdit] =  useState({
        editTodo: '',
        editIndex: ''
    })

    const [isUpdate, setisUpdate] =  useState(false)

    const {todo,  todolist} = state
    const {editTodo, editIndex} = edit

    const handleOnchangeEdit = (e) =>{
        const {name, value} = e.target

        setEdit({...edit, [name]:value})
    }

    const handleOnclickEdit = (index, value) =>{
      setisUpdate(true)

      setEdit({editTodo: value, editIndex: index})
    }

    const handleOnclickCancel = () =>{
        setisUpdate(false)
      }






    const handleOnchange = (e) =>{
        const {name, value} = e.target

        setState({...state, [name]:value})



    }


    /*Create*/

    const CreateTodo = () =>{
        const list = todolist
        list.push(todo)

        setState({todo:'',  todolist: list})
    }
     /*DDeleteToDoList*/
    const deleteTodoList =(index) =>{
        const list = todolist
        list.splice(index, 1)

        setState({todo:'',  todolist: list})


    }

    /*update */

    const updateTodo = (index) => {
        const list = todolist
        list[index] = editTodo

        setState({...state,  todolist: list})
        setisUpdate(false)
        setEdit({editTodo:'', editIndex:''})
    }






    return(
      <>
        <div className="todolist-main">
            <div className="form-wrapper">
                <input
                 type='text'
                 name="todo"
                 value={todo}
                 placeholder="Create todolist"
                 onChange={handleOnchange}
                />
                <button onClick={CreateTodo}>ADD</button>
            </div>
            <div className="table-main">
                <div className="header-wrapper">
                    <span>To Do</span>
                    <span>Action</span>
                </div>
                {
                    todolist.length ?
                    todolist.map((value, index) =>{
                        return(
                        <div key={index} className="row-wrapper">
                           <span>{value}</span>
                           <button onClick={() => handleOnclickEdit(index,value)}>Edit</button>
                           <button onClick={ () => deleteTodoList(index)} >Delete</button>
                        </div>
                        )
                    }): <p>HI, Let's Create Now!</p>
                }
                {
                    isUpdate ?
                    <div className="form-update">
                        <span>Index: {editIndex}</span>
                      <input
                        type='text'
                        name="editTodo"
                        value={editTodo}
                        placeholder="Update Todo"
                        onChange={handleOnchangeEdit}
                      />
                       <button onClick={ () => updateTodo(editIndex)}>Update</button>
                       <button onClick={handleOnclickCancel}>Cancel</button>
                    </div>: ''
                }
            </div>
        </div>

      </>
    )
}

export default TodoList