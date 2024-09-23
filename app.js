
//second////

function showAlert(message) {
    alert(message);
  }

//Third///


const studentRecords = [];
for (let i = 0; i < 10; i++) {
  studentRecords.push({
    name: `Student ${i + 1}`,
    age: Math.floor(Math.random() * 20) + 15
  });
}


const tableBody = document.getElementById('student-records');
studentRecords.forEach((record, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${record.name}</td>
    <td>${record.age}</td>
    <td><button onclick="deleteRecord(${index})">Delete</button></td>
  `;
  tableBody.appendChild(row);
});


function deleteRecord(index) {
  const tableBody = document.getElementById('student-records');
  tableBody.removeChild(tableBody.children[index]);
}