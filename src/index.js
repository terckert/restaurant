const content = document.getElementById('content') // Access to the content body element

// Nav Button accessors.
const homeNav = document.getElementById('home')
const menuNav = document.getElementById('menu')
const contactNav = document.getElementById('contact')

const freshness = `Kelli's Roast Beef and Clams roasts our beef in-house and hand-carves ` +
                  `each slice when you order so it is always fresh and juicy. Our clams ` +
                  `are pulled from the pristine blue waters of Lake Erie an delivered ` +
                  `fresh daily.` 

const daysAndHours = [
    {"day": "Sunday", "hours": "CLOSED"},
    {"day": "Monday", "hours": "CLOSED"},
    {"day": "Tuesday", "hours": "3pm - 10pm"},
    {"day": "Wednesday", "hours": "3pm - 10pm"},
    {"day": "Thursday", "hours": "3pm - 10pm"},
    {"day": "Friday", "hours": "11am - 12am"},
    {"day": "Saturday", "hours": "11am - 12am"},
]

// Assign onclick properties
const assignNavButtonOnclicks = () => {
	homeNav.onclick = buildHome
	menuNav.onclick = buildMenu
	contactNav.onclick = buildContact
}	

const clearContentOnPageLoad = () => {
	content.innerHTML = ''
	GenerateLogo()
}

const GenerateLogo = () => {
    const hOne = document.createElement('h1')
    hOne.id = 'logo'
    hOne.innerText = `Kelli's Roast Beef Curtains and Clams`
    content.append(hOne)
}

/***************************************************************************************
 * Homepage generation
***************************************************************************************/


const updateNavButtons = newlySelectedButton => {
    // Get the currently selected button nav
    const currentlySelected = document.getElementsByClassName('selected')
    if (currentlySelected.length > 0) {
        // Remove selected class, add not-selected class
        currentlySelected[0].classList.replace('selected', 'not-selected')
    }
    // Remove not-selected class, add selected class
    newlySelectedButton.classList.replace('not-selected', 'selected')
	clearContentOnPageLoad()
}

// Used in functions that have option an option classList
const addClass = (item, classList) => {
	if (classList != null)
		item.classList.add(classList)
}

const generateHomecard = (
	id,			// Element ID
	titleText	// Element title Text
) => {
	// Create the list item and assign it's id and homecard.
	const homecard = document.createElement('li')
	homecard.id = id
	homecard.setAttribute('class', 'homecard')

	// Assign subheader to homecard element
	const h3 = document.createElement('h3')
	h3.innerText = titleText
	// Attach homecard value
	homecard.append(h3)
	return homecard
}

const generateElementWithInnerText = (
	elementType,		// Dom element type
	text,				// Inner Text
	classList = null	// Optional classlist
) => {
	const ele = document.createElement(elementType)	// Create dom element to be returned
	ele.innerText = text							// Add inner text
	if (classList !== null) 						// Check for optional classlist
		ele.classList.add(classList)				// Add if necessary
	return ele										// Return new element
}

// const generateParagraph = (
// 	text, 				// Paragraph text
// 	classList = null	// optional classlist
// ) => {
// 	paragraph = document.createElement('p')
// 	paragraph.innerText = text
// 	addClass(paragraph, classList)
// 	return paragraph
// }

// const generateH3 = (
// 	text,				// Inner text
// 	classList = null	// optional classlist
// ) => {
// 	h3 = document.createElement('h3')
// 	h3.innerText = text

// }

const generateAndAppendHoursOfOperationTable = (
	parent		// Table parent
) => {
	const tbody = document.createElement('tbody')
	// Loop through array, generate, and append the row to the table.
	daysAndHours.forEach( day => generateHoursOfOperationRows(day, tbody))

	const table = document.createElement('table')
	table.innerHTML = `<colgroup><col id="day"><col id="hours"></colgroup>`
	table.append(tbody)

	parent.append(table)
}

const generateHoursOfOperationRows = (
    day,		// Element from dayAndHours array
	tbody		// Table body that we are appending to
) => {
	const tr = document.createElement('tr')
	let td = document.createElement('td')
	td.innerText = day['day']
	tr.append(td)
	td = document.createElement('td')
	td.innerText = day['hours']
	tr.append(td)
	tbody.append(tr)
}

