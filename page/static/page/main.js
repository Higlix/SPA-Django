// fetch('/page', {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//         },
//     })
//     .then((response) => {
//         if (!response.ok) {
//             console.error("Ero");
//         }
//         return (response.text);
//     })
//     .then((text) => {
//         const app = document.getElementById("app");
//         app.textContent = text;
//     })

let isRunning = true;

let canvas;
let scene;
let camera;
let renderer;

let geometry;
let material;
let cube;

async function test() {
    console.log("TEST is called...");
    fetch('game/1')
    .then(response => response.text())
    .then(text => {
        console.log(text);

        const app = document.getElementById("app");
        app.innerHTML = text;
        isRunning = false;
    })
}

async function test2() {
    console.log("test2 is called...");
    fetch('game/2')
    .then(response => response.text())
    .then(text => {
        console.log(text);

        const app = document.getElementById("app");
        const script = document.createElement("script");
        let canvasl = document.createElement("canvas");
        isRunning = true;
        app.innerHTML = "";
        canvasl.id = "myCanvas";

        app.appendChild(canvasl);
        script.type = "module";
        script.innerHTML = text;
        app.appendChild(script);
        script.remove();
    })
}

document.getElementById("bt").addEventListener("click", test);
document.getElementById("btn").addEventListener("click", test2);