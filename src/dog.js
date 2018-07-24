class Dog {
  constructor({name, breed, sex, id}) {
    this.name = name
    this.breed = breed
    this.sex = sex
    this.id = id
  }

  element() {
    const row = document.createElement('tr')
    row.id = `dog-${this.id}`
    const sex = document.createElement('td')
    sex.innerText = this.sex
    sex.classList.add('sex')
    const name = document.createElement('td')
    name.innerText = this.name
    name.classList.add('name')
    const breed = document.createElement('td')
    breed.innerText = this.breed
    breed.classList.add('breed')
    const edit = document.createElement('td')
    const btn = document.createElement('button')
    btn.innerText = 'Edit Dog'
    btn.dataset.id = this.id
    btn.addEventListener('click', DogController.handleClick)
    edit.append(btn)
    row.append(name, breed, sex, edit)
    return row
  }
}