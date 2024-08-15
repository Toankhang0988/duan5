// Thay doi hinh anh Nami
function changeNami(sw) {
  var pic;
  if (sw == 1) {
    pic =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ600gk8fvRV4eD931FZ_QrQk9Y-WWkAa6MQ&s";
  } else if (sw == 2) {
    pic =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1RHnAtBqtKiD1CXKI68L7jGF-VMrra65Pg&s";
  } else if (sw == 0) {
    pic =
      "https://i.pinimg.com/736x/ec/db/76/ecdb764abe4d226c3a16e9ea46f16dcf.jpg";
  } else if (sw == 3) {
    pic =
      "https://img3.gelbooru.com/images/97/15/9715f30253c7b5d12fef9aa9c2b468c8.jpeg";
  }
  document.getElementById("myNami").src = pic;
}
// Thay doi hinh anh Nami

// Thay doi hinh anh Robin
function changeRobin(sw) {
  var pic;
  if (sw == 0) {
    pic =
      "https://wibu.com.vn/wp-content/uploads/2024/04/nha-khao-co-Nico-Robin.jpg";
  } else if (sw == 3) {
    pic =
      "https://hentaiwikis.com/wp-content/uploads/2024/01/Cosplay-Hentai-One-piece-1.jpg.webp";
  } else if (sw == 2) {
    pic =
      "https://preview.redd.it/nico-robin-from-one-piece-by-jyusan-v0-yqbdhkyg90hd1.jpeg?width=1080&crop=smart&auto=webp&s=1753c6886094ce61886449212a70dc68466b2a16";
  } else if (sw == 1) {
    pic = "https://i.redd.it/7w3191hdhj951.jpg";
  }
  document.getElementById("myRobin").src = pic;
}
// Thay doi hinh anh Robin

// Thay doi hinh anh Hancock
function changeHancock(sw) {
  var pic;
  if (sw == 0) {
    pic =
      "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/14024207/image-6-dieu-thu-vi-ve-boa-hancock-one-piece-164717532626459.jpg";
  } else if (sw == 3) {
    pic =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhr1nxwd6GZHW9il0bRyeaaizzCT6DQXjOld3_4GspIqOmVNWeLL3boYUjRf8sYxyzmk&usqp=CAU";
  } else if (sw == 2) {
    pic =
      "https://i.pinimg.com/originals/fe/30/e1/fe30e19842675304cab5469e8af85acb.jpg";
  } else if (sw == 1) {
    pic =
      "https://cdn.truyen-hentai.com/empress-boa-hancock?interlace=1&quality=85&type=jpeg&url=https%3A%2F%2Fi.redd.it%2F5j27ysnbmb3b1.jpg&width=400&sign=gBtp7RdpKHFpcl8xo6CNFxPHvhsPI089Dohqh0uvN7U";
  }
  document.getElementById("myHancock").src = pic;
}
// Thay doi hinh anh Hancock
