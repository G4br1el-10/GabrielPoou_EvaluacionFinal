const  graf = document.getElementById('miGrafica').getContext;
let dat1 = document.getElementById('dato1');
let dat2 = document.getElementById('dato2');
let dat3 = document.getElementById('dato3');
let dat4 = document.getElementById('dato4');
let dat5 = document.getElementById('dato5');

let val1 = document.getElementById('valor1');
let val2 = document.getElementById('valor2');
let val3 = document.getElementById('valor3');
let val4 = document.getElementById('valor4');
let val5 = document.getElementById('valor5');

const categoria = ['pablo',dat2,dat3,dat4,dat5];
const valores = [3,val2,
val3,
val4,val5];

const myChart = new Chart(graf,{
    type:'bar',
    data:{
        labels: categoria,
        datasets:[{
            label:'GRAFICOS',
            data:valores,
            backgroundColor:[
                'rgba(218, 247, 166,0.2)',
                'rgba(255, 195, 0,0.2)',
                'rgba(255, 87, 51,0.2)',
                'rgba(199, 0, 57,0.2)',
                'rgba(144, 12, 63,0.2)'
            ],
            borderColor:[
                'rgba(218, 247, 166,1)',
                'rgba(255, 195, 0,1)',
                'rgba(255, 87, 51,1)',
                'rgba(199, 0, 57,1)',
                'rgba(144, 12, 63,1)'
            ],
            borderWidth: 1.5
        }]
    }
});