// General scripts for entire webpage

"use strict"

//variables
let courseEl = document.getElementById("courses");


//eventhandlers
window.addEventListener('load', getCourses);

//functions
function getCourses() {
    courseEl.innerHTML = '';

    fetch('http://localhost/moment5/api')
    .then(response => response.json())
    .then(data => {
        data.forEach(course => {
            //console.log(course);
            courseEl.innerHTML +=
            `<div class="course">
                <p>
                <b>Namn: </b> ${course.name}
                <br>
                <b>Kurskod: </b> ${course.code}
                <br>
                <b>Progression: </b> ${course.progression}
                <br>
                <a href=" ${course.syllabus}><b>Kursplan</b></a>
                <button id="${course.id}" onClick="deleteCourse">Radera</button>
            </div>`

        })
    })
}