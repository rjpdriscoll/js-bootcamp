// Read existing notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    };
};

// Save the notes to local storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove note from the page
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    });

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
};

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div');
    const textElement = document.createElement('a');
    const button = document.createElement('button');

    // Setup the remove note button
    button.textContent = 'x';
    noteElement.appendChild(button);
    button.addEventListener('click', function () {
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
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (b.updatedAt > a.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (b.createdAt > a.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
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
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteElement);
    });
};

