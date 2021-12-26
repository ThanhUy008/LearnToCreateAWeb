window.onload = () =>{
    console.log('hi');
    console.log($('#image'));
    $('#image')[0].onchange = evt => {
    var [file] = $('#image')[0].files
    if (file) {
        console.log(file);
        blah.src = URL.createObjectURL(file)
    }
    }
};