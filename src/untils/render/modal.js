export const modal = (name) => {
    const modalWrapper = document.createElement('div');
    const modalTitle = document.createElement('p');
    const modalBtnYes = document.createElement('button');
    const modalBtnNo = document.createElement('button');

    modalWrapper.setAttribute('class', 'modal');
    modalTitle.setAttribute('class', 'modal__title');
    modalBtnYes.setAttribute('class', 'btn modal__btn--yes');
    modalBtnNo.setAttribute('class', 'btn modal__btn--no');

    modalTitle.textContent = `Are you sure want delete ${name} ?`;
    modalBtnYes.textContent = 'Yes';
    modalBtnNo.textContent = 'No';


    modalWrapper.append(modalTitle);
    modalWrapper.append(modalBtnYes);
    modalWrapper.append(modalBtnNo);

    return modalWrapper;
}   