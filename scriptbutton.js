document.getElementById('videoFile').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var videoPlayer = document.getElementById('videoPlayer');
    var videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
});

var video = document.getElementById("videoPlayer");
  video.volume = 0.2;