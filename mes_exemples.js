const hd = document.querySelector("header");
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
    hd.style.borderBottom = "none";
  } else {
    hd.style.borderBottom = "1px solid #fbb1e5";
  }
});
const arrow = document.querySelector(".circle");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});
arrow.addEventListener("click", () => {
  console.log("log");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const fermer = document.querySelector(".fermer");
const popup = document.querySelector(".popup");

fermer.addEventListener("click", () => {
  console.log("bonjour");
  popup.classList.toggle("desactive");
});
setTimeout(affiche, 3000);
function affiche() {
  console.log("bb");
  popup.classList.remove("desactive");
}

window.addEventListener("scroll", () => {
  if (
    (document.documentElement.scrollHeight =
      document.documentElement.clientHeight +
      document.documentElement.scrollTop)
  ) {
    console.log("ok fin");
    const div = document.createElement("div");
    div.classList.add("card");
    const ajout = `
      <div class="img">
        <img src="co1.jpg" alt="moi" />
      </div>
      <h1>MORY KOULIBALY</h1>
      <div class="text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          exercitationem asperiores quo totam ear
        </p>
      </div>
      <a href="#">Decouvrir</a>
    `;
    div.innerHTML = ajout;

    body.appendChild(div);
  }
});
