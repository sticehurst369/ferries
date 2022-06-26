# ferries

Spent just over an hour - automated bits of the first example and put test case/test data suggestions for the second.     I possibly used too much time on the automation, setting up classes etc...  However, this would be the approach I would take for  UI automated test, modelling bits of pages, as needed, as page object models, and defining their locators.   Locators I would try and use a unique id (if it's clear it is not auto generated), or a css selector path.  Sometimes an xpath for anything really tricky, but would probably discuss with dev to maybe put an id or a test id attribute in if it is hard to located within the DOM.

Note, not all paths within includes may match - I was doing it quickly and possibly moved files about

Using the Guage/Taiko test automation framework, javascript based:
  https://gauge.org/
  https://taiko.dev/
  
I have used Gauge as it's what I'm currently using at the moment.  I think it can be limiting in places and so I would had used Cypress as it is more versitile and I have been using it for the last two years.  However, for something quick here, I kept with what I'm currently using right now so I didn't have to go back into a "Cypress way of thinking", I haven't used Cypress since April.    

Gauge is able to use a Gherkin script if you program it that way, which is what I have done here.   The tests are in the *.spec files    
Gauge isn't strict about gherkin format (I would prefer if it was) and so you can structure spec files however you like, I've structured it to use Gherkin but it's possibly not fully proper Gherkin due to how Gauge works


Spec files look for their step definitions, I tend to put releted steps for each page in the same file, or generic steps in their own file.

POM created for a couple of pages, with methods and properties.  I did not complete it all, but put in code do some of the actual clicking on the menu and language items.    Locator files would normally have a lot more in, here I have put in just the initial bits.



These tests are quickly written and probbly would not work - if you were to run it then you would target gauge to read the spec file, the spec file will find it's steps, the steps will use methods within the POM, the methods within the POMs interact with the DOM  (and are reusable).   The test/assert would be in the step file.
