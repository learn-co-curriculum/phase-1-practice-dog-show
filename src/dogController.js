class DogController {
  static init() {
    Adapter.getDogs()
      .then(DogController.renderDogs)
    const form = document.querySelector('#dog-form')
    form.addEventListener('submit', DogController.handleSubmit)
  }

  static renderDogs(dogs) {
    const table = document.querySelector('#table-body')
    table.innerHTML = ''
    dogs.forEach(DogController.renderDog)
  }

  static renderDog(dog) {
    const table = document.querySelector('#table-body')
    const newDog = new Dog(dog)
    table.append(newDog.element())
  }

  static handleClick(e) {
    const id = e.target.dataset.id
    Adapter.getDog(id)
      .then(DogController.populateForm)
  }

  static populateForm(dog) {
    const newDog = new Dog(dog)
    const form = document.querySelector('#dog-form')
    form.dataset.id = newDog.id
    form.name.value = newDog.name
    form.breed.value = newDog.breed
    form.sex.value = newDog.sex
  }

  static handleSubmit(e) {
    e.preventDefault()
    const data = {
      id: e.target.dataset.id,
      name: e.target.name.value,
      breed: e.target.breed.value,
      sex: e.target.sex.value
    }
    Adapter.editDog(data)
      .then(Adapter.getDogs)
      .then(DogController.renderDogs)
    e.target.reset()
    e.target.dataset.id = ''
  }
}