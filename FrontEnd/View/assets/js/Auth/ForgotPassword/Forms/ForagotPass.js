/* === Send OTP === */
const ForgotPass = () => {
        Swal.fire({
          html: `
          <div class=" bg-white rounded-lg shadow dark:border dark:bg-neutral-800 dark:border-neutral-700 p-4" style="width:450px">
          <div class="w-full h-full flex justify-center items-center flex-col" id="personalInfo">
            <h1
              class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white text-center"
              style="letter-spacing: 2px"
            >
              Forgot Password
            </h1>
            <form class="space-y-4 md:space-y-6 w-96" method="post" onsubmit="sendOTP(event)" >
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
              </div>
              <button type="submit" class="w-26 float-right text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send OTP</button>
            </form>
          </div>
        </div>
      </div>
              `,
          padding: 0,
          width: "450px",
          showConfirmButton: false,
        });
      };
