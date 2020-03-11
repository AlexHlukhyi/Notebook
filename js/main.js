let NotesSystem = {
    data: [],
    init: function() {
        NotesSystem.data = NotesSystem.loadData();
        NotesSystem.showData();
    },
    loadData: function() {
        let data = [];
        for (let i = 0; i < localStorage.length; i++) {
            let date = localStorage.key(i);
            data[date] = JSON.parse(localStorage.getItem(date));
        }
        return data;
    },
    showData: function() {
        document.getElementById('note').style.display = 'hidden';
        let list = document.getElementById('notes');
        list.innerHTML = "";
        for (let date in this.data) {
            let dateField = document.createElement('div');
            dateField.id = date;
            dateField.innerHTML = date;
            let notesField = document.createElement('ul');
            let notes = NotesSystem.data[date];
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
                    NotesSystem.showNote(note, date, notes[note].name, notes[note].description);
                };
                noteField.appendChild(showButton);
                // creating delete button
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'delete';
                deleteButton.className = "btn btn-danger btn-sm";
                deleteButton.onclick = function () {
                    NotesSystem.deleteNote(note, date);
                };
                noteField.appendChild(deleteButton);
                //
                notesField.appendChild(noteField);
            }
            dateField.appendChild(notesField);
            list.appendChild(dateField);
        }
    },
    showNote: function(id, date, name, description) {
        document.getElementById('note').style.display = 'block';
        document.getElementById('note-date').innerHTML = date;
        document.getElementById('note-name').innerHTML = name;
        document.getElementById('note-desc').innerHTML = description;
        document.getElementById('edit-button').onclick = function () {
            NotesSystem.editNote(id, date);
        }
    },
    addNote: function() {
        let date = document.getElementById('new-note-date').value;
        let name = document.getElementById('new-note-name').value;
        let note = {'name' : name, 'description' : ''};
        if (!NotesSystem.data[date]) {
            NotesSystem.data[date] = [];
        }
        NotesSystem.data[date].push(note);
        localStorage.setItem(date, JSON.stringify(NotesSystem.data[date]));
        NotesSystem.init();
    },
    editNote: function(id, date) {
        NotesSystem.data[date][id].description = document.getElementById('note-desc').value;
        localStorage.setItem(date, JSON.stringify(NotesSystem.data[date]));
        NotesSystem.init();
    },
    deleteNote: function(id, date) {
        NotesSystem.data[date].splice(id, 1);
        if (NotesSystem.data[date].length < 1) {
            localStorage.removeItem(date);
        } else {
            localStorage.setItem(date, JSON.stringify(NotesSystem.data[date]));
        }
        NotesSystem.init();
    }
};

window.onload = NotesSystem.init;