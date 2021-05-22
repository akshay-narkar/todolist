const submitlist = document.querySelector('#submitlist');
const submittask = document.querySelector('#submittask');
const listname = document.querySelector('#defaultlist');
// const listoflist1 = document.querySelectorAll('.listoflist');
const list = document.getElementById('list');
const readRadios = document.getElementById('readRadios1');

function logic() {
  class Createlist1 {
    constructor(list) {
      this.list = list;
      this.todos = [];
    }
  }

  class Createtask1 {
    constructor(date, task, readRadios) {
      this.date = date;
      this.task = task;
      this.priority = readRadios;
    }
  }

  let liststasks = [];

  if (!localStorage.getItem('liststore')) {
    const listdefault = new Createlist1(listname.textContent);
    liststasks.push(listdefault);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
  }

  function localstorage1() {
    if (localStorage.getItem('liststore')) {
      liststasks = JSON.parse(localStorage.liststore);
    }
    return liststasks;
  }

  const createlist = () => {
    const liststasks = localstorage1();
    const list1 = new Createlist1(list.value);
    liststasks.push(list1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
  };

  const createtask = (e) => {
    const listtasks = localstorage1();
    const tasks = new Createtask1(date.value, task.value, readRadios1.value);

    if (localStorage.getItem('selectedlist')) {
      for (let i = 0; i < listtasks.length; i += 1) {
        const selectedlist = localStorage.getItem('selectedlist');

        if (listtasks[i].list === selectedlist) {
          listtasks[i].todos.push(tasks);
          localStorage.setItem('liststore', JSON.stringify(listtasks));
          break;
        }
      }
    } else { console.log('Select a list mofo'); }
    // localStorage.setItem('liststore', JSON.stringify(liststasks));
  };

  // function addtolist () {

  // let liststasks = localstorage1()
  //     // let list = liststasks.push(x,y,z)
  //  let tasks = ['x',1,'High',888];
  //     // let book1 = new Createbook(book.value, author.value, pages.value, readRadios1.checked);
  //   liststasks.push(tasks);
  //   localStorage.setItem("liststore", JSON.stringify(liststasks));
  // }

  // submittask.addEventListener('click',addtotask)
  submitlist.addEventListener('click', createlist);
  list.value = '';
  submittask.addEventListener('click', createtask);
}
export default logic;