function acertou(n) {
    if (localStorage.getItem("som") == n) {
        alert("Acertou, boa.");
        localStorage.setItem("som", (parseInt(localStorage.getItem("som")) + 1));
        window.location.reload();
    } else {
        localStorage.setItem("vida", parseInt(localStorage.getItem("vida")) - 1);
        if (parseInt(localStorage.getItem("vida")) <= 0) {
            alert("Você perdeu todas as vidas! Voltando ao início!");
            localStorage.clear();
            window.location.href = "./index.html";
        } else {
            alert("Errouuuuuuuuuuuuu! Perdeu uma vida!\n Vidas restantes: " + localStorage.getItem("vida"));
        }
    }
}

function init() {
    if (!localStorage.getItem("vida")) {
        localStorage.setItem("vida", 3);
    }
    if (!localStorage.getItem("som")) {
        localStorage.setItem("som", 0);
    }
    if (localStorage.getItem("som") >= 10) {
        localStorage.clear();
        window.location.href = "./parabens.html";
    } else {
        document.getElementsByTagName("source")[0].src = `sons/somAnimal${localStorage.getItem("som")}.mp3`;
    }
    const targets = document.getElementsByClassName("meusTargets");
    if (!targets || targets.length <= 0) return;
    for (let i = 0; i < targets.length; i++) {
        if (!targets[i].classList[1]) {
            targets[i].addEventListener("targetFound", (e) => {
                localStorage.setItem("vida", parseInt(localStorage.getItem("vida")) - 1);
                if (parseInt(localStorage.getItem("vida")) <= 0) {
                    alert("Você perdeu todas as vidas! Voltando ao início!");
                    localStorage.clear();
                    window.location.href = "./index.html";
                } else {
                    alert("Errouuuuuuuuuuuuu! Perdeu uma vida!\n Vidas restantes: " + localStorage.getItem("vida"));
                }
            });
        } else {
            let num = parseInt(targets[i].classList[1].charAt(targets[i].classList[1].length - 1))
            targets[i].addEventListener('targetFound', () => {
                acertou(num);
            });
        }
    }


}

init();