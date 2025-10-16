let userInput;
let addList;
let parentUl;

let theLists = [];

   window.addEventListener('load', () => {
        
         addList = document.querySelector('#addList');
         userInput = document.querySelector('#userInput');
         parentUl = document.querySelector('#parentUl');
         
         const savedTasks = JSON.parse(localStorage.getItem('lists')) || []
         theLists = savedTasks;

         for(let lists of theLists){
            displayLists(lists)
         }


        addList.addEventListener('click', ()=>{
            addAList(userInput.value)
        })
        

        
    })


    function addAList(userinput){
        if(userinput === '')
        return;

        theLists.push(userinput);
        localStorage.setItem('lists',JSON.stringify(theLists));

        console.log(theLists)

        displayLists(userinput);
        userInput.value = ''
    }

    function displayLists(tasks){

            if(tasks === '')
            return;

            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.id = 'lists'
            li.textContent = tasks
            li.style.color = 'black'

            deleteButton.textContent = 'delete'
            deleteButton.id = 'deleteTask'

            deleteButton.addEventListener('click', ()=> {
                li.remove();

                localStorage.setItem('lists',JSON.stringify(theLists));
            })
            li.appendChild(deleteButton)
            parentUl.appendChild(li)


            
    }