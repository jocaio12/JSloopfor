// FOR LOOP
// FOR LOOP ARRAY

let html = '';

let c = 0;

while(c <= 10) {
    html += 'Número: '+c+'<br/>';
    c = c + 1;
}

for(let c = 1; c <= 10; c++) {
    html += 'Número: '+c+'<br/>';

}



/* Exemplo 2
let carros = [ 'Ferraria', 'Fusca', 'Palio', 'Corolla', 'Mini' ];

let html ='<ul>';

for(let i in carros) {
    html += '<li>' + carros[i] + '</li>';
}


html = html + '</ul>';
*/

/* Exemplo 1

let texto = '';

for(let i = 1; i <= 50; i++) {
    texto = texto + i + '<br/>';
}
*/

document.getElementById('demo').innerHTML = html;