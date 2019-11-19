const noteId = location.hash.substring(1);
let notes = getSavedNotes();

const noteTitleSelected = document.querySelector('#note-title');
const noteBodySelected = document.querySelector('#note-body');
const buttonSelected = document.querySelector('#remove-note');

let note = notes.find(function (note) {
    return note.id === noteId;
});

if (note === undefined) {
    location.assign('/notes-app/index.html');
};


// Loads note with existing title and body
noteTitleSelected.value = note.title;
noteBodySelected.value = note.body;

// Listens for note title update
noteTitleSelected.addEventListener('input', function (e) {
    note.title = e.target.value;
    saveNotes(notes);
});

// Listens for note body update
noteBodySelected.addEventListener('input', function (e) {
    note.body = e.target.value;
    saveNotes(notes);
});

// Wires up remove note button
buttonSelected.addEventListener('click', function () {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/notes-app/index.html');
});

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        let note = notes.find(function (note) {
            return note.id === noteId;
        });
        
        if (note === undefined) {
            location.assign('/notes-app/index.html');
        };
        
        noteTitleSelected.value = note.title;
        noteBodySelected.value = note.body;
    };
});