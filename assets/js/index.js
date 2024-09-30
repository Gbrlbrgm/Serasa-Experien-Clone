$(document).ready(function() {
    var count = 0;

    $("#botaoAlternarSection").click(function() {
        count += 1;
        console.log(count % 3);
        if(count % 3 == 1) {
            $(".nao-perca").css('display', 'none');
            $(".formulario").css('display', 'block');
            $(".encerrado").css('display', 'none');
        } else if (count % 3 == 2) {
            $(".nao-perca").css('display', 'none');
            $(".formulario").css('display', 'none');
            $(".encerrado").css('display', 'block');
        } else {
            $(".nao-perca").css('display', 'block');
            $(".formulario").css('display', 'none');
            $(".encerrado").css('display', 'none');
        }
    })

})