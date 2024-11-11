import { Note } from '../App';

interface NoteItemProps {
    note: Note;
    setSelectedNote: (note: Note) => void;
    deleteNote: (id: string) => void;
}

function NoteItem({ note, setSelectedNote, deleteNote }: NoteItemProps) {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p><strong>Author:</strong> {note.author}</p>
            <p><strong>Created Date:</strong> {note.createdDate}</p>
            <button onClick={() => setSelectedNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.id || '')}>Delete</button>
        </div>
    );
}

export default NoteItem;
