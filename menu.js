//express
const express = require('express');


//root
const app = express();

app.use(express.static(__dirname + '/publico'))

app.get('/', function(req, res ){



	
	var html = `

				<!DOCTYPE html>
			<html>
			<head>
				<title>RPG</title>
				<meta charset="utf-8">
				<style type="text/css">

					body{
						background-image: url("Dungeon.jpg");
                        background-size: cover;

						 
					}

					

					.Textos{

						font-size: 14px;
						text-align: center;
						font-family: Impact;
						letter-spacing: 8px;
						text-shadow: 3px 3px black;
					}

					.menu{
						height: 228px;

						margin: center;
						margin-top: 100px;
						margin-right: 500px;
						margin-left: 500px; 
						background-color: #79B6F0;
						border-radius: 15px;
						border: solid 6px white;
						line-height: 1em;

					}

					a{

						display: block;
						color: white;
						padding: 14px;
						text-decoration: none;
						
					}

					a:hover{
						background: #5CA4F0;
						width: 310px;
						border-radius: 8px;

					}

                    .title{
                        text-align: center;
                        margin-top: 200px;  
                     
                        
                    }

                    @font-face{
                        font-family: pixel;
                        src: url(pixel-webfont.woff);

                    }

                    .fonte{
                        font-size: 60px;
                        font-family: pixel;
                        color: #5CA4F0;
                        letter-spacing: 0.3em;
                        text-shadow: 3px 8px  black;
                    }



                    


				</style>

			</head>
            
			<body>

                <div class="title">

                    <h1 class="fonte">Dungeon</h1>

                </div>

                <div class="blur"></div>

    				<div class="BK">
    					<nav class="menu">
                        
    						<div class="Textos">
    							 <a href="/Projetoluta"><h1>PLAY</h1></a> 
    							 <a href="About.html"><h1>ABOUT</h1></a> 
    							 <a href="credit.html"><h1>CREDIT</h1></a> 
    						</div>

    					</nav>

    				</div>
			</body>

            

			</html> `
			res.send(html);

})

app.listen(3000);



//asdasdasdasdsad
//adasdasd
//asdasd

var mapa = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 9, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var loc_i = 8
var loc_j = 6

app.get('/Projetoluta', function(req, res) {
    if (req.query['direcao'] != undefined){

        var direcao = req.query['direcao']
          console.log(direcao);

          if ((mapa[loc_i][loc_j] == 9)) {
             res.send(`

            <!DOCTYPE html>

            <html lang="EN">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Campo de Batalha</title>
                </head>
                <body>
                <table>
                  <thead>
                  <tr>
                  <th>Campo de Batalha</th>
                  <th>de</th>
                  <th>Batalha</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr><a href="/luta">Lutar</a></tr>
                  <tr></tr>
                  </tbody>
                  </table>
                </body>


                `);
          }


        if (direcao == 'up') {
            if ((mapa[loc_i - 1][loc_j] == 1) || (mapa[loc_i - 1][loc_j] == 9)) {
                  loc_i -= 1
            }
          }

        if (direcao == 'down') {
            if ((mapa[loc_i + 1][loc_j] == 1) || (mapa[loc_i + 1][loc_j] == 9))  {
                  loc_i += 1
            }
            }

         if (direcao == 'left') {
              if ((mapa[loc_i ][loc_j - 1] == 1) || (mapa[loc_i][loc_j - 1] == 9)) {
                    loc_j -= 1
                }
            }

          if (direcao == 'right') {
              if ((mapa[loc_i ][loc_j + 1] == 1) || (mapa[loc_i][loc_j + 1] == 9)) {
                    loc_j += 1
              }
            }

    }

    var html = `
    <!DOCTYPE html>

<html lang="EN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RPG</title>
        <style>
            table {
                margin: auto;
                border: 1px solid #000;
                border-collapse: collapse;
            }
            td {
                width: 1.500em;
                height: 1.500em;
                border: 1px solid black;
                border-collapse: collapse;
            }
            .bg {
                background: #000;
            }
            .p {
                background: #5b4b41;
            }
            .control {
                background: #F0FFFF;
            }
            .alvenaria {
                background: #838B8B;
            }
            .avat {
              border-radius: 50%;
              display: block;
              border: 1px solid #000000;
              background-color: #00BFFF;
              box-shadow: inset -4px -4px 10px #000, inset 3px 3px 6px #00BFFF;
            }
            .bot {
                width: 100%;
                height: 100%;
            }
            .espaco {
                width: 100%;
                height: 100%;
            }
            .button {
              color: #00000:
              width: 1px;
              height: 1px;
              border: 1px solid black;
              border-collapse: collapse;
              background: #838B8B;
              cursor: pointer;
            }


        </style>
    </head>
    <body>
        <table>`;

    for(i = 0; i < 28; i++){
        html += "<tr>";
        for (j = 0; j < 48; j++){

            if (i == loc_i && j == loc_j){
              html += `<td class="avat "></td>`;
            }

            else if(mapa[i][j] == 0) {
                html += `<td class="bg"></td>`;
            }

            else if (mapa[i][j] == 1){
                html += `<td class="p"></td>`;
            }


            else if (mapa[i][j] == 2) {
                html += `<td >
                            <a class="button" href="/?direcao=up">▲</a>
                        </td>`;
            }
            else if (mapa[i][j] == 4) {
                html += `<td >
                            <a class="button" href="/?direcao=left">◄</a>
                        </td>`;
            }
            else if (mapa[i][j] == 5) {
                html += `<td >
                            <a class="button" href="/?direcao=right">►</a>
                        </td>`;
            }
            else if (mapa[i][j] == 6) {
                html += `<td >
                            <a class="button" href="/?direcao=down">▼</a>
                        </td>`;
            }
            else {
                html += `<td class="alvenaria"></td>`;
            }
        }
        html += "</tr>";
    }
    html += `</table></body></html>`
    res.send(html);

});

