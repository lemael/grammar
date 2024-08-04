const draggables = document.querySelectorAll(".draggable");
const dropzones = document.querySelectorAll(".dropzone");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    dropzone.appendChild(dragging);
  });

  dropzone.addEventListener("drop", (e) => {
    const dragging = document.querySelector(".dragging");
    dropzone.appendChild(dragging);
    checkCompletion();
  });
});

function checkCompletion() {
  const dropzones = document.querySelectorAll(".dropzone");
  let completed = true;
  dropzones.forEach((dropzone) => {
    if (dropzone.children.length === 0) {
      completed = false;
    }
  });
  if (completed) {
    alert("Félicitations, vous avez complété le texte avec succès!");
  }
}
