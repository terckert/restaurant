/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById('content') // Access to the content body element\r\n\r\n// Nav Button accessors.\r\nconst homeNav = document.getElementById('home')\r\nconst menuNav = document.getElementById('menu')\r\nconst contactNav = document.getElementById('contact')\r\n\r\nconst freshness = `Kelli's Roast Beef and Clams roasts our beef in-house and hand-carves ` +\r\n                  `each slice when you order so it is always fresh and juicy. Our clams ` +\r\n                  `are pulled from the pristine blue waters of Lake Erie an delivered ` +\r\n                  `fresh daily.` \r\n\r\nconst daysAndHours = [\r\n    {\"day\": \"Tuesday\", \"hours\": \"3pm - 10pm\"},\r\n    {\"day\": \"Wednesday\", \"hours\": \"3pm - 10pm\"},\r\n    {\"day\": \"Thursday\", \"hours\": \"3pm - 10pm\"},\r\n    {\"day\": \"Friday\", \"hours\": \"11am - 12am\"},\r\n    {\"day\": \"Saturday\", \"hours\": \"11am - 12am\"},\r\n    {\"day\": \"Sunday\", \"hours\": \"CLOSED\"},\r\n    {\"day\": \"Monday\", \"hours\": \"CLOSED\"},\r\n]\r\n\r\ncontent.innerHTML = \"\"\r\n\r\n// Assign onclick properties\r\nconst assignNavButtonOnclicks = () => {\r\n    homeNav.onclick = buildHome\r\n    console.log (\"Need to create buildMenu function\")\r\n    console.log (\"Need to create buildContact function\")\r\n}\r\n\r\nconst updateNavButtons = newlySelectedButton => {\r\n    // Get the currently selected button nav\r\n    const currentlySelected = document.getElementsByClassName('selected')\r\n    if (currentlySelected.length > 0) {\r\n        // Remove selected class, add not-selected class\r\n        currentlySelected[0].classList.replace('selected', 'not-selected')\r\n    }\r\n    // Remove not-selected class, add selected class\r\n    newlySelectedButton.classList.replace('not-selected', 'selected')\r\n}\r\n\r\nconst buildHome = () => {\r\n    if (homeNav.classList.contains('selected')) return\r\n    updateNavButtons(homeNav)               // Update the buttons values.\r\n    \r\n\r\n    // RESTAURANT NAME \r\n    const logo = document.createElement('h1') // Restaurant title\r\n    logo.id = 'logo'\r\n    logo.innerText = `Kelli's Roast Beef and Clams`\r\n    \r\n    // CONTENT BODY\r\n    const mainBody = document.createElement('ul')\r\n    \r\n    // Freshness guarantee\r\n    const weRule = document.createElement('li')\r\n    // Create freshness guarantee.\r\n    weRule.id = 'we-rule'\r\n    weRule.setAttribute('class', 'homecard')\r\n    let h3 = document.createElement('h3')\r\n    h3.innerText = \"Our freshness guarantee...\"\r\n    let p = document.createElement('p')\r\n    p.innerText = freshness\r\n    weRule.append(h3)\r\n    weRule.append(p)\r\n    mainBody.append(weRule)\r\n\r\n    // Create hours of operation element.\r\n    const hoursOfOp = document.createElement('li')\r\n    hoursOfOp.id = `hours`\r\n    hoursOfOp.setAttribute('class', 'homecard')\r\n    h3 = document.createElement('h3')\r\n    h3.innerText = \"Restaurant Hours\"\r\n    const table = document.createElement('table')\r\n    table.innerHTML = ` <colgroup><col id=\"day\"><col id=\"hours\"></colgroup>`\r\n    const tbody = document.createElement('tbody')\r\n    daysAndHours.forEach( day =>{\r\n        const tr = document.createElement('tr')\r\n        let td = document.createElement('td')\r\n        td.innerText = day['day']\r\n        tr.append(td)\r\n        td = document.createElement('td')\r\n        td.innerText = day['hours']\r\n        tr.append(td)\r\n        tbody.append(tr)\r\n    })\r\n    table.append(tbody)\r\n    hoursOfOp.append(h3)\r\n    hoursOfOp.append(table)\r\n    mainBody.append(hoursOfOp)\r\n\r\n    // Create address element.\r\n    const addy = document.createElement('li')\r\n    addy.id = `address`\r\n    addy.setAttribute('class', 'homecard')\r\n    h3 = document.createElement('h3')\r\n    h3.innerText = `Address`\r\n    p = document.createElement('p')\r\n    p.innerText = `101 213th Ave, Buffalo, NY 42069`\r\n    addy.append(h3)\r\n    addy.append(p)\r\n    mainBody.append(addy)\r\n\r\n    // Put it all together.\r\n    content.append(logo)\r\n    content.append(mainBody)\r\n}\r\n\r\nassignNavButtonOnclicks()\r\nbuildHome()\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;