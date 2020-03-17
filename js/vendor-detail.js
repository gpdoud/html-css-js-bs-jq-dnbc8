const baseurl = "http://localhost:50000/api/vendors";

let vendor = null;

$().ready(() => {

    get(1)
        .done((res) => {
            console.log("done");
            vendor = res;
            display();
        })

});

const get = (id) => {
    return $.getJSON(`${baseurl}/${id}`);
}


const display = () => {
    $("#tid").text(vendor.id);
    $("#tcode").text(vendor.code);
    $("#tname").text(vendor.name);
    $("#taddress").text(vendor.address);
    $("#tcity").text(vendor.city);
    $("#tstate").text(vendor.state);
    $("#tzip").text(vendor.zip);
    $("#tphone").text(vendor.phone);
    $("#temail").text(vendor.email);
}