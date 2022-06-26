const { MenuBarLocators } = require("locators/ferryMenuBar.locators");

const { click, $ } = require("taiko");


class MenuBar {

   constructor() {
   }

   // declare locators and component objects within page
   menubarLocators = MenuBarLocators;

   /**
    * click on the text within the main menubar locator css selector
    * 
    * @param {string} menuText 
    * @returns bool
    */
   async select(menuText) {
      let ret = await click(menuText, within($(menubarLocators.main.css)));
      return ret;
   }


   /**
    * open up the dropdown and then find and click on the language string that will then appear
    * 
    * @param {string} theLang 
    * @returns bool
    */
   async selectLanguage(theLang) {
      await click(this.menubarLocators.currencyDropDown.css, within($(menubarLocators.main.css)));
      let ret = click(theLang, within($(this.menubarLocators.currencyItem.css)));

      return ret;
   }




}


module.exports = { MenuBar }


