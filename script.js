//your JS code here. If required.
// Afreen code
/*
const output = document.getElementById('output');

// Add "Loading..." row initially
function showLoadingRow() {
  // Clear existing rows
  output.innerHTML = '';

  const tr = document.createElement('tr');
  tr.id = 'loading'; // Set ID for reference
  const td = document.createElement('td');
  td.innerText = 'Loading...';
  td.setAttribute('colspan', 2); // Span two columns
  tr.append(td);
  output.append(tr);
}


// Create promises with random delays
function createRandomPromise(name) {
  const delay = Math.floor(Math.random() * 2000) + 1000; // 1 to 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([name, delay]);
    }, delay);
  });
}

// Function to update the table after promises resolve
function modifyTable(data) {
  // Clear the table content (removes "Loading..." row)
  output.innerHTML = '';

  let totalTime = 0;

  // Add rows for each promise result
  data.forEach((el) => {
    totalTime += el[1]; // Accumulate time
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = el[0]; // Promise name
    const td2 = document.createElement('td');
    td2.innerText = (el[1] / 1000).toFixed(2); // Time in seconds (formatted)

    tr.append(td1, td2);
    output.append(tr);
  });

  // Add "Total" row
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.innerText = 'Total';
  const td2 = document.createElement('td');
  td2.innerText = (totalTime / 1000).toFixed(2); // Total time in seconds

  tr.append(td1, td2);
  output.append(tr);
}

// Main function to execute promises
function runPromises() {
  showLoadingRow(); // Show "Loading..." initially

  const p1 = createRandomPromise('Promise 1');
  const p2 = createRandomPromise('Promise 2');
  const p3 = createRandomPromise('Promise 3');

  const promiseArr = [p1, p2, p3];

  Promise.all(promiseArr).then((res) => {
    modifyTable(res); // Update table with resolved data
  });
}

// Run the function
runPromises();
 // what's wrong with my code why not getting full marks
*/

// Ritik code
/*
window.onload = function () {
  const outputElement = document.getElementById("output");

  const loadingRow = document.createElement("tr");
  loadingRow.setAttribute("id", "loading"); 
  const loadingCell = document.createElement("td");
  loadingCell.setAttribute("colspan", "2");
  loadingCell.textContent = "Loading...";
  loadingRow.appendChild(loadingCell);
  outputElement.appendChild(loadingRow);

  const startTime = Date.now();

  function createPromise(i) {
    const delay = Math.floor(Math.random() * 2000) + 1000; 
    const promiseStartTime = Date.now();

    return new Promise((resolve) => {
      setTimeout(() => {
        const timeTaken = (Date.now() - promiseStartTime) / 1000; // In seconds
        resolve({ name: "Promise " + i, timeTaken: timeTaken.toFixed(3) });
      }, delay);
    });
  }

  const promises = [];
  for (let i = 1; i <= 3; i++) {
    promises.push(createPromise(i));
  }

  Promise.all(promises).then((results) => {
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000; // In seconds

    outputElement.removeChild(loadingRow);
    results.sort((a, b) => a.name.localeCompare(b.name));

    results.forEach((result) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = result.name;
      row.appendChild(nameCell);

      const timeCell = document.createElement("td");
      timeCell.textContent = result.timeTaken;
      row.appendChild(timeCell);

      outputElement.appendChild(row);
    });

    const totalRow = document.createElement("tr");

    const totalNameCell = document.createElement("td");
    totalNameCell.textContent = "Total";
    totalRow.appendChild(totalNameCell);

    const totalTimeCell = document.createElement("td");
    totalTimeCell.textContent = totalTime.toFixed(3);
    totalRow.appendChild(totalTimeCell);

    outputElement.appendChild(totalRow);
  });
};
*/


const output = document.getElementById('output');
// const tr = document.createElement('tr');
// tr.id = 'loading'
// const td = document.createElement('td');
// td.innerText = 'Loading...'
// td.setAttribute('colspan', 2);
// tr.append(td);
// output.append(tr);

function createPromise() {
	return new Promise((resolve) => {
		let delay = Math.floor(Math.random()*2000) + 1000;
		setTimeout(() => {
			resolve({name:'Promise 1', timeTaken:delay});
		}, delay);
	})
}


let allPromises = [];
for(let i=0; i<3; i++) {
	allPromises.push(createPromise());
}


Promise.all(allPromises)
.then((res) => {
	modifyTable(res);
})


function modifyTable(data) {
	output.innerHTML = null;
	let totalTime = 0;

	data.forEach((el, index) => {
		totalTime += el.timeTaken;
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		td1.innerText = el.name;
		const td2 = document.createElement('td');
		td2.innerText = el.timeTaken / 1000;

		tr.append(td1, td2);
		output.append(tr);
	})

	const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	td1.innerText = 'Total';
	const td2 = document.createElement('td');
	// td2.innerText = (totalTime / 1000).toFixed(2) + '6';
	td2.innerText = totalTime/1000;

	tr.append(td1, td2);
	output.append(tr);
}

