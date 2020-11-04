// General scripts for entire webpage

"use strict"

//variables
let courseEl = document.getElementById("course-output");
let addButton = document.getElementById("addCourse");
let updateDiv = document.getElementById("updateDiv");
let code = document.getElementById("code");
let name = document.getElementById("name");
let progression = document.getElementById("progression");
let syllabus = document.getElementById("syllabus");

const methods = ['GET', 'POST', 'PUT', 'DELETE'];

//eventhandlers
window.addEventListener('load', getCourses);
addButton.addEventListener('click', addCourse);

//functions
function getCourses() {
    courseEl.innerHTML = '';

    fetch('http://localhost/dt173g_m5-1/api')
    .then(response => response.json())
    .then(data => {
        data.forEach(course => {
            courseEl.innerHTML +=
            `<tr>
                <td>${course.code}</td>
                <td>${course.name}</td>
                <td>${course.progression}</td>
                <td><a href=" ${course.syllabus}" target="_blank"><b>Klicka Här</b></td>
                <td>
                    <button id="${course.id}" onClick="deleteCourse(${course.id})">Radera</button>
                    <button id="${course.id}" onClick="updateThisCourse(${course.id})">Uppdatera</button>
                </td>
            </tr>
            <div id="updateDiv"></div>
            `
        });
    })
}

//Function to add course to database
function addCourse() {
    name = name.value;
    code = code.value;
    progression = progression.value;
    syllabus = syllabus.value;

    let course = {'name' : name, 'code' : code, 'progression' : progression, 'syllabus' : syllabus};

    fetch('http://localhost/DT173G_m5-1/api', {
        method: 'POST',
        body: JSON.stringify(course)
    }).then(response => response.json()).then(data => {
        getCourses();
    }).catch(error => {
        console.log('Error: ', error);
    })
}

//Function to delete course from database
function deleteCourse(id) {
    fetch('http://localhost/DT173G_m5-1/api?id=' + id, {
        method: "DELETE"
    }).then(response => response.json()).then(data => {
        getCourses();
    }).catch(error => {
        console.log("Error:", error);
    })
}

//Get selected course info to update
function updateThisCourse(id) {
    updateDiv.innerHTML = '';
    fetch('http://localhost/DT173G_m5-1/api?id=' + id) 
    .then(response => response.json())
    .then(updateDiv.style.display = 'block')
    .then(course => {
        updateDiv.innerHTML +=
        `
        <form method="get" id="updateForm">
        <label for="name">Kursnamn:</label>
        <br>
        <input type="text" name="name" id="inname" value="${course.name}">
        <br>

        <label for="code">Kurskod:</label>
        <br>
        <input type="text" name="code" id="incode" value="${course.code}">
        <br>

        <label for="progression">Progression:</label>
        <br>
        <input type="text" name="progression" id="inprogression" value="${course.progression}"">
        <br>

        <label for="syllabus">Kursplan:</label>
        <br>
        <input type="text" name="syllabus" id="insyllabus" value="${course.syllabus}">
        <br>

        <input type="submit" value="Uppdatera kurs" id="updateButton" onClick="updateCourse(${course.id})"><br>
        <input type="submit" value="Avbryt" id="closeButton" onClick="closeDiv()">
        </form>
        `
    })
}


//Function to update course info
function updateCourse(id) {
    let inname = document.getElementById('inname');
    let incode = document.getElementById('incode');
    let inprogression = document.getElementById('inprogression');
    let insyllabus = document.getElementById('insyllabus');
    
    inname = inname.value;
    incode = incode.value;
    inprogression = inprogression.value;
    insyllabus = insyllabus.value;

    let course = {'id' : id, 'name' : inname, 'code' : incode, 'progression' : inprogression, 'syllabus' : insyllabus};

    fetch('http://localhost/DT173G_m5-1/api?id=' + id, {
        method : 'PUT',
        body: JSON.stringify(course)
    })
    .then(response => response.json())
    .then(data => {
        getCourses();
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}


//on load, fetch courses and dislpay
window.onload = getCourses();