"use strict";
const { SpecialOffersPage } = require("../../libs/pages/specialOffers.page");
const assert = require("assert");

let offersPageObj = new SpecialOffersPage();



step(["Given I am on special offers",
    "When I am on special offers",
    "Then I am on special offers"], async function () {
        assert(await offersPageObj.onPage());
    });



