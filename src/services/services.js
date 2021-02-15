import { data } from '../untils/constant';

export let tableData = JSON.parse(localStorage.getItem('data'));
  if (!tableData) {
    tableData = data;
    localStorage.setItem('data', JSON.stringify(data));
  }
