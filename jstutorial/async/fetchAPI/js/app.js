"use strict";

const getUsers = async function () {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Problem getting users");
    }

    const data = await res.json();

    renderUsers(data);
  } catch (error) {
    console.error(`${error} ❎`);
  }
};

const renderUsers = function (users) {
  let html = "";

  users.forEach((user) => {
    let htmlSegment = `<div class="user">
          <h2>${user.name}</h2>
          <div class="username">${user.username}</div>
          <div class="email"><a href="email:${user.email}">${user.email}</a></div>
          <div class="phone">${user.phone}</div>
      </div>`;

    html += htmlSegment;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
};

getUsers();
