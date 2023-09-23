let currStep = 1;
      const steps = [1, 2, 3, 4];
      const ApiEndPointAuth = [
        "User.php",
        "User_Credentials.php",
        "OTP_Validation.php",
        "user_Social.php",
      ];
      const form = ["Personal Info", "Account Info", "Confirmation", "Social"];
      let formData = {}; // To store the form data

      // Register Form Step Handler
      // Handle OTP
      function fillOTPBoxes() {
        var otpInput = $("#otp");
        var otpBoxes = $(".otp-box");

        otpInput.on("input", function () {
          var otpValue = otpInput.val();
          for (var i = 0; i < otpBoxes.length; i++) {
            if (i < otpValue.length) {
              $(otpBoxes[i]).text(otpValue[i]);
            } else {
              $(otpBoxes[i]).text("0"); // You can use any default value here
            }
          }
        });
      }

      let UID = "";

      const InsertUser = async (user) => {
        const endpointURL = `${URL}Register/${ApiEndPointAuth[currStep - 1]}`;

        if (currStep > 1) {
          user.uid = UID;
        }

        await $.ajax({
          type: "POST",
          url: endpointURL,
          data: JSON.stringify(user),
          contentType: "application/json",
          success: function (response) {
            if (response.success == true) {
              if (currStep <= 2) {
                UID = response.UID;
              }
              if (response.message == "Registration Success..")
              Swal.fire({
                icon: "success",
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
              })
              else
                alert(response.message);
            } else currStep--;
          },
          error: function (error) {
            console.error("API Error:", error);
          },
        });
      };

      const nextStep = (event) => {
        event.preventDefault();
        const formData = $(event.target).serializeArray();
        if (currStep == 2) $("#emailVerify").html("email address");
        const formDataObject = {};

        $.each(formData, function (index, field) {
          formDataObject[field.name] = field.value;
        });

        InsertUser(formDataObject);
        if (currStep === 1) {
          $("#prvStep").removeAttr("disabled");
        }
        $(`#step-${currStep}`).addClass("hidden");
        $(`#li-step-${currStep}`).html(`
    <span class="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4">
      <svg class="w-20 h-20 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
    </span>
    <h3 class="font-medium leading-tight text-white">${form[currStep - 1]}</h3>
    <p class="text-sm">Step details here</p>
  `);
        currStep++;
        $(`#li-step-${currStep}`).html(`
    <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white dark:ring-neutral-900 dark:bg-blue-900">
      <svg class="w-4 h-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <circle cx="10" cy="10" r="8" />
      </svg>
    </span>
    <h3 class="font-medium leading-tight text-white">${form[currStep - 1]}</h3>
    <p class="text-sm">Step details here</p>
  `);
        if (currStep > 4) {
          $("#RegisterFrm").addClass("hidden");
          currStep = 4;
          console.log(JSON.stringify(formData));
          return;
        }
        $(`#step-${currStep}`).removeClass("hidden");
      };

      const prvStep = () => {
        if (currStep === 2) {
          $("#prvStep").attr("disabled", "disabled");
        }
        $(`#step-${currStep}`).addClass("hidden");
        currStep--;

        $(`#step-${currStep}`).removeClass("hidden");
      };
