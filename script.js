let page = 1;
let totalPages = 0;

const statusText = document.getElementById("status");
const results = document.getElementById("results");
const pageLabel = document.getElementById("page-label");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

async function loadPage() {
    try{
        const url = `https://rickandmortyapi.com/api/character?page=${page}`;

        results.textContent = "";
        statusText.textContent = "Loading...";

        const response = await fetch(url);

        if(!response.ok){
            statusText.textContent = response.status;
            return;
        }

        const data = await response.json();
        console.log(data);
        statusText.textContent = "";

        totalPages = Math.ceil(data.info.count / 20);
        console.log(`total pages: ${totalPages}`);

        if(page <= 1){
            page = 1;
            prevButton.disabled = true;
        }else{
            prevButton.disabled = false;
        }

        if(page >= totalPages){
            page = totalPages;
            nextButton.disabled = true;
        }else{
            nextButton.disabled = false;
        }

        showCards(data.results);
        
    }catch(error){
        console.log("Error!Error!Error!")
        console.error(error);
        console.log(error);
    }
}

function showCards(characters){
    characters.forEach(character => {
        const column = document.createElement("div");
        column.className = "col-6 col-md-4 col-lg-3";

        const card = document.createElement("div");
        card.className = "card h-100 p-2";

        const picture = document.createElement("img");
        picture.src = character.image;
        picture.className = "img-fluid rounded mb-2";

        card.appendChild(picture);

        const name = document.createElement("h3");
        name.className = "h6";
        name.textContent = character.name;

        card.appendChild(name);

        const info = document.createElement("p");
        info.className = "small mb-0";
        info.textContent = `· ${character.species, character.status} ·`;

        card.appendChild(info);

        if(character.status === "Dead"){
            card.classList.add("dead");
        }

        column.appendChild(card);

        results.appendChild(column);
    });
}
function nextPage() {
    page++;
    
    loadPage();
}
function prevPage(){
    page--;
    loadPage();
}


// nextButton.addEventListener("click", nextPage);
nextButton.addEventListener("click", nextPage);
prevButton.addEventListener("click", prevPage);

loadPage(); 