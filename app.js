const linesBtns = document.querySelectorAll('.lines');
const header = document.querySelector('.line-header');
const lineItems = document.querySelectorAll('.lineItems');
const startBtn = document.querySelector('.startBtn');
const form = document.querySelector('form');
const textArea = document.getElementById('resultAreaID');
const copyBtn = document.querySelector('.copyBtn');

header.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        linesBtns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        lineItems.forEach(function (line) {
            line.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    };
});

document.addEventListener('DOMContentLoaded', function(){
    startBtn.addEventListener('click', function () {
        let i = 2;
        document.querySelector(`[data-id="00"]`).classList.remove('active');
        document.getElementById('00').classList.remove('active');
        document.querySelector(`[data-id="01"]`).classList.toggle('active');
        document.getElementById('01').classList.toggle('active');

        const interval = setInterval(function () {
            const lineID = i.toString().padStart(2, '0');
            const div = document.getElementById(lineID);
            const btn = document.querySelector(`[data-id="${lineID}"]`);
    
            linesBtns.forEach(function (btn) {
                btn.classList.remove('active');
            });
            lineItems.forEach(function (line) {
                line.classList.remove('active');
            });        
            if (div) {
                div.classList.toggle('active');
                btn.classList.toggle('active');
                console.log(div);
            }
            i++;
            if (i > 15) {
                clearInterval(interval);
            }
        }, 20000);
    });
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    let results = [];
    document.querySelectorAll('[type="checkbox"]').forEach(function(item){
        if(item.checked === true){
            results.push(1);
        } else{
            results.push(0);
        }
    });
    textArea.value = results.join(',');
    console.log(results);
})

copyBtn.addEventListener('click', function(){
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
});