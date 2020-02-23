document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const trainingListItem = createTrainingListItem(event.target);
  const trainingList = document.querySelector('#exercise-show');
  trainingList.appendChild(trainingListItem);

  event.target.reset();
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
