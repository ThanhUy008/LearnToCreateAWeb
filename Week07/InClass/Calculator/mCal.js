exports.html = (x,y,opt,rs) => {
    let str1="",str2="",str3="",str4="";
    switch(opt)
    {
        case '1':
            str1 = "selected"
            break;
        case '2':
            str2 = "selected"
            break;
            
        case '3':
            str3 = "selected"
            break;
            
        case '4':
            str4 = "selected"
            break;
    }
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
       
        <title>
            Nothing
        </title>
        <style>
            body {
                margin: 0;
            }
            
            .nav {
                width: 100%;
                top: 0;
                background-color: #11a8d6;
                display: grid;
                grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 3fr 0.2fr;
                grid-template-rows: 100%;
                position: sticky;
                align-items: center;
            }
            
            .nav div {
                justify-content: center;
                padding: 4% 2% 4% 2%;
                text-align: left;
                font-size: 150%;
                color: white;
            }
            
            .nav div:nth-child(1) {
                grid-column: 2/3;
            }
            
            .nav div:nth-child(4) {
                margin-left: auto;
                padding: 0% 0% 0% 0%;
                grid-column: 6/7;
            }
            
            .header {
                display: grid;
                grid-template-columns: 100%;
                grid-template-rows: 100%;
                font-size: 1400%;
                padding: 1% 0% 7%;
                background-color: white;
                text-align: center;
                justify-content: center;
            }
            
           
            
           
            #announ{
                color:red;
            }
        </style>
    </head>
    
    
    <body>
    
    
    
    
    <div class = "container py-4 my-auto">
        <div class="card text-dark bg-light mb-3 mx-auto " style="width: 20rem;">
            <div class="card-header">B?? t???p t??nh</div>
            <div class="card-body">
            
                <form method="post">
                    <div class="form-row">
                        <div class="col mb-3">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend2">X</span>
                                </div>
                                <input name ="x" value="${x}" type="number" class="form-control" id="num1" aria-describedby="inputGroupPrepend2" required>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="form-row">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend2">Y</span>
                                </div>
                                <input name = "y" value = "${y}" type="number" class="form-control" id="num2"  aria-describedby="inputGroupPrepend2" required>
                            </div>
                        </div>
                    </div>        
                    <div class="col mb-3">
                        <select name ="opt" id = "opt" class="form-select form-select text-center" aria-label=".form-select-sm example" value ="${opt}">
                            ` + `<option value="1" ${str1} >+</option>
                            <option value="2" ${str2}>-</option>
                            <option value="3" ${str3}>*</option>
                            <option value="4" ${str4}>/</option>
                        </select>
                    </div>   
                    <div class="col mb-3">
                        <button id = "calSummitBtn"type="click" class="btn btn-primary">Calculate</button>
    
                    </div>  
                    <div class="col mb-3">
                        <label class="p-2 mb-4 bg-primary text-black rounded" id = "result">${rs}</label>
                    </div> 
            </form>
                
            </div>
        </div>
    </div>
        <script type="text/javascript">
            window.onload = function() {
            
                $("#calSummitBtn").click((event)=>{
                    
                    event.preventDefault();
                    console.log($("#num1").val(),$("#num2").val(),$("#opt").val())
                    $.ajax({
                        method:"POST",
                        url:"/cal",
                        data:{
                            x: $("#num1").val(),
                            y: $("#num2").val(),
                            opt: $("#opt").val(),
                        },
                        success:(msg)=>{
                            $("#result").html(msg);
                        }
                    }).done((msg)=>{
                        console.log(msg);
                    });
                });
              
            }
    
            
        </script>
    </body>
    
    </html>`
};