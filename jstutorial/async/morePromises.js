"use strict";

// Promises coded by ME
const fetchUsers = async function () {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();
    console.log(data);

    data.forEach((user) => document.write(user.name, "<br>"));
  } catch (error) {
    console.log(new Error(`error something ${error.message}`));
  }
};
fetchUsers();
