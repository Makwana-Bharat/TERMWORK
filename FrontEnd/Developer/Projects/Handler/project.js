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
            `
            <div id="toast-warning" class="absolute bottom-5 flex items-center w-full max-w-xs p-4 text-neutral-500 bg-white rounded-lg shadow dark:text-neutral-400 dark:bg-neutral-900" role="alert" style="left:45%">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span class="sr-only">Warning icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">No Project Available.</div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-neutral-400 hover:text-neutral-900 rounded-lg  p-1.5 hover:bg-neutral-200 inline-flex items-center justify-center h-8 w-8 dark:text-neutral-500 dark:hover:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800" data-dismiss-target="#toast-warning" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
            `
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
