/**
 * Copyright 2017. Everydime. All rights reserved.
 */

function registerButtonClicked(id) {
  var passconf = document.getElementById('passconf').value;
  var params = {};
  params.username = document.getElementById('username').value;
  params.password = document.getElementById('password').value;
  params.firstname = document.getElementById('firstname').value;
  params.lastname = document.getElementById('lastname').value;
  params.email = document.getElementById('email').value;
  params.timezone = document.getElementById('timezone').value;

  if (params.username == null || params.username == "") {
    alert("Please enter a username.");
  } else if (params.password == null || params.password == "") {
    alert("Please enter a password.");
  } else if (passconf == null || passconf == "") {
    alert("Please confirm your password.");
  } else if (params.password != passconf) {
    alert("Your passwords do not match.");
  } else if (params.firstname == "" || params.firstname == null) {
    alert("Please enter your first name.");
  } else if (params.lastname == "" || params.lastname == null) {
    alert("Please enter your last name.");
  } else if (params.email == "" || params.email == null) {
    alert("Please enter your email address.");
  } else if (!params.email.includes("@") || !params.email.includes(".")) {
    alert("Please enter a valid email address.");
  } else if (params.timezone.substring(0, 3) != "UTC") {
    alert("Please select your time zone.");
  } else {
    registerBenefactor(params);
  }
}
