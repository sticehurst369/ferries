const { BasePage } = require("./base.page");
const { MenuBar } = require("./components/menuBar");

const { HomepageLocators } = require("../locators/homepage.locators");

const { goto } = require("taiko");


class HomePage extends BasePage {

   constructor() {
      super();
   }

   // declare locators and component objects within page
   homepageLocators = HomepageLocators;
   menuBar = new MenuBar();

   path = "/";

   /**
    * goto the page, using url property from base class
    * 
    * @returns bool
    */
   async goto() {
      let ret = await goto(`super.url()${this.path}`);
      return ret;
   }


   /**
    * determine you are on the page, look at the url and any main features
    * 
    * @returns bool
    */
   async onPage() {
      // TODO
      throw "not yet implemented";
   }


   /**
    * select a menu item
    * 
    * @param {string} theMenu menu item to select 
    * @returns bool
    */
   async menuSelect(theMenu) {
      let ret = this.menuBar.select(theMenu);
      return ret;
   }


   /**
    * select from the language pulldown
    * 
    * @param {string} theLang 
    */
   async setLanguage(theLang) {
      this.menuBar.selectLanguage(theLang);
   }




}


module.exports = { HomePage }


