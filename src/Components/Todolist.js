import React, { useState } from "react";


const TodoList = () =>{
    const [state, setState] = useState({
        todo: '',
        TodoList: []
    })

    const [isUpdate, setisUpdate] = useState(false)
    const [edit, setEdit] = useState({
        editTodo:'',
        editIndex:''
    })

    
    const {editTodo, editIndex} = edit
    const {todo , TodoList} = state

    const handleOnchange = (e)=> {
        const {name, value} = e.target
        setState({...state, [name]: value})

    }

    /*edit */
    const handleOnchangeEdit = (e)=> {
        const {name, value} = e.target
        setEdit({...edit, [name]: value})

    }

  
    


    const HandleonClickEdit = (index, value)=> {
        setisUpdate(true)

        setEdit({editTodo: value, editIndex:index})

     

  


    }

      /*cancel */
      const HandleonClickCancel = ()=> {
        setisUpdate(false)



    }
     


    const createtodo = () => {
        const list = TodoList
        list.push(todo)
        setState({todo:'', TodoList: list})

    }

    /*delete */

    const deleteTodo = (index) => {
        const list = TodoList
        list.splice(index, 1)
        setState({todo:'', TodoList: list})

    }

    /*update */
    const updateTodo = (index) =>{
        const list = TodoList
        list[index] = editTodo

        setState({...state, TodoList:list})
        setisUpdate(false)

    }





   

    return(
      <>
      <div className="todolist-main">
          <div className="form-wrapper">
              <input type='text' name='todo' value={todo} placeholder="create todolist" onChange={handleOnchange}/>
              <button onClick={createtodo}>Add Todo</button>
          </div>
          <div className="table-main">
             <div className="header-wrapper">
               <span>Todo</span>
               <span>Action</span>
             </div>
             {
                  TodoList.length ?
                  TodoList.map((value, index) => {
                    return(
                        <div key={index} className="row-wrapper">
                        <span>{value}</span>
                        <button onClick={ () =>HandleonClickEdit(index,value)}>Edit</button>
                        <button onClick={() =>deleteTodo(index)}>Delete</button>
                        </div>
                    )
                   
                }): <p>Let's create now!</p>
             }
             {
                isUpdate ?
                <div className="form-wrapper-update">
                 <span>Index: {editIndex}</span>
                <input type='text' name='editTodo' value={editTodo} onChange={handleOnchangeEdit} placeholder="Update your Todo"/>
                <button onClick={ () => updateTodo(editIndex)}>Update</button>
                <button onClick={HandleonClickCancel}>Cancel</button>
               </div>: ''
             }
           
           
          </div>
      </div>
      </>
    )
}

export default TodoList