const buildHome = () => {
    if (homeNav.classList.contains('selected')) return
    updateNavButtons(homeNav)               // Update the buttons values.

    // CONTENT BODY
    const mainBody = document.createElement('ul')
    
    // Create freshness guarantee homecard.
    const freshnessGuarantee = generateHomecard('we-rule','Our freshness guarantee...')
    freshnessGuarantee.append(
		generateElementWithInnerText(
			'p',
			freshness
	))

    // Create hours of operation element.
    const hoursOfOp = generateHomecard('hours-table', `Restaurant Hours`)
    generateAndAppendHoursOfOperationTable(hoursOfOp)
	
    // Create address element.
    const address = generateHomecard(`address`, `Address`)
	address.append(
		generateElementWithInnerText(
			'p',
			`101 213th Ave, Buffalo, NY 42069`
	))
    
	// Attaching mainbody elements
	mainBody.append(freshnessGuarantee)
    mainBody.append(address)
    mainBody.append(hoursOfOp)
		
    // Build site
    content.append(mainBody)
}

/***************************************************************************************
 * Menu generation
***************************************************************************************/
  
const MenuItems = [
	{
		"name":"Roast Beef on Weck",
		"image":"../src/images/menu-items/beef-on-weck.jpg",
		"credit":`<a href="http://1.bp.blogspot.com/_3sCgoK5pBp8/TC-ZrLzNPoI/AAAAAAAAA4w/n8KPul34_Ng/s1600/DSC_3123.jpg">Blogspot</a>`,
		"description":"Our famous roast beef piled high on a house-made kimmelweck roll.",
	},
	// {
	// 	"name":"Grilled Cheese",
	// 	"image":"../src/images/menu-items/grilled-cheese.jpg",
	// 	"credit":`Photo by <a href="https://unsplash.com/@llioangharad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Llio Angharad</a> on <a href="https://unsplash.com/s/photos/roast-beef-sandwich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
	// 	"description":"",
	// },
	{
		"name":"Bacon Cheeseburger Sliders",
		"image":"../src/images/menu-items/sliders.jpg",
		"credit":`Photo by <a href="https://unsplash.com/@blitzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Niklas Rhöse</a> on <a href="https://unsplash.com/s/photos/roast-beef-sandwich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
		"description":"Four bacon cheesburger sliders topped with ketchup, mustard, and pickled onions.",
	},
	{
		"name":"Cheeseburger",
		"image":"../src/images/menu-items/cheeseburger.jpg",
		"credit":`Photo by <a href="https://unsplash.com/@loeees_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Loes Klinker</a> on <a href="https://unsplash.com/s/photos/roast-beef-sandwich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
		"description":"Two, seared one-third pound burger patties topped with gooey smoked cheddar, pickles, and pickled onions.",
	},
	{
		"name":"Clams",
		"image":"../src/images/menu-items/clams.jpg",
		"credit":`Photo by <a href="https://unsplash.com/@adriensala?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adrien Sala</a> on <a href="https://unsplash.com/s/photos/clams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
		"description":"Fresh clams sauteed in a white wine, lemon-butter sauce.",
	},
	// Styling template for additional menu items
	// {
	// 	"name":"",
	// 	"image":"./images/menu-items/",
	// 	"credit":``,
	// 	"description":"",
	// },
	
]

const buildCard = menuItem => {
	// Create the return element
	const card = document.createElement('div')
	card.classList.add('card')
	
	// Menu item name
	card.append(
		generateElementWithInnerText(
			'h3',
			menuItem['name']
	))

	// Add photo
	const menuPic = document.createElement('div')
	menuPic.classList.add('card-image')
	menuPic.style.backgroundImage = `url(${menuItem['image']})`
	card.append(menuPic)

	// Photo accreditation
	const accreditation = document.createElement('div')
	accreditation.classList.add('accreditation')
	accreditation.innerHTML = menuItem['credit']
	card.append(accreditation)

	// Menu item description
	card.append(
		generateElementWithInnerText(
			'p',
			menuItem['description'],
			'menu-description'
	))
	
	return card
}

const buildCardContainer = () => {
	const cardContainer = document.createElement('div')
	cardContainer.id = 'card-container'
	MenuItems.forEach(menuItem =>{
		cardContainer.append(buildCard(menuItem))
	})
	return cardContainer
}

const buildMenu = () => {
	if (menuNav.classList.contains('selected')) return
    updateNavButtons(menuNav)
	
	content.append(buildCardContainer())

	console.log ("Need to create buildMenu function")

}

/***************************************************************************************
 * Contact generation
***************************************************************************************/
const buildContact = () => {
	if (contactNav.classList.contains('selected')) return
    updateNavButtons(contactNav) 
	console.log ("Need to create buildContact function")

}

assignNavButtonOnclicks()
buildHome()