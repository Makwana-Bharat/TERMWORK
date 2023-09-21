const Verification = () => {
    Swal.fire({
        html: `
           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div class="w-full h-full" id="personalInfo">
            <h1 class="mb-10 text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl dark:text-white text-center" style="letter-spacing: 2px">Forgot Password</h1>
            <form class="space-y-4 md:space-y-6" action="#" onsubmit="return Verification()">
                <div class="h-full">
                    <div class="w-full flex items-center justify-center">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            class="w-full p-3 border border-neutral-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-neutral-900 dark:text-white dark:border-neutral-600 dark:placeholder-neutral-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div class="w-full flex items-center justify-center">
                    <button
                        type="submit"
                        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send OTP
                    </button>
                </div>
            </form>
        </div>
    </div>
            `,
          padding: 0,
      width: "450px",
      showConfirmButton: false,
    }); 
}
