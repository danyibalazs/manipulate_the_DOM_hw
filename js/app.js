document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const getForm = document.querySelector('#form-link');
  getForm.addEventListener('click', showForm);

  const getTraining = document.querySelector('#training-link');
  getTraining.addEventListener('click', showTraining);
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
  trainingListItem.classList.add('exerctise-show');

  const exercise = document.createElement('h2');
  exercise.textContent = form.exercise.value;
  trainingListItem.appendChild(exercise);

  const muscle = document.createElement('h3');
  muscle.textContent = form.muscle.value;
  trainingListItem.appendChild(muscle);

  const quantity = document.createElement('p');
  quantity.textContent = form.quantity.value;
  trainingListItem.appendChild(quantity);

  return trainingListItem;
}
