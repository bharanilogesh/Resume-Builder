'use strict';

let nameEl = document.getElementById('name1');
let profileEl = document.getElementById('profile1');
let experienceEl = document.getElementById('experience1');
let projectsEl = document.getElementById('projects1');
let qualificationsEl = document.getElementById('qualifications1');
let skillsEl = document.getElementById('skills1');
let contactEl = document.getElementById('contact1');
let emailEl = document.getElementById('email1');
let data = JSON.parse(localStorage.getItem('formData'));

const setData = () => {
  const {
    name,
    profile,
    experience,
    projects,
    qualifications,
    skills,
    contact,
    email,
  } = { ...data };
  nameEl.innerText = name;
  profileEl.innerText = profile;
  experienceEl.innerText = experience;
  projectsEl.innerText = projects;
  qualificationsEl.innerText = qualifications;
  skillsEl.innerText = skills;
  contactEl.innerText = contact;
  emailEl.innerText = email;
};

setData();


