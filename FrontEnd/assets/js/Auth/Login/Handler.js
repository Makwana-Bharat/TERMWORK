const Login = (event) => {
  event.preventDefault();
  const formData = {
    email: $("#email").val(),
    password: $("#password").val(),
  };
  $.ajax({
    type: "POST",
    url: `${ApiEndPoint.Base}/${ApiEndPoint.Auth.Login}`,
    data: JSON.stringify(formData),
    // contentType: "application/json; charset=utf-8",
    // dataType: "json",
    success: (response) => {
      if (response.success) {
        setCookie("user", JSON.stringify(response.user), 7);
        Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "./Developer/dashboard.html";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Please check your credentials.",
        });
      }
    },
    error: (error) => {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing your request.",
      });
    },
  });
};
