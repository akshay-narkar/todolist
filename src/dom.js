// let showForm = document.querySelector('#form-btn');

export const formBtn = document.querySelector('#form-btn');
export const showForm = document.querySelector('#form-display');
export const taskbtn = document.querySelector('#task-btn');
export const showlist = document.querySelector('#list-display');

// export const submitlist = document.querySelector('#submitlist')
// export const submittask = document.querySelector('#submittask')

export function dom() {

formBtn.addEventListener('click', () => {
  
  if (showForm.classList.contains('d-none')) {
    showForm.classList.remove('d-none');
  } else {
    showForm.classList.add('d-none');
  }
})


taskbtn.addEventListener('click', () => {
  
  if (showlist.classList.contains('d-none')) {
    showlist.classList.remove('d-none');
  } else {
    showlist.classList.add('d-none');
  }
})

  if(localStorage.getItem('liststore')){
            let lists = JSON.parse(localStorage.liststore);
            
            const table = document.querySelector('#listoftodos');

            // while(table.lastElementChild)
            // {
            //   table.removeChild(table.lastChild);
            // }

            for(let i=1;i<lists.length;i+=1)
            {
              let link = document.createElement('a');
              link.setAttribute('href','#');
              let tablerow = document.createElement('h5');
              link.appendChild(tablerow);
              tablerow.setAttribute('id','projectlist'+i);
              tablerow.setAttribute('class','text-center text-white m-4')
              tablerow.innerHTML = `
                     ${lists[i].list} 
                  
                    `
              table.appendChild(link);
            }

          }   

}


// export { 
//     dom,formBtn
// };