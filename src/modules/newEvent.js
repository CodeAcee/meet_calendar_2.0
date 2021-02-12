import { errorBoundry } from '../untils/render/error-boundry';
import { data } from '../untils/constant';

let table = JSON.parse(localStorage.getItem('data'));
if (!table) {
  table = data;
  localStorage.setItem('data', JSON.stringify(data));
}

export const saveData = (obj) => {
    table.data[obj.day].push(obj);
    localStorage.setItem('data', JSON.stringify(table));
    table = JSON.parse(localStorage.getItem('data'));
}