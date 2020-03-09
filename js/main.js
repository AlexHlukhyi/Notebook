var notes = {
    "06.03.2020" : {
        "1" : {
            "name" : "Note 1",
            "description" : "Description 1"
        },
        "2" : {
            "name" : "Note 2",
            "description" : "Description 2"
        }
    },
    "05.03.2020" : {
        "1" : {
            "name" : "Note 1",
            "description" : "Description 1"
        },
        "2" : {
            "name" : "Note 2",
            "description" : "Description 2"
        },
        "3" : {
            "name" : "Note 3",
            "description" : "Description 3"
        }
    },
    "04.03.2020" : {
        "1" : {
            "name" : "Note 1",
            "description" : "Description 1"
        }
    }
};

window.onload = function () {
    var list = document.getElementById('notes');
    for (var i in notes) {
        var date = document.createElement('div');
        date.className = "date";
        date.id = i;
        date.innerHTML = i;
        var notesItem = document.createElement('ul');
        notesItem.class = "notes";
        for (var j in notes[i]) {
            var note = document.createElement('li');
            note.className = "note";
            var dateP = i;
            var name = notes[i][j]["name"];
            note.addEventListener('click', function () {
                showInfo(dateP, name);
            });
            note.innerHTML = notes[i][j]["name"];
            notesItem.appendChild(note);
        }
        date.appendChild(notesItem);
        list.appendChild(date);
    }
};

function showInfo(date, name) {
    var info = document.getElementById('info');
    info.style.display = 'block';
    info.childNodes[1].childNodes[1].innerHTML = date;
    info.childNodes[1].childNodes[3].innerHTML = name;
}