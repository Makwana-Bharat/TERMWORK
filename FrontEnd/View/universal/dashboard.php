<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LIVE STORE</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <!-- Custom Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=IM+Fell+DW+Pica&family=Tilt+Prism&display=swap" rel="stylesheet" />
    <style>
        ::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        * {
            font-family: "Bree Serif", serif;
            letter-spacing: 1px;
        }

        body {
            overscroll-behavior: none;
            /* Prevents scrolling beyond the bounds of the content */
            scroll-behavior: smooth;
            /* Enables smooth scrolling behavior */
        }

        div .app-bar-title {
            color: white;
            font-size: large;
        }

        div .app-bar-title h2 {
            position: relative;
            top: 12px;
            left: 5px;
        }

        .separator {
            display: inline-block;
            width: 100%;
            height: 0px;
            border-bottom: 2px solid gray;
            position: relative;
        }

        .separator::before {
            content: "";
            position: absolute;
            top: -3.015px;
            right: 100%;
            width: 7px;
            height: 7px;
            transform: rotate(45deg);
            background: gray;
        }

        .TopDownload {
            width: 500px !important;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>

<body class="h-screen w-screen bg-neutral-200 overflow-hidden">
    <!-- Container  -->
    <main class="h-screen w-screen bg-neutral-800" style="display: flex">
        <!-- Sidenav -->
        <nav class="flex flex-col justify-between items-center bg-neutral-900 w-16 h-full p-2 pb-3">
            <div class="w-full">
                <img src="https://cdn-icons-png.flaticon.com/512/10490/10490234.png" alt="" />
            </div>
            <footer class="w-full justify-center flex">
                <i class="fa-solid fa-power-off text-white hover:text-slate-300" style="font-size: 34px"></i>
            </footer>
        </nav>
        <!-- Main Section -->
        <section class="w-full">
            <header class="flex justify-between w-11/12 px-4 py-2 fixed">
                <label for="" style="font-family: 'Tilt Prism', cursive" class="text-white text-2xl">LIVE STORE</label>
                <div class="flex relative left-16">
                    <div class="flex text-white w-fit h-fit pl-2 rounded-3xl items-center justify-between mr-2 bg-neutral-900 cursor-pointer">
                        <label for="name" style="font-family: roboto">Makwana Bharat</label>
                        <img class="w-8 m-1" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    </div>
                    <i class="fa-solid fa-rotate text-white text-2xl m-1 cursor-pointer hover:text-slate-300"></i>
                </div>
            </header>
            <!-- Search box-->
            <div class="p-4 pt-16 flex justify-center">
                <div class="w-3/6 h-14 rounded-3xl pl-4" style="
              box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.6), inset 1px 1px 1px gray;
            ">
                    <input type="" name="" value="" placeholder="search.." class="w-11/12 bg-transparent outline-0 h-full text-white text-lg" spellcheck="flase" />
                    <i class="fa-solid fa-search text-slate-300 text-lg m-1 hover:text-white cursor-pointer"></i>
                </div>
            </div>
            <!-- Filter Tags -->
            <div class="filter p-4 pt-1 flex justify-center text-slate-300" style="overflow-y: auto; width: 95vw">
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(0, 0, 0, 0.5);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>All</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>Android</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>iOS</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>Web</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>React Native</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>Flutter</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>C</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>C++</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>Java</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>MERN</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>MARN</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>UI/UX</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>API</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>Liabrary</p>
                </div>
                <div style="
              box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
              background: rgba(255, 255, 255, 0.05);
              min-width: max-content;
              max-height: max-content;
            " class="px-3 py-1 rounded-full m-1 flex justify-center items-center">
                    <p>Shell Script</p>
                </div>
            </div>
            <!-- Apps Container -->
            <div class="flex-1 px-10 flex-1 w-full" style="overflow-y: auto; width: 98vw">
                <!--Most Rated..-->
                <div class="w-full flex flex-col">
                    <div class="app-bar-title w-full pb-3">
                        <span class="separator"></span>
                    </div>
                    <div class="flex w-full overflow-x-scroll">
                        <div style="min-width: 460px" class="TopDownload overflow-hidden bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 h-72">
                            <img class="rounded-lg h-full w-full" src="https://wallpapercave.com/wp/wp3144352.jpg" alt="" />
                            <!--Bottom Section-->
                            <div class="flex justify-between p-2 w-full h-20 items-center" style="
                    position: relative;
                    background: linear-gradient(
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.8),
                      rgba(0, 0, 0, 1)
                    );
                    bottom: 25%;
                    backdrop-filter: blur(20);
                  ">
                                <div>
                                    <label for="" class="text-white text-lg">Free Fire</label>
                                    <div class="flex items-center mt-2 mb-5">
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                    </div>
                                </div>
                                <a href="" class="px-3 bg-blue-500 h-10 rounded-lg text-white flex justify-center items-center">Download<i class="fa fa-download ml-2" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div style="min-width: 460px" class="TopDownload overflow-hidden bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 h-72">
                            <img class="rounded-lg h-full w-full" src="https://e1.pxfuel.com/desktop-wallpaper/979/291/desktop-wallpaper-landscape-castle-clash.jpg" alt="" />
                            <!--Bottom Section-->
                            <div class="flex justify-between p-2 w-full h-20 items-center" style="
                    position: relative;
                    background: linear-gradient(
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.8),
                      rgba(0, 0, 0, 1)
                    );
                    bottom: 25%;
                    backdrop-filter: blur(20);
                  ">
                                <div>
                                    <label for="" class="text-white text-lg">Clash of Impire</label>
                                    <div class="flex items-center mt-2 mb-5">
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 dark:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                            <!-- Filled half -->
                                            <defs>
                                                <linearGradient id="half-filled-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="50%" style="stop-color: currentColor; stop-opacity: 1" />
                                                    <stop offset="50%" style="stop-color: transparent; stop-opacity: 0" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" fill="url(#half-filled-gradient)" />

                                            <!-- Non-filled half -->
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" fill="none" />
                                        </svg>

                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.5</span>
                                    </div>
                                </div>
                                <a href="" class="px-3 bg-blue-500 h-10 rounded-lg text-white flex justify-center items-center">Download<i class="fa fa-download ml-2" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div style="min-width: 460px" class="TopDownload overflow-hidden bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 h-72">
                            <img class="rounded-lg h-full w-full" src="https://wallpaperbat.com/img/221640-pure-farming-2018-ps4-review.jpg" alt="" />
                            <!--Bottom Section-->
                            <div class="flex justify-between p-2 w-full h-20 items-center" style="
                    position: relative;
                    background: linear-gradient(
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.8),
                      rgba(0, 0, 0, 1)
                    );
                    bottom: 25%;
                    backdrop-filter: blur(20);
                  ">
                                <div>
                                    <label for="" class="text-white text-lg">Farming Simulation - 2023</label>
                                    <div class="flex items-center mt-2 mb-5">
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">3.0</span>
                                    </div>
                                </div>
                                <a href="" class="px-3 bg-blue-500 h-10 rounded-lg text-white flex justify-center items-center" style="left: 200px">Download<i class="fa fa-download ml-2" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div style="min-width: 460px" class="TopDownload overflow-hidden bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 h-72">
                            <img class="rounded-lg h-full w-full" src="https://e0.pxfuel.com/wallpapers/6/701/desktop-wallpaper-blog-angry-bird-2.jpg" alt="" />
                            <!--Bottom Section-->
                            <div class="flex justify-between p-2 w-full h-20 items-center" style="
                    position: relative;
                    background: linear-gradient(
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.8),
                      rgba(0, 0, 0, 1)
                    );
                    bottom: 25%;
                    backdrop-filter: blur(20);
                  ">
                                <div>
                                    <label for="" class="text-white text-lg">Angry Birds</label>
                                    <div class="flex items-center mt-2 mb-5">
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">3.0</span>
                                    </div>
                                </div>
                                <a href="" class="px-3 bg-blue-500 h-10 rounded-lg text-white flex justify-center items-center" style="left: 200px">Download<i class="fa fa-download ml-2" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--other-->
                <div class="w-full">
                    <div class="app-bar-title w-full">
                        <h2>Game</h2>
                        <span class="separator"></span>
                    </div>
                    <div class="flex w-full" style="overflow-x: auto">
                        <div class="app-container text-slate-100 p-2 mx-1 pt-3 flex flex-col justify-center items-center w-30">
                            <img class="w-20 border border-neutral-200 rounded-2xl shadow dark:bg-neutral-800 dark:border-neutral-700" src="https://cdn6.aptoide.com/imgs/a/0/7/a07457f9d059715922bd0baa696456d4_icon.png" alt="" />
                            <p class="text-center w-24 flex-wrap h-12 pt-2">Free Fire</p>
                        </div>
                        <div class="app-container text-slate-100 p-2 mx-1 pt-3 flex flex-col justify-center items-center w-30">
                            <img class="w-20 border border-neutral-200 rounded-2xl shadow dark:bg-neutral-800 dark:border-neutral-700" src="https://i.pinimg.com/736x/e5/c1/59/e5c159ebbf010fd33f396d5759ef17ba.jpg" alt="" />
                            <p class="text-center w-24 flex-wrap h-12 pt-2">
                                Clash of Royals
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</body>

</html>