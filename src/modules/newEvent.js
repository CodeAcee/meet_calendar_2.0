import { toogleState } from '../modules/index';
import { table } from '../untils/render/table';
import { tableData } from '../services/services';
import { errorBoundry } from '../untils/render/error-boundry';
const root = document.getElementById('root');

const showErr = (msg) => {
  root.append(errorBoundry(msg));
  toogleState('.error')
}

const emptyCheck = (value) => {
  if(value.time.length !== 0
    && value.title.length !== 0
    && value.user.length !== 0
    && value.day.length !== 0) {
      return true;
    }
    showErr('All place required');
  }

export const saveData = (obj) => {
    if(emptyCheck(obj)) {
      tableData[obj.day].push(obj);
      localStorage.setItem('data', JSON.stringify(tableData));
      table()
    }
    showErr('Place is booked');
    return tableData
}


// 1 Вызвать перерендер;
// 2 Подкл библиотечку;
// 3 Евент на модалку;
// 4 Почему клик только со второго раза 
// 5 По одной колонке в каждую стр