
var new_back = document.getElementsByClassName("load-background")[0];
var terminator = document.getElementsByClassName("terminator")[0];
var left_eye  = document.getElementsByClassName("terminator-eyes")[0];
var right_eye  = document.getElementsByClassName("terminator-eyes")[1];
var start_btn =  document.getElementById("start-btn");
var theme = new Audio('sounds/narc.mp3');

var speech_container = document.getElementsByClassName("robot-speech")[0];
var computer = document.getElementsByClassName("computer")[0];
var wires = document.getElementsByClassName("wires2")[0];
setTimeout(function(){
ready()
}, 3000); 


function ready(){

setTimeout(function(){
    new_back.style.animation = "loading 2s steps(12) ";terminator.style.animation = "terminator-loading 2s steps(15) ";
     }, 2000); 
     setTimeout(function(){
        new_back.style.opacity = '0'
        terminator.style.opacity = '1';
         }, 4000); 
setTimeout(function(){
document.getElementsByClassName("loader-wrapper")[0].style.display = "none";
start_btn.style.opacity = 1;
 }, 5000); 
 setTimeout(function(){
document.getElementsByClassName("loader-wrapper")[0].style.display = "inherit";
start_btn.style.opacity = 0;
}, 5050); 
 setTimeout(function(){
document.getElementsByClassName("loader-wrapper")[0].style.display = "none"; start_btn.style.opacity = 1; }, 5150);
 }

function eyeball() {
    const eye = document.querySelectorAll(".terminator-eyes");
    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
 
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotate = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = "rotate(" + rotate + "deg)";
    });
  }


  var code = `
 Inizializing AI Modules... 
 Kernal Panic at >3E4F2<...
 PAT configuration [0-7]: WB  WC  UC- UC  WB  WC  UC- UC  
 e820: last_pfn = 0xacdff max_arch_pfn = 0x400000000
 Scanning 1 areas for low memory corruption
 Base memory trampoline at [ffff880000096000] 96000 size 24576
 Using GB pages for direct mapping
 init_memory_mapping: [mem 0x00000000-0x000fffff]
 [mem 0x00000000-0x000fffff] page 4k
BRK [0x01c2e000, 0x01c2efff] PGTABLE
BRK [0x01c2f000, 0x01c2ffff] PGTABLE
BRK [0x01c30000, 0x01c30fff] PGTABLE
init_memory_mapping: [mem 0x24de00000-0x24dffffff]
[mem 0x24de00000-0x24dffffff] page 2M
BRK [0x01c31000, 0x01c31fff] PGTABLE
init_memory_mapping: [mem 0x240000000-0x24ddfffff]
[mem 0x240000000-0x24ddfffff] page 2M
init_memory_mapping: [mem 0x220000000-0x23fffffff]
[mem 0x220000000-0x23fffffff] page 1G
init_memory_mapping: [mem 0x00100000-0xabd06fff]
[mem 0x00100000-0x001fffff] page 4k
[mem 0x00200000-0x3fffffff] page 2M
[mem 0x40000000-0x7fffffff] page 1G
[mem 0x80000000-0xabbfffff] page 2M
[mem 0xabc00000-0xabd06fff] page 4k
init_memory_mapping: [mem 0xacdfe000-0xacdfefff]
[mem 0xacdfe000-0xacdfefff] page 4k
BRK [0x01c32000, 0x01c32fff] PGTABLE
init_memory_mapping: [mem 0x100000000-0x21fffffff]
[mem 0x100000000-0x21fffffff] page 1G
ACPI: Early table checksum verification disabled
ACPI: RSDP 0x00000000ACDFD014 000024 (v02 LENOVO)
ACPI: XSDT 0x00000000ACDFD1C0 0000FC (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: FACP 0x00000000ACDF8000 00010C (v05 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: DSDT 0x00000000ACDE2000 01126D (v01 LENOVO TP-N14   00001090 INTL 20120711)
ACPI: FACS 0x00000000ACD67000 000040
ACPI: ASF! 0x00000000ACDFC000 0000A5 (v32 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: HPET 0x00000000ACDFB000 000038 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: ECDT 0x00000000ACDFA000 000052 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: APIC 0x00000000ACDF7000 000098 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: MCFG 0x00000000ACDF6000 00003C (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: SSDT 0x00000000ACDF5000 000033 (v01 LENOVO TP-SSDT1 00000100 INTL 20120711)
ACPI: SSDT 0x00000000ACDF4000 000486 (v01 LENOVO TP-SSDT2 00000200 INTL 20120711)
ACPI: SSDT 0x00000000ACDE1000 000290 (v01 LENOVO PcieAhci 00001000 INTL 20120711)
ACPI: SSDT 0x00000000ACDE0000 0009CB (v01 LENOVO SataAhci 00001000 INTL 20120711)
ACPI: SSDT 0x00000000ACDDF000 000152 (v01 LENOVO Rmv_Batt 00001000 INTL 20120711)
ACPI: SSDT 0x00000000ACDDE000 000691 (v01 LENOVO Cpu0Ist  00003000 INTL 20120711)
ACPI: SSDT 0x00000000ACDDD000 000B74 (v02 LENOVO CpuSsdt  00003000 INTL 20120711)
ACPI: SSDT 0x00000000ACDDC000 000369 (v02 LENOVO CtdpB    00001000 INTL 20120711)
ACPI: SSDT 0x00000000ACDDA000 001475 (v01 LENOVO SaSsdt   00003000 INTL 20120711)
ACPI: SSDT 0x00000000ACDD9000 000394 (v02 LENOVO CppcTabl 00001000 INTL 20120711)
ACPI: PCCT 0x00000000ACDD8000 00006E (v05 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: SSDT 0x00000000ACDD7000 000AC4 (v02 LENOVO Cpc_Tabl 00001000 INTL 20120711)
ACPI: UEFI 0x00000000ACDD6000 000042 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: POAT 0x00000000ACCB1000 000055 (v03 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: BATB 0x00000000ACDD5000 000046 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: FPDT 0x00000000ACDD4000 000064 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: SSDT 0x00000000ACDD3000 0004B2 (v01 LENOVO Tpm2Tabl 00001000 INTL 20120711)
ACPI: SSDT 0x00000000ACDD2000 00004B (v02 LENOVO MeSsdt   00003000 INTL 20120711)
ACPI: TPM2 0x00000000ACDD1000 000034 (v03 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: UEFI 0x00000000ACDD0000 0002F6 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: BGRT 0x00000000ACDCF000 000038 (v01 LENOVO TP-N14   00001090 PTEC 00000002)
ACPI: DMI detected: Lenovo ThinkPad X1 Carbon
ACPI: Local APIC address 0xfee00000
No NUMA configuration found
Faking a node at [mem 0x0000000000000000-0x000000024dffffff]
NODE_DATA(0) allocated [mem 0x24dffa000-0x24dffdfff]`;
var start_code = code;
let i = 0;
var term = document.getElementById("terminal");
            window.setInterval(function (){
                terminal.innerText += code.slice(i, i+5);
                i += 5;
                if (i > code.length) {i=0;}
            });
            setInterval(function (){
                term.scrollTop = term.scrollHeight;
				if(i>1000){i=0;code= start_code;}
            },200);
