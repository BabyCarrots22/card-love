function startLoading() {
    document.querySelector(".progress").style.width = "100%";
    document.querySelector(".heart-icon").style.left = "270px";
    setTimeout(() => {
        document.querySelector(".button").style.display = "block";
    }, 3000);
}

function resetPage() {
    document.querySelector(".loading-container").style.display = "none";
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".envelope-container").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".envelope-container").style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
}

function openEnvelope() {
    document.querySelector(".top-flap").style.transform = "rotateX(180deg)";
    document.querySelector(".card").style.opacity = "1";
}

function closeEnvelope() {
    document.querySelector(".top-flap").style.transform = "rotateX(0deg)";
    document.querySelector(".card").style.opacity = "0";
}

window.onload = startLoading;
