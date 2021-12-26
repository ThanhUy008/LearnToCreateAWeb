async function load(){
    const resJSON = await fetch('https://provinces.open-api.vn/api/?depth=3')
    const res = await resJSON.json();
    console.log(res)
    var endresult = [];
    for (let child of res) {
        for (let smaller of child.districts) {
            for (let smallersmaller of smaller.wards) {
                endresult.push(`N'`+child.name+`',N'`+smaller.name +`',N'`+smallersmaller.name +`'\n`);
              }
          }
          
    }
    $("#display").val(endresult);
    
}
$(window).ready(function(){
load();
});