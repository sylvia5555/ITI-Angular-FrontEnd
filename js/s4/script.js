let inputs = document.querySelectorAll("input");
let errMsg = document.getElementById("error-msg");
let nameMsg = document.getElementById("name-msg");
let ageMsg = document.getElementById("age-msg");
let studentTable = document.getElementById("student-table").getElementsByTagName("tbody")[0];
let studentId = 1;  

inputs[0].addEventListener("blur", input => {
    if (input.target.value.length <= 3) {
        nameMsg.textContent = 'Name must be more than 3 characters';
    } else {
        nameMsg.textContent = '';
    }
});

inputs[1].addEventListener("blur", input => {
    if (Number(input.target.value) <= 18) {
        ageMsg.textContent = 'Age must be greater than 18';
    } else {
        ageMsg.textContent = '';
    }
});

function validate(event) {
    event.preventDefault();  

    let nameValue = inputs[0].value.trim();
    let ageValue = inputs[1].value.trim();

    if (nameValue === '' || ageValue === '') {
        errMsg.textContent = "Name and age are required";
        return;
    }

    if (nameValue.length <= 3) {
        errMsg.textContent = "Name must be more than 3 characters";
        return;
    }

    if (Number(ageValue) <= 18) {
        errMsg.textContent = "Age must be greater than 18";
        return;
    }

    errMsg.textContent = "";

    addStudentToTable(nameValue, ageValue);

    inputs[0].value = '';
    inputs[1].value = '';
}

function addStudentToTable(name, age) {
    let newRow = studentTable.insertRow();

    let idCell = newRow.insertCell(0);
    let nameCell = newRow.insertCell(1);
    let ageCell = newRow.insertCell(2);
    let actionCell = newRow.insertCell(3);

    idCell.textContent = studentId++;
    nameCell.textContent = name;
    ageCell.textContent = age;

    // Add a "Remove" button for the row
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
        removeStudent(newRow);
    };
    actionCell.appendChild(removeButton);
}

function removeStudent(row) {
    row.remove();
}
