// General scripts for entire webpage

"use strict"

//variables
let courseEl = document.getElementById("course-output");
let addButton = document.getElementById("addCourse");
let code = document.getElementById("code");
let name = document.getElementById("name");
let progression = document.getElementById("progression");
let syllabus = document.getElementById("syllabus");

const methods = ['GET', 'POST', 'PUT', 'DELETE'];

//eventhandlers
window.addEventListener('load', getCourses);

//functions
function getCourses() {
    courseEl.innerHTML = '';

    fetch('http://localhost/DT173G_m5-1/api.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(course => {
            //console.log(course);
            courseEl.innerHTML +=
            `<tr>
                <td>${course.code}</td>
                <td>${course.name}</td>
                <td>${course.progression}</td>
                <td><a href=" ${course.syllabus}"><b>Klicka Här</b></td>
                <td>
                    <button id="${course.id}" onClick="deleteCourse">Radera</button>
                    <button id="${course.id}" onClick="updateCourse">Uppdatera</button>
                </td>
            </tr>`
        })
    })
}

function deleteCourse(id){
    fetch('http://localhost/DT173G_m5-1/api.php?id' + id, {
        method: "DELETE"
    }).then(id => id.json()).then(id => {
        getCourses()
    }).catch(id => {
        console.log("Error:", id)
    })
}

//on load, fetch courses and dislpay
window.onload = getCourses();