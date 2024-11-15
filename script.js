//your JS code here. If required.

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
		resolve(['First Promise', delay]);
	}, delay);
})

const p2 = new Promise((resolve) => {
	let delay = 1000;
	setTimeout(() => {
		resolve(['Second Promise', delay]);
	}, delay);
})

const p3 = new Promise((resolve) => {
	let delay = 3000;
	setTimeout(() => {
		resolve(['Third Promise', delay]);
	}, delay);
})

Promise.all([p1, p2, p3])
.then((res) => {
	console.log(res);
	modifyTable(res);
})


function modifyTable(data) {
	// console.log(data);
	output.innerHTML = null;

	data.forEach((el, index) => {
		// console.log(el);
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		td1.innerText = el[0];
		const td2 = document.createElement('td');
		td2.innerText = el[1];

		tr.append(td1, td2);
		output.append(tr);
	})
}

