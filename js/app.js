//variables
const noteList = document.querySelector("#note-list");

//eventlisteners
eventlisteners();

function eventlisteners() {
    //form submition 
  document.querySelector("#form").addEventListener("submit", newNote);
  //remove btn 
    noteList.addEventListener('click', removeNotes)
    // load local storage when dom loaded

    document.addEventListener('DOMContentLoaded', loadContentFromLocalStorage)
}

//functions

function newNote(e) {
  e.preventDefault();
  //get textarea's value
  const note = document.querySelector("#note").value;
  //create li tag
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(note));
  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = 'X'
  removeBtn.classList.add('remove-btn')
    // make removBtn removable
   
  li.appendChild(removeBtn);

  //append li to note list
  noteList.appendChild(li);

  addTolocalStorage(note)
}

//removing notes with remove btn 

function removeNotes(e) {
    if (e.target.classList.contains('remove-btn')) {
        const li = e.target.parentElement
        li.lastElementChild.remove()
       const notes = getFromLocalStorage()
       for (let i = 0; i < notes.length; i++) {
            if (notes[i]===li.textContent) {
                notes.splice(i,1)
                localStorage.setItem('notes', JSON.stringify(notes))
                li.remove()
            }    

       }
        
    }
}

//add a note to Local storage 

function addTolocalStorage(note){
    const notes = getFromLocalStorage()
    notes.push(note)
    localStorage.setItem('notes', JSON.stringify(notes))
}



function getFromLocalStorage(){
    let notes;
    let getFromLS = localStorage.getItem('notes')
    
    if (getFromLS === null) {
        notes = []
    }else{
        notes = JSON.parse(getFromLS)
    }

    return notes;
}

function loadContentFromLocalStorage() {
    const notes = getFromLocalStorage()
    notes.forEach(note => {
     //create li tag
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(note));
  // create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = 'X'
  removeBtn.classList.add('remove-btn')
    // make removBtn removable
   
  li.appendChild(removeBtn);

  //append li to note list
  noteList.appendChild(li);   
      
    });
}

function logMyAge() {
  window.alert('hello')
}
 logMyAge()