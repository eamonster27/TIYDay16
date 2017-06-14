// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch('https://randomuser.me/api/?results=12')
  .then( function(response){
    return response.json()
  })
  .then(function(json){
    console.log(json)

    for(let i = 0; i < 12; ++i){
      var gender = json.results[i].gender;
      gender = capFirstLetter(gender);

      var name = json.results[i].name;
      name.title = capFirstLetter(name.title);
      name.first = capFirstLetter(name.first)
      name.last = capFirstLetter(name.last);
      if(name.title === "Mrs" || name.title === "Mr" || name.title === "Ms"){
        name.title = name.title + ". ";
      }

      var location = json.results[i].location;
      location.street = capFirstLetter(location.street);
      location.city = capFirstLetter(location.city);
      location.state = capFirstLetter(location.state);


      const email = json.results[i].email;
      const login = json.results[i].login;

      const dob = json.results[i].dob;
      const registered = json.results[i].registered;
      const phone = json.results[i].phone;
      const cell = json.results[i].cell;
      const id = json.results[i].id;

      const picture = json.results[i].picture;

      const nat = json.results[i].nat;

      const html = `
        <div class="user">
          <div class="name">
            <h2>${name.title} ${name.first} ${name.last}</h2
          </div>
          <img src="${picture.thumbnail}" alt="${name.first} ${name.last}">
          <div class="gender"><b>Gender:</b> ${gender}</div>
          <div class="location">
            <li><b>Address:</b> </li>
            <li>${location.street}</li>
            <li>${location.city}, ${location.state} ${location.postcode}</li>
          </div>

          <div class="email"><b>Email:</b> ${email}</div>
          <div class="login">
            <li><b>Username:</b> ${login.username}</li>
            <li><b>Password:</b> ${login.password}</li>
            <li><b>Salt:</b> ${login.salt}</li>
            <li><b>MD5:</b> ${login.md5}</li>
            <li><b>Sha1:</b> ${login.sha1}</li>
            <li><b>Sha256:</b> ${login.sha256}</li>
          </div>

          <div class="dob"><b>DOB:</b> ${dob}</div>
          <div class="registered"><b>Registered:</b> ${registered}</div>
          <div class="phone"><b>Phone:</b> ${phone}</div>
          <div class="cell"><b>Cell:</b> ${cell}</div>
          <div class="id">
            <li><b>ID Name:</b> ${id.name}</li>
            <li><b>ID Value:</b> ${id.value}</li>
          </div>

          <div class="nat"><b>NAT:</b> ${nat}</div>
          <hr>
        </div>
      `
      document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
    }

  })

  function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

})();
