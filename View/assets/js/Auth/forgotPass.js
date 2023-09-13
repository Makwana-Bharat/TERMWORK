const ForgotPass = () => {
    Swal.fire({
        html: `
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div class="w-full h-full" id="personalInfo">
            <h1
              class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white text-center"
              style="letter-spacing: 2px"
            >
              Forgot Password
            </h1>
            <h3
              class="font-bold mb-4 md:text-md dark:text-slate-100 tracking-widest text-center"
            >
              Enter Verification Code
            </h3>
            <h2 class="md:text-xs dark:text-slate-300 tracking-widest italic text-center w-full leading-7"
              >we will send One Time Password on <br>
              <strong class="text-center leading-7">abcx@ffdfd.csc</strong>,<br />
              to proceed fill the otp</h2>
            <form class="space-y-4 md:space-y-6" action="#">
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
                  required=""
                />
              </div>
              <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Forgot Password</button>
            </form>
          </div>
        </div>
      </div>
            `,
          padding: 0,
      width: "450px",
      showConfirmButton: false,
    }); 
}
