const users = [
  {
    fullname: "Rahul Sharma",
    img: "https://plus.unsplash.com/premium_photo-1766341848075-efbaab0ee598?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    profession: "Web Developer",
    description: "A passionate web developer skilled in HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"]
  },
  {
    fullname: "Priya Verma",
    img: "https://images.unsplash.com/photo-1766282088801-cad8cbae5ed5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    profession: "UI/UX Designer",
    description: "Creative designer focused on user-friendly and clean interfaces.",
    tags: ["UI", "UX", "Figma", "Design"]
  },
  {
    fullname: "Amit Patel",
    img: "https://images.unsplash.com/photo-1765192619677-5260e029d4a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    profession: "Backend Developer",
    description: "Backend specialist experienced with APIs and databases.",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },
  {
    fullname: "Neha Singh",
    img: "https://images.unsplash.com/photo-1766964855974-1dfcf5107823?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    profession: "Digital Marketer",
    description: "Marketing expert helping brands grow online.",
    tags: ["SEO", "Social Media", "Content", "Ads"]
  },
  {
    fullname: "Karan Mehta",
    img: "https://images.unsplash.com/photo-1764593008195-87ca871d72bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    profession: "Cybersecurity Analyst",
    description: "Focused on securing systems and preventing cyber attacks.",
    tags: ["Cybersecurity", "Networking", "Ethical Hacking"]
  }
];

var sum=''
users.forEach(function(elem){
    sum=sum+`<div class="card">
            <img src="${elem.img}"
                alt="">
            <h3>${elem.fullname}</h3>
            <h4> ${elem.profession}</h4>
            <h5>Description: ${elem.description}</h5>
            <h6>Tags:${elem.tags}</h6>
        </div>`
})

var main=document.querySelector('main')

main.innerHTML=sum