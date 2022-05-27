let cont = document.querySelector(".button-plus");
let button = document.createElement("button");
button.innerHTML = "+1";
cont.append(button);
button.classList.add("button-plus");

let cont1 = document.querySelector(".button-minus");
let button1 = document.createElement("button");
button1.innerHTML = "-1";
cont1.append(button1);
button1.classList.add("button-minus");

let b = document.querySelector("p");

let a = 0;
button.addEventListener("click", () => {
	a++;
	b.innerHTML = a;
});

button1.addEventListener("click", () => {
	a--;
	b.innerHTML = a;
});
