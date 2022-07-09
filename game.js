

document.onkeydown = function(evt) {
  document.getElementById("u-win").classList.remove("anim");
  document.getElementById("wrong").classList.remove("animation");
  document.getElementById("dj-trou").classList.remove("anim");
  
  

  evt = evt || window.event;
  var charCode = evt.key || evt.which;

  // switch (charCode) {
  //   case 0:
  //     text = "Off";
  //     break;
  //   case 1:
  //     text = "On";
  //     break;
  //   default:
  //     text = "No value found";
  // } 

  if(charCode === "Enter" && document.getElementById("input-field").value != ""){
    console.log("inside correct enter")
    myText = document.getElementById("input-field").value;
    // checkOverlays("esc");
  
    fixErrors(myText);
    myText = document.getElementById("input-field").value;
  
    x = checkDoubles(myText);
    if(x==false){
      console.log("x == false")
      checkLang(myText);
    }else{
      document.getElementById("dj-trou").classList.add("anim");
      checkOverlays("esc");
    }
  }
  // if(charCode === "Enter" && document.getElementById("input-field").value == ""){
  //   console.log("nothing happens")
  //   checkOverlays("esc");
  // }
  if(charCode === "Escape") {
    checkOverlays("esc");
  }
  if(charCode !== "Escape" && charCode !== "Enter"){
  checkOverlays("guess");
}
};

let codeLang = ["javascript", "html","css","sql","python","java","bash","powershell","c#","php","c++","typescript","c","ruby","go","assembly","swift","kotlin","r","vba","objective-c","scala","rust","dart","elixir","clojure","webassembly","karolos"] //28
let codeLangCorrect = [];
let count = 0;

console.log(codeLang);
  console.log(codeLangCorrect);

function fixErrors(olo){
  olo.toLowerCase;
  if(olo == "js"){ 
    olo = "javascript"; 
    console.log("javascript inside if in fixerrors");
    document.getElementById("input-field").value = olo;
    console.log(olo+" olo in the finish of fixerrors")
  }
  if(olo == "power shell"){ 
    olo = "powershell";
    document.getElementById("input-field").value = olo;
  }
  if(olo == "type script"){
    olo = "typescript";
    document.getElementById("input-field").value = olo;
  }
  if(olo == "asembly"){
    olo = "assembly";
    document.getElementById("input-field").value = olo;
  }
  if(olo == "closure"){
    olo = "clojure"; 
    document.getElementById("input-field").value = olo;}
  if(olo == "objective c" || olo=="objectivec"){
    olo = "objective-c";
    document.getElementById("input-field").value = olo;
  }
  if(olo == "web assemby" || olo =="web asembly" || olo =="webasembly"){
    olo = "webassembly";
    document.getElementById("input-field").value = olo;
  }
  
}

function checkLang(toto){
  cosmos = false;
  for(var i=0; i<codeLang.length; i++) {
      if(toto === codeLang[i]) {
        console.log(toto);
        console.log(codeLang[i]+" before unshift");
        console.log(codeLangCorrect[i]+" before unshift");
        codeLangCorrect.unshift(codeLang[i]);
        console.log(codeLang[i]+" after unshift");
        // document.getElementById("id-tt").innerHTML = toto;
        console.log(i);
        console.log(codeLang[i],1);
        // console.log(codeLang.splice(codeLang[i],1));
        console.log(codeLang);
        codeLang.splice(codeLang[i],1);
        console.log(codeLang[i]+"after splice");
        checkOverlays("win");
        document.getElementById("u-win").classList.add("anim");
        console.log(codeLang);
        console.log(codeLangCorrect);
        cosmos = true;
        break;
        // return toto;
      }
    }
    if(cosmos == false){
  document.getElementById("wrong").classList.add("animation")
  
  count = countErrors(count);
  if(count>= 3){
    document.getElementById("game-over").style.transform = "scale(1)";
  }
}
checkOverlays("esc");
}

function checkDoubles(kar){
  for(var i=0; i<codeLangCorrect.length; i++){
    if(kar === codeLangCorrect[i]){
      console.log("checkdoubles true");
      return true;
    }
  }
  console.log("checkdoubles false");
  return false;
}

function checkOverlays(kar){
  if(kar == "guess"){
    document.getElementById("overlay-kar").style.transform = "scale(1)";
    document.getElementById("u-win").style.transform = "scale(0)";
    document.getElementById("trouves").style.transform = "scale(0)";
  }
  if(kar == "win"){
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("u-win").style.transform = "scale(1)";
    document.getElementById("trouves").style.transform = "scale(0)";
  }
  if(kar == "trou"){
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("u-win").style.transform = "scale(0)";
    document.getElementById("trouves").style.transform = "scale(1)";
  }
  if(kar == "esc"){
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("u-win").style.transform = "scale(0)";
    document.getElementById("trouves").style.transform = "scale(0)";
    document.getElementById("input-field").value ="";
    // console.log("checkoverlays == esc");
  }
}

function countErrors(count){
  count = count+1;
  switch (count) {
    case 1:
      document.getElementById("id-x1").style.color = "#0AEFF7";
      // 
      break;
    case 2:
      document.getElementById("id-x2").style.color = "#0AEFF7";
      break;
    case 3:
      document.getElementById("id-x3").style.color = "#0AEFF7";
      break;
    default:
      console.log("default");
  } 
  console.log(count);
  return count;

}
// ----------------------BUTTONS-------------------------------
document.getElementById("id-results").addEventListener("click", ()=>{
  document.getElementById("trouves").style.transform = "scale(1)";
});