"use strict";
const { HomePage } = require("../../libs/pages/ferry.page");
const assert = require("assert");

let homePageObj = new HomePage();


step(["Given I navigate to the homepage",
    "When I navigate to the homepage",
    "Then I navigate to the homepage"], async function () {
        assert(await homePageObj.goto());
    });



step(["Given I am on homepage",
    "When I am on homepage",
    "Then I am on homepage"], async function () {
        assert(await homePageObj.onPage(), "expected to be on homepage but doesn't look like I am");
    });


step(["Given I select <menuItem> from topmenu",
    "When I select <menuItem> from topmenu",
    "Then I select <menuItem> from topmenu"], async function (menuItem) {
        assert(await homePageObj.menuSelect(menuItem));
    });


step(["Given I set language to <lang>",
    "When I set language to <lang>",
    "Then I set language to <lang>"], async function (lang) {
        assert(await homePageObj.setLanguage(lang));
    });


step(["Given homepage contains <findMe>",
    "When homepage contains <findMe>",
    "Then homepage contains <findMe>"], async function (findMe) {
        assert(await homePageObj.contains(findMe));
    });