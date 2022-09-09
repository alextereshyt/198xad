
var console = document.getElementsByClassName("console")[0];
var input = document.getElementById("txt");
var content = document.getElementById("content");
var output = document.getElementsByClassName("output")[0];
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
  check(input.value);
  }
});
var stage1 = false;
var stage2 = false;

async function check(txt){
    switch(txt) {
        case "help":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("GNU bash, version 4.4.12(1)-release (x86_64-redhat-gnu)");
            consoleWrite("XAD Kernal Security Utility version 5.2*(comp with >3.2)");
            consoleWrite("These shell commands are defined internally.  Type `help' to see this list.");
            consoleWrite("`ls' - show all files in current folder");
            consoleWrite("`cd' - go into directory");
            consoleWrite("`errors' - check errors");
            consoleWrite("`repair' - repair errors");
            consoleWrite("`clear' - clears console");
            consoleWrite("`poweroff' - turns off computer");
            consoleWrite("`./$file name$' - runs file");
            if (stage1 == true){
            consoleWrite("`xad compiler' - compiles config for XAD");
            consoleWrite("`bkQet' - ???????");
            consoleWrite("`su' - ????????");
            }

          break;
          case "ls":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("bin  boot  cdrom  dev");
            consoleWrite("etc  home  lib    media  ");
            consoleWrite("memory_dealer.sh  D%75547.sys");
          break;
          case "./memory_dealer.sh":
            consoleWrite("guest@console ~ "+txt);
          break;
          case "xad compiler":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("XAD Config Compiler v2.3 (based on GMake)");
            consoleWrite("Type `xad info' for more specs.");
          break;
          case "xad info":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("XAD Core v5.2, XADcc v2.3 ");
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;
            consoleWrite("Time: " + dateTime);
            consoleWrite("Your current configuration: ");
            consoleWrite("CPU: Intel Pentium III (3)");
            consoleWrite("RAM: 100MB DDR1 Micro Star");
            consoleWrite("ROM: 2.3GB (reserved)");
            consoleWrite("Main commands: ");
            consoleWrite("`xad info'  `xad compiler $code$'  `xad modules' !`xad disable'! ");
          break;
          
          case "cd":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("!Blocked!");
            new Audio('sounds/response.wav').play(); 
            await waitForMs(500);
          break;
          case "bkQet":
            if(stage1 == true){ 
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("./memory_dealer.sh");
          }
          break;
          case "xad disable":
            if(stage1 == true){ 
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("!Blocked!");
            new Audio('sounds/response.wav').play(); 
            typeSentence("-_-","robot-text",400);
            await waitForMs(500);
          }
          break;
          case "su":
            if(stage1 == true){ 
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("Password");
            inputBlock();
            content.textContent = '';
            input.value = "";
            await waitForMs(2500);
            consoleWrite("!Blocked!");
            new Audio('sounds/response.wav').play();
             await waitForMs(500);
            content.textContent = "guest@console ~ ";
            inputUnBlock();
          }
          break;
          case "errors":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("Kernal panic at >3E4F2<");
            consoleWrite("Try to use repair tool or fix error manually");
          break;
          case "clear":
            output.textContent = '';
          break;
          case "poweroff":
            console.style.display = "none";
            typeSentence("Try again ?)","robot-text",100);
            left_eye.style.display = "none";
            right_eye.style.display = "none";
            document.getElementsByClassName("right_panel")[0].style.backgroundImage = "none";
            document.getElementsByClassName("terminal")[0].style.display = "none";
            document.getElementsByClassName("terminator-face")[0].style.animation = "none";
            theme.pause();
          break;
          case "198XAD":
           revert();
          break;
          case "198xad":
            revert();
           break;
           case "./D%75547.sys":
            sys();
           break;
           case "./":
            consoleWrite("guest@console ~ "+txt);
            consoleWrite("XAD File Open Utility v2.5");
            consoleWrite("Usage: ./$file name$");
           break;
          case "green":
            output.style.color = "#6BFF2B";
          break;
          case "red":
            output.style.color = "red";
          break;
          case "blue":
            output.style.color = "blue";
          break;
          case "yellow":
            output.style.color = "yellow";
          break;
        case "repair":
          consoleWrite("guest@console ~ "+txt);
          inputBlock();
            content.textContent = '';
            input.value = "";
            new Audio('sounds/enter.wav').play(); 
            consoleWrite("Cheking for errors...");
            await waitForMs(4000);
            consoleWrite("Found error at modul `3E4F2`");
            consoleWrite("Fixing...");
            await waitForMs(2000);
            if(stage1 == false){
            consoleWrite("Dont fix this problem",true);
            new Audio('sounds/response.wav').play(); 
            await waitForMs(1000);
            consoleWrite("Now enter help command",true);
            new Audio('sounds/response.wav').play(); 
            await waitForMs(1500);
            consoleWrite("and dont be afraid ",true);
            new Audio('sounds/response.wav').play(); 
            await waitForMs(4000);
            output.textContent = '';
            
            stage1 = true;}
            else{
              consoleWrite("Premission denied");
            }
            content.textContent = "guest@console ~ ";
            inputUnBlock();
          break;
        default:
            consoleWrite("guest@console ~ ERROR: Invalid command");
            consoleWrite("Type help for help");
      }
      new Audio('sounds/enter.wav').play(); 
      input.value = "";
}

function revert(){
theme.pause();
  new Audio('sounds/slum-lord.mp3').play(); 
let all = document.body.getElementsByTagName("*");
for(let j = 0 ; j < all.length ;j++){
all[j].style.filter = "hue-rotate(90deg)";}

}
function sys(){
  theme.pause();
    new Audio('sounds/reducer.mp3').play(); 
  let all = document.body.getElementsByTagName("*");
  for(let j = 0 ; j < all.length ;j++){
  all[j].style.filter = "saturate(4)";}
  
  }
consoleWrite("guest@console ~ ERROR: Invalid command");
consoleWrite("Type help for help");
function consoleWrite(txt,devil=false){
    let p = document.createElement("p");
    p.innerText = txt+'\n';
    if(devil == true)
    p.style.color = "red";
    output.appendChild(p);
}

function inputBlock(){input.disabled = true;}
function inputUnBlock(){input.disabled = false;}
