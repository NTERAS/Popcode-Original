
 

document.onkeydown = function(evt) {
  overlayk = false;
  evt = evt || window.event;
  var charCode = evt.key || evt.which;
  // var charStr = String.fromCharCode(charCode);
  if(charCode === "Escape") {
    checkOverlays("esc");
    overlayk=false;
}else{
  checkOverlays("guess");
  overlayk = true;
}
if(charCode === "Enter" && overlayk == true ){
  var myText ="z";
  myText = document.getElementById("input-field").value;
  console.log(myText)

  fixErrors(myText);
  myText = document.getElementById("input-field").value;
  checkLang(myText);

}
};

let codeLang = ["javascript", "html","css","sql","python","java","bash","powershell","c#","php","c++","typescript","c","ruby","go","assembly","swift","kotlin","r","vba","objective-c","scala","rust","dart","elixir","clojure","webassembly","karolos"] //28
let codeLangCorrect = [];


function fixErrors(olo){
  olo.toLowerCase;
  if(olo == "js"){ 
    olo = "javascript"; 
    console.log("javascript inside if in fixerrors");
    document.getElementById("input-field").value = olo;
    console.log(olo+" olo in the finish of fixerrors")

  }
  if(olo == "power shell"){ olo = "powershell"}
  if(olo == "type script"){ olo = "typescript"}
  if(olo == "asembly"){ olo = "assembly"}
  if(olo == "closure"){ olo = "clojure"}
  if(olo == "objective c" || olo=="objectivec"){ olo = "objective-c"}
  if(olo == "web assemby" || olo =="web asembly" || olo =="webasembly"){ olo = "webassembly"}
  
}

function checkLang(toto){
    for(var i=0; i<codeLang.length; i++) {
      if(toto === codeLang[i]) {
        codeLangCorrect.unshift(codeLang[i]);
        document.getElementById("id-tt").innerHTML = toto;
        codeLang.splice(codeLang[i],1);
        checkOverlays("win");
        // console.log(codeLang);
        // console.log(codeLangCorrect);
        break
    }
}
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
    console.log("checkoverlays == esc");
  }
}

document.getElementById("id-results").addEventListener("click", ()=>{
  document.getElementById("trouves").style.transform = "scale(1)";
});