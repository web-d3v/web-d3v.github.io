const toggleClass = (element, value) => {
    element.classList.toggle(value);
}
const hasClass = (element, value) => {
    return element.classList.contains(value);
}

const toggleButton = document.querySelector(".openNav");
const toggleNav = () => {
    const topNav = document.querySelector(".topNav");
    const hidden = hasClass(topNav,"navDisabled");
    const navItems = document.querySelector(".topNav .navItems");
    topNav.style.transition = "height 2s";
    topNav.style.height = navItems.style.height;
    toggleButton.style.transform = hidden ? "rotate(180deg)" : "rotate(0deg)"
    toggleClass(topNav, "navDisabled")
    
    
}


toggleButton.onclick = toggleNav;