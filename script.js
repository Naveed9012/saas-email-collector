let results = [];

function collectEmails() {

let urls = document.getElementById("urls").value.split("\n");

urls.forEach(url => {

fetch(url)
.then(res => res.text())
.then(data => {

let emails = data.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/ig);

if(emails){
emails.forEach(email => {

results.push({url,email});

let table = document.getElementById("results");

let row = table.insertRow();

row.insertCell(0).innerText = url;
row.insertCell(1).innerText = email;

});
}

});

});

}

function downloadCSV(){

let csv = "Website,Email\n";

results.forEach(r=>{
csv += r.url + "," + r.email + "\n";
});

let blob = new Blob([csv]);

let a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "emails.csv";

a.click();

}
