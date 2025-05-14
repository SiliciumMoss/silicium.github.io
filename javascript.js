//Gallery


const imageList = [
    "gallery/Me_and_my_best_friend_Paul_again.jpg",
    //"gallery/Rebuilding_my_farm!.jpg",
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

const item = document.createElement('div');
    item.className = 'gallery-item-more';
    item.innerHTML = `
      <img src="items/more_full.png" alt="more">
      <div class="caption"></div>
    `;
    gallery.appendChild(item);


const embedList = [
    { url: "https://medal.tv/de/games/dredge/clip/kdkfzj8ClSYB4ujIG?invite=cr-MSxkbVcsMzgwOTI2NTc5", caption: "That_was_pretty_close..."},
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

const div = document.createElement('div');
    div.className = 'gallery-item-more';
    div.innerHTML = `
      <div class="embed-container"><img src="items/more_full.png" alt="more" style="width=640; height=360; border: none;"></div>
      <div class="caption"></div>
    `;
    embedGallery.appendChild(div);