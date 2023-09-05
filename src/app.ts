const createNoteBtn = document.querySelector('.btn') as HTMLElement;
const deleteNoteBtn = document.querySelector('.input-box img') as HTMLElement;

class InputHandler {
  constructor() {}
  render() {
    const noteInput = document.createElement('p');

    noteInput.classList.add('input-box');
    noteInput.setAttribute('contenteditable', 'true');

    const notesContainer = document.querySelector(
      '.notes-container'
    ) as HTMLElement;

    const notePod = notesContainer.appendChild(noteInput);

    const delBtn = new DeleteBtnHandler();
    notePod.appendChild(delBtn.deleteNote());
  }
}

class DeleteBtnHandler {
  constructor() {}
  deleteNote() {
    const delImg = document.createElement('img');
    delImg.src = '/assets/images/delete.png';
    delImg.className = 'delete-btn';

    delImg.addEventListener('click', () => {
      const delParent = new DelParentHandler();
      delParent.delEm(delImg);
    });
    return delImg;
  }
}

class DelParentHandler {
  constructor() {}
  delEm(e: HTMLImageElement) {
    const target = e.tagName;
    if (target === 'IMG') {
      const parentEl = e.parentElement as HTMLElement;
      parentEl.remove();
    }
  }
}

//Event Listeners
createNoteBtn.addEventListener('click', () => {
  const newNote = new InputHandler();
  newNote.render();
});
