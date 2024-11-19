//your JS code here. If required.

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


/*
const output = document.getElementById('output');
const tr = document.createElement('tr');
tr.id = 'loading'
const td = document.createElement('td');
td.innerText = 'Loading...'
td.setAttribute('colspan', 2);
tr.append(td);
output.append(tr);

const p1 = new Promise((resolve) => {
	let delay = 2000;
	setTimeout(() => {
		resolve(['Promise 1', delay]);
	}, delay);
})

const p2 = new Promise((resolve) => {
	let delay = 1000;
	setTimeout(() => {
		resolve(['Promise 2', delay]);
	}, delay);
})

const p3 = new Promise((resolve) => {
	let delay = 3000;
	setTimeout(() => {
		resolve(['Promise 3', delay]);
	}, delay);
})

let promiseArr = [p1, p2, p3];
Promise.all(promiseArr)
.then((res) => {
	console.log(res);
	modifyTable(res);
})


function modifyTable(data) {
	output.innerHTML = null;
	let totalTime = 0;

	data.forEach((el, index) => {
		totalTime += el[1];
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		td1.innerText = el[0];
		const td2 = document.createElement('td');
		td2.innerText = el[1] / 1000;

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
*/


