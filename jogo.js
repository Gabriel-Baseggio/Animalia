function init() {
    if (!localStorage.getItem("som")) {
        localStorage.setItem("som", 0);
    }
    if (localStorage.getItem("som") >= 10) {
        localStorage.setItem("som", 0);
        window.location.href = "./parabens.html";
    } else {
        document.getElementsByTagName("source")[0].src = `sons/somAnimal${localStorage.getItem("som")}.mp3`;
    }
    const targets = document.getElementsByClassName("meusTargets");
    if (!targets || targets.length <= 0) return;
    for (let i = 0; i < targets.length; i++) {
        if (targets[i].classList[1] == "correta") {
            targets[i].addEventListener("targetFound", (e) => {
                if (localStorage.getItem("som") == i) {
                    alert("Acertou, boa.");
                    localStorage.setItem("som", (parseInt(localStorage.getItem("som")) + 1));
                    window.location.reload();
                } else {
                    alert("Errouuuuuuuuuuuuu!");
                }
            });
        } else {
            targets[i].addEventListener("targetFound", (e) => {
                alert("Errouuuuuuuuuuuuu!");
            });
        }
    }

}

init();