const baseurl = "http://localhost:50000/api/vendors";

let vendors = null;

$().ready(() => {

    list()
        .done((res) => {
            console.log("done");
            vendors = res;
            display();
        })

});

const list = () => {
    return $.getJSON(`${baseurl}`);
}


const display = () => {
    let tbody = $("tbody");
    tbody.html(''); // clear
    for(let v of vendors) {
        let tr = $("<tr></tr>");
        tr.append(`<td>${v.id}</td>`);
        tr.append(`<td>${v.code}</td>`);
        tr.append(`<td><a href='vendor-detail.html?id=${v.id}'>${v.name}</a></td>`);
        tr.append(`<td>${v.address}, ${v.city}, ${v.state} ${v.zip}</td>`);
        tr.append(`<td>${v.phone}</td>`);
        tr.append(`<td>${v.email}</td>`);
        tbody.append(tr);
    }
}