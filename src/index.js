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
    {"day": "Tuesday", "hours": "3pm - 10pm"},
    {"day": "Wednesday", "hours": "3pm - 10pm"},
    {"day": "Thursday", "hours": "3pm - 10pm"},
    {"day": "Friday", "hours": "11am - 12am"},
    {"day": "Saturday", "hours": "11am - 12am"},
    {"day": "Sunday", "hours": "CLOSED"},
    {"day": "Monday", "hours": "CLOSED"},
]

content.innerHTML = ""

// Assign onclick properties
const assignNavButtonOnclicks = () => {
    homeNav.onclick = buildHome
    console.log ("Need to create buildMenu function")
    console.log ("Need to create buildContact function")
}

const updateNavButtons = newlySelectedButton => {
    // Get the currently selected button nav
    const currentlySelected = document.getElementsByClassName('selected')
    if (currentlySelected.length > 0) {
        // Remove selected class, add not-selected class
        currentlySelected[0].classList.replace('selected', 'not-selected')
    }
    // Remove not-selected class, add selected class
    newlySelectedButton.classList.replace('not-selected', 'selected')
}

const buildHome = () => {
    if (homeNav.classList.contains('selected')) return
    updateNavButtons(homeNav)               // Update the buttons values.
    

    // RESTAURANT NAME 
    const logo = document.createElement('h1') // Restaurant title
    logo.id = 'logo'
    logo.innerText = `Kelli's Roast Beef and Clams`
    
    // CONTENT BODY
    const mainBody = document.createElement('ul')
    
    // Freshness guarantee
    const weRule = document.createElement('li')
    // Create freshness guarantee.
    weRule.id = 'we-rule'
    weRule.setAttribute('class', 'homecard')
    let h3 = document.createElement('h3')
    h3.innerText = "Our freshness guarantee..."
    let p = document.createElement('p')
    p.innerText = freshness
    weRule.append(h3)
    weRule.append(p)
    mainBody.append(weRule)

    // Create hours of operation element.
    const hoursOfOp = document.createElement('li')
    hoursOfOp.id = `hours`
    hoursOfOp.setAttribute('class', 'homecard')
    h3 = document.createElement('h3')
    h3.innerText = "Restaurant Hours"
    const table = document.createElement('table')
    table.innerHTML = ` <colgroup><col id="day"><col id="hours"></colgroup>`
    const tbody = document.createElement('tbody')
    daysAndHours.forEach( day =>{
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerText = day['day']
        tr.append(td)
        td = document.createElement('td')
        td.innerText = day['hours']
        tr.append(td)
        tbody.append(tr)
    })
    table.append(tbody)
    hoursOfOp.append(h3)
    hoursOfOp.append(table)
    mainBody.append(hoursOfOp)

    // Create address element.
    const addy = document.createElement('li')
    addy.id = `address`
    addy.setAttribute('class', 'homecard')
    h3 = document.createElement('h3')
    h3.innerText = `Address`
    p = document.createElement('p')
    p.innerText = `101 213th Ave, Buffalo, NY 42069`
    addy.append(h3)
    addy.append(p)
    mainBody.append(addy)

    // Put it all together.
    content.append(logo)
    content.append(mainBody)
}

assignNavButtonOnclicks()
buildHome()