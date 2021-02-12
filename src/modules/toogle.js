
export const toogleState = (elem) => {
    const el = document.querySelector(elem)
    el.style.display = (el.style.display === 'none') ? 'flex' : 'none';
}
