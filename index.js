//  Blurred Focus
const main = document.querySelector('main');


//  SIDEBAR
const btn = document.querySelector('.toggle-btn');
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Toggle Nested list Mobile
const toggle_features_mobile = document.getElementById('toggle-features-mobile');
const toggle_company_mobile = document.getElementById('toggle-company-mobile');
const nested_list_features_mobile = document.getElementById('nested_list_features_mobile');
const nested_list_company_mobile = document.getElementById('nested_list_company_mobile');


// Toggle Nested list Desktop
const toggle_features_desktop = document.getElementById('toggle-features-desktop');
const toggle_company_desktop = document.getElementById('toggle-company-desktop');
const nested_list_features_desktop= document.getElementById('nested_list_features_desktop');
const nested_list_company_desktop = document.getElementById('nested_list_company_desktop');


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
toggle_features_mobile.addEventListener('click', () => {
    if (nested_list_features_mobile.classList.contains('show-nested-list')) 
    {
        nested_list_features_mobile.classList.remove('show-nested-list');
        uparrow1.classList.add('hide-icon');
        downarrow1.classList.remove('hide-icon');
    }
    else
    {
        nested_list_features_mobile.classList.add('show-nested-list');
        uparrow1.classList.remove('hide-icon');
        downarrow1.classList.add('hide-icon');
    }
});

toggle_company_mobile.addEventListener('click', () => {
    if (nested_list_company_mobile.classList.contains('show-nested-list')) 
    {
        nested_list_company_mobile.classList.remove('show-nested-list');
        uparrow2.classList.add('hide-icon');
        downarrow2.classList.remove('hide-icon');
    }
    else
    {
        nested_list_company_mobile.classList.add('show-nested-list');
        uparrow2.classList.remove('hide-icon');
        downarrow2.classList.add('hide-icon');
    }
});

//  Toggle Nested list Desktop

toggle_features_desktop.addEventListener('click', () => {
    if (nested_list_features_desktop.classList.contains('show-nested-list-features')) 
    {
        nested_list_features_desktop.classList.remove('show-nested-list-features');

    }
    else
    {
        nested_list_features_desktop.classList.add('show-nested-list-features');
       
    }
});

toggle_company_desktop.addEventListener('click', () => {
    if (nested_list_company_desktop.classList.contains('show-nested-list-company')) 
    {
        nested_list_company_desktop.classList.remove('show-nested-list-company');

    }
    else
    {
        nested_list_company_desktop.classList.add('show-nested-list-company');
        
    }
});
