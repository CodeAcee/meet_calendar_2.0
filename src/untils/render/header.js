import { users } from '../constant';

export const header = () => {
    const headerWrapper = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const headerSelect = document.createElement('select');
    const headerEventButton = document.createElement('button');

    headerWrapper.setAttribute('class', 'header');
    headerTitle.setAttribute('class', 'header__title');
    headerSelect.setAttribute('class', 'header__select');
    headerEventButton.setAttribute('class', 'header__button');

    headerTitle.textContent = 'Meet Calendar';
    headerEventButton.textContent = 'New event +';

    const option = users.map(item => {
        const headerOption = document.createElement('option');
        headerOption.setAttribute('value', item);
        headerOption.textContent = item;
        headerSelect.append(headerOption);
    })

    headerSelect.setAttribute('name', 'users');
    headerSelect.setAttribute('id', 'users');
    
    headerSelect.append(...option);

    headerWrapper.append(headerTitle);
    headerWrapper.append(headerSelect);
    headerWrapper.append(headerEventButton);

    return headerWrapper;
}
