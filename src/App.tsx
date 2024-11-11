import { useState, useEffect } from 'react';
import api from './api';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

export interface Note {
    id?: string;
    title: string;
    content: string;
    author: string;
    createdDate: string;
}
function App() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);

    // Fetch notes from backend
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await api.get('');
            setNotes(response.data as Note[]); // Assert response as Note[]
        };
        fetchNotes();
    }, []);

    // Add a new note
    const addNote = async (note: Note) => { // Specify Note type for note
        const response = await api.post('', note);
        setNotes([...notes, response.data]);
    };

    // Update an existing note
    const updateNote = async (id: string, updatedNote: Note) => { // Specify types for id and updatedNote
        const response = await api.put(`/${id}`, updatedNote);
        setNotes(notes.map((note) => (note.id === id ? response.data : note)));
    };

    // Delete a note
    const deleteNote = async (id: string) => { // Specify string type for id
        await api.delete(`/${id}`);
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div>
            <h1>Notes Application</h1>
            <NoteForm addNote={addNote} updateNote={updateNote} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
            <NoteList notes={notes} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />
        </div>
    );
}

export default App;
