//function to show menu when the menu icon is clicked
let menuIcon = document.querySelector(".icon-border");
let ismenu = true;

menuIcon.addEventListener('click',function () {   
    if (ismenu) {
        document.querySelector(".nav-bar").style.display = 'flex';
        ismenu = false
        
    }else{
        document.querySelector(".nav-bar").style.display = 'none';
        ismenu = true
    }
    console.log(ismenu)
    //checking
})

