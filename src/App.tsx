import React, { useState, useEffect } from 'react';
import api from './api';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
/*import type {Schema} from "../amplify/data/resource";
import {generateClient} from "aws-amplify/data";
import {useAuthenticator} from '@aws-amplify/ui-react';*/


function App() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    // Fetch notes from backend
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await api.get('');
            setNotes(response.data);
        };
        fetchNotes();
    }, []);

    // Add a new note
    const addNote = async (note) => {
        const response = await api.post('', note);
        setNotes([...notes, response.data]);
    };

    // Update an existing note
    const updateNote = async (id, updatedNote) => {
        const response = await api.put(`/${id}`, updatedNote);
        setNotes(notes.map((note) => (note.id === id ? response.data : note)));
    };

    // Delete a note
    const deleteNote = async (id) => {
        await api.delete(`/${id}`);
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div>
            {/*<h1>{user?.signInDetails?.loginId}'s todos</h1>*/}

            <h1>Notes Application</h1>
            <NoteForm addNote={addNote} updateNote={updateNote} selectedNote={selectedNote}
                      setSelectedNote={setSelectedNote}/>
            <NoteList notes={notes} setSelectedNote={setSelectedNote} deleteNote={deleteNote}/>
           {/* <button onClick={signOut}>Sign out</button>*/}
        </div>
    );
}

export default App;

