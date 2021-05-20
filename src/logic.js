const submitlist = document.querySelector('#submitlist');
const submittask = document.querySelector('#submittask');
const listname = document.querySelector('#defaultlist');
const listoflist1 = document.querySelectorAll('.listoflist');

function logic() {
  class Createlist1 {
    constructor(list) {
      this.list = list;
      this.todos = [];
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

  const createlist = (e) => {
    const liststasks = localstorage1();
    const list1 = new Createlist1(list.value);
    liststasks.push(list1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
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
}
export default logic;