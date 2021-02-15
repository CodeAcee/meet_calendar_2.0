import { days } from '../untils/constant'
import { tableData } from '../services/services'
import { table } from '../untils/render/table'
export const remove = (idx) => {
  days.forEach((day) => {
    tableData[day] = tableData[day].filter((eventObj) => eventObj.id !== idx)
  })
  localStorage.setItem('data', JSON.stringify(tableData))
}

export const filter = (elem) => {
  elem.addEventListener('change', ({ target, ...event }) => {
    const selectedUser = target.options[target.selectedIndex].text
    const selecedDataByUser = Object.keys(tableData).reduce((acc, current) => {
      acc[current] = tableData[current].filter((item) => { 
        return item.user === selectedUser
      })
      return acc
    }, {})
    return table(selecedDataByUser)
  })
}

export const clear = () => {
  tableBody.innerHTML = ''
  tableHead.innerHTML = '<th>Name</th>'
}

//   export {clear, filter, remove};
