let btn = document.querySelector(".btn")
let pic = document.querySelector("#pic")
let text = document.querySelector("#text")
let postMain=document.querySelector(".posts-main")
let postDiv=document.querySelector(".posts-div")
let newPost= document.querySelector(".new-post")


btn.onclick= function(){
    console.log("hello");

    
    let newDiv=document.createElement("div")
    newDiv.className="new-post"
    postMain.appendChild(newDiv)

  

    let para=document.createElement("p")
    para.textContent=text.value
    newDiv.appendChild(para)

    let img=document.createElement("img")
    img.src=URL.createObjectURL(pic.files[0])
    newDiv.appendChild(img)

    let btns=document.createElement("div")
    btns.className="buttons"
    newDiv.appendChild(btns)

    let like=document.createElement("button")
    like.className="like"
    like.textContent="Like"
    btns.appendChild(like)


    let comment=document.createElement("button")
    comment.className="like"
    comment.textContent="Comment"
    btns.appendChild(comment)

    let a=0
    like.onclick=function(){
    
        like.textContent= ++a +" like" 
        like.style.color="blue"
    }
}
