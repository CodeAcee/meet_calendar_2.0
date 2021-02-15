import { users } from '../constant';
import { toogleState } from '../../modules/index';
import { filter } from '../../modules/table';

export const header = () => {
    const headerWrapper = document.createElement('div');
    const headerControl = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const headerSelect = document.createElement('select');
    const headerEventButton = document.createElement('button');

    headerWrapper.setAttribute('class', 'header');
    headerTitle.setAttribute('class', 'header__title');
    headerSelect.setAttribute('class', 'header__select');
    headerEventButton.setAttribute('class', 'btn header__button');
    headerControl.setAttribute('class', 'header__controls');

    headerTitle.textContent = 'Meet Calendar';
    headerEventButton.textContent = 'New event +';
    headerEventButton.addEventListener('click', () => {
        toogleState('.event');
    })
    const option = users.map(item => {
        const headerOption = document.createElement('option');
        headerOption.setAttribute('value', item);
        headerOption.textContent = item;
        headerSelect.append(headerOption);
    })

    headerSelect.setAttribute('name', 'users');
    headerSelect.setAttribute('id', 'users');
    
    headerSelect.append(...option);

    headerControl.append(headerSelect);
    headerControl.append(headerEventButton);
    headerWrapper.append(headerTitle);
    headerWrapper.append(headerControl);

    headerSelect.addEventListener('click', filter(headerSelect));

    return headerWrapper;
}
