const Projects = (url, uid, Username) => {
  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify({ UID: uid }),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      if (response.status === "success") {
        const data = response.data;
        for (const category in data) {
          if (data.hasOwnProperty(category)) {
            const projects = data[category];
            let id = category;

            if (id.charAt(0) === ".") {
              id = id.substring(1);
            }

            id = id.replace(" ", "_");
            id = id.replace("/", "_");
            let content = `
            <div class="w-full flex flex-col">
                <div class="app-bar-title w-full pb-3">
                    <h2>${category}</h2>
                    <span class="separator"></span>
                </div>
                <div class="flex w-full overflow-x-scroll" id="${id}">
                </div>
            </div>`;
            $("#projects_Container").append(content);

            //append projects

            projects.forEach((project) => {
              var projectJSON = JSON.stringify({
                project: project,
                UID: uid,
                Username: Username,
              });
              console.log(project);
              var app = `<div
        data-tag="${project.Tag}"
              class="project app-container text-slate-100 p-2 mx-1 pt-3 flex flex-col justify-center items-center w-30 cursor-pointer "
             onclick='showApp(${projectJSON})'
              >
            <img
              class="w-24 h-24 border border-neutral-200 rounded-2xl shadow dark:bg-neutral-800 dark:border-neutral-700"
              src="${ApiEndPoint.Base}/Project/upload/${uid}/${project.ProjectName}/Thumbnail.png"
              alt=""
            />
            <p class="text-center w-24 flex-wrap h-12 pt-2 text-white text-sm">${project.ProjectName}</p>
          </div>`;
              $(`#${id}`).append(app);
            });
          }
        }
      } else {
        if (response.message === "Record not found") {
          $("#projects_Container").append(
            "<h3> There is No project available...!!<h3>"
          );
        }
      }
    },
    error: function (xhr, status, error) {
      console.error(xhr.responseText);
      $("#result").html("An error occurred while fetching data.");
    },
  });
};
