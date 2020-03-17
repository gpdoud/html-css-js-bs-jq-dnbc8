const baseurl = "http://localhost:50000/api/vendors";

$().ready(() => {

    $("#save").click(() => {

        let vendor = dataFromPage();

        $.ajax({
            method: "POST",
            url: `${baseurl}`,
            data: JSON.stringify(vendor),
            contentType: "application/json"
        })
            .done((res) => {
                console.log("Create success!", res);
            })
            .fail((err) => {
                console.error("Create failed!", err);
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