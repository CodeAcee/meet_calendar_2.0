export const errorBoundry = (msg) => {
    const errorWrapper = document.createElement('div');
    const errorTitle = document.createElement('p');
    const errorClose = document.createElement('button');

    errorWrapper.setAttribute('class', 'error');
    errorTitle.setAttribute('class', 'error__title');
    errorClose.setAttribute('class', 'error__button');

    errorTitle.textContent = msg;
    errorClose.innerHTML = '&#x2613;'

    errorWrapper.append(errorTitle);
    errorWrapper.append(errorClose);

    return errorWrapper;
}