let user = {
    id: 0,
    username: "xx",
    password: "xx",
    firstname: "xx",
    lastname: "xx",
    phone: null,
    email: null,
    isReviewer: 0,
    isAdmin: 0
}

$().ready( () => {

    $.ajax({
        method: "POST",
        url: "http://localhost:50000/api/users",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("Error:", err);
        });
    
});
