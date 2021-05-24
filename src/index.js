import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css';
import * as dom1 from './dom';
import logic from './logic';
// import * as dom2 from './dom2';
dom1.dom();
logic(dom1);
// dom2.dom();

// const listoflist1 = document.querySelector('#projectlist1');
// console.log(listoflist1);