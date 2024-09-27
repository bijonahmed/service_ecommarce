// plugins/navMenu.js
import $ from 'jquery'

const navMenuOpen = () => {
    $('.navi-menu-button').addClass('focused');
    $('div.nav-menu').fadeIn(50, function () {
        $('nav.menu').addClass('opened');
        // Add event listener to close the menu when clicking outside
        $(document).on('click', handleOutsideClick);
    });
}

const navMenuClose = () => {
    $('.navi-menu-button').removeClass('focused');
    $('nav.menu').removeClass('opened');
    $('div.nav-menu').fadeOut(200);
    // Remove the event listener when the menu is closed
    $(document).off('click', handleOutsideClick);
}

const handleOutsideClick = (event) => {
    if (!$(event.target).closest('nav.menu, .navi-menu-button').length) {
        navMenuClose();
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('navMenuOpen', navMenuOpen)
    nuxtApp.provide('navMenuClose', navMenuClose)
})
