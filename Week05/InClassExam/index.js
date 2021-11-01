window.onload = function(){
    var status = 'off';
    $("#myhtml").css("background-color","pink");
    $("#mycss").css("background-color","pink");
    $("#myjs").css("background-color","pink");
    $("#myoutput").css("background-color","pink");
    $("#field1").css("display","block");
    $("#field2").css("display","block");
    $("#field3").css("display","block");
    $("#field4").css("display","block");
    $("button").each(function(index,value){
        $(value).click(function(){
            console.log($(this).css("background-color"))
            if($(this).css("background-color")==="rgb(255, 192, 203)")
            {
                $(this).css("background-color","white");
                switch(index) {
                    case 0:
                        $("#field1").css("display","none");
                        $("#htmlinput").text("");
                        propertyChanged(status);
                    break;
                    case 1:
                        $("#field2").css("display","none");
                        $( "#cssinput" ).text("");
                        propertyChanged(status);
                    break;
                    case 2:
                        $("#field3").css("display","none");
                        $( "#jsinput" ).text("");
                        propertyChanged(status);
                    break;
                    case 3:
                        $("#field4").css("display","none");
                        $("#outputinput").html("");
                        propertyChanged(status);
                    break;
                    default:
                    
                }
            }
            else{
                
                $(this).css("background-color","pink");
                switch(index) {
                    case 0:
                        $("#field1").css("display","block");
                    break;
                    case 1:
                        $("#field2").css("display","block");
                    break;
                    case 2:
                        $("#field3").css("display","block");
                    break;
                    case 3:
                        $("#field4").css("display","block");
                    break;
                    default:
                    
                }
            }
        });
        
    });
    
    $("#htmlinput").on('input propertychanged paste',() => {
    console.log(true,1);
        propertyChanged(status);
    });

    $("#cssinput").on('input propertychanged paste',() => {
        propertyChanged(status);
    });

    $("#outputinput").on('input propertychanged paste',() => {
        propertyChanged(status);
    });

    $("#jsinput").on("input propertychange paste",() => {
        propertyChanged(status);
    });
   


    $("#jsinput").text(`document.getElementById("title").onclick=function(){this.innerHTML="clicked"};`);
  
    let html = $( "#htmlinput" ).text(`<p id = "title"> nội dung html </p>`);
    let css = $("#cssinput").text();
    let js = $("#jsinput");
    $("#outputinput").html(`${html.text()} <style scoped>${css}</style>`);
    $("body").append(`<script id="newScript">${js.text()}<\/script>`);
    status = 'on';
}

function propertyChanged(status)
{
    let tempHtml = $("#htmlinput").text();
    let tempCss = $("#cssinput").text();
    let js = $("#jsinput");
    console.log($("#htmlinput").text());
    if(tempHtml.length != 0)
    {
        $("#outputinput").html(`${tempHtml} <style scoped>${tempCss}</style>`);
        
        if(status == 'on')
        {
            let theScript = document.getElementById("newScript");
            theScript.parentNode.removeChild( theScript );
        }
        $("body").append(`<script id="newScript">${js.text()}<\/script>`);
    }
    else
    {
        console.log(true);
        $("#outputinput").html("");
    }
}
