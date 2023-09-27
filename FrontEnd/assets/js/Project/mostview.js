fetchData(`${ApiEndPoint.Base + ApiEndPoint.Project.MostViewed.Fetch}`)
  .then((mostViewedData) => {
    mostViewedData.data.forEach((app) => {
      var $appDiv = `
                <div
                      style="min-width: 460px"
                      class="TopDownload overflow-hidden bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 h-72"
                      onclick="showApp('${app.PID}')"
                      >
                      <img
                        class="rounded-lg h-full w-full"
                        src="${ApiEndPoint.Base}/Project/upload/${app.UID}/${app.ProjectName}/Banner.jpg"
                        alt=""
                      />
                      <!--Bottom Section-->
                      <div
                        class="flex justify-between p-2 w-full h-20 items-center"
                        style="
                          position: relative;
                          background: linear-gradient(
                            rgba(0, 0, 0, 0.2),
                            rgba(0, 0, 0, 0.8),
                            rgba(0, 0, 0, 1)
                          );
                          bottom: 25%;
                          backdrop-filter: blur(20);
                        "
                      >
                        <div>
                          <label for="" class="text-white text-lg">${app.ProjectName}</label>
                          <div class="flex items-center mt-2 mb-5">
                            <svg
                              class="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                              />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                              />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                              />
                            </svg>
                            <svg
                              class="w-4 h-4 text-yellow-300 mr-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                              />ś
                            </svg>
                            <svg
                              class="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                              />
                            </svg>
                            <span
                              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
                              >${app.Rating}</span
                            >
                          </div>
                        </div>
                        <a
                          href="${app.DownloadLink}"
                          class="px-3 bg-blue-500 h-10 rounded-lg text-white flex justify-center items-center"
                          >Download<i
                            class="fa fa-download ml-2"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                `;
      $("#mostRated").append($appDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
