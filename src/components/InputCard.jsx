 import React, { useState } from 'react'
 import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

 // The input note will be something like.
//  {
//       title:"",
//       content:""
//     }
 
 function InputCard({addHandler}) {

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    const updateTitle = (e)=>{
        setTitle(e.target.value)
    }

    const updateContent = (e)=>{
        setContent(e.target.value)
    }

    const clickHandler = (e)=>{
        e.preventDefault()
        addHandler({title,content})
        setTitle("")
        setContent("")
    }
   return (
        <div className='card' onSubmit={clickHandler}>
            <form action="#">
            <input type="text" name="title" placeholder="Title" value={title} onChange={updateTitle} required/>
            <textarea name="content" id="content"  placeholder='Your note...' value={content} onChange={updateContent} rows={3} required/>
            <Fab color="yellow" aria-label="add" id="add" type='submit'>
                <AddIcon />
            </Fab>
            </form>
        </div>

   )
 }
 
 export default InputCard
 