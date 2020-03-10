window.onload = function() {
    console.dir(loadData());
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
    // var list = document.getElementById('notes');
    // for (var i = 0; i < localStorage.length; i++) {
    //     var dateField = document.createElement('div');
    //     var date = localStorage.key(i);
    //     dateField.id = date;
    //     dateField.innerHTML = date;
    //     var notesField = document.createElement('ul');
    //     var notes = JSON.parse(localStorage.getItem(date));
    //     for (var note in notes) {
    //         var noteField = document.createElement('li');
    //         noteField.innerHTML = notes[note].name;
    //         notesField.appendChild(noteField);
    //     }
    //     dateField.appendChild(notesField);
    //     list.appendChild(dateField);
    // }
};

function loadData() {
    var data = [];
    for (var i = 0; i < localStorage.length; i++) {
        var date = localStorage.key(i);
        data[date] = JSON.parse(localStorage.getItem(date));
    }
    return data;
}