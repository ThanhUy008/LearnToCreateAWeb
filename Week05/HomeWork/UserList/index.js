async function load(){
    const resJSON = await fetch('https://reqres.in/api/users?per_page=12')
    const users = await resJSON.json();
    console.log(users)
    $('tbody').empty();
    console.log(users.data.length);
    for(let user of users.data)
    {
        $('tbody').append(`<tr>
        <th scope="row">${user.id}</th>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td><img src="${user.avatar}" alt=""></img></td>
      </tr>`)
    }
}
$(window).ready(function(){
load();
});