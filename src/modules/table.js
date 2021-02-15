
import { days } from '../untils/constant';
import { tableData } from '../services/services';

export const remove = (idx) => {
  days.forEach(day => {
    tableData[day] = tableData[day].filter(eventObj => eventObj.id !== idx);
  });
  localStorage.setItem('data', JSON.stringify(tableData));
  }

// const filter = () => {
//   const header = document.querySelector('.header__select')
//     .addEventListener('change', ({ target, ...event }) => {
//       const selectedUser = target.options[target.selectedIndex].text;
//       const selecedDataByUser = Object.keys(this.table.data).reduce((acc, current) => {
//         acc[current] = this.table.data[current].filter(item => {
//           return item.user.some(user => user.value === selectedUser);
//         });
//         return acc;
//       }, {});

//       return this.render(selecedDataByUser);
//     });
// }

// const clear = () => {
//   tableBody.innerHTML = '';
//   tableHead.innerHTML = '<th>Name</th>';
// }

//   export {clear, filter, remove};