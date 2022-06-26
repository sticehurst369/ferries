# Ferry Test Spec

tags: ferry, browser, ui

A user goes to the special offers page and then changes the site language


* Given I navigate to the homepage

## Ferry Language Scenario
* When I select "special offers" from topmenu
* Then I am on special offers

* When I set language to "France"
* Then I am on homepage
* Then homepage contains "Rechercher"

The scenario below will use mocked data to test the UI with the expected results returned.  <exp> values are currently dummy values that make up the mocked data
A seperate api test will use similar data scenarios against real data.

## Ferry Deal Finder

   |type  |from    |to       |adults|children|pets|car |diff |curr|exp          |
   |------|--------|---------|------|--------|----|----|-----|----|-------------|
   |return|today+30|today+60 |1     |1       |1   |Ford|false|£   |10           |
   |return|today   |today +60|1     |1       |1   |Ford|false|£   |14           |
   |return|today+60|today +30|1     |1       |1   |Ford|false|£   |15           |
   |return|today+60|         |1     |1       |1   |Ford|false|£   |not permitted|
   |return|today+30|today+60 |1     |0       |0   |Ford|false|£   |23           |
   |return|today+30|today+60 |0     |1       |1   |Ford|false|£   |not permitted|
   |return|today+30|today+60 |10    |20      |30  |Ford|false|£   |3            |
   |single|today+30|         |1     |1       |1   |Ford|false|£   |6            |
   |single|today-1 |         |1     |1       |1   |Ford|false|£   |not permitted|
   |return|today+30|today+60 |1     |0       |0   |    |false|£   |4            |
   |return|today+30|today+60 |1     |0       |0   |    |true |£   |5            |
   |return|today+30|today+60 |1     |0       |0   |    |false|$   |6            |

* Given I am on homepage
* When I populate deal finder of <type> from <from> to <to> with <adults> adults, <children> chidren, <pets> pets with <car> and <curr>
* Then <exp> results returned
