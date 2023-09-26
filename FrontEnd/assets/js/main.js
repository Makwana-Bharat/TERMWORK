const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Network response was not ok");

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
const ToggleClass = (tagId) => {
  $(".tag")
    .removeClass("bg-neutral-900 text-white")
    .css(
      "box-shadow",
      "1px 1px rgba(0, 0, 0, 0.3),inset 1px 1px rgba(255, 255, 255, 0.1)"
    );

  $(`${tagId}`)
    .addClass("bg-neutral-900 text-white")
    .css("box-shadow", "inset 1px 1px rgba(255, 255, 255, 0.3)");
};

const LoadApps = () => {
  //Filter Tags
  console.log(ApiEndPoint);
  fetchData(ApiEndPoint.Base + ApiEndPoint.Category.Add)
    .then((data) => {
      if (data.success === true) {
        var $activeDiv = `<div
              onclick="ToggleClass('#allTag')"
              id="allTag"
                    style="box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3);"
                  class="cursor-pointer px-3 py-1 rounded-full m-1 flex justify-center items-center bg-neutral-900 text-white tag">
                  <p>All</p>
                </div>`;
        $(".filter").append($activeDiv);

        data.data.forEach((tag) => {
          var $tagDiv = `<div id="${tag.CID}"
                      onclick="ToggleClass('#${tag.CID}')"
                      class="cursor-pointer px-3 py-1 rounded-full m-1 flex justify-center items-center tag bg-neutral-700"
                  >
                      <p>${tag.Name}</p>
                  </div>`;
          $(".filter").append($tagDiv);
        });
      }
    })
    .catch((error) => {
      console.error("Error in fetchData:", error);
    });
  //load App
  var appData = {
    mostRated: [
      {
        id: 101,
        Thumbnail: "https://wallpapercave.com/wp/wp3144352.jpg",
        appName: "Free Fire",
        DownloadLink: "",
        rating: "5.0",
      },
      {
        id: 102,
        Thumbnail:
          "https://e1.pxfuel.com/desktop-wallpaper/979/291/desktop-wallpaper-landscape-castle-clash.jpg",
        appName: "Clash of Empire",
        DownloadLink: "",
        rating: "4.5",
      },
      {
        id: 103,
        Thumbnail:
          "https://wallpaperbat.com/img/221640-pure-farming-2018-ps4-review.jpg",
        appName: "Farming Simulation - 2023",
        DownloadLink: "",
        rating: "5.0",
      },
      {
        id: 104,
        Thumbnail:
          "https://e0.pxfuel.com/wallpapers/6/701/desktop-wallpaper-blog-angry-bird-2.jpg",
        appName: "Angry Birds",
        DownloadLink: "",
        rating: "3.0",
      },
    ],
    Games: [
      {
        id: 105,
        Thumbnail:
          "https://cdn6.aptoide.com/imgs/a/0/7/a07457f9d059715922bd0baa696456d4_icon.png",
        appName: "Free Fire",
        DownloadLink: "",
        rating: "2.0",
      },
      {
        id: 106,
        Thumbnail:
          "https://i.pinimg.com/736x/e5/c1/59/e5c159ebbf010fd33f396d5759ef17ba.jpg",
        appName: "Free Fire",
        DownloadLink: "",
        rating: "5.0",
      },
    ],
  };

  appData.mostRated.forEach((app) => {
    var $appDiv = `
                <div
                      style="min-width: 460px"
                      class="TopDownload overflow-hidden bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 h-72"
                      onclick="showApp('${app}')"
                      >
                      <img
                        class="rounded-lg h-full w-full"
                        src=${app.Thumbnail}
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
                          <label for="" class="text-white text-lg">${app.appName}</label>
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
                              >${app.rating}</span
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

  //Other
  var app = `<div
                  class="app-container text-slate-100 p-2 mx-1 pt-3 flex flex-col justify-center items-center w-30 cursor-pointer"
                >
                  <img
                    class="w-20 border border-neutral-200 rounded-2xl shadow dark:bg-neutral-800 dark:border-neutral-700"
                    src=${appData.Games[1].Thumbnail}
                    alt=""
                  />
                  <p class="text-center w-24 flex-wrap h-12 pt-2">${appData.Games[1].appName}</p>
                </div>`;
  $("#Games").append(app);
  for (let i = 0; i < 20; i++) {
    var app = `<div
                class="app-container text-slate-100 p-2 mx-1 pt-3 flex flex-col justify-center items-center w-30"
              >
                <img
                  class="w-20 border border-neutral-200 rounded-2xl shadow dark:bg-neutral-800 dark:border-neutral-700"
                  src=${appData.Games[0].Thumbnail}
                  alt=""
                />
                <p class="text-center w-24 flex-wrap h-12 pt-2">${appData.Games[0].appName}</p>
              </div>`;
    $("#Games").append(app);
  }
};
