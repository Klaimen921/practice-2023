document.getElementById('videoFile').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var videoPlayer = document.getElementById('videoPlayer');
    var videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
});