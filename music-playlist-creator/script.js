document.addEventListener('DOMContentLoaded', function() {
    //Get data from data.js
    const playlists = data.playlists;
    console.log(playlists);

    // create playlist

    const modalContent = document.querySelector(".modal-content");


    const createPlaylist = (playlist) => {
        const playlistCards = document.querySelector(".playlist-cards");
        
        playlists.forEach((playlist) => {
            let card = document.createElement('article');
            card.className = "playlist";
            card.innerHTML = `<img class="playlist-image" src="${playlist.playlist_art}" alt="assets/img/playlist.png">
            <div class="playlist-info">
                <h2 class="playlist-title">${playlist.playlist_name}</h2>
                <p class="creator-name">${playlist.playlist_creator}</p>
                <span class="like-count" id="like-count">❤️ ${playlist.likeCount}</span>
            </div>`;
            playlistCards.appendChild(card);

            card.addEventListener("click", (event) => {
                if (!event.target.classList.contains("like-count")) {
                    openModal(playlist);
                }
            });

            let likeCount = playlist.likeCount;
            const heartIcon = card.querySelector(".like-count");
            heartIcon.addEventListener('click', () => {
                if (heartIcon.classList.contains('liked')) {
                    likeCount -= 1;
                    heartIcon.style.backgroundColor = 'transparent';
                    heartIcon.classList.remove('liked');
                } else {
                    likeCount += 1;
                    heartIcon.style.backgroundColor = '#abc1db';
                    heartIcon.classList.add('liked');
                }
                heartIcon.textContent = `❤️ ${likeCount}`;
            });

        });
    }

    const openModal = (card) => {
        const modal = document.querySelector(".modal-overlay");
        modal.style.display = "flex";
        document.getElementById("modal-playlist-image").src = card.playlist_art;
        document.getElementById("modal-playlist-title").textContent = card.playlist_name;
        document.getElementById("modal-creator-name").textContent = card.playlist_creator;

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
        })


        // // Get the button that closes the modal
        const closeBtn = document.getElementById("closeModalBtn");

        // When the user clicks on the close button, close the modal
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    createPlaylist(playlists);
    document.getElementById("shuffle-btn").addEventListener("click", () => {
        const songList = document.getElementById("modal-song-list");
        const songs = Array.from(songList.children);
        songs.sort(() => Math.random() - 0.5);
        songList.innerHTML = ""; // Clear existing songs
        songs.forEach((song) => songList.appendChild(song)); // Append shuffled songs
    });



});