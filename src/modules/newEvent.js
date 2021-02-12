import { data } from '../untils/constant';
import { toogleState } from '../modules/index';
import { table } from '../untils/render/table';

let tableData = JSON.parse(localStorage.getItem('data'));
if (!tableData) {
  tableData = data;
  localStorage.setItem('data', JSON.stringify(data));
}

const showErrr = (msg) => {
  toogleState('.error')
}

const emptyCheck = (value) => {
  if(value.time.length !== 0
    && value.title.length !== 0
    && value.user.length !== 0
    && value.day.length !== 0) {
      return true;
    }
    showErrr();
  }

export const saveData = (obj) => {
    if(emptyCheck(obj)) {
      tableData[obj.day].push(obj);
        localStorage.setItem('data', JSON.stringify(tableData));
        tableData = JSON.parse(localStorage.getItem('data'));
    }
  console.log(JSON.parse(localStorage.getItem('data')));
    showErrr();
    return tableData
}


// 1 Вызвать перерендер;
// 2 Подкл библиотечку;
// 3 Евент на модалку;
// 4 Евент на ошибку;
// 5 Разобратся с дключение общего метода рендер
// 6 Почему клик только со второго раза 