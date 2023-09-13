const showLoginModal = () => {
        currStep = 1;
        Swal.fire({
          html: `
                <div class=" bg-white rounded-lg shadow dark:border dark:bg-neutral-800 dark:border-neutral-700" style="width:450px">
                      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <h1 class="text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white" style="letter-spacing:1px">
                              Sign in to your account
                          </h1>
                          <form class="space-y-4 md:space-y-6" action="./View/index.html" method="post">
                              <div>
                                  <label for="email" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Your email</label>
                                  <input type="email" name="email" id="email" class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                              </div>
                              <div>
                                  <label for="password" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Password</label>
                                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                              </div>
                              <div class="flex items-center justify-between">
                                  <div class="flex items-start">
                                      <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-neutral-300 rounded bg-neutral-50 focus:ring-3 focus:ring-blue-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-blue-600 dark:ring-offset-neutral-800" required="">
                                      </div>
                                      <div class="ml-3 text-sm">
                                        <label for="remember" class="text-neutral-500 dark:text-neutral-300">Remember me</label>
                                      </div>
                                  </div>
                                  <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" onclick="ForgotPass()">Forgot password?</p>
                              </div>
                              <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                  Don’t have an account yet? <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500" onclick="frmSignUp()">Sign up</a>
                              </p>
                          </form>
                      </div>
                  </div>
                `,
          padding: 0,
          width: "450px",
          showConfirmButton: false,
        });
      };