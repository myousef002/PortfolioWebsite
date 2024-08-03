let counter = 0;
let content = [
    'Developer...',
    'Student...',
    'Teacher...'
];

let jobTitle = document.querySelector('.job');

const slide = () => {
    if (counter >= content.length){
        counter = 0;
    }

    jobTitle.innerHTML = '';
    
    jobTitle.classList.remove('holder-animation');
    void jobTitle.offsetWidth;
    jobTitle.classList.add('holder-animation');

    const addLetterDiv = (letter, delay) => {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = letter === " " ? "&nbsp" : letter;
        letterDiv.classList.add('start', 'animation');
        letterDiv.style.animationDelay = delay + 's';
        jobTitle.appendChild(letterDiv);
    };
    
    for(let i = 0; i < content[counter].length; i++){
        addLetterDiv(content[counter][i], i / 10);
    }

    counter++;
};

slide();
setInterval(slide, 4000);