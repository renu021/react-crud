let selectedRow = null;

// Function to handle form submission
export function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

// Function to read form data and store it in an object
export function readFormData() {
    var formData = {}; // Create an empty object to store user input data

    // Retrieve values from input fields by their IDs and assign them to the object
    formData["emp_code"] = document.getElementById("emp_code").value;
    formData["emp_name"] = document.getElementById("emp_name").value;
    formData["salary"] = document.getElementById("salary").value;

    return formData;
}

// Function to insert a new record into the table
export function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.emp_code;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.emp_name;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    var cell4 = newRow.insertCell(3);

    // Create "Edit" and "Delete" buttons
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        onEdit(this.parentElement.parentElement);
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        onDelete(this.parentElement.parentElement);
    });

  
    cell4.appendChild(editButton);
    cell4.appendChild(deleteButton);
}


// Function to reset form fields
export function resetForm() {
    document.getElementById("emp_code").value = "";
    document.getElementById("emp_name").value = "";
    document.getElementById("salary").value = "";
    selectedRow = null;
}


// Function to edit a record
export function onEdit(td) {
    selectedRow = td;
    document.getElementById("emp_code").value = selectedRow.cells[0].innerHTML;
    document.getElementById("emp_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
}

// Function to update a record
export function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.emp_code;
    selectedRow.cells[1].innerHTML = formData.emp_name;
    selectedRow.cells[2].innerHTML = formData.salary;
}


//Function to delete a record
export function onDelete(td) {
    if (window.confirm('Are you sure to delete this record?')) {
        let row = td.parentElement.parentElement;
        let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
        table.deleteRow(row.rowIndex);
        resetForm();
    }
    
}



