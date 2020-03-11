const NotesSystem = {
    data: [],
    init() {
        console.log(this);
        this.data = this.loadData();
        this.showData();
    },
    loadData() {
        let data = [];
        for (let i = 0; i < localStorage.length; i++) {
            let date = localStorage.key(i);
            data[date] = JSON.parse(localStorage.getItem(date));
        }
        return data;
    },
    showData() {
        document.getElementById('note').style.display = 'hidden';
        let list = document.getElementById('notes');
        list.innerHTML = "";
        for (let date in this.data) {
            let dateField = document.createElement('div');
            dateField.id = date;
            dateField.innerHTML = date;
            let notesField = document.createElement('ul');
            let notes = this.data[date];
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
                    this.showNote(note, date, notes[note].name, notes[note].description);
                };
                noteField.appendChild(showButton);
                // creating delete button
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'delete';
                deleteButton.className = "btn btn-danger btn-sm";
                deleteButton.onclick = function () {
                    this.deleteNote(note, date);
                };
                noteField.appendChild(deleteButton);
                //
                notesField.appendChild(noteField);
            }
            dateField.appendChild(notesField);
            list.appendChild(dateField);
        }
    },
    showNote(id, date, name, description) {
        document.getElementById('note').style.display = 'block';
        document.getElementById('note-date').innerHTML = date;
        document.getElementById('note-name').innerHTML = name;
        document.getElementById('note-desc').innerHTML = description;
        document.getElementById('edit-button').onclick = function () {
            this.editNote(id, date);
        }
    },
    addNote() {
        let date = document.getElementById('new-note-date').value;
        let name = document.getElementById('new-note-name').value;
        let note = {'name' : name, 'description' : ''};
        if (!this.data[date]) {
            this.data[date] = [];
        }
        this.data[date].push(note);
        localStorage.setItem(date, JSON.stringify(this.data[date]));
        this.init();
    },
    editNote: function(id, date) {
        this.data[date][id].description = document.getElementById('note-desc').value;
        localStorage.setItem(date, JSON.stringify(this.data[date]));
        this.init();
    },
    deleteNote: function(id, date) {
        this.data[date].splice(id, 1);
        if (this.data[date].length < 1) {
            localStorage.removeItem(date);
        } else {
            localStorage.setItem(date, JSON.stringify(this.data[date]));
        }
        this.init();
    }
};

window.onload = NotesSystem.init;