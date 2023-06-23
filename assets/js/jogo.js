function acertou(n) {
    if (localStorage.getItem("som") == n) {
        alert("Acertou, boa.");
        localStorage.setItem("som", (parseInt(localStorage.getItem("som")) + 1));
        window.location.reload();
    } else {
        alert("Errouuuuuuuuuuuuu!");
    }
}

function init() {
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
                alert("Errouuuuuuuuuuuuu!");
            });
        } else {
            let num = parseInt(targets[i].classList[1].charAt(targets[i].classList[1].length - 1))
            switch (num) {
                case 0:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(0)
                    });
                    break;
                case 1:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(1)
                    });
                    break;
                case 2:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(2)
                    });
                    break;
                case 3:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(3)
                    });
                    break;
                case 4:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(4)
                    });
                    break;
                case 5:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(5)
                    });
                    break;
                case 6:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(6)
                    });
                    break;
                case 7:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(7)
                    });
                    break;
                case 8:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(8)
                    });
                    break;
                case 9:
                    targets[i].addEventListener('targetFound', () => {
                        acertou(9)
                    });
                    break;
            }
        }
    }


}

init();