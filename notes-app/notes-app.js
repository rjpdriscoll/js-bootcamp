'use strict';

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

const timestamp = moment().valueOf();

// Show current available notes with no filter
renderNotes(notes, filters);

// Create note
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    notes.push({id: id, title: '', body: '', createdAt: timestamp, updatedAt: timestamp});
    saveNotes(notes);
    location.assign(`/notes-app/edit.html#${id}`);
});

// Filter notes on search text
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

// Filter by dropdown
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    };
});