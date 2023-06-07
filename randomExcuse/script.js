let who = ['The dog', 'My grandma', 'His turtle', 'My bird', 'My mom'];
let action = ['ate', 'peed', 'crushed', 'broke', 'stole'];
let what = ['my homework', 'the keys', 'the car', 'my phone', 'my computer'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
let components = [who, action, what, when];
function excuseGenerator1() {
    let excuse = '';
    for (let index = 0; index < 4; index++) {
        let position = Math.floor(Math.random() * 5);
        excuse += components[index][position] + ' ';
    }
    return excuse;
}
function excuseGenerator2() {
    let excuse = '';
    excuse += who[Math.floor(Math.random() * 5)] + ' ';
    excuse += action[Math.floor(Math.random() * 5)] + ' ';
    excuse += what[Math.floor(Math.random() * 5)] + ' ';
    excuse += when[Math.floor(Math.random() * 5)];
    return excuse;
}
function excuseGenerator3() {
    let excuse = '';
    components.forEach(element => {
        excuse += element[Math.floor(Math.random() * 5)] + ' ';
    });
    return excuse;
}
window.onload = () => {
    document.getElementById('1').innerHTML = excuseGenerator1();
    document.getElementById('2').innerHTML = excuseGenerator2();
    document.getElementById('3').innerHTML = excuseGenerator3();
}



