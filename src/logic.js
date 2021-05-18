const submitlist = document.querySelector('#submitlist');
const submittask = document.querySelector('#submittask');
const listname = document.querySelector('#defaultlist');

function logic(dom1) {

class Createlist1 {

          constructor (list) {
            this.list = list;
            }
          }



let liststasks = [];

if(!localStorage.getItem('liststore')){
let listdefault = new Createlist1(listname.textContent);
liststasks.push(listdefault);
localStorage.setItem("liststore", JSON.stringify(liststasks));
}



function localstorage1(){

      if(localStorage.getItem('liststore')) {
         liststasks = JSON.parse(localStorage.liststore);
        }
  return liststasks;

}


function createlist(e){
  

      let liststasks = localstorage1();
      let list1 = new Createlist1(list.value);
      liststasks.push(list1);
      localStorage.setItem("liststore", JSON.stringify(liststasks));
}



// function addtolist () {

// let liststasks = localstorage1()
//     // let list = liststasks.push(x,y,z)
//  let tasks = ['x',1,'High',888];
//     // let book1 = new Createbook(book.value, author.value, pages.value, readRadios1.checked);
//   liststasks.push(tasks);
//   localStorage.setItem("liststore", JSON.stringify(liststasks));
// }
        

submitlist.addEventListener('click',createlist)
// submittask.addEventListener('click',addtotask)

        }

export default logic;