import { data } from '../untils/constant';
import { toogleState } from '../modules/index';

let table = JSON.parse(localStorage.getItem('data'));
if (!table) {
  table = data;
  localStorage.setItem('data', JSON.stringify(data));
}

const showErrr = (msg) => {
  toogleState('.error')
}

const emptyCheck = (value) => {
  if(value.time.length !== 0
    && value.name.length !== 0
    && value.users.length !== 0
    && value.day.length !== 0) {
      return true;
    }
    showErrr();
  }

export const saveData = (obj) => {
    if(emptyCheck(obj)) {
        table.data[obj.day].push(obj);
        localStorage.setItem('data', JSON.stringify(table));
        table = JSON.parse(localStorage.getItem('data'));
    }
    showErrr();
}