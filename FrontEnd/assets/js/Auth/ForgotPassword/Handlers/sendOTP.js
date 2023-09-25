/* === Handle Send OTP === */
const sendOTP = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  $.ajax({
    url: `${ApiEndPoint.Base}${ApiEndPoint.Auth.ForgotPassword.SendOTP}`,
    type: "POST",
    data: JSON.stringify({ email: email }),
    dataType: "json",
    success: function (data) {
      if (data.success === true) {
        Verification(email);
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      console.error("AJAX request failed:", textStatus, errorThrown);
    },
  });
};
