window.onbeforeunload = function () {return false;}
const addItem = async(item)=>{

    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () =>{
    return new Promise((resolve,reject)=>{
      timeout = 1 + 5*Math.random();
      setTimeout(() =>{
        resolve()
      },timeout*1000)
    })
}

async function main(){
     setInterval(() =>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML+ "."
        }
        
     })

    let text = ["You are devices is hacked By Aditya srivastava","Initializing hacking","Reading your files","Password files Detected","Sending all passwords and Personal files to Aditya server","All files set to the server","Cleaning Up","All data sent to the server","Have a nice day "]
    for(const item of text){
      await  addItem(item)
    }
}
main()