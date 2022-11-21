window.addEventListener("load",function() {
    document.getElementById('loader').classList.toggle('loader2');
})

function evaluarQuiz() {
    let respuestaCorrectas = ["A","B","D","B","A","C","C","D","B","A"];
    let respuestasUsuario = new Array();
    let respuestasPreguntas = new Array();
    let aciertos = 0;
    let countPreguntas = 0;
    let bien = "img/tickbien.jpg";
    let mal = "img/tickmal.jpg";
    let imagenRespuestas = new Array();
    for (let i = 0; i < 10; i++) {
        respuestasPreguntas = document.getElementsByName('p'+(i+1));
        for (let j = 0; j < 4; j++) {
            if(respuestasPreguntas[j].checked == true) {
                countPreguntas++;
                respuestasUsuario[i] = respuestasPreguntas[j].value;
                if(respuestasPreguntas[j].value == respuestaCorrectas[i]) {
                    imagenRespuestas[i] = bien;
                    aciertos++;
                } else {
                    imagenRespuestas[i] = mal;
                }
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        console.log("Respuesta - " + (i+1) + "Imagen" + imagenRespuestas[i]);
    }

    console.log(countPreguntas);

    if (countPreguntas == 10) {
        html = "<p class='titulo_nbaleague'>Resultado</p>";
        html += "<table class='table'>";
        html += "<tr>";
        html += "<td>Pregunta</td>";
        html += "<td>Resp Usuario</td>";
        html += "<td>Resp Correcta</td>";
        html += "<td></td>";
        html += "</tr>";
        for (let i = 0; i < 10; i++) {
        html += "<tr>";
        html += "<td>"+(i+1)+"</td>";
        html += "<td>"+respuestasUsuario[i]+"</td>";
        html += "<td>"+respuestaCorrectas[i]+"</td>";
        html += "<td><img src='"+imagenRespuestas[i]+"' width=30 height=30</td>";
        html += "</tr>";
        }
        html += "<tr>";
        html += "<td colspan=4>Número de aciertos = "+aciertos+"</td>";
        html += "</tr>";
        html += "</table>";

        if(aciertos > 5) {
            html += "<img src='img/gifbien.gif' class='img-fluid imagen_playoffs' alt='...'>";
        } else {
            html += "<img src='img/gifmal.gif' class='img-fluid imagen_playoffs' alt='...'>";
        }
        document.getElementById("resultado").innerHTML=html;


    } else {
        alert('Faltan preguntas por contestar');
    }
}

function resetQuiz() {
    for (let i = 0; i < 10; i++) {
        respuestasPreguntas = document.getElementsByName('p'+(i+1));
        for (let j = 0; j < 4; j++) {
            respuestasPreguntas[j].checked = false;
        }
    }
}
