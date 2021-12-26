async function load(){
    const resJSON = await fetch('https://localhost:44325/khachhang')
    const users = await resJSON.json();
    console.log(users)
    $('#Ma_KH').empty();
    
    for(let user of users)
    {
        $('#Ma_KH').append($('<option></option>').val(user.mA_KH).html(user.mA_KH));
        
        
    }
}

function clickevent() {
        
            $("#dangky").click((event)=>{
                
                event.preventDefault();
                var temp ={
                    "mA_CUA_HANG": $("#Ma_CH").val(),
                    "teN_CH": $("#Ten_CH").val(),
                    "sdt": $("#SDT").val(),
                    "email": $("#email").val(),
                };
                console.log(JSON.stringify(temp));
                $.ajax({
                    method:"POST",
                    url:"https://localhost:44325/newCH",
                    data: JSON.stringify({
                        mA_CUA_HANG: $("#Ma_CH").val(),
                        teN_CH: $("#Ten_CH").val(),
                        sdt: $("#SDT").val(),
                        email: $("#email").val(),
                    }),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json'});
            });
          
        }

        
$(window).ready(function(){
    load();
    clickevent();
});