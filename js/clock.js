let container=s("#clockContainer")

let colors={
    colorTheme:'#007cff'
}
function changeTheme(color){
    colors.colorTheme=color.value
    console.log(color.value)
    // s("body").style.background=  colors.colorTheme
    Clock()
}
let clockCircle=cr("div")
let clockCentralDot=cr("div");
function Clock() {
    

clockCircle.setAttribute("style","width:600px;height:600px;border-radius:50000px;background:radial-gradient(#151520,#151520,#151520,#151520,#000,#000);box-shadow:0px 0px 10px rgba(0,0,0,0.50);border:2px solid "+colors.colorTheme+";position:relative;")



clockCentralDot.setAttribute("style","width:10px;height:10px;border-radius:50%;background:"+colors.colorTheme+";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9999999999999999")


//numbers inside clock
for(let clockNumber=0;clockNumber<12;clockNumber++){
    let clockNumberBody=cr("div")
    clockNumberBody.setAttribute("id",`number${(clockNumber+1)}`)
    let innerDiv=cr("div")
    innerDiv.innerHTML=clockNumber+1
    innerDiv.style.transform="rotate(-"+(clockNumber+1)*30 +"deg)"
    let hiFen=cr('div');
    setInterval(() => {
        let date=new Date()
        hourTime=[0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
        if(hourTime[date.getHours()]===(clockNumber+1)){
            innerDiv.style.transform="rotate(-"+(clockNumber+1)*30 +"deg)"+" scale(1.6)"
            innerDiv.style.fontWeight=600;
            innerDiv.style.padding="3rem"
            // innerDiv.style.color=colors.colorTheme
        }
    }, 1000);
    hiFen.setAttribute("style", "width:3px;height:10px;background:"+colors.colorTheme+";position:absolute;left:50%;top:5%");
    // hiFen.style.transform="rotate(-"+(clockNumber+1)*30 +"deg)"
    clockNumberBody.appendChild(hiFen)
    clockNumberBody.appendChild(innerDiv)
    // clockNumberBody.innerHTML=`<div>${clockNumber+1}</div>`
    let deg=(clockNumber+1)*30
    
    clockNumberBody.setAttribute("style","width:550px;height:550px;text-align:center;transform: translate(-50%,-50%);position:absolute;left:50%;top:50%;z-index:100000000000000")
    clockNumberBody.style.transform="translate(-50%,-50%) rotate("+deg+"deg)"

    clockCircle.appendChild(clockNumberBody)
}





// clock rotate part

let hourMark=cr("div")
let HMark=cr('div')
hourMark.setAttribute("style", "width:100%;height:100%;position:absolute;background:#ffff5500")
HMark.setAttribute("style", "width:5px;height:78px;background:#fff;position:absolute;left:50%;top:37%;z-index:500;transform:translate(-50%, 0%);border-radius:50px")
hourMark.appendChild(HMark)


let MinMark=cr("div")
let MMark=cr('div')
MinMark.setAttribute("style", "width:100%;height:100%;position:absolute;background:#ffff5500")
MMark.setAttribute("style", "width:3px;height:120px;background:"+colors.colorTheme+";position:absolute;left:50%;top:30%;z-index:800;transform:translate(-50%, 0%);border-radius:50px")
MinMark.appendChild(MMark)

let secMark=cr("div")
let SMark=cr('div')
secMark.setAttribute("style", "width:100%;height:100%;position:absolute;background:#ffff5500")
SMark.setAttribute("style", "width:3px;height:200px;background:#ff0000;position:absolute;left:50%;top:16%;z-index:1000;transform:translate(-50%, 0%);border-radius:50px")
secMark.appendChild(SMark)
function pa(deg){
    return `rotate(${(deg)}deg) `
}


setInterval(function(){
    let date=new Date()
    // let hourDeg=date.getHours()
    let hourDeg=date.getHours()
    let MinDeg=date.getMinutes()
    let secDeg=date.getSeconds()
    let milisecDeg=date.getMilliseconds()
    // hourMark.style.transform=pa(0)
    hourMark.style.transform=pa(((hourDeg*360)/12)+((MinDeg*30)/60))
    MinMark.style.transform=pa((MinDeg*360)/60+((secDeg*6)/60))
    secMark.style.transform=pa((secDeg*360)/60+((milisecDeg*6)/1000))

},10)



// clockCircle.appendChild(hourMark)
clockCircle.appendChild(hourMark)
clockCircle.appendChild(MinMark)
clockCircle.appendChild(secMark)




//little dots of each minutes


for(let eachDot=1;eachDot<=60;eachDot++){
    let dotContainer=cr("div")
    dotContainer.setAttribute("style","height:100%;width:100%;position:absolute;padding:3.5rem")
    let dots=cr("div")
    dots.setAttribute("style","width:1px; height:6px;background:#fff;position:absolute;left:50.26%;transform:translate(-50%,-50%);transition:1s")
    dotContainer.style.transform="rotate("+((360/60)*eachDot)+"deg)"
    setInterval(() => {
        let date=new Date()
        if(date.getSeconds()===eachDot){
            dots.style.height='25px'
            dots.style.width='3px'
            dots.style.background="#ff0000"
        }else{
            dots.style.height='6px'
            dots.style.width='1px'
            dots.style.background="#fff"

        }

       

    }, 300);
    dotContainer.appendChild(dots)
    clockCircle.appendChild(dotContainer)
}




}
s


Clock()


function setAlarm(info){
// console.log(info.value)
let both=info.value.split(":")
both=both.map(val=>parseFloat(val))

SetHour=both[0]
SetMinute=both[1]
let inter= setInterval(() => {
    let date=new Date()
    if(date.getHours()===SetHour && date.getMinutes()===both[1]){
        let sound =new Audio("sound/2 African Drums Sting.mp3")
        sound.play();
        clearInterval(inter)
    }else{

    }
}, 1000);
console.log(both)
}




function closeAll() {
    clockCircle.appendChild(clockCentralDot)
    container.appendChild(clockCircle)
    // s("body").appendChild(colorname)
}


























closeAll()