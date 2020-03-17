const baseurl = "http://localhost:50000/api/vendors";

$().ready(() => {


});

const list = () => {
    return $.getJSON(`${baseurl}`);
}

const get = (id) => {

    $.getJSON(`${baseurl}/${id}`)
        .done((Vendor) => {
            saved_Vendor = Vendor;
            console.log("Vendor:", Vendor);
            display();
        })
        .fail((err) => {
            console.error("Error:", err);
        });
}

const create = (vendor) => {

    $.ajax({
        method: "POST",
        url: `${baseurl}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error:", err);
        });
}

const change = (id, vendor) => {

    $.ajax({
        method: "PUT",
        url: `${baseurl}/${id}`,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error:", err);
        });
}

const remove = (id) => {

    $.ajax({
        method: "DELETE",
        url: `${baseurl}/${id}`,
        data: null,
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error:", err);
        });
}

const display = () => {
    let tbody = $("#Vendortbody");
    tbody.html("");
    for (let Vendor of saved_Vendors) {
        let tr = $("<tr></tr>");
        let tdId = `<td>${Vendor.id}</td>`;
        let tdName = `<td>${Vendor.firstname} ${Vendor.lastname}</td>`;
        let tdPhone = `<td>${Vendor.phone}</td>`;
        let tdEmail = `<td>${Vendor.email}</td>`;
        tr.html(tdId + tdName + tdPhone + tdEmail);
        tbody.append(tr);
    }
};