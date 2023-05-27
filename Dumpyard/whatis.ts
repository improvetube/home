export async function getYtVideos(): Promise<void | {}> {
    const playlistId = "";

    return await fetch(https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCPxMZIFE856tbTfdkdjzTSQ&key=AIzaSyAVMnfTZoCxN9_dWjtpq-uaZ696FZ-5MVc
    )
    .then(data => data.json())
    .then(list => list);
}