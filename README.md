# Westminster Kennel Club Dog Show

You are responsible for managing the website for the Westminster Kennel Club Dog Show. These dog owners are _very_ competitive. We need to make sure that they can view all the competition (the other dogs) and edit their dog's information.

### Deliverables

- On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://starkiller-api.herokuapp.com/api/v1/dogs.
- Make a dog editable. Clicking on the edit button next to a dog should populate the form with that dog's information. 
- On submit of the form, a PATCH request should be made to http://starkiller-api.herokuapp.com/api/v1/dogs/:id to update the dog information.
- The dog should have name, breed and sex attributes.









![dog](assets/dog-show.jpg)