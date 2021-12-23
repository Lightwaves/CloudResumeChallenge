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

async function fetchCount() {
    let response = await fetch('https://api.lightwaves.me/api/visitor')
    
    return response.json();


}
async function addPageCount(){
    const visitor = JSON.stringify({DateTime: (new Date()).toISOString(), UserAgent: navigator.userAgent, Width: document.documentElement.clientWidth, Height: document.documentElement.clientHeight })
    const responseOptions = { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitor)
    };
    const postResp = await fetch("https://api.lightwaves.me/api/visitor", responseOptions);
    const countObj = await fetchCount();
    console.log(countObj["count"])
    const footer = document.querySelector("#footer");
    const node = document.createTextNode(`You are visitor number: ${countObj["count"]}`);
    footer.appendChild(node);
    



}

addPageCount();