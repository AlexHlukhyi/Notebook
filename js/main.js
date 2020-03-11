var data = [];

window.onload = function() {
    data = loadData();
    showData(data);
};

function loadData() {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
        let date = localStorage.key(i);
        data[date] = JSON.parse(localStorage.getItem(date));
    }
    return data;
}

function showData(data) {
    let list = document.getElementById('notes');
    for (let date in data) {
        let dateField = document.createElement('div');
        dateField.id = date;
        dateField.innerHTML = date;
        let notesField = document.createElement('ul');
        let notes = data[date];
        for (let note in notes) {
            let noteField = document.createElement('li');
            // creating span with name of note
            let noteName = document.createElement('span');
            noteName.innerHTML = notes[note].name;
            noteName.className = "note-name";
            noteField.appendChild(noteName);
            // creating show button
            let showButton = document.createElement('button');
            showButton.innerHTML = 'show';
            showButton.className = "btn btn-primary btn-sm";
            showButton.onclick = function () {
                showNote(note, date, notes[note].name, notes[note].description);
            };
            noteField.appendChild(showButton);
            // creating delete button
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'delete';
            deleteButton.className = "btn btn-danger btn-sm";
            deleteButton.onclick = function () {
                deleteNote(note, date);
            };
            noteField.appendChild(deleteButton);
            //
            notesField.appendChild(noteField);
        }
        dateField.appendChild(notesField);
        list.appendChild(dateField);
    }
}

function showNote(id, date, name, description) {
    document.getElementById('note').style.display = 'block';
    document.getElementById('note-date').innerHTML = date;
    document.getElementById('note-name').innerHTML = name;
    document.getElementById('note-desc').innerHTML = description;
    document.getElementById('edit-button').onclick = function () {
        editNote(id, date);
    }
}

function addNote() {
    let date = document.getElementById('new-note-date').value;
    let name = document.getElementById('new-note-name').value;
    let note = {'name' : name, 'description' : ''};
    if (!data[date]) {
        data[date] = [];
    }
    data[date].push(note);
    localStorage.setItem(date, JSON.stringify(data[date]));
    document.location.reload();
}

function editNote(id, date) {
    data[date][id].description = document.getElementById('note-desc').value;
    localStorage.setItem(date, JSON.stringify(data[date]));
    document.location.reload();
}

function deleteNote(id, date) {
    data[date].splice(id);
    localStorage.setItem(date, JSON.stringify(data[date]));
    document.location.reload();
}