let users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "silent chaos in a loud world 💙🖤 | not for everyone"
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1700519171926-4d2544652eae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG51ZGUlQzMlOTclQzMlOTd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "main character energy ☕ | coffee > everything ✨",
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "walking through dreams in doc martens ☁️ | late night thinker",
    },
    {
        name: "ojin oklawa",
        pic: "https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=b5jQWlwUzmp-MBDwPg02HSKsqZy0Ymd6o2NTeXlB5Zo=",
        bio: "too glam to give a damn 🌈 | filter free soul",
    },
    {
        name: "rhea patel",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "sunshine mixed with little hurricane 🌪️🌞",
    },
    {
        name: "aryan sharma",
        pic: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "dream big. stay humble 🚀",
    },
    {
        name: "zara khan",
        pic: "https://images.unsplash.com/photo-1618926749434-0578ceecdfab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "lost in her own galaxy 🌌 | wanderlust soul ✈️",
    },
    {
        name: "kian singh",
        pic: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "chaotic good | fueled by caffeine ☕",
    },
    {
        name: "meera joshi",
        pic: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "bookworm 📚 | coffeeholic ☕ | dream chaser 🌙",
    },
    {
        name: "tanvi kapoor",
        pic: "https://plus.unsplash.com/premium_photo-1679692887717-dc7f5d090271?q=80&w=774&auto=format",
        bio: "vibes > words | peace seeker 🌿",
    },
    {
        name: "rehan ali",
        pic: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
        bio: "creating stories one pixel at a time 🎨",
    },
    {
        name: "lara fernandes",
        pic: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
        bio: "vintage heart with modern soul 💫",
    },
    {
        name: "dev bansal",
        pic: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "music in my veins 🎧 | dreams in my head 💭",
    },
    {
        name: "sara malik",
        pic: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "living for sunsets 🌅 and good vibes ✨",
    },
    {
        name: "rajveer gill",
        pic: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "building dreams | coding reality 💻🚀",
    },
    {
        name: "mira desai",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "sunkissed and free-spirited 🌻",
    },
    {
        name: "aarav verma",
        pic: "https://images.unsplash.com/photo-1729157661483-ed21901ed892?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "always curious 🤔 | never satisfied 💭",
    },
    {
        name: "diya nair",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "ocean child 🌊 | moon lover 🌙",
    },
    {
        name: "neil thomas",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "music, coffee, and midnight thoughts 🎵☕🌙",
    },
    {
        name: "tara sehgal",
        pic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "writing stories only my heart understands 🖋️💫",
    },
];

function showUsers(arr) {
    const container = document.querySelector(".cards-container");
    container.innerHTML = ""; // Clear old cards

    arr.forEach(function (user) {
        // Create main card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image element
        const img = document.createElement("img");
        img.src = user.pic; // ✅ FIXED HERE
        img.alt = user.name;
        img.classList.add("bg-img");

        // Create blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url(${user.pic})`; // ✅ FIXED HERE
        blurredLayer.style.backgroundSize = "cover";
        blurredLayer.style.backgroundPosition = "center";

        // Create content div
        const content = document.createElement("div");
        content.classList.add("content");

        // Heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Paragraph
        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        // Append elements
        content.appendChild(heading);
        content.appendChild(paragraph);
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);
        container.appendChild(card);
    });
}

showUsers(users);



//Objectivies
//show all users
// start filteration as typing input in search box
//show filtered users / result
