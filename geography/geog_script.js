const container = document.querySelector(".card-container");

let allCards = [];
let isShuffled = false;

function getCardStates(word) {

    const mode =
        document.getElementById("modeSelect").value;

    if(mode === "dha"){
        return [
            word.desc,
            `
            <img src="${word.hintImage}" alt="">
            <h4>${word.hintText}</h4>
            `,
            `<h2>${word.answer}</h2>`
        ];
    }

    if(mode === "da"){
        return [
            word.desc,
            `<h2>${word.answer}</h2>`
        ];
    }

    if(mode === "ha"){
        return [
            `
            <img src="${word.hintImage}" alt="">
            <h4>${word.hintText}</h4>
            `,
            `<h2>${word.answer}</h2>`
        ];
    }

    if(mode === "ad"){
        return [
            `<h2>${word.answer}</h2>`,
            word.desc
        ];
    }
}

function renderCards(){

    container.innerHTML = "";
    allCards = [];

    const selectedCategory =
        document.getElementById("categorySelect").value;

    const selectedLevel =
        document.getElementById("levelSelect").value;

    let filteredWords = words.filter(word => {
    
        const categoryMatch =
            selectedCategory === "all"
            || word.category === selectedCategory;
    
        const levelMatch =
            selectedLevel === "all"
            || word.level == selectedLevel;
    
        return categoryMatch && levelMatch;
    
    });

    if(isShuffled){
        shuffleArray(filteredWords);
    }

    filteredWords.forEach(word => {

        const card = document.createElement("div");
        card.className = "card";

        const states = getCardStates(word);

        card.innerHTML = `
            <div class="card-inner ${word.category_eng}">
                <div class="card-face">
                    ${states[0]}
                </div>
            </div>
        `;

        container.appendChild(card);

        const face =
            card.querySelector(".card-face");
        
        face.classList.add("state-0");

        let state = 0;

        allCards.push({
            face,
            word,
            setState: value => state = value
        });

        card.addEventListener("click", () => {

            const inner =
                card.querySelector(".card-inner");

            inner.classList.add("flip");

            setTimeout(() => {

                const states =
                    getCardStates(word);

                state++;
                
                if(state >= states.length){
                    state = 0;
                }
                
                face.innerHTML = states[state];
                
                face.classList.remove(
                    "state-0",
                    "state-1",
                    "state-2"
                );
                
                face.classList.add(`state-${state}`);

            }, 300);

            setTimeout(() => {
                inner.classList.remove("flip");
            }, 600);

        });

    });

}

function shuffleArray(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
        [array[j], array[i]];

    }

}

function resetCards(){

    allCards.forEach(card => {

        const states =
            getCardStates(card.word);

        card.face.innerHTML = states[0];

        card.setState(0);

    });

}

document
    .getElementById("shuffleButton")
    .addEventListener("click", () => {

        isShuffled = !isShuffled;

        const button =
            document.getElementById("shuffleButton");

        if(isShuffled){
            button.textContent = "ランダム解除";
        }else{
            button.textContent = "ランダム";
        }

        renderCards();

    });

document
    .getElementById("resetButton")
    .addEventListener("click", resetCards);

document
    .getElementById("modeSelect")
    .addEventListener("change", resetCards);

document
    .getElementById("categorySelect")
    .addEventListener("change", renderCards);

document
    .getElementById("levelSelect")
    .addEventListener("change", renderCards);

renderCards();