document.querySelector("body").addEventListener("mousemove", eyeball);
async function start(){
	start_btn.style.display = 'none';
	await waitForMs(500);
	left_eye.style.animation= "eyes-loading 1s linear";right_eye.style.animation= "eyes-loading 1s linear";
    await waitForMs(1000);
	 left_eye.style.opacity = '1'; right_eye.style.opacity = '1';
	 document.getElementsByClassName("terminator-face")[0].style.animation = "terminator-face-anim 2s infinite steps(12)";
	 
	theme.volume = 0.5;
	theme.play();
	
    await waitForMs(2000);
	speech_container.style.opacity = 1;
	new Audio('sounds/speech 1.mp3').play(); 
	typeSentence("Hello guest"+Math.floor(Math.random() * 9999)+"! ","robot-text");
	await waitForMs(2500);
	typeSentence("My name is 198XAD.","robot-text");
	await waitForMs(2000);
	terminator.style.animation="terminator-left-angle 2s steps(20) 1 ";
	wires.style.animation="wire2 2s steps(20) 1";
	await waitForMs(1990);
	wires.style.left = "-5%";
	terminator.style.top = "0px";
    terminator.style.left = "-60px";
	terminator.style.transform = "scale(0.7)";
	let speech2 = new Audio('sounds/speech 2.mp3');
	speech2.volume = 0.5;
	speech2.play();
	typeSentence("I have a couple quastions to you.","robot-text",50);
	await waitForMs(2500);
	typeSentence("This is our universal comunication tool.","robot-text",50);
	computer.style.animation = "computer_app 2s steps(15)";
	await waitForMs(1000);
	computer.style.opacity = "1";
	await waitForMs(1700);
	typeSentence("Please follow instuctions!","robot-text",50);
	await waitForMs(1600);
	console.style.color = "#00E436";
}


async function typeSentence(sentence, id, delay = 100) {
	document.getElementById(id).textContent = "";
	const letters = sentence.split("");
	let i = 0;
	while(i < letters.length) {

	  await waitForMs(delay);
	  document.getElementById(id).append(letters[i]);
	  i++
	}
	return;
  }
  
  
  function waitForMs(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
  }

