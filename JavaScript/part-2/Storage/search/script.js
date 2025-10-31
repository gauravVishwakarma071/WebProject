let users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&q=60&w=500",
        bio: "silent chaos in a loud world 💙🖤 | not for everyone"
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1700519171926-4d2544652eae?auto=format&fit=crop&q=60&w=500",
        bio: "main character energy ☕ | coffee > everything ✨",
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?auto=format&fit=crop&q=60&w=500",
        bio: "walking through dreams in doc martens ☁️ | late night thinker",
    },
    {
        name: "ojin oklawa",
        pic: "https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=b5jQWlwUzmp-MBDwPg02HSKsqZy0Ymd6o2NTeXlB5Zo=",
        bio: "too glam to give a damn 🌈 | filter free soul",
    },
    {
        name: "rhea patel",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500",
        bio: "sunshine mixed with little hurricane 🌪️🌞",
    },
    {
        name: "aryan sharma",
        pic: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&q=60&w=500",
        bio: "dream big. stay humble 🚀",
    },
    {
        name: "zara khan",
        pic: "https://images.unsplash.com/photo-1618926749434-0578ceecdfab?auto=format&fit=crop&q=60&w=500",
        bio: "lost in her own galaxy 🌌 | wanderlust soul ✈️",
    },
    {
        name: "kian singh",
        pic: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&q=60&w=500",
        bio: "chaotic good | fueled by caffeine ☕",
    },
    {
        name: "meera joshi",
        pic: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?auto=format&fit=crop&q=60&w=500",
        bio: "bookworm 📚 | coffeeholic ☕ | dream chaser 🌙",
    },
    {
        name: "tanvi kapoor",
        pic: "https://plus.unsplash.com/premium_photo-1679692887717-dc7f5d090271?q=80&w=774&auto=format",
        bio: "vibes > words | peace seeker 🌿",
    },
    {
        name: "rehan ali",
        pic: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?auto=format&fit=crop&q=80&w=387",
        bio: "creating stories one pixel at a time 🎨",
    },
    {
        name: "lara fernandes",
        pic: "https://images.unsplash.com/photo-1592621385612-4d7129426394?auto=format&fit=crop&q=80&w=387",
        bio: "vintage heart with modern soul 💫",
    },
    {
        name: "dev bansal",
        pic: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?auto=format&fit=crop&q=60&w=500",
        bio: "music in my veins 🎧 | dreams in my head 💭",
    },
    {
        name: "sara malik",
        pic: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=60&w=500",
        bio: "living for sunsets 🌅 and good vibes ✨",
    },
    {
        name: "rajveer gill",
        pic: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&q=60&w=500",
        bio: "building dreams | coding reality 💻🚀",
    },
    {
        name: "mira desai",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500",
        bio: "sunkissed and free-spirited 🌻",
    },
    {
        name: "aarav verma",
        pic: "https://images.unsplash.com/photo-1729157661483-ed21901ed892?auto=format&fit=crop&q=60&w=500",
        bio: "always curious 🤔 | never satisfied 💭",
    },
    {
        name: "diya nair",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=500",
        bio: "ocean child 🌊 | moon lover 🌙",
    },
    {
        name: "neil thomas",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=60&w=500",
        bio: "music, coffee, and midnight thoughts 🎵☕🌙",
    },
    {
        name: "tara sehgal",
        pic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&q=60&w=500",
        bio: "writing stories only my heart understands 🖋️💫",
    },
    {
        name: "Gaurav Vishwakarma",
        pic: "",
        bio: "Creative coder",
    },
];

/* ----------- SHOW USERS FUNCTION ----------- */
function showUsers(arr) {
    const container = document.querySelector(".cards-container");
    container.innerHTML = ""; // Clear old cards

    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.style.backgroundSize = "cover";
        blurredLayer.style.backgroundPosition = "center";

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(paragraph);
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);
        container.appendChild(card);
    });
}

showUsers(users);

/* ----------- FILTER AS YOU TYPE ----------- */
const searchInput = document.querySelector("input");

searchInput.addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchText)
    );
    showUsers(filtered);
});
