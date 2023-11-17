const MOBILE_BREAKPOINT = "500px";
const MOBILE_BREAKPOINT_NUMBER = 500;

const toggleClass = (element, value) => {
    element.classList.toggle(value);
}
const hasClass = (element, value) => {
    return element.classList.contains(value);
}

const toggleButton = document.querySelector(".openNav");
const toggleNav = () => {
    const topNav = document.querySelector("#topNav");
    const navItems = document.querySelector("#topNav #navItems");
    topNav.style.transition = "height 0.4s";
    if (window.screen.availWidth <= MOBILE_BREAKPOINT_NUMBER) {
        topNav.style.height = topNav.style.height == "222px" ? "0px" : "222px" ;
    } else {
        topNav.style.height = topNav.style.height == "46px" ? "0px" : "46px" ;
    }
    
    toggleClass(toggleButton,"fa-chevron-down")
    toggleClass(toggleButton,"fa-chevron-up")
}

toggleButton.onclick = toggleNav;