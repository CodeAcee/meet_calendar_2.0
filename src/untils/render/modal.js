import { toogleState } from '../../modules/index';
import { remove } from '../../modules/table';

export const modal = (event) => {
    const modalWrapper = document.createElement('div');
    const btnWrapper = document.createElement('div');
    let modalTitle = document.createElement('p');
    const modalBtnYes = document.createElement('button');
    const modalBtnNo = document.createElement('button');

    modalWrapper.setAttribute('class', 'modal');
    btnWrapper.setAttribute('class', 'modal__btn__wrapper');
    modalTitle.setAttribute('class', 'modal__title');

    modalBtnYes.setAttribute('class', 'btn modal__btn--yes');
    modalBtnNo.setAttribute('class', 'btn modal__btn--no');

    modalTitle.textContent = `Are you sure want delete ${event.target.textContent} ?`;
    modalBtnYes.textContent = 'Yes';
    modalBtnNo.textContent = 'No';

    btnWrapper.append(modalBtnYes);
    btnWrapper.append(modalBtnNo);
    modalWrapper.append(modalTitle);
    modalWrapper.append(btnWrapper);

    modalBtnNo.addEventListener('click', () => {
        modalWrapper.remove();
    }); 

    modalBtnYes.addEventListener('click', () => {
        remove(event.target.id)
        modalWrapper.remove();
    });
    return modalWrapper;
}   

