import React from 'react';

function NoteItem({ note, setSelectedNote, deleteNote }) {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p><strong>Author:</strong> {note.author}</p>
            <p><strong>Created Date:</strong> {note.createdDate}</p>
            <button onClick={() => setSelectedNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
    );
}

export default NoteItem;
