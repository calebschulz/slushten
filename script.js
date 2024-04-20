let encodedE = "aGVsbG9Ac2x1c2h0ZW4uY29t";
const form = document.getElementById("contactLink");
form.setAttribute("href", "mailto:".concat(atob(encodedE)));

window.addEventListener("scroll", function(){
    let currentSectionIndex = -1;
    let sections = document.querySelectorAll("section");
    let navButtons = document.querySelectorAll(".navButton");
    let navButtonIndex = 0;
    let navButton;

    sections.forEach(function(section){
        let sectionTop = section.getBoundingClientRect().top;
        let sectionBottom = section.getBoundingClientRect().bottom;
        let sectionHeight = sectionBottom - sectionTop;
        let sectionIndex = Array.from(sections).indexOf(section);
        navButton = navButtons[navButtonIndex];

        if(sectionTop > -sectionHeight/2 && sectionBottom < sectionHeight*1.5){
            currentSectionIndex = sectionIndex;
        }

        if(navButtonIndex == currentSectionIndex){
            navButton.classList.add("currentSection");
        } else {
            navButton.classList.remove("currentSection");
        }

        navButtonIndex++;
    });
});