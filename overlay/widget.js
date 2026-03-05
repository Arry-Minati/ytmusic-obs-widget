// temporary demo animation

let progress = 30

setInterval(()=>{
    progress += 1
    if(progress > 100) progress = 0

    document.getElementById("progress").style.width = progress + "%"
},200)