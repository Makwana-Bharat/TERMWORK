var Thumbnail = [];
function displaySelectedImage(input, id) {
  const imageContainer = $(`#image-container${id}`);
  const clearButton = $(`#clear-button${id}`);
  Thumbnail[id - 1] = input.files[0];
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = $("<img>");
      image.attr("src", e.target.result);
      if (id != "2") image.css({ width: "100px", height: "100px" });
      else image.css({ width: "200px", height: "100px" });
      imageContainer.html("");
      imageContainer.append(image);
      clearButton.css("display", "block");
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function clearImageSelection(id) {
  const input = $(`#dropzone-file${id}`);
  const imageContainer = $(`#image-container${id}`);
  const clearButton = $(`#clear-button${id}`);

  input.val("");
  if (id == "1") {
    imageContainer.html(`
        <label for="dropzone-file1" class="flex flex-col items-center justify-center w-full h-full border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600">
        <div class="flex flex-col items-center justify-center pt-6">
          <svg class="w-8 h-8 mb-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
        </div>
        <input id="dropzone-file1" type="file" name="thumbnail" class="hidden" accept=".png,.jpg,.jpeg,.gif" onchange="displaySelectedImage(this,'1')" required />
      </label>
              `);
  } else {
    imageContainer.html(`
        <label for="dropzone-file2" class="flex flex-col items-center justify-center w-full h-full border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600">
        <div class="flex flex-col items-center justify-center pt-6">
          <svg class="w-8 h-8 mb-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
        </div>
        <input id="dropzone-file2" type="file" name="dropzone-file2" class="hidden" accept=".png,.jpg,.jpeg,.gif" onchange="displaySelectedImage(this,'2')" required />
      </label>`);
  }
  clearButton.css("display", "none");
}
function projectFileSelected(input) {
  const fileInfoParagraph = document.getElementById("fileInfo");

  if (input.files.length > 0) {
    const selectedFileName = input.files[0].name;

    fileInfoParagraph.textContent = "Selected file: " + selectedFileName;
  } else {
    fileInfoParagraph.textContent =
      "Supported file types: .apk, .ipa, .c, .cpp, .java, ...";
  }
}

function addProject(event) {
  event.preventDefault();
  if (getCookie("user") !== null) {
    // Get form field values
    const name = document.getElementById("name").value;
    const visibility = document.querySelector(
      'input[name="visibility"]:checked'
    ).value;
    const description = document.querySelector("textarea").value;
    const projectTag = document.getElementById("tag").value;
    const githubLink = document.getElementById("github").value;
    const liveLink = document.getElementById("live").value;
    // Get the file inputs
    const thumbnailFile = Thumbnail[0];
    const Banner = Thumbnail[1];
    const outcomeFile = document.getElementById("projectFile").files[0];
    const screenshotsFiles = document.getElementById("screenshots").files;
    // Check if both files are defined
    if (!thumbnailFile || !outcomeFile) {
      console.error("Files are not defined.");
      return;
    }

    // Create a FormData object
    const formData = new FormData();

    // Append form fields
    formData.append("name", name);
    formData.append("visibility", visibility);
    formData.append("description", description);
    formData.append("tag", projectTag);
    formData.append("github", githubLink);
    formData.append("live", liveLink);
    formData.append("UID", JSON.parse(getCookie("user")).UID);
    // Append the Thumbnail and outcomeFile files to the FormData object
    formData.append("Thumbnail", thumbnailFile);
    formData.append("Banner", Banner);
    formData.append("projectFile", outcomeFile);
    // Get all file inputs (excluding Thumbnail and projectFile)
    for (let i = 0; i < screenshotsFiles.length; i++) {
      formData.append(`screenshot${i}`, screenshotsFiles[i]);
    }
    const apiUrl = "http://localhost/TERMWORK/BackEnd/APIS/Project/Add.php";

    // Use $.ajax to send the FormData
    $.ajax({
      url: apiUrl,
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      enctype: "multipart/form-data",
      success: function (data) {
        Swal.fire({
          icon: data.status,
          title: data.status,
          text: data.message,
        });
      },
      error: function (error) {
        // Handle errors here
        console.error("Error:", error);
        // Display an error Swal popup
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while uploading files. Please try again later.",
        });
      },
    });
  } else alert("not allowed");
}
