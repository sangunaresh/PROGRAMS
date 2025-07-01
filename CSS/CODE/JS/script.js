console.log(document)
function incr () {
      const f=document.getElementById("count")
      let c=f.textContent
      c++
      f.textContent=c
        return f
    }


function decr () {
      const f=document.getElementById("count")
      let c=f.textContent
      if(c>0){
      c--
      }
      f.textContent=c
        return f
    }

 function reset () {
      let f=document.getElementById("count")
      f.textContent=0
      return f
}
    
