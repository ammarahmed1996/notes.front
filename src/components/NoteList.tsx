import NoteItem from './NoteItem';
import { Note } from '../App';

interface NoteListProps {
    notes: Note[];
    setSelectedNote: (note: Note) => void;
    deleteNote: (id: string) => void;
}

function NoteList({ notes, setSelectedNote, deleteNote }: NoteListProps) {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />
            ))}
        </div>
    );
}

export default NoteList;
