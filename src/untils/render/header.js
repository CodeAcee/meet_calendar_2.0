export const header = () => {
    const headerWrapper = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const headerSelect = document.createElement('select');
    const headerOptionName = ['Maria', 'Bob', 'Jonh', 'Anastatya'];
    const headerEventButton = document.createElement('button');

    headerWrapper.setAttribute('class', 'header');
    headerTitle.setAttribute('class', 'header__title');
    headerSelect.setAttribute('class', 'header__select');
    headerEventButton.setAttribute('class', 'header__button');

    headerTitle.innerHTML = 'Meet Calendar';
    headerEventButton.innerHTML = 'New event +';

    const option = headerOptionName.map(item => {
        const headerOption = document.createElement('option');
        headerOption.setAttribute('value', item);
        headerOption.innerHTML = item;
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
