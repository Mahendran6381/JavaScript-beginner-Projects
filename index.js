const btn = document.querySelector(".main-btn")

btn.addEventListener("click",(e)=>{
        let one = Math.floor(Math.random()*100+1)
        let two = Math.floor(Math.random()*100+1)
        let three = Math.floor(Math.random()*100+1)
   
        document.body.style.backgroundColor = `rgb(${one},${two},${three})`
        document.body.classList.add("back")
        btn.innerHTML = `<p>rgb(${one},${two},${three})</p>`
})