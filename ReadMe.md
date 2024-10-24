FOlder Structure

Screenshot - Folder for adding all the screenshot automatically. Below is the code to add wherever screenshot is required. Replace abc.png with the desired name and type of the image.
await page.screenshot({ path: 'screenshots/abc.png' }); 



Test:
Test folder is for maintaining the test cases, supportfile, feature files etc. 

AirlinePOC_TestCases 
This folder is for the main testcases. 
The test cases file should have .spec.js extension. 

Utility_files:
This is for maintaining the elements, locators, functions and other reusable components. Files under this folder should have.js extension.

Test-results:
This will show the latest run's report

playwright.config.js:
This file has the configuration of the project, If you want to run on different browsers, default headed mode etc can be changed in this file. 

package.json:
This file includes the dependencies.

