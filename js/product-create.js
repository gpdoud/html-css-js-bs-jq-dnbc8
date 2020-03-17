const baseurl = "http://localhost:50000/api/products";

let product = {};
let vendors = [];

$().ready(() => {

    $.getJSON(`http://localhost:50000/api/vendors`)
        .done((res) => {
            vendors = res;
            console.log("Vendors:", res);
            init();    
        });

    $("#save").click(() => {

        let product = dataFromPage();

        $.ajax({
            method: "POST",
            url: `${baseurl}`,
            data: JSON.stringify(product),
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

const init = () => {
    console.log("init");
    let select = $("#tvendors");
    select.html('');
    for(let v of vendors) {
        select.append(`<option value='${v.id}'>${v.name}</option>`);
    }
};

const dataFromPage = () => {
    let product = {};
    product.id = +$("#tid").val();
    product.partNbr = $("#tpartNbr").val();
    product.name = $("#tname").val();
    product.price = $("#tprice").val();
    product.unit = $("#tunit").val();
    product.vendorId = $("#tvendors").children("option:selected").val();
    return product;
};