import logIt from "./logit.ts";

function component() {
    const element = document.createElement("div");
    element.innerHTML = "Hello TypeScript";

    logIt("I love types");

    return element;
}

document.body.appendChild(component());
