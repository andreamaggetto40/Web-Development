function button(text,func){
    let button = document.createElement("input");
    button.setAttribute("type","button");   
    button.setAttribute("value",text);
    button.addEventListener("click",func); //lambda function
    return button;
}

function CreateGallery(g){
    let images = g.getElementsByTageName("img");    
    let s = [];
    while(images.length > 0){
        let im = images[0];
        g.removeChiled(im);
        s.push(im.getAttribute("src"));
    }

    let i = 0;
    let img = document.createElement("img");
    img.setAttribute("src",s[i]);
    
    g.appendChiled(img);
}

let img = document.createElement("img");
img.setAttribute("src",s[0]);




let galleries = document.getElementsByClassName("gallery");
for(let gallery = 0; gallery < galleries.length; ++gallery){
    CreateGallery(galleries[gallery]);
}