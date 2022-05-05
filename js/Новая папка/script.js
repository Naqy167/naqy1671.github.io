function igor(){
    document.querySelector("[data-igor]").addEventListener("click",(e)=>{
        console.log(e.target.innerHTML)
        e.target.innerHTML = 'Игорь лох ебучий'
    })
}

igor()