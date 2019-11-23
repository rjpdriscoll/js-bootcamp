let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

const timestamp = moment().valueOf();

// Show current available notes with no filter
renderNotes(notes, filters);

// Create note
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();
    notes.push({id: id, title: '', body: '', createdAt: timestamp, updatedAt: timestamp});
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
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    };
});

// const now = moment();
// now.subtract(1, 'w').subtract(20, 'd');
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).toString());

// 1. Create a new moment
// 2. Set month, day and year to your birthday
// 3. Format to print in following way: Jan 6, 1991

const birthday = moment();
birthday.year(1993).month(06).date(01);
console.log(birthday.format('MMM D, YYYY'));