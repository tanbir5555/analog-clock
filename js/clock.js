let container=s("#clockContainer")

colorTheme="#007cff82"

let clockCircle=cr("div")
clockCircle.setAttribute("style","width:600px;height:600px;border-radius:50%;background:radial-gradient(#151520,#151520,#151520,#151520,#000,#000);box-shadow:0px 0px 10px rgba(0,0,0,0.50);border:2px solid "+colorTheme+";position:relative;")


let clockCentralDot=cr("div");
clockCentralDot.setAttribute("style","width:10px;height:10px;border-radius:50%;background:"+colorTheme+";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)")


//numbers inside clock
for(let clockNumber=0;clockNumber<12;clockNumber++){
    let clockNumberBody=cr("div")
    clockNumberBody.setAttribute("id",`number${(clockNumber+1)}`)
    let innerDiv=cr("div")
    innerDiv.innerHTML=clockNumber+1
    innerDiv.style.transform="rotate(-"+(clockNumber+1)*30 +"deg)"
    let hiFen=cr('div');
    hiFen.setAttribute("style", "width:3px;height:10px;background:"+colorTheme+";position:absolute;left:50%;top:5%");
    // hiFen.style.transform="rotate(-"+(clockNumber+1)*30 +"deg)"
    clockNumberBody.appendChild(hiFen)
    clockNumberBody.appendChild(innerDiv)
    // clockNumberBody.innerHTML=`<div>${clockNumber+1}</div>`
    let deg=(clockNumber+1)*30
    
    clockNumberBody.setAttribute("style","width:500px;height:500px;text-align:center;transform: translate(-50%,-50%);position:absolute;left:50%;top:50%;")
    clockNumberBody.style.transform="translate(-50%,-50%) rotate("+deg+"deg)"

    clockCircle.appendChild(clockNumberBody)
}





// clock rotate part

// let hourMark=cr("div")


// hourMark.setAttribute("style", "width:5px;height:75px;background:#fff;position:absolute;left:50%;top:50%;z-index:1000;transform:translate(-50%,-100%)")


// let minMark=cr("div")


// minMark.setAttribute("style", "width:4px;height:100px;background:#fff;position:absolute;left:50%;top:50%;z-index:1000;transform:translate(-50%,-100%)")


let secMark=cr("div")
let SMark=cr('div')
secMark.setAttribute("style", "width:100%;height:100%;position:absolute;background:#ffff5500")
SMark.setAttribute("style", "width:3px;height:200px;background:#ff0000;position:absolute;left:50%;top:50%;z-index:1000;")
secMark.appendChild(SMark)
function pa(deg){
    return `rotate(${deg}deg) `
}


setInterval(function(){
    let date=new Date()
    // let hourDeg=date.getHours()
    let secDeg=date.getSeconds()
    // hourMark.style.transform=pa(0)
    // secMark.style.transform=pa((secDeg*360)/60)

},400)



// clockCircle.appendChild(hourMark)
// clockCircle.appendChild(minMark)
clockCircle.appendChild(secMark)


function closeAll() {
    clockCircle.appendChild(clockCentralDot)
    container.appendChild(clockCircle)
}


























closeAll()