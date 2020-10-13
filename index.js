const $ = id => document.getElementById(id)
const fadeIn = element => element.style.animation = "fadeIn 0.5s forwards"
const fadeOut = element => element.style.animation = "fadeOut 0.5s forwards"

let welcome = $("welcome")
setTimeout(() => {
    welcome.innerHTML = "Hi"
    fadeIn(welcome)
}, 0)
setTimeout(() => fadeOut(welcome), 500)
setTimeout(() => {
    welcome.innerHTML = "I'm JhihYang Wu"
    fadeIn(welcome)
}, 1000)
setTimeout(() => fadeOut(welcome), 1500)
setTimeout(() => {
    welcome.innerHTML = "Check Out My Projects"
    fadeIn(welcome)
}, 2000)
setTimeout(() => fadeOut(welcome), 2500)
setTimeout(() => welcome.style.display = "none", 3000)

let projectNames = $("project-names")
setTimeout(() => {
    projectNames.style.display = "flex"
    fadeIn(projectNames)
}, 3000)

let projectContainer = $("project-container")
let leftContainer = $("left-container")
let topContainer = $("top-container")
function viewProject(object) {
    fadeOut(projectNames)
    setTimeout(() => {
        projectNames.style.display = "none"
        projectContainer.style.display = "block"
        fadeIn(projectContainer)

        leftContainer.innerHTML = `<iframe width="100%" height="100%" src="${videos[object.innerHTML]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        topContainer.innerHTML = descriptions[object.innerHTML]
    }, 500)
}

let videos = {
    "Cybertruck AI": "https://www.youtube.com/embed/xBYfPxx9vaE",
    "League of Legends Estimator": "https://www.youtube.com/embed/nqyi9SSuVbU",
    "Sim Taxi AI": "https://www.youtube.com/embed/5nq6Z3SnuJk",
    "CoderTree": "https://www.youtube.com/embed/a8bsKnmffr4",
    "BookTank": "https://www.youtube.com/embed/rGncEoZODnk",
}

let descriptions = {
    "Cybertruck AI": "<h1>Cybertruck AI</h1><h2>Inspiration</h2>After watching the unveil of the Tesla Cybertruck, I wanted to create a project with the mindset Tesla had when they designed this car, unconventionality. That is why I created a self-driving car that didn't follow the conventions. It could drive on the wrong side of the road or dodge cars only when they get too close. The only requirement is that the self-driving car shouldn't crash into other cars or the side of the road.<h2>Development Process</h2>In just one week after the Tesla Cybertruck was unveiled, I got started with this project. I first modeled the cars and sections of the road using Blender. I then imported the models into Unity and used code to make the road and cars spawn endlessly. After developing the mechanics of the car, I recorded myself driving it for about 20 minutes. Every frame, the system recorded down 24 distance values and the steering angle. This data is then fed into a neural network that tries to find the correlation between the distance values and the steering angle. Lastly, I connected the neural network with the steering wheel to make it drive by itself.",
    "League of Legends Estimator": "<h1>League of Legends Estimator</h1><h2>Inspiration</h2>I always wanted to maximize my chances of winning a League of Legends match. After understanding how important choosing the right champion to play is, I decided to create a web app that predicts the outcome of a game given the champions chosen by each team.<h2>Development Process</h2>Creating this project requires a lot of data from past matches. I spent weeks scraping data from the Riot Games API to obtain data from over a million matches. Riot Games limits the number of requests to only 100 every 2 minutes. I immediately created 10 accounts and a system to alternate them when making requests. After obtaining the data, I fed it into a neural network to find the relationship between champions chosen and the outcome of the game. The model achieved a validation accuracy of about 60% which is reasonable because most of what determines which team wins happens in the game. Nevertheless, I'm still amazed on how AI can give a team a head start to the match.",
    "Sim Taxi AI": "<h1>Sim Taxi AI</h1><h2>Inspiration</h2>After watching videos from the Python Plays Grand Theft Auto V series, I decided that I wanted to create my own self-driving car for a game that I used to play when I was really young. This was also one of my first machine learning projects so I wanted to learn more about convolutional neural networks and how to train them.<h2>Development Process</h2>Since I didn't make the game, the only way for my program to see the game is by screenshot. Training a neural network with images as input requires a lot of data so I recorded myself driving the car for hours. Each frame of my recording corresponds to the key I pressed at that moment. This turns the self-driving car problem into a basic image classification problem. I fed the data into a convolutional neural network for it to learn why I pressed a certain key when I saw a certain image of the game. I then gave the neural network control of my keyboard so it can drive by itself.<h2>Improvement</h2>I started this project after my freshman year of high school and continued to improve it up until now. When I first developed the project, I didn't balance the data which caused the self-driving car to only move forwards due to bias. After fixing that problem, I realized that the neural network couldn't get above 70% validation accuracy because the images were too complex even after resizing and gray scaling them. I then filtered each frame to make it black and white and combined it with previous frames for relativity. As a result, the convolutional neural network achieved a validation accuracy of over 80%.",
    "CoderTree": "<h1>CoderTree</h1><h2>Inspiration</h2>I always loved the rewarding feeling of solving a hard coding challenge. However, the process of solving one can be pretty depressing sometimes. That is why I created CoderTree, a platform for programmers to improve their skills by solving coding challenges together.<h2>Development Process</h2>To make CoderTree simple and easy to use, I coded the whole frontend without external libraries. The result of this is a single page application that loads instantly. The backend is developed using Python and Django making the code clean and concise. To show my interest in algorithms, I made a randomly generated binary search tree for the background of the landing page.",
    "BookTank": "<h1>BookTank</h1><h2>Purpose</h2>BookTank is a platform for students and parents to buy and sell textbooks with ease. At our school, students are required to buy their own textbooks for whichever course they choose to take. This process can be very inefficient sometimes and cause some people to buy books that are overpriced. With BookTank, users can easily post information about their books for everyone to see. After a book is reserved, it will immediately disappear from the platform preventing others from trying to buy the same book. BookTank also has its own chatting system neglecting the need to add each other's social media accounts.<h2>Teamwork</h2>BookTank was originally created by a team of 2 before being passed down to me and 2 other classmates. We worked closely together to redesign and redevelop BookTank from scratch. We added completely new features to BookTank including the ability to communicate directly in-app. Due to the pandemic, we had to call numerous times in order to finish development in just 5 months. We even had to restart along the way because we wanted to perfect the user interface and user experience. As a result, we created a WeChat mini program that we are truly proud of.<h2>Statistics</h2>As of September 18th, 2020\nBookTank has a total of 1453 visitors, with 775 before this year.\nBookTank has 323 registered users this year.\nBookTank facilitated the buying and selling of over 300 books this year.\nBookTank connected over 422 pairs of people this year.",
}

function viewProjectNames() {
    fadeOut(projectContainer)
    setTimeout(() => {
        projectContainer.style.display = "none"
        projectNames.style.display = "flex"
        fadeIn(projectNames)
    }, 500)
}