
class BatalhaRPG {

 function ataqueAvatar() {
  var leitor = new Scanner("Escolha seu ataque"); 
  var soco = 1;
  var especial = 2;
  return leitor
 }

 function ataqueComputador () {
  var gerador = new Radar();
  return gerador(3) + 1; // Não sabia para o que trocaria essa linha
 }

 function anexaHP(hpAvatar, hpComputador, contagemEspeciais) {
  console.log("====================");
  console.log("- HP Avatar: " + hpAvatar);
  console.log("- HP Computador: " + hpComputador);
  console.log("* Contagem Especiais: " + contagemEspeciais);
  console.log("====================");
 }

 function batalha() {
  var hpAvatar = 150;
  var hpComputador;
  var contagemEspecial = 5;
  var escolhaAtaque;
  var i = 1;

  while (hpAvatar > 0) { // Acho que pode fazer com o FOR também 
   hpComputador = 10 + i;

   console.log("====================");
   console.log("INICIO " + i);
   console.log("====================\n");

   while (hpAvatar > 0 && hpComputador > 0) {
    anexaHP(hpAvatar, hpComputador, contagemEspecial);
    escolhaAtaque = ataqueAvatar();
    
    switch (escolhaAtaque) {
    case 1:
     console.log("Avatar aplicou um soco.");
     hpComputador -= 7;
     break;
    case 2:
     console.log("Avatar aplicou um ataque especial.");
     hpComputador -= 20;
     contagemEspecial--; // ContagemEspecial = ContagemEspecial -1 
     break;
    default:
     console.log("Opcao invalida");
     break;
    }
    if (hpComputador > 0) {
     escolhaAtaque = ataqueComputador();
     switch (escolhaAtaque) {
     case 1:
      console.log("Computador aplicou um soco.");
      hpAvatar -= 2 + (var)(i / 10); // Antes, no lugar desses VAR, era INT 
      break;
     case 2:
      console.log("Computador aplicou um chute.");
      hpAvatar -= 3 + (var)(i / 10);
      contagemEspecial--;           // ContagemEspecial = ContagemEspecial -1 
      break;
     case 3:
      console.log("Computador aplicou um ataque especial.");
      hpAvatar -= 4 + (var)(i / 20);
      break;
     }
    } else {
     console.log("Inimigo derrotado");
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
  return i; 
 } 

 class Informacoes(String[] args) {    // Não sabia o que trocava dentro desse parentese
  var leitor = new  Scanner("Escolha uma opcao:");
  var continua = 1;
  var recorde = 0;
  while (continua == 1) {

   var pontos = batalha();
   console.log("Usuario chegou a " + pontos + " pontos.");
   if (pontos > recorde) {
    recorde = pontos;
   }
   console.log("RECORDE ATUAL = " + recorde);
   console.log("Fim de jogo. Deseja continuar? (1) Sim (2) Nao");
   continua = leitor
  }
       }
}