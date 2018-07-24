# Westminster Kennel Club Dog Show

You are responsible for managing the website for the Westminster Kennel Club Dog Show. These dog owners are _very_ competitive. We need to make sure that they can view all the competition (the other dogs) and edit their dog's information.

### Getting Started

You will be using the [json-server](https://github.com/typicode/json-server) package to mock an external API. You can make the same RESTful requests to this server that you would to any API. If you haven't yet, install json-server.
```bash
npm install -g json-server
```

Then run the server with:
```bash
json-server --watch db.json
```

This will serve your code on http://localhost:3000.

### Deliverables

- On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.
- Make a dog editable. Clicking on the edit button next to a dog should populate the form with that dog's information.
- On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information.
- The dog should have name, breed and sex attributes.

![dog](assets/dog-show.jpg)