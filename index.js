//  Blurred Focus
const main = document.querySelector('main');


//  SIDEBAR
const btn = document.querySelector('.toggle-btn');
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//  Toggle Nested list
const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');
const nested_list1 = document.getElementById('nested-list1');
const nested_list2 = document.getElementById('nested-list2');

//Up and down icons
const uparrow1 = document.getElementById('up-arrow1');
const downarrow1 = document.getElementById('down-arrow1');
const uparrow2 = document.getElementById('up-arrow2');
const downarrow2 = document.getElementById('down-arrow2');  



//  Show and Hide Sidebar
btn.addEventListener ('click',() => {
    main.classList.add('blurred-focus');
    sidebar.classList.add('show-sidebar');
});

close_btn.addEventListener('click',() => {
    main.classList.remove('blurred-focus');
    sidebar.classList.remove('show-sidebar');
});

//  Show and hide nested list
toggle1.addEventListener('click', () => {
    if (nested_list1.classList.contains('show-nested-list')) 
    {
        nested_list1.classList.remove('show-nested-list');
        uparrow1.classList.add('hide-icon');
        downarrow1.classList.remove('hide-icon');
    }
    else
    {
        nested_list1.classList.add('show-nested-list');
        uparrow1.classList.remove('hide-icon');
        downarrow1.classList.add('hide-icon');
    }
});

toggle2.addEventListener('click', () => {
    if (nested_list2.classList.contains('show-nested-list')) 
    {
        nested_list2.classList.remove('show-nested-list');
        uparrow2.classList.add('hide-icon');
        downarrow2.classList.remove('hide-icon');
    }
    else
    {
        nested_list2.classList.add('show-nested-list');
        uparrow2.classList.remove('hide-icon');
        downarrow2.classList.add('hide-icon');
    }
});
