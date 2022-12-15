const NUM_DANCERS = 98;

for(let i = 0; i < NUM_DANCERS; i++) {
   const dancer = document.createElement("img");
   const gifSrc = `gifs/dancing/${i}.gif`;
   dancer.setAttribute("src", gifSrc);
   dancer.setAttribute("alt", `dancing gif #${i}`);
   dancer.classList.add("dancer");
   dancer.style.left = `${(Math.random() * 85)}%`
   danceFloor.append(dancer);
}