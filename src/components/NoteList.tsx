import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, setSelectedNote, deleteNote }) {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />
            ))}
        </div>
    );
}

export default NoteList;
