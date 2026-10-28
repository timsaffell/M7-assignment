// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const table = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES

const id = document.getElementById('id').value;
const name = document.getElementById('name').value;
const extension = document.getElementById('extension').value;
const email = document.getElementById('email').value;
const department = document.getElementById('department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
const row = table.insertRow(-1);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
const cellID = row.insertCell();
const cellName = row.insertCell();
const cellExtension = row.insertCell();
const cellEmail = row.insertCell();
const cellDepartment = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
cellID.appendChild(document.createTextNode(id));
cellName.appendChild(document.createTextNode(name));
cellExtension.appendChild(document.createTextNode(extension));
cellEmail.appendChild(document.createTextNode(email));
cellDepartment.appendChild(document.createTextNode(department));
    // CREATE THE DELETE BUTTON
const cellDelete = row.insertCell();
const deleteButton = document.createElement('button');
deleteButton.textContent = 'X';
deleteButton.type = 'button';
deleteButton.className = 'btn btn-danger btn-sm';
cellDelete.appendChild(deleteButton);
    // RESET THE FORM
form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
document.getElementById('id').focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
count++;
document.getElementById('empCount').textContent = count;
})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            const row = e.target.closest('tr');
            table.deleteRow(row.rowIndex);

            count--;
            document.getElementById('empCount').textContent = count;
        }
    }
});