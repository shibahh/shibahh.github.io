const quotesTable = [
    { text: "A good game is a game that makes you feel like you are part of it. A great game is a game that makes you forget that you're playing.", author: "Gabe Newell" },
    { text: "The beauty of video games is that they allow people to be who they want to be. It’s about expressing yourself.", author: "Cliff Bleszinski" },
    { text: "A game is not a thing you finish. A game is a thing you experience.", author: "Reggie Fils-Aimé" },
    { text: "The job of a designer is to design the game for the player to enjoy, not for the designer to enjoy.", author: "Yuji Naka" },
    { text: "We’re making something people can use, something people can really enjoy. The real fun of creating games is making people’s dreams come true.", author: "Tetsuya Takahashi" },
    { text: "In the end, the player is the one who decides what a game really is, not the game designer.", author: "Fumito Ueda" },
    { text: "Don’t just think of the technology, think of the emotions it can evoke.", author: "Hironobu Sakaguchi" },
    { text: "The most successful games are the ones that surprise you, make you laugh, or make you feel something.", author: "Kenji Inafune" },
    { text: "Games are meant to be shared. Not only with your friends but with the world.", author: "Jade Raymond" },
    { text: "A game is about making players feel good, feel that they’ve learned something, and have fun.", author: "Satoru Iwata" }
];

const PAGES = {
    index: `
        <h1>welcome!</h1>

        <p>
            im shiba, a game dev from poland mainly working with luau in roblox studio since 2018. <br>
            im always trying to improve my coding skills and learn new languages. <br>
            you can check out my projects, or contact me using the buttons above. <br>
        </p>
    `,
    mywork: `
        <h1>my works</h1>
        <p>click the images to get redirected to the project</p>

        <div class="project-container">
            <a href="https://www.roblox.com/games/16634562549/TBB-TARPG-REWORK-OPEN-ALPHA">
                <img src="/Assets/tarpg.png" width = 150 height = 150>
           </a></img> <br> 

            <p>
                TBB:TARPG (the battle bricks: totally accurate roleplay game), a fan RP game of <a href="https://www.roblox.com/games/10834586502/The-Battle-Bricks">Tumore's The Battle Bricks</a>, my first ever successful project, and the oldest.
                it has had 4 versions which can all be played in the not yet finished <a href="https://www.roblox.com/games/94032704926982/TARPG-ERA">tarpg era game</a>
            </p>
        </div>

        <div class="project-container">
           <a href="https://www.roblox.com/games/88623920231246/Teapot-Tumble">
                <img src="/Assets/teapot-tumble.png" width = 150 height = 150>
           </a></img> <br> 

            <p>
                Teapot Tumble, a spin on roblox's classic falling teapots of doom game by clockwork. the game is an alpha, so dont expect much.
            </p>
        </div>
    `,
    socials: `
        <h1>socials</h1>

        <p>would've had perfect quintouple shibahh usernames if some kid didn't take shibahh on roblox :(</p>
        <small>ignore how yt acc has an extra H, i own the shibahh handle but i just gotta transfer it from my alt to main</small>
        <br><br>

        <p>
            discord: shibahh <br>
            roblox: <a href="https://www.roblox.com/users/2456801075/profile" target="_blank">ssshibah</a> (uid: 2456801075) <br>
            yt: <a href="https://www.youtube.com/@shibahhh" target="_blank">@shibahh</a> <br>
            github: <a href="https://github.com/shibahhh" target="_blank">shibahh</a> <br>
            steam: <a href="https://steamcommunity.com/id/shibahh" target="_blank">shibahh</a> <br>
        </p>
    `,
}

var higher = `
    <h2>QUOTE OF THE DAY: "<span id="quote-text">Loading...</span>" <span id="quote-author">Loading...</span></h2>
    <br><br>

    <div class="button-container">
        <button onclick="loadPage('index')">home</button>
        <button onclick="loadPage('socials')">socials</button>
        <button onclick="loadPage('mywork')">my works</button>
    </div>
`;

var lower = `
    <small class="special-small">
        <br>
         the favicon is a picutre of sunny from omori
    </small>
`

// Function to get a hash of the current date
function getTodayHash() {
    const today = new Date();
    return today.toDateString(); // Returns the date string, i.e., "Thu Mar 14 2025"
}

function getQuoteIndexForToday() {
    const todayHash = getTodayHash();
    const storedHash = localStorage.getItem("quoteDayHash");

    // If the hash is not stored or it's a new day, store it and select a new quote
    if (storedHash !== todayHash) {
        const randomIndex = Math.floor(Math.random() * quotesTable.length);
        localStorage.setItem("quoteDayHash", todayHash);
        localStorage.setItem("quoteIndex", randomIndex);
    }

    return localStorage.getItem("quoteIndex");
}

function getQuoteOfTheDay() {
    const index = getQuoteIndexForToday();
    return quotesTable[index];
}

function loadPage(page) {
    document.querySelector(".container").innerHTML = higher + PAGES[page] + lower;
    displayQuote();
}

function displayQuote() {
    const randomQuote = getQuoteOfTheDay();
    document.getElementById("quote-text").innerText = randomQuote.text;
    document.getElementById("quote-author").innerText = `- ${randomQuote.author}`;
}

document.addEventListener("DOMContentLoaded", () => {
	loadPage("index");
})