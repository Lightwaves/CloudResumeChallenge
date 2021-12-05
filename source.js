function myFunction()
{
    var cssClass = document.getElementsByTagName("nav")[0];
    if(cssClass.className === "nav-list"){
        cssClass.className+="-responsive";
    }
    else {
        cssClass.className="nav-list";
    }

}

function jumpToAboutMe() {

    document.querySelector("a[href='#About-me']").click();

}