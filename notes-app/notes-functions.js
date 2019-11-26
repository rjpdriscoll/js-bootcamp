// Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    };
};

// Save the notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove note from the page
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
};

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement('div');
    const textElement = document.createElement('a');
    const button = document.createElement('button');

    // Setup the remove note button
    button.textContent = 'x';
    noteElement.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title;
    } else {
        textElement.textContent = 'Unnamed note';
    };
    
    textElement.setAttribute('href', `/notes-app/edit.html#${note.id}`);
    noteElement.appendChild(textElement);
    
    return noteElement;
};


// Sort your notes one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort( (a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (b.updatedAt > a.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort( (a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (b.createdAt > a.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort( (a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        })
    }
}

// Render notes to the page
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach( (note) => {
        const noteElement = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteElement);
    });
};

