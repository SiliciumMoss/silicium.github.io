//Gallery

const imageList = [
    "gallery/Me_and_my_best_friend_Paul_again.jpg",
    "gallery/Rebuilding_my_farm!.jpg",
    "gallery/Were_going_on_a_trip.jpg"
  ];

const gallery = document.getElementById('gallery');

imageList.forEach(path => {
    const fileName = path.split('/').pop().split('.').shift();
    const caption = fileName.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${path}" alt="${caption}">
      <div class="caption">${caption}</div>
    `;
    gallery.appendChild(item);
});


const embedList = [
    { url: "https://medal.tv/de/games/dredge/clip/kdkfzj8ClSYB4ujIG?invite=cr-MSxkbVcsMzgwOTI2NTc5", caption: "That_was_pretty_close..."},
    { url: "https://medal.tv/de/games/repo/clip/k0wmr1zytUrpbEZiu?invite=cr-MSwzcnIsMzgwOTI2NTc5", caption: "Giant enemy spider"},
    { url: "https://medal.tv/de/games/repo/clip/k07trPhQgycJoh1Rh?invite=cr-MSxOUDYsMzgwOTI2NTc5", caption: "AHHHHHHHHHHhhhh"}
];


//Embed Gallery

const embedGallery = document.getElementById('embedGallery');

embedList.forEach(item => {
const caption = item.caption.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const div = document.createElement('div');
div.className = 'gallery-item';

let embedHTML = '';
if (item.url.includes("medal.tv")) {
      embedHTML = `<iframe width="640" height="360" style="border: none;" src="${item.url}" frameborder="0" allowfullscreen></iframe>`;
    } else if (item.type === "pdf") {
      embedHTML = `<embed src="${item.url}" type="application/pdf">`;
    } else if (item.type === "video") {
      embedHTML = `<video controls><source src="${item.url}" type="video/mp4"></video>`;
    }

    div.innerHTML = `
      <div class="embed-container">${embedHTML}</div>
      <div class="caption">${caption}</div>
    `;
    embedGallery.appendChild(div);
});


const apiKey = "FDC4A82921A0EAE9006C12DA98F8B31C";
    const steamId = "76561199057095505";

    async function fetchSteamData() {
      const summaryURL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`;
      const recentURL = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${apiKey}&steamid=${steamId}`;

      const summaryRes = await fetch(summaryURL);
      const summaryData = await summaryRes.json();

      const recentRes = await fetch(recentURL);
      const recentData = await recentRes.json();

      const profile = summaryData.response.players[0];
      document.getElementById("profile").innerHTML = `
        <h2>${profile.personaname}</h2>
        <img class="avatar" src="${profile.avatarfull}" alt="Avatar">
        <p>Status: ${profile.personastate === 1 ? 'Online' : 'Offline'}</p>
      `;

      const gamesHTML = recentData.response.games?.map(game => `
        <div class="game">
          <strong>${game.name}</strong><br>
          Playtime (last 2 weeks): ${(game.playtime_2weeks / 60).toFixed(1)} hrs
        </div>
      `).join('') || '<p>No recent games found.</p>';

      document.getElementById("games").innerHTML = `<h3>Recently Played Games</h3>${gamesHTML}`;
    }

    fetchSteamData();