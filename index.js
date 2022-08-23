//  SIDEBAR
const btn = document.querySelector('.toggle-btn');
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//  Show and Hide Sidebar
btn.addEventListener ('click',() => {
    sidebar.classList.add('show-sidebar');
});

close_btn.addEventListener('click',() => {
    sidebar.classList.remove('show-sidebar');
});


//  Grab all nested links
const nestedLinks = document.querySelectorAll('.nested-link');

//  Add an event listener for each nested link for whn it is clicked
nestedLinks.forEach(link => {
    link.addEventListener('click',(e)=> {
        let element = e.currentTarget;
        const nestedList = element.querySelector('.nested-list');
        const upArrow = element.querySelector('.up-arrow');
        const downArrow = element.querySelector('.down-arrow');
        if (nestedList.classList.contains('show-nested-list')){
            upArrow.classList.add('hide-arrow');
            downArrow.classList.remove('hide-arrow');
            nestedList.classList.remove('show-nested-list');
        }
        else
        {
            upArrow.classList.remove('hide-arrow');
            downArrow.classList.add('hide-arrow');
            nestedList.classList.add('show-nested-list');
        }

    })
})