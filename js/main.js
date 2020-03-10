window.onload = function() {
    // localStorage['06.03.2020'] = JSON.stringify([
    //     {
    //         'name': 'Note1',
    //         'description': 'desc1'
    //     },
    //     {
    //         'name': 'Note2',
    //         'description': 'desc2'
    //     }
    // ]);
    var list = document.getElementById('notes');
    for (var i = 0; i < localStorage.length; i++) {
        var dateField = document.createElement('div');
        var date = localStorage.key(i);
        dateField.id = date;
        dateField.innerHTML = date;
        var notesField = document.createElement('ul');
        var notes = JSON.parse(localStorage.getItem(date));
        console.dir(notes);
        for (var note in notes) {
            var noteField = document.createElement('li');
            noteField.innerHTML = notes[note].name;
            notesField.appendChild(noteField);
        }
        dateField.appendChild(notesField);
        list.appendChild(dateField);
    }
};

// window.onload = function () {
//     var list = document.getElementById('notes');
//     for (var i in notes) {
//         var date = document.createElement('div');
//         date.className = "date";
//         date.id = i;
//         date.innerHTML = i;
//         var notesItem = document.createElement('ul');
//         notesItem.class = "notes";
//         for (var j in notes[i]) {
//             var note = document.createElement('li');
//             note.className = "note";
//             // var dateP = i;
//             // var name = notes[i][j]["name"];
//             //
//             // note.addEventListener('click', function () {
//             //     showInfo(dateP, name);
//             // });
//             note.innerHTML = notes[i][j]["name"];
//             notesItem.appendChild(note);
//         }
//         date.appendChild(notesItem);
//         list.appendChild(date);
//     }
// };
//
// function showInfo(date, name) {
//     var info = document.getElementById('info');
//     info.style.display = 'block';
//     info.childNodes[1].childNodes[1].innerHTML = date;
//     info.childNodes[1].childNodes[3].innerHTML = name;
// }