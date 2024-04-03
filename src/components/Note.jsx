import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function Note({id,title,content,deleteHandler,saveHandler}) {

  const [isEditable,setIsEditable] = useState(false)
  const [note,setNote] = useState({
    title,
    content
  })

  const handleDelete = ()=>{
    deleteHandler(id)
  }

  const handleEdit = ()=>{

    if(isEditable){
      console.log('starting to Save')
      saveHandler(id,note)
    }
    setIsEditable(prevEdit=>!prevEdit)
  }

  const updateNote = (e)=>{
    const {name,value} = e.target
    setNote(prevNote=>{
      return {
        ...prevNote,
        [name]:value
      }
    })
  }

  const getInput = ()=>{
    if(isEditable){
      return (
        <>
          <input type='text' value={note.title} name='title' onChange={updateNote}/>
          <textarea value={note.content} name='content' onChange={updateNote} rows={2}/>
        </>
      ) 
     
    } else {
      return (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
        </>
      )
    }
  }

  return (
    <div className='note'>
      {
        getInput()
      }
      <div className='btnContainer'>
        <a href="#" onClick={handleEdit}>{isEditable ? <SaveIcon/> : <EditIcon />}</a>
        <a href="#" onClick={handleDelete}><DeleteIcon /></a>
      </div>
    </div>
  )
}

export default Note
