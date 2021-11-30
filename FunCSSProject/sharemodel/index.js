$(window).on('load', function(){
    
    const viewBtn =$(".view-model");
    
    viewBtn.each((index,value)=>{
        console.log($(value).attr('class'));
        $(value).on('click',()=>{
            $('.pop-up').toggleClass("show");
        })
        
    })
    
    $('.close').each((index,value)=>{
        $(value).on('click',()=>{
            console.log($(value));
            console.log('shite');
            viewBtn.click();
        })
    })

    $('#copyBtn').on('click',()=>{
        console.log('shite');
        $("#input").select();
        if(document.execCommand('copy')){
            console.log('shite');
            $('.field').addClass("active");
            console.log($('.field').attr('class'));
            $('#copyBtn').html("Copied");
            setTimeout(()=>{
                $('.field').removeClass('active');
                console.log($('.field').attr('class'));
                
            $('#copyBtn').html("Copy");
            window.getSelection().removeAllRanges();},3000)
            }
        });
});
