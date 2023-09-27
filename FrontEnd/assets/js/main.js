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
  $(".tag").css(
    "box-shadow",
    "1px 1px rgba(0, 0, 0, 0.3),inset 1px 1px rgba(255, 255, 255, 0.1)"
  );
  $(".tag").removeClass("bg-neutral-900");

  $(`${tagId}`)
    .addClass("bg-neutral-700")
    .css("box-shadow", "inset 1px 1px rgba(255, 255, 255, 0.3)");
};

const LoadApps = () => {
  //Filter Tags
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
};
