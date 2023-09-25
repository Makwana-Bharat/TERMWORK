const resetPassword = (event, email) => {
  event.preventDefault();
  let password = event.target.password.value;
  let cpassword = event.target.cpassword.value;
  if (password === cpassword) {
    $.ajax({
      url: `${ApiEndPoint.Base}${ApiEndPoint.Auth.ForgotPassword.ResetPass}`,
      type: "POST",
      data: JSON.stringify({
        email: email,
        password: password,
        confirm_password: cpassword,
      }),
      dataType: "json",
      success: function (data) {
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: function (xhr, textStatus, errorThrown) {
        console.error("AJAX request failed:", textStatus, errorThrown);
      },
    });
  } else alert("password mitsmatch..!!");
};
