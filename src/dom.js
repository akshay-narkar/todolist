// let showForm = document.querySelector('#form-btn');

export const formBtn = document.querySelector('#form-btn');
export const showForm = document.querySelector('#form-display');
export const taskbtn = document.querySelector('#task-btn');
export const showlist = document.querySelector('#list-display');
export const refreshlist = document.querySelector('#refresh-btn');
export const listoflist1 = document.querySelectorAll('.listoflist');
export const content1 = document.getElementById('currentclassname');
export const defaultlisthome = document.getElementById('defaultlist');
// export const submitlist = document.querySelector('#submitlist')
// export const submittask = document.querySelector('#submittask')

export function dom() {
  formBtn.addEventListener('click', () => {
    if (showForm.classList.contains('d-none')) {
      showForm.classList.remove('d-none');
    } else {
      showForm.classList.add('d-none');
    }
  });

  taskbtn.addEventListener('click', () => {
    if (showlist.classList.contains('d-none')) {
      showlist.classList.remove('d-none');
    } else {
      showlist.classList.add('d-none');
    }
  });

  refreshlist.addEventListener('click', () => {
    if (localStorage.getItem('selectedlist')) {
      localStorage.removeItem('selectedlist');

      content1.removeChild(content1.lastChild);
    }
  });

  function deletelist(event) {
    let remove = event.target.previousSibling.id;
    remove = remove.slice(-1);
    const liststasks = JSON.parse(localStorage.liststore);
    liststasks.splice(remove, 1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
    event.target.parentElement.remove();
    if (localStorage.getItem('selectedlist') === event.target.previousSibling.innerHTML.trim()) {
      localStorage.removeItem('selectedlist');
      content1.removeChild(content1.lastChild);
    }
  }

  function showlistname() {
    if (localStorage.getItem('selectedlist')) {
      if (content1.lastElementChild) {
        content1.removeChild(content1.lastChild);
      }
      const listname = document.createElement('h4');
      content1.appendChild(listname);
      listname.setAttribute('class', 'text-center text-dark');
      listname.innerHTML = localStorage.selectedlist;
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

// export {
//     dom,formBtn
// };

// for (let i = 1; i < lists.length; i += 1) {
//     const link = document.createElement('a');
//     link.setAttribute('href', '#');
//     const tablerow = document.createElement('div');
//     link.appendChild(tablerow);
//     tablerow.setAttribute('id', `projectlist${i}`);
//     tablerow.setAttribute('class','listoflist');
//     const tablerowinside = document.createElement('h5');

//     tablerowinside.setAttribute('class', 'text-center text-white m-4 ');
//     tablerowinside.innerHTML = `
//                    ${lists[i].list}
//                   `;
//     tablerowinside.appendChild(tablerow);
//     const deletebtn = document.createElement('button');
//     deletebtn.setAttribute('class','deletelist btn btn-small btn-danger');
//     deletebtn.innerHTML = 'Delete';
//     deletebtn.appendChild(tablerow);
//   }
// }