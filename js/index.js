const toggleMenu = () => {
    let navbar = document.getElementsByClassName("navbar-ul")[0];
    navbar.classList.toggle("hide");
}

const year = document.getElementsByClassName("year")[0];
year.innerHTML = year.innerHTML + " " + new Date().getFullYear() + " MoRoXo"
