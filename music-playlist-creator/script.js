document.addEventListener('DOMContentLoaded', function() {
    fetch('data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Couldnt fetch dataJSON file')
            }
            return response.json();
        })
        .then((data) => {
            const playlists = data[0].playlists;
            // console.log(playlists);
            const playlistCards = document.querySelector(".playlist-cards");
            playlists.forEach(playlist => {
                let card = document.createElement("article");
                card.classList.add("playlist")
                let playlistArt = playlist.playlist_art;
                let playlistCreator = playlist.playlist_creator;
                let playlistName = playlist.playlist_name;
                let like_count = playlist.likeCount;
                card.innerHTML = `<img class="playlist-image" src="${playlistArt}">
                <div class="playlist-info">
                    <h2 class="playlist-title">${playlistName}</h2>
                    <p class="creator-name">${playlistCreator}</p>
                    <span class="like-count">&#9825; ${like_count}</span>
                </div>`;
                playlistCards.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Problem :', error);
        });
});
