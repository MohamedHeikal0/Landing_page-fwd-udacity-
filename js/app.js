
// build the nav
const allSections = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');
    let buildingnav = '';
    allSections.forEach((section,i) => {
        const sectionId = section.id;
        const navData = section.dataset.nav;
        if(i == 0 ){
            buildingnav += `<li><a href="#${sectionId}" class="active__link menu__link" id="${sectionId}-link">${navData}</a></li>`
            // buildingnav += `<li><a href="#${sectionId}" class="active__link menu__link" >${navData}</a></li>`
        }else{
            buildingnav += `<li><a href="#${sectionId}" class="menu__link" id="${sectionId}-link">${navData}</a></li>`
            // buildingnav += `<li><a href="#${sectionId}" class="menu__link" >${navData}</a></li>`
        }
    });
    nav.innerHTML = buildingnav;

// responsive Menu button
let btn = document.getElementsByTagName("button");
let btn_nav = document.querySelector(".navbar__btn ul");
// let nav_block = document.getElementById("navbar__btn");
btn[0].addEventListener("click",function(){
    if(btn_nav.style.display === "block"){
        btn_nav.style.display = "none";
    }else{
        btn_nav.style.display = "block";
    }
});


// active class on the nav bar
let list = document.getElementById("navbar__list");
let navbar_list = list.getElementsByClassName("nav");
for(let i=0; i<navbar_list.length;i++){
    navbar_list[i].addEventListener("click",function(){
        let current_nav = document.getElementsByClassName("active");
        current_nav[0]= current_nav[0].classList.remove("active");
        navbar_list[i] = navbar_list[i].classList.add("active");
    });
}

// Add class 'active' to section when scroll to it
window.addEventListener('scroll', e => {
    let activeSection = document.querySelector('.your-active-class')
    allSections.forEach(section => {
        if(Math.abs(section.getBoundingClientRect().top) < Math.abs(activeSection.getBoundingClientRect().top)){
            activeSection.classList.remove('your-active-class')
            section.classList.add('your-active-class')
        }
    })

})

//scroll to
const Sections = document.querySelectorAll('section');
Sections.forEach((section) => {
    const sectionId = section.id;
    Sections[0].addEventListener("click", function(){
        document.getElementById(`section${sectionId}`).scrollIntoView();
    })
});
