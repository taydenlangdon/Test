
  var savedNote = localStorage.getItem('newNote');
        var noteDisplay = document.getElementById('noteDisplay');

        if (savedNote) {
            noteDisplay.innerText = savedNote;
        } else {
            noteDisplay.innerText = 'No saved notes.';
        }

        function deleteNote() {  
            localStorage.removeItem('newNote');
            noteDisplay.innerText = 'Note deleted.';
        }
        function saveNewNote() {
            var noteText = document.getElementById('newNote').value;
            localStorage.setItem('newNote', noteText);
            window.location.href = 'save-new-note.html';
        }
