import React, { useState, useEffect } from 'react';

function NoteForm({ addNote, updateNote, selectedNote, setSelectedNote }) {
    const [note, setNote] = useState({ title: '', content: '', author: '', createdDate: '' });

    useEffect(() => {
        if (selectedNote) setNote(selectedNote);
    }, [selectedNote]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({ ...note, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.id) {
            updateNote(note.id, note);
        } else {
            addNote(note);
        }
        setNote({ title: '', content: '', author: '', createdDate: '' });
        setSelectedNote(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={note.title} onChange={handleChange} required />
            <input name="author" placeholder="Author" value={note.author} onChange={handleChange} required />
            <textarea name="content" placeholder="Content" value={note.content} onChange={handleChange} required />
            <input name="createdDate" placeholder="Created Date" value={note.createdDate} onChange={handleChange} required />
            <button type="submit">{note.id ? 'Update Note' : 'Add Note'}</button>
        </form>
    );
}

export default NoteForm;