app.get('/luta', function(req, res) {

if (req.query['ataque'] != undefined){
  var ataque = req.query['ataque']
    console.log(ataque); }

  var htmlLuta = `
  <!DOCTYPE html>

  <html lang="EN">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>RPG</title>
      <style>
          table {
              margin: auto;
              border: 1px solid #000;
              border-collapse: collapse;
          }
          td {
              width: 1.500em;
              height: 1.500em;
              border: 1px solid black;
              border-collapse: collapse;
              </style>

          </head>
          <body>
              <table>`;


               var hpAvatar = 150;
               var hpComputador;
               var contagemEspecial = 5;
               var escolhaAtaque;
               var i = 1;

               while (hpAvatar > 0) { // Acho que pode fazer com o FOR também
                hpComputador = 10 + i;

             htmlLuta +=
                           "<tr><td>====================</td></tr>"
                                      "<tr><td>INICIO</td></tr>"
                            "<tr><td>====================</td></tr>";

                while (hpAvatar > 0 && hpComputador > 0) {
                  htmlLuta +=

                  `<tr><td>====================</td></tr>
                  <tr><td>- HP Avatar:  + ${hpAvatar}</td></tr>
                  <tr><td>- HP Computador:  + ${hpComputador}</td></tr>
                  <tr><td>- Contagem Especiais:  + ${contagemEspecial}</td></tr>
                  <tr><td>====================</td></tr>

                   <tr><td>Escolha seu ataque</td></tr>
                  <tr><td><a href="/luta?ataque=1"> Soco </a> </td>
                      <td><a href="/luta?ataque=2"> Ataque Especial </a> </td></tr>`;

                  escolhaAtaque = ataque
                 switch (escolhaAtaque) {
                 case 1:
                  htmlLuta += "<tr><td>Avatar aplicou um soco</td></tr>";
                  hpComputador -= 7;
                  break;
                 case 2:
                  htmlLuta += "<tr><td>Avatar aplicou um ataque especial</td></tr>";
                  hpComputador -= 20;
                  contagemEspecial--; // ContagemEspecial = ContagemEspecial -1
                  break;
                 default:
                  htmlLuta += "<tr><td>Opcao invalida</td></tr>";
                  break;
                 }
                 if (hpComputador > 0) {
                  escolhaAtaque = 1
                  switch (escolhaAtaque) {
                  case 1:
                   htmlLuta += "<tr><td>Computador aplicou um soco</td></tr>";
                   hpAvatar -= 2 + (i / 10); // Antes, no lugar desses VAR, era INT
                   break;
                  case 2:
                   htmlLuta += "<tr><td>Computador aplicou um chute</td></tr>";
                   hpAvatar -= 3 + (i / 10);
                   contagemEspecial--;           // ContagemEspecial = ContagemEspecial -1
                   break;
                  case 3:
                   htmlLuta +=  "<tr><td>Computador aplicou um ataque especial</td></tr>";
                   hpAvatar -= 4 + (i / 20);
                   break;
                  }
                 } else {
                  htmlLuta += "<tr><td>Inimigo derrotado</td></tr>";
                 }
                }
                if (hpAvatar > 0) {
                 hpAvatar += 5;
                 if (hpAvatar > 150) {
                  hpAvatar = 150;
                 }
                 if (i % 10 == 0) {
                  contagemEspecial++;
                  if (contagemEspecial > 5) {
                   contagemEspecial = 5;
                  }
                 }
                }
                i++;
               }

           res.send(htmlLuta)
});




 //menu

//rotas

