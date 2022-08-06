//  SIDEBAR
const btn = document.querySelector('.toggle-btn');
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//  Toggle Nested list
const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');
const nested_list1 = document.getElementById('nested-list1');
const nested_list2 = document.getElementById('nested-list2');

const icon = document.querySelector('.icon');

//  Show and Hide Sidebar
btn.addEventListener ('click',() => {
    sidebar.classList.add('show-sidebar');
});

close_btn.addEventListener('click',() => {
    sidebar.classList.remove('show-sidebar');
});

//  Show and hide nested list
toggle1.addEventListener('click', () => {
    if (nested_list1.classList.contains('show-nested-list')) 
    {
        nested_list1.classList.remove('show-nested-list');
    }
    else
    {
        nested_list1.classList.add('show-nested-list');
    }
});

toggle2.addEventListener('click', () => {
    if (nested_list2.classList.contains('show-nested-list')) 
    {
        nested_list2.classList.remove('show-nested-list');
    }
    else
    {
        nested_list2.classList.add('show-nested-list');
    }
});
