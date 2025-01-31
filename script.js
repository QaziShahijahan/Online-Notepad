// Select the textarea and checkbox from the HTML
let notesBox = document.getElementById("notesBox");
let saveNotes = document.getElementById("saveNotes");

// Load saved notes when the app is opened
let savedNotes = localStorage.getItem("myNotes"); // Get notes from storage
if (savedNotes) {
  notesBox.value = savedNotes; // Fill the textarea with saved content
}

// Listen for changes in the textarea (when the user types something)
notesBox.addEventListener("input", function () {
    if (saveNotes.checked) {    
      // If "Enable Save Notes" is checked, save the notes
      localStorage.setItem("myNotes", notesBox.value); // Save notes to local storage
      console.log("Notes saved: ", notesBox.value);
    }
    // else {
    //   // Remove the notes from localStorage if the checkbox is unchecked
    //   localStorage.removeItem("myNotes");
    // }
  });

//   // Listen for checkbox toggle (to turn saving on/off)
// saveNotes.addEventListener("change", function () {
//     if (!saveNotes.checked) {
//       // If the checkbox is unchecked, clear local storage
//       console.log("Saving turned off");
//     }
//   });
