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
	setTimeout(() => {
		resolve('First Promise');
	}, 1000);
})

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Second Promise');
	}, 2000);
})

const p3 = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Third Promise');
	}, 3000);
})

Promise.all([p1, p2, p3])
.then((res) => {
	console.log(res);
	modifyTable(res);
})



function modifyTable(data) {
	output.innerHTML = null;

	data.forEach((el, index) => {
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		td1.innerText = el;
		const td2 = document.createElement('td');
		td2.innerText = index+1;

		tr.append(td1, td2);
		output.append(tr);
	})
}

