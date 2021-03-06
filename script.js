// going to add projects dynamically onto cards


//                    Task List
// Each project is not listed with title, deployment URL, GitHub URL, and a screenshot
// Each pinned project on GitHub does not have a README containing project descriptions, screenshots, and links to deployed applications
// GitHub profile contains photo or avatar, bio, email, and link to deployed portfolio


const projectContainer = document.getElementById('project-container')

const projects = [
    {
        title: 'Weather Dashboard',
        deployed: 'https://banger484.github.io/weather-dashboard/',
        repo: 'https://github.com/Banger484/weather-dashboard',
        img: 'imgs/projects/Screenshot (50).png'
    },
    {
        title: 'Note Master',
        deployed: 'https://fierce-oasis-24379.herokuapp.com/',
        repo: 'https://github.com/Banger484/note-master',
        img: 'imgs/projects/Screenshot (41).png'
    },
    {
        title: 'Password Generator',
        deployed: 'https://banger484.github.io/password-generator/',
        repo: 'https://github.com/Banger484/password-generator',
        img: 'imgs/projects/Screenshot (53).png'
    },
    {
        title: 'Cocktail Menu',
        deployed: 'https://banger484.github.io/cocktail-menu/',
        repo: 'https://github.com/Banger484/cocktail-menu',
        img: 'imgs/projects/Screenshot (54).png'
    }

]


function generateProjects () {
    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i]);
        const card = document.createElement('div')
        const title = document.createElement('h4')
        const deployed = document.createElement('a')
        const repo = document.createElement('a')
        const img = document.createElement('img')

        projectContainer.appendChild(card)
        card.appendChild(title)
        card.appendChild(deployed)
        card.appendChild(repo)
        card.appendChild(img)

        card.setAttribute('class', 'project-card')
        title.textContent = projects[i].title
        deployed.setAttribute('href', projects[i].deployed)
        deployed.textContent = 'Visit Deployed Page'
        repo.setAttribute('href', projects[i].repo)
        repo.textContent = 'Visit GitHub Repository'
        img.setAttribute('src', projects[i].img) 



    }
}
generateProjects()

