document.addEventListener('DOMContentLoaded', function() {
    //Get data from data.js
    const playlists = data.playlists;
    console.log(playlists);

    const generateRandomPlaylist = () => {
        const playlistList = playlists;
        playlistList.sort(() => Math.random() - 0.5);
        playlistList.sort(() => Math.random() - 0.5);
        playlistList.sort(() => Math.random() - 0.5);
        return playlistList[0];
    }

    document.getElementById("featuredBtn").addEventListener("click", () => {
        const modal = document.querySelector(".modal-content");
        const theFeature = document.createElement("div");
        theFeature.className = "modal-content";
        theFeature.innerHTML = `
        <div class="modal-header">
                <img class="modal-playlist-image" id="modal-playlist-image" src="${displayedPlaylist.playlist_art}" width="300" height="300">
                <div class="modal-title-creator">
                    <h1 class="modal-playlist-title" id="modal-playlist-title">${displayedPlaylist.playlist_name}</h1>
                    <h2 class="modal-creator-name" id="modal-creator-name">${displayedPlaylist.playlist_creator}</h2>
                </div>
            </div>
            <button id="shuffle-btn">Shuffle</button>
            <div class="modal-song-list" id="modal-song-list">
                <div class="song-container">
                    
                </div>
            </div>
            <button id="closeModalBtn">Close</button>`

        // modal.style.display = "flex";
        const displayedPlaylist = generateRandomPlaylist();
        // displayedPlaylist.className = "modal-content";
        displayedPlaylist.style.display = "flex";
        // document.getElementById("modal-playlist-image").src = displayedPlaylist.playlist_art;
        // document.getElementById("modal-playlist-title").textContent = displayedPlaylist.playlist_name;
        // document.getElementById("modal-creator-name").textContent = displayedPlaylist.playlist_creator;

        const songList = document.getElementById("modal-song-list");
            songList.innerHTML = '';
            card.songs.forEach((song) => {
                const songItem = document.createElement("div");
                songItem.className = "song-container";
                songItem.innerHTML = `<img class="song-image" src="${song.cover_art}" alt="assets/img/song.png" width="100" height="100">
                <div class="song-info">
                    <h3 class="song-title">${song.title}</h3>
                    <p class="artist-name">By ${song.artist}</p>
                    <p class="album-name">${song.album}</p>
                    <p class="song-duration">${song.duration}</p>
                </div>
                `
                songList.appendChild(songItem);
            });
    });
});



// document.getElementById("shuffle-btn").addEventListener("click", () => {
//     const songList = document.getElementById("modal-song-list");
//     const songs = Array.from(songList.children);
//     songs.sort(() => Math.random() - 0.5);
//     songList.innerHTML = ""; // Clear existing songs
//     songs.forEach((song) => songList.appendChild(song)); // Append shuffled songs
// });