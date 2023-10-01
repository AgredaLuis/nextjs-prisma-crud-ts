"use client"
import { useState } from 'react'
import { useNotes } from '@/context/noteContext'

function NoteForm() {
  const [title, setTitle] = useState('')
  const [content, setcontent] = useState('')

  const { createNote } = useNotes()

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      await createNote({
        title,
        content,
      })

    }}>
      <input type="text" name="title" autoFocus placeholder="title" className=" w-full px-4 py-2 text-black bg-white rounded-md focus:outline-one focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setTitle(e.target.value)} />

      <textarea name="title" placeholder="Content" className=" w-full px-4 py-2 text-black bg-white rounded-md focus:outline-one focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setcontent(e.target.value)} />

      <button className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Create
      </button>
    </form>
  )
}

export default NoteForm