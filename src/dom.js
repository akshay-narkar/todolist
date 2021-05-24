// let showForm = document.querySelector('#form-btn');

export const formBtn = document.querySelector('#form-btn');
export const showForm = document.querySelector('#form-display');
export const taskbtn = document.querySelector('#task-btn');
export const showlist = document.querySelector('#list-display');
export const refreshlist = document.querySelector('#refresh-btn');
export const listoflist1 = document.querySelectorAll('.listoflist');
export const content1 = document.getElementById('currentclassname');
export const defaultlisthome = document.getElementById('defaultlist');
export const readRadios1edit = document.querySelectorAll('.radiobtnedit')
export const taskedit = document.getElementById('taskedit');
export const dateedit = document.getElementById('dateedit');
const editingform = document.getElementById('editingform');

// export const submitlist = document.querySelector('#submitlist')
// export const submittask = document.querySelector('#submittask')

export function dom() {
  formBtn.addEventListener('click', () => {
    if(localStorage.getItem('selectedlist')){

    if (showForm.classList.contains('d-none')) {
      showForm.classList.remove('d-none');
    } else {
      showForm.classList.add('d-none');
    }
  }
   else{
      alert("Please select a list to create the task");
    }
  });

  taskbtn.addEventListener('click', () => {
   
  
    if (showlist.classList.contains('d-none')) {
      showlist.classList.remove('d-none');
    } else {
      showlist.classList.add('d-none');
    }}
 
  );

  refreshlist.addEventListener('click', () => {
    if (localStorage.getItem('selectedlist')) {
      localStorage.removeItem('selectedlist');
      while (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
    }
  });

  function localstorage1() {
    let liststasks = [];
    if (localStorage.getItem('liststore')) {
      liststasks = JSON.parse(localStorage.liststore);
    }
    return liststasks;
  }

  function deletelist(event) {
    let remove = event.target.previousSibling.id;
    remove = remove.slice(-1);

    // const liststasks = JSON.parse(localStorage.liststore);
    const liststasks = localstorage1();
    liststasks.splice(remove, 1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
    event.target.parentElement.remove();
    if (localStorage.getItem('selectedlist') === event.target.previousSibling.innerHTML.trim()) {
      localStorage.removeItem('selectedlist');
      while (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
    }
  }

  function deletetask(e) {
    const listtasks = localstorage1();
    const selecteditem = localStorage.getItem('selectedlist');

    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selecteditem) {
        let remove = e.target.parentElement.parentElement.id;
        remove = remove.slice(-1);
        listtasks[i].todos.splice(remove, 1);
        localStorage.setItem('liststore', JSON.stringify(listtasks));
        break;
      }
    }
    e.target.parentElement.parentElement.remove();
  }

  function edittask(e) {

   if(editingform.classList.contains('d-none')){ 
    let currenttaskname = e.target.parentElement.parentElement.id.slice(-1);
    localStorage.setItem('selectedtask', currenttaskname);
    editingform.classList.remove('d-none');
    for(let i=0;i<3;i+=1)
      if(readRadios1edit[i].value === e.target.parentElement.previousSibling.innerHTML)
      {
         readRadios1edit[i].checked = true;
         break;
      }
    taskedit.value = e.target.parentElement.previousSibling.previousSibling.previousSibling.innerHTML;
    dateedit.value = e.target.parentElement.previousSibling.previousSibling.innerHTML;
   }
   else{
     editingform.classList.add('d-none');
    localStorage.removeItem('selectedtask');

   }
  }

  function checkboxtask(e){

    if(e.target.checked)
        console.log("checked")
        else
        console.log("unchecked");    
  }

  function showtasklist(selecteditem) {
    //     const listname = document.createElement('h4');
    //       content1.appendChild(listname);
    //       listname.setAttribute('class', 'text-center text-dark');
    //       listname.innerHTML = localStorage.selectedlist;
    //       showtasklist(localStorage.getItem('selectedlist'));

    const listtasks = localstorage1();

    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selecteditem) {
        const table = document.createElement('table');
        content1.appendChild(table);
        table.setAttribute('class', 'table table-stripped text-dark container pt-5');
        const tablehead = document.createElement('thead');
        const tableheading = document.createElement('tr');
        tablehead.setAttribute('class', 'text-center');

        tableheading.innerHTML = `  <th scope="column">Status</th>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Priority</th> 
                    <th>Update</th>
                    <th>Remove</th>`;

        tablehead.appendChild(tableheading);
        table.appendChild(tablehead);

        const tablebody = document.createElement('tbody');
        table.appendChild(tablebody);
        for (let j = 0; j < listtasks[i].todos.length; j += 1) {
          const tablerow = document.createElement('tr');
          tablerow.setAttribute('id', `task${j}`);
          tablerow.setAttribute('class', 'text-center');

          const td1 = document.createElement('th');
          tablerow.appendChild(td1);
          const checkbox = document.createElement('input');
          checkbox.addEventListener('click',checkboxtask);
          td1.appendChild(checkbox);
          checkbox.setAttribute('scope', 'row');

          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('class', 'form-check-input taskdone');
          const varnew = listtasks[i].todos[j];
          const td2 = document.createElement('td');
          tablerow.appendChild(td2);
          td2.innerHTML = varnew.task;
          const td3 = document.createElement('td');
          tablerow.appendChild(td3);
          td3.innerHTML = varnew.date;
          const td4 = document.createElement('td');
          td4.innerHTML = varnew.priority;
          tablerow.appendChild(td4);
          const td5 = document.createElement('td');
          tablerow.appendChild(td5);
          const editbutton = document.createElement('button');
          editbutton.addEventListener('click', edittask);

          td5.appendChild(editbutton);

          editbutton.setAttribute('class', 'btn btn-primary edittask');
          // editbutton.setAttribute('id', 'edittask');
          editbutton.innerHTML = 'Edit';
          const td6 = document.createElement('td');
          tablerow.appendChild(td6);
          const delbutton = document.createElement('button');
          delbutton.addEventListener('click', deletetask);
          td6.appendChild(delbutton);
          // delbutton.setAttribute('id', 'deltask');
          delbutton.setAttribute('class', 'btn btn-danger deltask');
          delbutton.innerHTML = 'Delete';
          tablebody.appendChild(tablerow);
        }
      }
    }
  }

  function showlistname() {
    if (localStorage.getItem('selectedlist')) {
      // while(table.lastElementChild)
      // {
      //   table.removeChild(table.lastChild);
      // }
      // if (content1.lastElementChild) {
      //   content1.removeChild(content1.lastChild);
      // }
      while (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
      const listname = document.createElement('h4');
      content1.appendChild(listname);
      listname.setAttribute('class', 'text-center text-dark mb-4');
      listname.innerHTML = localStorage.selectedlist;
      showtasklist(localStorage.getItem('selectedlist'));
    }
  }

  function addtolist(e) {
    const currentList = e.target.textContent.trim();
    localStorage.setItem('selectedlist', currentList);
    showlistname();
  }

 

  function displaylist() {
    if (localStorage.getItem('liststore')) {
      const lists = JSON.parse(localStorage.liststore);

      const table = document.querySelector('#listoftodos');

      // while(table.lastElementChild)
      // {
      //   table.removeChild(table.lastChild);
      // }

      for (let i = 1; i < lists.length; i += 1) {
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.setAttribute('class', 'd-flex my-2 justify-content-center');
        const tablerow = document.createElement('h5');
        link.appendChild(tablerow);
        tablerow.addEventListener('click', addtolist);
        tablerow.setAttribute('id', `projectlist${i}`);

        tablerow.setAttribute('class', 'text-white p-2 w-50 text-center listoflist');
        tablerow.innerHTML = `
                     ${lists[i].list} 
                  
                    `;
        const listdelbtn = document.createElement('button');
        listdelbtn.addEventListener('click', deletelist);
        link.appendChild(listdelbtn);
        listdelbtn.setAttribute('class', 'btn btn-danger  btn-sm');
        listdelbtn.innerHTML = 'Delete';
        table.appendChild(link);
      }
    }
  }

  defaultlisthome.addEventListener('click', addtolist);

  showlistname();

  displaylist();
}
