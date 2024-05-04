<template>
  <div class="animated-cards-wrapper">

    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
        }
        .m-box{
            height: 70vh;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 2%;
        }
        .im{
            height: 80%;
            width: 18%;
            max-width: 70%;
            border-radius: 50px;
            background-size: cover;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4%;
            color: transparent;
            opacity: 0.4;
            transition: all 0.4s linear;
            font-size: 1vw;
            padding-left: 5%;
            overflow: hidden;
            button{
               height: 10%;
               width: 40%;
               border:1px solid red;
               border-radius: 10px;
               background-color: transparent;
               color: white;
               font-weight: 900;
               
            }
        }
        .im:hover{
            width: 70%;
            height: 100%;
            opacity: 1;
            border-radius: 30px;
            color: white;
          
        }
    </style>
</head>
<body>
    <div class="m-box">
     <div class="im" style="background-image: url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg');">
        <h1>African mountains</h1>
        <p style="width: 80%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis doloribus itaque repellendus quia facere? Minima mollitia, natus velit veritatis quod corporis officiis! Maxime optio corporis quasi quisquam, debitis quam illum.
        Rerum, commodi rem nulla earum eaque tenetur consequuntur? Maxime quidem a animi rem sed reiciendis labore excepturi, voluptas ipsum est nobis odio error dolorem nostrum quisquam aperiam beatae ea ducimus?</p>
        <button>Explore</button>
    </div>
     <div class="im" style="background-image: url('https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg');">
        <h1>North night</h1>
    <p style="width: 80%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis doloribus itaque repellendus quia facere? Minima mollitia, natus velit veritatis quod corporis officiis! Maxime optio corporis quasi quisquam, debitis quam illum.
    Rerum, commodi rem nulla earum eaque tenetur consequuntur? Maxime quidem a animi rem sed reiciendis labore excepturi, voluptas ipsum est nobis odio error dolorem nostrum quisquam aperiam beatae ea ducimus?</p>
    <button>Explore</button>
    </div>
     <div class="im" style="background-image: url('https://i.pinimg.com/originals/8a/58/da/8a58da46777660f46473ba5f4a3d9ae5.jpg');">
        <h1>Fearly forest</h1>
    <p style="width: 80%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis doloribus itaque repellendus quia facere? Minima mollitia, natus velit veritatis quod corporis officiis! Maxime optio corporis quasi quisquam, debitis quam illum.
    Rerum, commodi rem nulla earum eaque tenetur consequuntur? Maxime quidem a animi rem sed reiciendis labore excepturi, voluptas ipsum est nobis odio error dolorem nostrum quisquam aperiam beatae ea ducimus?</p>
    <button>Explore</button>
    </div>
     <div class="im" style="background-image: url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg');">
        <h1>Asian clouds</h1>
    <p style="width: 80%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis doloribus itaque repellendus quia facere? Minima mollitia, natus velit veritatis quod corporis officiis! Maxime optio corporis quasi quisquam, debitis quam illum.
    Rerum, commodi rem nulla earum eaque tenetur consequuntur? Maxime quidem a animi rem sed reiciendis labore excepturi, voluptas ipsum est nobis odio error dolorem nostrum quisquam aperiam beatae ea ducimus?</p>
    <button>Explore</button>
    </div>
     <div class="im" style="background-image: url('https://www.hdwallpapers.in/download/ultra_nature_wallpaper_4k_hd-HD.jpg');">
        <h1>Rusian rivers</h1>
    <p style="width: 80%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis doloribus itaque repellendus quia facere? Minima mollitia, natus velit veritatis quod corporis officiis! Maxime optio corporis quasi quisquam, debitis quam illum.
    Rerum, commodi rem nulla earum eaque tenetur consequuntur? Maxime quidem a animi rem sed reiciendis labore excepturi, voluptas ipsum est nobis odio error dolorem nostrum quisquam aperiam beatae ea ducimus?</p>
    <button>Explore</button>
    </div>
    </div>
</body>
</html>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.animated-cards-wrapper {

}
</style>
