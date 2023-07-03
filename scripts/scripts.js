'use strict';
const userName = document.getElementById('name');
const userProfile = document.getElementById('profile');
const userExperience = document.getElementById('experience');
const userProjects = document.getElementById('projects');
const userQualifications = document.getElementById('qualifications');
const userSkills = document.getElementById('skills');
const userContact = document.getElementById('contact');
const userEmail = document.getElementById('email');

const previewButton = document.querySelector('.preview-button');
let formData;

const init = () => {
  let data = JSON.parse(localStorage.getItem('formData'));
  if (data !== null) {
    setData(data);
    return;
  }
};

previewButton.addEventListener('click', () => {
  formData = {
    name: userName.value,
    profile: userProfile.value,
    experience: userExperience.value,
    projects: userProjects.value,
    qualifications: userQualifications.value,
    skills: userSkills.value,
    contact: userContact.value,
    email: userEmail.value,
  };
  localStorage.setItem('formData', formData);
  localStorage.setItem('formData', JSON.stringify(formData));

});

const setData = (data) => {
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

  userName.value = name;
  userProfile.value = profile;
  userExperience.value = experience;
  userProjects.value = projects;
  userQualifications.value = qualifications;
  userSkills.value = skills;
  userContact.value = contact;
  userEmail.value = email;
};

init();
