$("#submit").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    var city = $("#city").val();
    var address = $("#address").val();
    var zip = $("#zip").val();
    if(email == '' || password == '' || city == '' || address == '' || zip == '')
    {
        swal({
            title: "Fields  Empty!",
            text: "Please check the missing field!!",
            icon: "warning",
            button: "ok",
          });
    } else{
        swal({
            title: "successfully submit",
            icon: "success",
            button: "yes!!",
          });
    }

})
