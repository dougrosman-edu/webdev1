const NUM_DANCERS = 87;

for(let i = 0; i < NUM_DANCERS; i++) {
   const dancer = document.createElement("img");
   const gifSrc = `gifs/dancing/${i}.gif`;
   dancer.setAttribute("src", gifSrc);
   dancer.setAttribute("alt", `dancing gif #${i}`);
   dancer.classList.add("dancer");
   dancer.style.left = `${(Math.random() * 90)}%`;
   const randomZIndex = (Math.random() * NUM_DANCERS)
   dancer.style.zIndex = `${randomZIndex}`;
   const randomYPos = (Math.random() * 50) + 100;
   console.log(randomYPos)
   dancer.style.transform = `scale(1.25) translateY(-${randomYPos}%)`;
   danceFloor.append(dancer);
}