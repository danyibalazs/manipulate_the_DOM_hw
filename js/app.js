document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const getForm = document.querySelector('#form-link');
  getForm.addEventListener('click', showForm);

  const getTraining = document.querySelector('#training-link');
  getTraining.addEventListener('click', showTraining);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const trainingListItem = createTrainingListItem(event.target);
  const trainingList = document.querySelector('#exercise-show');
  trainingList.appendChild(trainingListItem);

  event.target.reset();
  showTraining();
}

const showForm = function (event) {
  const form = document.getElementById("exercise-form");
  form.classList.remove("hide");

  const list = document.getElementById("training-view");
  list.classList.add("hide");
}

const showTraining = function (event) {
  const list = document.getElementById("training-view");
  list.classList.remove("hide");

  const form = document.getElementById("exercise-form");
  form.classList.add("hide");
}

const createTrainingListItem = function (form) {
  const trainingListItem = document.createElement('li');
  trainingListItem.classList.add('training-list-item');

  const exercise = document.createElement('h2');
  exercise.textContent = form.exercise.value;
  trainingListItem.appendChild(exercise);

  const quantity = document.createElement('h3');
  quantity.textContent = form.quantity.value;
  trainingListItem.appendChild(quantity);

  const muscle = document.createElement('p');
  muscle.textContent = form.muscle.value;
  trainingListItem.appendChild(muscle);

  return trainingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#exercise-show');
  readingList.innerHTML = '';
}
