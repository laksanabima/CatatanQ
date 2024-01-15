import React from "react";
import NewNote from "./NewNote";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import autoBind from 'auto-bind';

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();
    this.state = {
      notes,
      searchNotes: notes,
      keyword: ''
    };

    autoBind(this);
  }

  onNewNoteEventHandler({ title, body }) {
    const notes = {
      id: Math.random().toString(36).substring(3,9),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState((previousState) => ({
      notes: [ notes, ...previousState.searchNotes ],
      searchNotes: [ notes, ...previousState.searchNotes ]
    }));

  }

  onArchiveNoteEventHandler(id) {
    this.setState((previousState) => {
      const noteIndex = previousState.searchNotes.findIndex((note) => note.id === id);
      const note = previousState.searchNotes.find((note) => note.id === id);
      note.archived = true;

      previousState.searchNotes[noteIndex] = note;

      return {
        notes: previousState.searchNotes,
        searchNotes: previousState.searchNotes
      };
    });
  }

  onMoveNoteEventHandler(id) {
    this.setState((previousState) => {
      const noteIndex = previousState.searchNotes.findIndex((note) => note.id === id);
      const note = previousState.searchNotes.find((note) => note.id === id);
      note.archived = false;

      previousState.notes[noteIndex] = note;

      return {
        notes: previousState.searchNotes,
        searchNotes: previousState.searchNotes
      };
    });
  }

  onDeleteNoteEventHandler(id) {
    this.setState((previousState) => {
      const notes = previousState.searchNotes.filter((note) => note.id !== id);

      return {
        notes,
        searchNotes: notes
      };
    });
  }

  onChangeSearchNoteEventHandler(e) {
    const keyword = e.target.value.toLowerCase();
    if(keyword.length === 0 || keyword === '') {
      this.setState((previousState) => ({
        keyword,
        notes: previousState.searchNotes,
      }));
    } else {
      this.setState((previousState) => ({
        keyword,
        notes: previousState.searchNotes.filter((note) => note.title.toLowerCase().includes(keyword)),
      }));
    }
  }

  render() {
    const notes = this.state.notes;
    const keyword = this.state.keyword;

    const listNotes = notes.filter((note) => 
      note.title.toLowerCase().includes(keyword.toLocaleLowerCase()) 
      && !note.archived
    );

    const archiveNotes = notes.filter((note) => 
      note.title.toLowerCase().includes(keyword.toLocaleLowerCase()) 
      && note.archived
    );
    
    return (
      <div className="note-app">
        <NoteHeader searchNote={this.onChangeSearchNoteEventHandler} />
        <div className="note-section">
          <h2 className="note-section__title">Buat Catatan Baru</h2>
        </div>
        <NewNote newNote={this.onNewNoteEventHandler} />
        <div className="note-section">
          <h2 className="note-section__title">Catatan Aktif</h2>
        </div>
        <NoteList type="list" 
          notes={listNotes} 
          deleteNote={this.onDeleteNoteEventHandler}
          moveNote={this.onMoveNoteEventHandler}
          archiveNote={this.onArchiveNoteEventHandler} />
        <div className="note-section">
          <h2 className="note-section__title">Diarsipkan</h2>
        </div>
        <NoteList type="archive" 
          notes={archiveNotes} 
          deleteNote={this.onDeleteNoteEventHandler}
          moveNote={this.onMoveNoteEventHandler}
          archiveNote={this.onArchiveNoteEventHandler} />
      </div>
    );
  }
}