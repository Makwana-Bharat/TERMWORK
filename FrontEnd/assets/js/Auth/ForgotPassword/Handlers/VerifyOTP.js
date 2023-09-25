/* === Verify OTP ===*/
const verify = (event, email) => {
  event.preventDefault();
  const otpInput = event.target.otp.value;

  $.ajax({
    url: `${ApiEndPoint.Base}${ApiEndPoint.Auth.ForgotPassword.VerifyOTP}`,
    type: "POST",
    data: JSON.stringify({
      email: email,
      otp: otpInput,
    }),
    dataType: "json",
    success: function (data) {
      if (data.message === "OTP Verification Done..") ChangePass(email);
      else console.log(data);
    },
    error: function (xhr, textStatus, errorThrown) {
      console.error("AJAX request failed:", textStatus, errorThrown);
    },
  });
};
