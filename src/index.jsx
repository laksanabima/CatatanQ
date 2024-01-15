import NotesApp from "./components/NoteApp";
import { createRoot } from 'react-dom/client';
import './styles/style.css';


const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);