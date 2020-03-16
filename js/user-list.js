let saved_users = null;

$().ready( () => {

    console.log("Before getJSON call.");
    
    $.getJSON("http://localhost:50000/api/users")
        .done( (users) => {
            saved_users = users;
            console.log("Users:", users);
            display();
        })
        .fail( (err) => {
            console.error("ERROR:", err);
        });
    
    console.log("After getJSON call.");

});

const display = () => {
    let tbody = $("#usertbody");
    tbody.html("");
    for(let user of saved_users) {
        let tr = $("<tr></tr>");
        let tdId = `<td>${user.id}</td>`;
        let tdName = `<td>${user.firstname} ${user.lastname}</td>`;
        let tdPhone = `<td>${user.phone}</td>`;
        let tdEmail = `<td>${user.email}</td>`;
        tr.html(tdId + tdName + tdPhone + tdEmail);
        tbody.append(tr);
    }
};