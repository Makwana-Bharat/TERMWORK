const ApiEndPoint = {
  // Base: "https://developer-store.000webhostapp.com/APIS/",
  Base: "http://localhost/TERMWORK/BackEnd/APIS/",
  Auth: {
    Login: "Auth/Login.php",
    ForgotPassword: {
      ResetPass: "Auth/ForgotPassword/ResetPass.php",
      SendOTP: "Auth/ForgotPassword/verifyEmail.php",
      VerifyOTP: "Auth/ForgotPassword/Verify_OTP.php",
    },
    RegisterUser: [
      "Auth/Register/User.php",
      "Auth/Register/User_Credentials.php",
      "Auth/Register/OTP_Validation.php",
      "Auth/Register/user_Social.php",
    ],
  },
  Category: {
    Add: "/Category/Fetch.php",
  },
  Project: {
    Fetch: "Project/userProject.php",
    Add: "Project/Add.php",
    Update: "Project/Update.php",
    Delete: "Project/Delete.php",
    FetchAll: "Project/FetchAll.php",
    MostViewed: {
      Fetch: "Project/Mostview/Fetch.php",
      Add: "Project/Mostview/Add.php",
      Update: "Project/Mostview/Update.php",
    },
  },
};
