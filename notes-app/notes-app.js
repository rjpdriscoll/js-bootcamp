let notes = getSavedNotes();

const filters = {
    searchText: ''
};

// Show current available notes with no filter
renderNotes(notes, filters);

// Create note
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();
    notes.push({id: id, title: '', body: ''});
    saveNotes(notes);
    location.assign(`/notes-app/edit.html#${id}`);
});

// Filter notes on search text
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

// Filter by dropdown
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
});

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    };
});