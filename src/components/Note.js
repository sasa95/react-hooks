import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note, removeNote }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  console.log('x');

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        Remove
      </button>
    </div>
  );
};

export default Note;
