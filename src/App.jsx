import React, { useEffect, useState } from "react"
import { Header, Footer, Note, InputCard } from "./components"

function App() {

  // Here we are using the approach of running a callback function in useState to get the respective data from localstorage as with StrictMode on , the re-run of use-effect is causing unexpected results. 

  const [noteList, setNoteList] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("list");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });


  useEffect(() => {
    console.log(noteList)
    // Here let's add the list to the localstorage.
    localStorage.setItem('list',JSON.stringify(noteList))
  }, [noteList])

  // Adding a note to the main list of note data.
  const addHandler = (data) => {
    console.log('In add handler')
    console.log(data)
    setNoteList(prevList => {
      return [...prevList, { id: prevList.length>0 ? (prevList[prevList.length - 1].id + 1) : 1, ...data }]
    })

    console.log(noteList)
  }

  // Deletes a note at the given id from the note list.
  const deleteHandler = (id)=>{
    console.log(id)
    setNoteList((prevList)=>{
      const data = prevList.filter((item)=>item.id!==id)
      console.log(data)
      return data
    })
  }

  const saveHandler = (id,data)=>{
    console.log(id,data)

    setNoteList(prevList=>{       
      return prevList.map((note,index)=>{
        if(note.id === id){
          return {
            ...note,
            ...data
          }
        } else {
          return note
        }
      })
    })

  }

  return (
    <div className="container">
      <Header />
      <section>
        <InputCard addHandler={addHandler} />
        <div className="noteContainer">
          {
            noteList.map((note) => (
              <Note key={note.id} id={note.id} title={note.title} content={note.content} deleteHandler={deleteHandler} saveHandler={saveHandler}/>
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
