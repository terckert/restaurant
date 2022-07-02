import './styles/style.css'
import { buildHome } from './pages/home'

// const content = document.getElementById('content') // Access to the content body element

// // Nav Button accessors.
// const homeNav = document.getElementById('home')
// const menuNav = document.getElementById('menu')
// const contactNav = document.getElementById('contact')

// Assign onclick properties
// const assignNavButtonOnclicks = () => {
//     homeNav.onclick = buildHome
//     console.log ("Need to create buildMenu function")
//     console.log ("Need to create buildContact function")
// }
buildSkeleton = () => {
    body = document.getElementsByTagName('body')[0]
    body.innerHTML = `
    <nav id="nav-bar" class="colored-bckg">
        <button id="home" class="colored-bckg nav-button not-selected">Home</button>
        <button id="menu" class="colored-bckg nav-button not-selected">Menu</button>
        <button id="contact" class="colored-bckg nav-button not-selected">Contact</button>
    </nav>
    <div id="content-container">
        <!-- Home Page Test -->
        <div id="content" class="colored-bckg">    
        </div>
        <!-- <div id="content" class="colored-bckg"></div> -->
        <!-- <div id="content" class="colored-bckg"></div> -->
    </div>
    <footer class="colored-bckg">
        <span> Made by Timothy Erckert</span>
        <a title="Github repo" href="https://github.com/terckert/restaurant"><img id="github-logo" src="../src/images/GitHub-Mark-32px.png" alt=""></a>
    </footer>`
}


const updateNavButtons = newlySelectedButton => {
    // Get the currently selected button nav
    const currentlySelected = document.getElementsByClassName('selected')
    for (button of currentlySelected) {
        // Remove selected class, add not-selected class
        button.classList.replace('selected', 'not-selected')
    }
    // Remove not-selected class, add selected class
    newlySelectedButton.classList.replace('not-selected', 'selected')
}

// assignNavButtonOnclicks()
buildSkeleton()
buildHome()

