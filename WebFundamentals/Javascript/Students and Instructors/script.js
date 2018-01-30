var users = {
  'Students': [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
  ],
  'Instructors': [
    { first_name: 'Michael', last_name: 'Choi' },
    { first_name: 'Martin', last_name: 'Puryear' }
  ]
}

function naming(users) {

  console.log("Students");

  for (var key in users.Students) {
    var i = (Number(key) + 1);
    console.log(i + " - " + users.Students[key].first_name + " " + users.Students[key].last_name + " - " + (users.Students[key].first_name.length + users.Students[key].last_name.length));
  }

  console.log("Instructors");

  for (key in users.Instructors) {
    i = (Number(key) + 1);
    console.log(i + " - " + users.Instructors[key].first_name + " " + users.Instructors[key].last_name + " - " + (users.Instructors[key].first_name.length + users.Instructors[key].last_name.length));
  }
}