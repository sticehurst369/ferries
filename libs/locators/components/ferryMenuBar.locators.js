/**
 * define locators using id, css, class, or xpath - here I have specified more than one type as an example
 */


const MenuBarLocators = {
    main: { css: '#df-header-container .df__navbar', xpath: '//div[@id="df-header-container//div[@class="df__navbar"]' },
    currencyDropdown: { css: '#currencyDropdown' },
    currencyItem: { css: '#langDropdown li' }

};
module.exports = { MenuBarLocators }