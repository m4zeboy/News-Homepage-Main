/* Designed by Moisés Silva de Azevedo, São Paulo. */

const openMobileNavigationButton = document.querySelector("#open-mobile-navigation");
const closeMobileNavigationButton = document.querySelector("#close-mobile-navigation");
const mobileNavigationDialog = document.querySelector("dialog#mobile-navigation");

function openMobileNavigation() {
    mobileNavigationDialog.showModal();
}

function closeMobileNavigation() {
    mobileNavigationDialog.close();
}
openMobileNavigationButton.addEventListener("click", openMobileNavigation)
closeMobileNavigationButton.addEventListener("click", closeMobileNavigation)