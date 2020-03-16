let user = {
    id: 13,
    username: "xx",
    password: "xx",
    firstname: "zz",
    lastname: "zz",
    phone: "513-322-8888",
    email: "x@maxtrain.com",
    isReviewer: false,
    isAdmin: false
}

$().ready( () => {

    $.ajax({
        method: "DELETE",
        url: "http://localhost:50000/api/users/13",
        data: null,
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error:", err);
        });
    
});
