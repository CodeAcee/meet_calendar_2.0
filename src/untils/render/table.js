import { times, days } from '../constant';
import { toogleState } from '../../modules/index';
import { modal } from './modal';

export const table = (data) => {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  const tableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');
  const tableHeadCell = document.createElement('th');
  
  tableHeadCell.textContent = 'Name';
  tableHeadRow.append(tableHeadCell);

  times.forEach(time => {
    const row = document.createElement('tr');
    tableBody.append(row);
    row.innerHTML += `<th>${time}</th>`;
    days.forEach(day => {
      if (data[day].length && data[day][0].time === time) {
        row.innerHTML += `<td id=${data[day][0].id} class='hasTitle'>${data[day][0].title}</td>`;
      } else {
        row.innerHTML += '<td></td>';
      }
    });
  });

  days.forEach(day => {
    tableHeadRow.innerHTML += `<th>${day}</th>`;
  });

  tableHead.append(tableHeadRow);
  table.append(tableHead);
  table.append(tableBody);

  tableBody.onclick = (event) => {
    if (event.target.textContent !== '' || event.target.tagName === 'TD') {
    tableBody.append(modal(event));
    toogleState('.modal');
    }
  };
  
  return table;
}
