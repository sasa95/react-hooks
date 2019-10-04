import React, { useContext } from 'react';
import { useState } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  const addNote = e => {
    e.preventDefault();

    if (title && body) {
      // setNotes([...notes, { title, body }]);
      dispatch({
        type: 'ADD_NOTE',
        note: { title, body }
      });
      setTitle('');
      setBody('');
    }
  };

  return (
    <>
      <p>
        Add note {position.x} - {position.y}
      </p>

      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <textarea
          cols="30"
          rows="10"
          onChange={e => setBody(e.target.value)}
          value={body}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    </>
  );
};

export default AddNoteForm;
