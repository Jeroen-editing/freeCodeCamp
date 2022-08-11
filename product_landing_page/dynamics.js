const getById = (id) => (document.getElementById(id));

let date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const months = ["january", "february", "march", "april", "mei", "june", "july",
                "august", "september", "october", "november", "december" ]; 

const copyRight = () => {
    let hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
    let minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    let today = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}&nbsp;${date.getFullYear()}`;

    let time = getById('time');
    time.innerHTML = `${today}, ${hour}:${minutes}`;
}

copyRight();


const menu_btn = getById('menu_link');
const close_btn = getById('close_link');
const close_logo = getById('close_logo');
const menu_list =  getById('header_list');
const main_part = getById('main');

menu_btn.addEventListener('click', () => {
    menu_list.classList.replace('box_hidden', 'box_visible');
    main_part.style.marginTop = ".4rem";
});
close_btn.addEventListener('mouseover', () => {
    close_logo.src = 'assets/icons/arrow_up_blue.png';
});
close_btn.addEventListener('mouseout', () => {
    close_logo.src = 'assets/icons/arrow_up.png';
});
close_btn.addEventListener('click', () => {
    menu_list.classList.replace('box_visible', 'box_hidden');
    main_part.style.marginTop = "2.6rem";
});

const home_btn = getById('home_icon');
const home_logo = getById('home_icon');
const company = getById('company_name');
home_btn.addEventListener('click', () => {
    home_logo.classList.replace('comp_visible', 'comp_hidden');
    company.classList.replace('comp_hidden', 'comp_visible');
});
home_btn.addEventListener('scroll', () => {
    home_logo.classList.replace('comp_hidden', 'comp_visible');
    company.classList.replace('comp_visible', 'comp_hidden');
});