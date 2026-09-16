const leftColumn =
    document.getElementById("leftColumn");

const rightColumn =
    document.getElementById("rightColumn");

const result =
    document.getElementById("result");

let selectedLeft = null;
let selectedRight = null;

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j =
            Math.floor(
                Math.random()*(i+1)
            );

        [array[i],array[j]] =
        [array[j],array[i]];
    }

}

document
.getElementById("startButton")
.addEventListener("click", startGame);

function startGame(){

    result.textContent = "";

    leftColumn.innerHTML = "";
    rightColumn.innerHTML = "";

    selectedLeft = null;
    selectedRight = null;

    const category =
        document
        .getElementById("categorySelect")
        .value;

    const mode =
        document
        .getElementById("questionMode")
        .value;

    const categoryWords =
        words.filter(
            word =>
            word.category === category
        );

    const gameWords =
        [...categoryWords];

    shuffle(gameWords);

    const selectedWords =
        gameWords.slice(0,5);

    const rightItems =
        [...selectedWords];

    shuffle(rightItems);

    selectedWords.forEach(word => {

        const card =
            document.createElement("div");

        card.className =
            "game-card";

        if(mode === "desc"){

            card.textContent =
                word.desc;

        }else{

            card.innerHTML =
            `
            <img
            src="${word.hintImage}"
            alt="">
            `;
        }

        card.dataset.answer =
            word.answer;

        card.addEventListener(
            "click",
            () => selectLeft(card)
        );

        leftColumn.appendChild(card);

    });

    rightItems.forEach(word => {

        const card =
            document.createElement("div");

        card.className =
            "game-card";

        card.textContent =
            word.answer;

        card.dataset.answer =
            word.answer;

        card.addEventListener(
            "click",
            () => selectRight(card)
        );

        rightColumn.appendChild(card);

    });

}

function selectLeft(card){

    document
    .querySelectorAll(
        "#leftColumn .game-card"
    )
    .forEach(c =>
        c.classList.remove("selected")
    );

    selectedLeft = card;

    card.classList.add("selected");

    checkPair();

}

function selectRight(card){

    document
    .querySelectorAll(
        "#rightColumn .game-card"
    )
    .forEach(c =>
        c.classList.remove("selected")
    );

    selectedRight = card;

    card.classList.add("selected");

    checkPair();

}

function checkPair(){

    if(
        !selectedLeft ||
        !selectedRight
    ){
        return;
    }

    if(
        selectedLeft.dataset.answer ===
        selectedRight.dataset.answer
    ){

        result.textContent =
            "🎉 正解！";

        selectedLeft.classList.add(
            "correct"
        );

        selectedRight.classList.add(
            "correct"
        );

        selectedLeft.style.pointerEvents =
            "none";

        selectedRight.style.pointerEvents =
            "none";

    }else{

        result.textContent =
            "❌ 不正解";

        const left = selectedLeft;
        const right = selectedRight;
        
        left.classList.add("wrong");
        right.classList.add("wrong");
        
        setTimeout(() => {
        
            left.classList.remove("wrong");
            right.classList.remove("wrong");
        
        },1000);

    }

    selectedLeft?.classList.remove(
        "selected"
    );

    selectedRight?.classList.remove(
        "selected"
    );

    selectedLeft = null;
    selectedRight = null;

}