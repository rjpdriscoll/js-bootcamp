const noteId = location.hash.substring(1);
let notes = getSavedNotes();

const noteTitleSelected = document.querySelector('#note-title');
const noteBodySelected = document.querySelector('#note-body');
const buttonSelected = document.querySelector('#remove-note');
const lastEdited = document.querySelector('#last-edited');

let note = notes.find( (note) =>  note.id === noteId);


if (note === undefined) {
    location.assign('/notes-app/index.html');
};


// Loads note with existing title and body
noteTitleSelected.value = note.title;
noteBodySelected.value = note.body;
lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`

// Listens for note title update
noteTitleSelected.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    saveNotes(notes);
});

// Listens for note body update
noteBodySelected.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    saveNotes(notes);
});

// Wires up remove note button
buttonSelected.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/notes-app/index.html');
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        let note = notes.find( (note) => note.id === noteId);
        
        if (note === undefined) {
            location.assign('/notes-app/index.html');
        };
        
        noteTitleSelected.value = note.title;
        noteBodySelected.value = note.body;
        lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
    };
});