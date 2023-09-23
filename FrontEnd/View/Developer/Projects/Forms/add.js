let form = `
      <div class="bg-white rounded-lg shadow dark:border dark:bg-neutral-800 dark:border-neutral-700" style="width:1080px">
      <div class="p-8 rounded-lg shadow-lg w-full">
    <h1 class="text-white text-2xl mb-5" style="letter-spacing: 1px">
      New Project
    </h1>
    <form action="" id="projectForm" method="POST" enctype="multipart/form-data" onsubmit="addProject(event)">
      <div class="flex w-full h-full flex-wrap">
        <!-- Left Side---->
        <div class="pr-5 w-2/5">
          <!-- Project Name -->
          <div class="mb-4">
            <label for="name" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
              Project Name:
            </label>
            <input type="text" id="name" name="name" class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter project name" required />
          </div>

          <!-- Custom Drop Zone for Thumbnail -->
<div class="mb-4">
  <label for="thumbnail" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
    Thumbnail:
  </label>
  <div class="w-full">
    <div id="image-container" class="relative flex items-center justify-center" style="width: 100px; height: 100px">
      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600">
        <div class="flex flex-col items-center justify-center pt-6">
          <svg class="w-8 h-8 mb-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
        </div>
        <input id="dropzone-file" type="file" name="thumbnail" class="hidden" accept=".png,.jpg,.jpeg,.gif" onchange="displaySelectedImage(this)" required />
      </label>
    </div>
  </div>
  <button id="clear-button" class="relative bottom-28 left-20 mt-2 p-2 text-white bg-red-500 rounded-full hidden" onclick="clearImageSelection()">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>

          <!-- ... (Other form elements) ... -->

          <!-- Visibility -->
          <div class="mb-4">
            <label for="isVisible" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
              Visibility:
            </label>
            <div class="flex w-full justify-between">
              <div class="flex items-center pl-4 border border-neutral-200 rounded dark:border-neutral-700" style="width: 45%">
                <input id="bordered-radio-1" type="radio" value="private" name="visibility" class="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 dark:bg-neutral-700 dark:border-neutral-600" />
                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">
                  Private
                </label>
              </div>
              <div class="flex items-center pl-4 border border-neutral-200 rounded dark:border-neutral-700" style="width: 45%">
                <input checked id="bordered-radio-2" type="radio" name="visibility" value="public" class="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 dark:bg-neutral-700 dark:border-neutral-600" required />
                <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">
                  Public
                </label>
              </div>
            </div>
          </div>

          <!-- Custom Drop Zone for Project File -->
<div class="mb-4 mt-2 w-full">
  <label for="projectFile" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
    Upload Project File:
  </label>
  <div class="flex items-center justify-center w-full" style="height: 275px">
    <label for="projectFile" class="flex flex-col items-center justify-center h-full w-full h-64 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600">
      <div class="flex flex-col items-center justify-center pt-5 pb-6 h-full">
        <svg class="w-8 h-8 mb-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
          <!-- Your SVG icon here -->
        </svg>
        <p class="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span class="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p class="text-xs text-neutral-500 dark:text-neutral-400" id="fileInfo">
          Supported file types: .apk, .ipa, .c, .cpp, .java, ...
        </p>
      </div>
      <input name="FinalOutcome" id="projectFile" type="file" value="" accept=".apk, .ipa, .c, .cpp, .java,.exe,.out" class="hidden" required onchange="projectFileSelected(this)" />
    </label>
  </div>
</div>
        </div>

        <!--Right Side-->
        <div class="w-3/5">
          <!-- Description -->
          <div class="mb-4 w-full">
            <label for="description" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
              Description:
            </label>
            <textarea value="" name="description" id="description"  placeholder="tell about project..." class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" style="height: 200px" required></textarea>
          </div>

          <!-- Screenshots-->
          <div class="w-full">
            <label class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white" for="screenshots">
              Upload Project Screenshots
            </label>
            <input name="screenshots" id="screenshots" class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-describedby="file_input_help" type="file" accept=".jpg,.png,.svg,.gif" multiple required />
            <p class="mt-1 text-sm text-neutral-700 dark:text-neutral-700" id="file_input_help">
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>

          <!-- Project Tag -->
          <div class="mb-4 mt-2">
            <label for="tag" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">
              Project Tags:
            </label>
            <input type="tag" id="tag" name="tag" class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="andoid,react..." required />
          </div>

          <!--Tags-->
          <!--<div class="flex overflow-x-auto"></div>-->
            <label
                for="projectLinks"
                class="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                >Project Links:</label
              >

              <div class="flex mb-4 mt-2">
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
                  type="text"
                  id="github"
                  name="github"
                  class="rounded-none rounded-r-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://github.com/username/repolink"
                  required
                />
              </div>
              <div class="flex">
                <span
                  class="inline-flex items-center pt-1 p-1 text-sm text-neutral-900 bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-md dark:bg-neutral-600 dark:text-neutral-400 dark:border-neutral-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    class="w-8 h-8"
                    viewBox="0 0 48 48"
                  >
                    <circle cx="24" cy="24" r="6" fill="#f44336"></circle>
                    <path
                      fill="#f44336"
                      d="M17.09,16.789L14.321,13.9C11.663,16.448,10,20.027,10,24s1.663,7.552,4.321,10.1l2.769-2.889 C15.19,29.389,14,26.833,14,24C14,21.167,15.19,18.61,17.09,16.789z"
                    ></path>
                    <path
                      fill="#f44336"
                      d="M33.679,13.9l-2.769,2.889C32.81,18.611,34,21.167,34,24c0,2.833-1.19,5.389-3.09,7.211l2.769,2.889 C36.337,31.552,38,27.973,38,24S36.337,16.448,33.679,13.9z"
                    ></path>
                    <g>
                      <path
                        fill="#f44336"
                        d="M11.561,11.021l-2.779-2.9C4.605,12.125,2,17.757,2,24s2.605,11.875,6.782,15.879l2.779-2.9 C8.142,33.701,6,29.1,6,24S8.142,14.299,11.561,11.021z"
                      ></path>
                      <path
                        fill="#f44336"
                        d="M39.218,8.121l-2.779,2.9C39.858,14.299,42,18.9,42,24s-2.142,9.701-5.561,12.979l2.779,2.9 C43.395,35.875,46,30.243,46,24S43.395,12.125,39.218,8.121z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <input
                  type="text"
                  id="live"
                  name="live"
                  class="rounded-none rounded-r-lg bg-neutral-50 border border-neutral-300 text-neutral-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://live link"
                />
              </div>

          <div class="mt-6 flex justify-end">
            <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
              + Add New Project
            </button>
          </div>
        </div>
      </div>
      <!-- Submit Button -->
    </form>
  </div>
</div>
`;
const showNewProjectFrm = () =>
{
  Swal.fire({
          html: form,
          padding: 0,
          width: "1080px",
          showConfirmButton: false,
        });
  }