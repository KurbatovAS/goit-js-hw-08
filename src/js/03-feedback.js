'use strict';

import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let savedData = '';
let parsedSavedData = {};

populateTextarea();

formEl.addEventListener('input', throttle(formDataToLocalStorage, 500))
formEl.addEventListener('submit', formSubmit);

function formDataToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ email: inputEl.value, message: textareaEl.value }));    
};

function formSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(parsedSavedData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);    
};

function populateTextarea() {
    savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    parsedSavedData = JSON.parse(savedData);
    
    if (savedData) {        
        inputEl.value = parsedSavedData.email;
        textareaEl.value = parsedSavedData.message;        
    };    
};