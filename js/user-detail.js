let saved_user = null;

$().ready( () => {

    console.log("Before getJSON call.");
    
    $.getJSON("http://localhost:50000/api/users/1")
        .done((user) => {
            saved_user = user;
            console.log("User:", user);
            display();
        })
        .fail((err) => {
            console.error("Error:", err);
        })
    
    console.log("After getJSON call.");

});

const display = () => {
    $("#tid").text(saved_user.id);
    $("#tname").text(`${saved_user.firstname} ${saved_user.lastname}`);
    $("#tphone").text(saved_user.phone);
    $("#temail").text(saved_user.email);
};