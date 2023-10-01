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
const HandleFilter = (tag) => {
  if (tag === "all") $(".project").css("display", "block");
  else {
    $(".project").css("display", "none");
    $(".project[data-tag*='" + tag + "']").css("display", "block");
  }
};

const ToggleClass = (tagId, tag) => {
  $(".tag").attr(
    "class",
    "cursor-pointer px-3 py-1 rounded-full m-1 flex justify-center items-center tag bg-neutral-700"
  );
  $(`${tagId}`).attr({
    class:
      "cursor-pointer px-3 py-1 rounded-full m-1 flex justify-center items-center bg-neutral-900 text-white tag",
    style: "box-shadow: inset 1px 1px rgba(255, 255, 255, 0.3);",
  });
  HandleFilter(tag);
};

const LoadApps = () => {
  //Filter Tags
  fetchData(ApiEndPoint.Base + ApiEndPoint.Category.Add)
    .then((data) => {
      if (data.success === true) {
        var $activeDiv = `<div
              onclick="ToggleClass('#allTag','all')"
              id="allTag"
                  class="cursor-pointer px-3 py-1 rounded-full m-1 flex justify-center items-center bg-neutral-900 text-white tag">
                  <p>All</p>
                </div>`;
        $(".filter").append($activeDiv);

        Object.keys(data.data).forEach((key) => {
          let id = data.data[key];

          if (id.charAt(0) === ".") {
            id = id.substring(1);
          }

          id = id.replace(" ", "_");
          id = id.replace("/", "_");
          const $tagDiv = `<div id="${id}"
                    onclick="ToggleClass('#${id}','${data.data[key]}')"
                    class="cursor-pointer px-3 py-1 rounded-full m-1 flex justify-center items-center tag bg-neutral-700"
                  >
                    <p>${data.data[key]}</p>
                  </div>`;
          $(".filter").append($tagDiv);
        });
      }
    })
    .catch((error) => {
      console.error("Error in fetchData:", error);
    });
};
