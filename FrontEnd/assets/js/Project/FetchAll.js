const UserVizJSON = (originalArray) => {
  const userProjects = {};
  originalArray.forEach((project) => {
    const { UID, Username, ...projectInfo } = project;

    // Initialize the user object if it doesn't exist
    if (!userProjects[UID]) {
      userProjects[UID] = {
        UID,
        Username,
        Projects: [],
      };
    }
    userProjects[UID].Projects.push(projectInfo);
  });
  return Object.values(userProjects);
};

fetchData(`${ApiEndPoint.Base + ApiEndPoint.Project.FetchAll}`)
  .then((response) => {
    UserVizJSON(response.data).forEach((Data) => {
      $(".app-container").append(
        `
        <div class="w-full">
            <div class="app-bar-title w-full">
              <h2>Developer by : ${Data.Username}</h2>
              <span class="separator"></span>
            </div>
            <div id="${Data.UID}" class="flex w-full overflow-x-scroll"></div>
          </div>
        </div>
        `
      );
      Data.Projects.forEach((project) => {
        var app = `<div
                  class="app-container text-slate-100 p-2 mx-1 pt-3 flex flex-col justify-center items-center w-30 cursor-pointer"
                onclick="showApp('${project.PID}')"
                  >
                  <img
                    class="w-24 h-24 border border-neutral-200 rounded-2xl shadow dark:bg-neutral-800 dark:border-neutral-700"
                    src="${ApiEndPoint.Base}/Project/upload/${Data.UID}/${project.NAME}/Thumbnail.png"
                    alt=""
                  />
                  <p class="text-center w-24 flex-wrap h-12 pt-2">${project.NAME}</p>
                </div>`;
        $(`#${Data.UID}`).append(app);
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
