import logIt from './logit.ts';

function component() {
    let element = document.createElement('div');
    element.innerHTML = 'Hello TypeScript';

    logIt('Hello Typescript');

    return element
}

document.body.appendChild(component());
