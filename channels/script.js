fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCPxMZIFE856tbTfdkdjzTSQ&key=AIzaSyAVMnfTZoCxN9_dWjtpq-uaZ696FZ-5MVc")
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += `
            <img src="${video.snippet.thumbnail.default.url}">
        `
    }
})