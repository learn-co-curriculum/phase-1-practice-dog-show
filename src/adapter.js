class Adapter {
  static getDogs() {
    const url = `http://localhost:3000/dogs`
    return fetch(url)
      .then(r => r.json())
  }

  static getDog(id) {
    const url = `http://localhost:3000/dogs/${id}`
    return fetch(url)
      .then(r => r.json())
  }

  static editDog(data) {
    const url = `http://localhost:3000/dogs/${data.id}`
    delete data.id
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    return fetch(url, options)
      .then(r => r.json())
  }
}