import logIt from "./logit.ts"

function component(): HTMLElement {
    const element = document.createElement("div")
    element.innerHTML = "Hello TypeScript"

    logIt("I love types")

    return element
}

(function main() {
  document.body.appendChild(component())
} ())
