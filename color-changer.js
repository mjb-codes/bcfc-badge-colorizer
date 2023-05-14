//toggle css style colours on button click

// retrieve button element by Id value
const homeModeToggle = document.getElementById("home-mode-toggle");

//set to remove all classes (set to default)
const clearClasses = () => {
    document.body.removeAttribute('class')};

//set to add class name to body    
const enableHomeMode = () => {
    document.body.classList.add("home");
};

// if the classlist already contains class name, clear classes
// if classlist contains another class name, or equals null, remove classes and apply class
homeModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains("home")){
        clearClasses();
    } else if (document.body.classList.length > 0.1 || document.body.classList == '') {
        clearClasses();
        enableHomeMode();
    }
});

//toggle away colours

const awayModeToggle = document.getElementById("away-mode-toggle");

const enableAwayMode = () => {
    document.body.classList.add("away");
};

awayModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains("away")){
        clearClasses();
    } else if (document.body.classList.length > 0.1 || document.body.classList == '') {
        clearClasses();
        enableAwayMode();
    }
});

//toggle gk colours

const gkModeToggle = document.getElementById("gk-mode-toggle");

const enableGkMode = () => {
    document.body.classList.add("gk");
};

gkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains("gk")){
        clearClasses();
    } else if (document.body.classList.length > 0.1 || document.body.classList == '') {
        clearClasses();
        enableGkMode();
    }
});

//toggle third kit 21 colours

const thr21ModeToggle = document.getElementById("third21-mode-toggle");

const enableThird21Mode = () => {
    document.body.classList.add("third-21");
};

thr21ModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains("third-21")){
        clearClasses();
    } else if (document.body.classList.length > 0.1 || document.body.classList == '') {
        clearClasses();
        enableThird21Mode();
    }
});

//toggle home kit 19 colours

const home19ModeToggle = document.getElementById("home19-mode-toggle");

const enableHome19Mode = () => {
    document.body.classList.add("home-19");
};

home19ModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains("home-19")){
        clearClasses();
    } else if (document.body.classList.length > 0.1 || document.body.classList == '') {
        clearClasses();
        enableHome19Mode();
    }
});

//toggle away kit 13 colours

const away13ModeToggle = document.getElementById("away13-mode-toggle");

const enableAway13Mode = () => {
    document.body.classList.add("away-13");
};

away13ModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains("away-13")){
        clearClasses();
    } else if (document.body.classList.length > 0.1 || document.body.classList == '') {
        clearClasses();
        enableAway13Mode();
    }
});