const frmSignUp = () => {
        Swal.fire({
          html: `<div
      id="RegisterFrm"
      class="rounded-lg shadow dark:border dark:bg-neutral-800 dark:border-neutral-700"
      style="width: 800px"
    >
      <div
        class="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center items-center w-full h-ful"
      >
        <div class="w-1/4 pl-4 h-full">
          <ol
            class="relative text-neutral-500 border-l border-neutral-200 dark:border-neutral-700 dark:text-neutral-400"
          >
            <li class="mb-10 ml-6" id="li-step-1">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white dark:ring-neutral-900 dark:bg-blue-900"
              >
                <svg
                  class="w-4 h-4 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <circle cx="10" cy="10" r="8" />
                </svg>
              </span>
              <h3 class="font-medium leading-tight text-white">
                Personal Info
              </h3>
              <p class="text-sm">Step details here</p>
            </li>
            <li class="mb-10 ml-6" id="li-step-2">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-neutral-100 rounded-full -left-4 ring-4 ring-white dark:ring-neutral-900 dark:bg-neutral-700"
              >
                <svg
                  class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
                  />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Account Info</h3>
              <p class="text-sm">Step details here</p>
            </li>
            <li class="mb-10 ml-6" id="li-step-3">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-neutral-100 rounded-full -left-4 ring-4 ring-white dark:ring-neutral-900 dark:bg-neutral-700"
              >
                <svg
                  class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path
                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
                  />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Confirmation</h3>
              <p class="text-sm">Step details here</p>
            </li>
            <li class="ml-6" id="li-step-4">
              <span
                class="absolute flex items-center justify-center w-8 h-8 bg-neutral-100 rounded-full -left-4 ring-4 ring-white dark:ring-neutral-900 dark:bg-neutral-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-8 h-8"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M15 9a3 3 0 0 0-2.65 1.58A3.004 3.004 0 0 0 10 11a3 3 0 0 0-2.65-1.42A3.004 3.004 0 0 0 4 11a3 3 0 0 0-2.65-1.42A3.004 3.004 0 0 0 0 11a3 3 0 0 0 2.65 1.42A3.004 3.004 0 0 0 4 11a3 3 0 0 0 2.65 1.42A3.004 3.004 0 0 0 10 11a3 3 0 0 0 2.65 1.58A3.004 3.004 0 0 0 16 11a3 3 0 0 0 2.65-1.42A3.004 3.004 0 0 0 20 11a3 3 0 0 0-2.65-1.42A3.004 3.004 0 0 0 16 11zm-2 3a5 5 0 0 1-4.95 4.995A5 5 0 0 1 4 12a5 5 0 0 1 9.95-.005A5 5 0 0 1 13 12zm-1 2.879V16a1 1 0 0 0 2 0v-1.121a3 3 0 0 0 1.276-.41 1 1 0 1 0-1.136-1.664A1.993 1.993 0 0 0 12 12a1.993 1.993 0 0 0-.14.007 1 1 0 0 0-.115 1.664A3 3 0 0 0 12 14.88z"
                  />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Social</h3>
              <p class="text-sm">Step details here</p>
            </li>
          </ol>
          <button
            type="submit"
            id="prvStep"
            class="mt-20 w-fit text-white text-md bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onclick="prvStep()"
            disabled
          >
            Previous
          </button>
        </div>
        <div class="p-4 w-3/4 space-y-4 md:space-y-6 sm:p-4" id="step-1">
          <!-- Form -->
          <div class="w-full h-full" id="personalInfo">
            <h1
              class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white"
              style="letter-spacing: 2px"
            >
              Personal Information
            </h1>
            <form class="space-y-4 md:space-y-6" onsubmit="nextStep(event)">
              <div>
                <label
                  for="fname"
                  class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >Your Full Name</label
                >
                <input
                  type="text"
                  name="Username"
                  id="fname"
                  class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="abcd"
                  required=""
                />
              </div>
              <div>
                <label
                  for="bio"
                  class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >Bio</label
                >
                <textarea
                  name="Bio"
                  id="bio"
                  placeholder="Tell about your self"
                  class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  style="height: 150px"
                ></textarea>
              </div>
              <button
                type="submit"
                id="nextStep1"
                class="w-fit text-white text-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right"
              >
                Next
              </button>
            </form>
          </div>
        </div>
        <div class="p-4 w-3/4 space-y-4 md:space-y-6 sm:p-4 hidden" id="step-2">
          <!-- Form -->
          <div class="w-full h-full" id="personalInfo">
            <h1
              class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white"
              style="letter-spacing: 2px"
            >
              Account Information
            </h1>
            <form class="space-y-4 md:space-y-6" onsubmit="nextStep(event)">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="abc@host.domain"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                  >Confirm password</label
                >
                <input
                  type="confirm-password"
                  name="confirm_password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                type="submit"
                id="nextStep2"
                class="w-fit text-white text-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right"
              >
                Next
              </button>
            </form>
          </div>
        </div>
        <div class="p-4 w-3/4 space-y-4 md:space-y-6 sm:p-4 hidden" id="step-3">
          <!-- Form -->
          <div class="w-full h-full" id="personalInfo">
            <h1
              class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white"
              style="letter-spacing: 2px"
            >
              Confirmation
            </h1>
            <h3
              class="font-semibold mb-4 md:text-md dark:text-slate-100 tracking-widest"
            >
              Enter Verification Code
            </h3>
            <span class="md:text-xs dark:text-slate-300 tracking-widest italic"
              >we will send One Time Password on
              <strong>abcx@ffdfd.csc</strong>,<br />
              to proceed fill the otp</span
            >
            <form class="space-y-4 md:space-y-6" onsubmit="nextStep(event)">
              <div class="h-full">
                <div class="w-full flex pt-12">
                  <div
                    style="width: 50px; height: 50px"
                    class="otp-box1 bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2 flex justify-center items-center"
                  >
                    <span class="otp-box text-2xl">0</span>
                  </div>
                  <div
                    style="width: 50px; height: 50px"
                    class="otp-box2 bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2 flex justify-center items-center"
                  >
                    <span class="otp-box text-2xl">0</span>
                  </div>
                  <div
                    style="width: 50px; height: 50px"
                    class="otp-box3 bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2 flex justify-center items-center"
                  >
                    <span class="otp-box text-2xl">0</span>
                  </div>
                  <div
                    style="width: 50px; height: 50px"
                    class="otp-box4 bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2 flex justify-center items-center"
                  >
                    <span class="otp-box text-2xl">0</span>
                  </div>
                  <div
                    style="width: 50px; height: 50px"
                    class="otp-box5 bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2 flex justify-center items-center"
                  >
                    <span class="otp-box text-2xl">0</span>
                  </div>
                  <div
                    style="width: 50px; height: 50px"
                    class="otp-box6 bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2 flex justify-center items-center"
                  >
                    <span class="otp-box text-2xl">0</span>
                  </div>
                </div>
                <input
                  type="numbers"
                  name="otp"
                  id="otp"
                  placeholder="rr"
                  class="w-full relative bottom-14 p-3 opacity-0"
                  oninput="fillOTPBoxes()"
                  maxlength="6"
                  minlength="6"
                  title="enter 6 digit OTP"
                  required=""
                />
              </div>
              <button
                type="submit"
                id="nextStep3"
                class="w-fit text-white text-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right"
              >
                Next
              </button>
            </form>
          </div>
        </div>
        <div class="p-4 w-3/4 space-y-4 md:space-y-6 sm:p-4 hidden" id="step-4">
          <!-- Form -->
          <div class="w-full h-full" id="personalInfo">
            <h1
              class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white"
              style="letter-spacing: 2px"
            >
              Social
            </h1>
            <form class="space-y-4 md:space-y-6" onsubmit="nextStep(event)">
              <div class="flex">
                <span
                  class="inline-flex px-2 items-center text-sm text-neutral-900 bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-md dark:bg-neutral-600 dark:text-neutral-400 dark:border-neutral-600"
                >
                  <svg
                    class="w-6 h-6 text-neutral-500 dark:text-neutral-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill-rule="nonzero"
                        d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  name="linkedIn"
                  type="url"
                  id="website-admin"
                  class="rounded-none rounded-r-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://www.linkedin.com/in/username"
                />
              </div>

              <div class="flex">
                <span
                  class="inline-flex items-center pt-1 pl-2 text-sm text-neutral-900 bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-md dark:bg-neutral-600 dark:text-neutral-400 dark:border-neutral-600"
                >
                  <svg
                    class="w-8 h-8 text-github-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </span>
                <input
                  type="url"
                  name="github"
                  id="github"
                  class="rounded-none rounded-r-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://github.com/username"
                  required
                />
              </div>
              <div class="flex">
                <span
                  class="inline-flex items-center px-2 text-sm text-neutral-900 bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-md dark:bg-neutral-600 dark:text-neutral-400 dark:border-neutral-600"
                >
                  <svg
                    class="w-6 h-6 text-leetcode-orange"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <!-- Replace this with the LeetCode icon SVG code -->
                    <path
                      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                    />
                  </svg>
                </span>
                <input
                  type="url"
                  name="leetcode"
                  id="leetcode"
                  class="rounded-none rounded-r-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://leetcode.com/username/"
                />
              </div>
              <div class="flex">
                <span
                  class="inline-flex items-center pl-3 pr-1 pt-2 text-sm text-neutral-900 bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-md dark:bg-neutral-600 dark:text-neutral-400 dark:border-neutral-600"
                >
                  <svg
                    class="w-6 h-6 text-leetcode-orange"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path
                      d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </span>
                <input
                  type="url"
                  id="other"
                  name="other"
                  class="rounded-none rounded-r-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="other Profile(optional)"
                />
              </div>
              <button
                type="submit"
                id="nextStep4"
                class="w-fit text-white text-md bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
`,
          padding: 0,
          width: "800px",
          showConfirmButton: false,
        });
      };