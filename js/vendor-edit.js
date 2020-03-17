const baseurl = "http://localhost:50000/api/vendors";

$().ready(() => {

    let vendor = null;
    
    $.getJSON(`${baseurl}/1`)
        .done((v) => {

        });

    $("#save").click(() => {

        let vendor = dataFromPage();

        $.ajax({
            method: "PUT",
            url: `${baseurl}/${vendor.id}`,
            data: JSON.stringify(vendor),
            contentType: "application/json"
        })
            .done((res) => {
                console.log("Edit success!", res);
            })
            .fail((err) => {
                console.error("Edit failed!", err);
            });
            

    });



});

const dataFromPage = () => {
    let vendor = {};
    vendor.id = +$("#tid").val();
    vendor.code = $("#tcode").val();
    vendor.name = $("#tname").val();
    vendor.address = $("#taddress").val();
    vendor.city = $("#tcity").val();
    vendor.state = $("#tstate").val();
    vendor.zip = $("#tzip").val();
    vendor.phone = $("#tphone").val();
    vendor.email = $("#temail").val();
    return vendor;
};