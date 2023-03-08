import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Container,
  Heading,
  Con,
  Input,
  Textarea,
  Button,
  Contain,
  Head,
  Para,
  Image,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevNote => [...prevNote, newNote])
    setTitle('')
    setNote('')
  }

  const imageCon = (
    <Contain>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <Head>No Notes Yet</Head>
      <Para>Notes you add will appear here</Para>
    </Contain>
  )

  return (
    <Container>
      <Heading>Notes</Heading>
      <Con onSubmit={onAddNote}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <Textarea
          rows="6"
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </Con>
      {notesList.length < 1 ? (
        imageCon
      ) : (
        <NotesList>
          {notesList.map(notes => (
            <NoteItem key={notes.id} details={notes} />
          ))}
        </NotesList>
      )}
    </Container>
  )
}

export default Notes
