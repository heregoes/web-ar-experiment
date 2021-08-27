document.addEventListener("DOMContentLoaded", function() {
    // const startButton = document.querySelector("#example-start-button");
    // const pauseButton = document.querySelector("#example-pause-button");
    const video = document.querySelector('#asset_vid_1')
    const examplePlane = document.querySelector('#example-plane');
    const playButton = document.querySelector("#playButton")
    const sceneEl = document.querySelector('a-scene');
    sceneEl.addEventListener("arReady", (event) => { 
        playButton.addEventListener('click', () => {
            video.play()
            playButton.setAttribute("visible", false)
        });
        // pauseButton.addEventListener('click', () => {
        //     video.pause()
        // })
        // video.play()
        examplePlane.addEventListener("click", event => {
            video.pause()
            playButton.setAttribute("visible", true)
        });
    });
})