const thumbnails = document.querySelectorAll('.sidebar video');
    const mainVideo = document.getElementById('mainVideo');

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainVideo.src = thumb.src;
        mainVideo.play();
      });
    });
  