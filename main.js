//Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
//Servendoci di handlebars stampiamo tutto a schermo.





$(document).ready(function() {
  $.ajax({
 		url: "https://flynn.boolean.careers/exercises/api/array/music",
 		method: "GET",
 		success: function (data) {
 			console.log("questo è ciò che mi ritorna l'api per intero " , data.response)
 			//apro un ciclo for sulla lunghezza dei dati che mi restituisce la mia api (array di oggetti)
 			for (var i = 0; i < data.response.length; i++) {
 				//il source mi restituisce il div per intero che ho inserito nell'html
 				var source = $(".cd-global").text()
 				// console.log(source) //
 				var template = Handlebars.compile(source)
 				// console.log(template) //

 				//creo una variabile globalsong a cui assegno come valore un oggetto e passo come chiave gli elementi che ho inserito in html con handlebars assegnandogli il valore che mi interessa
 				var globalsong = {
 					img : data.response[i].poster,
 					title : data.response[i].title,
 					author : data.response[i].author,
 					genre : data.response[i].genre,
 					year : data.response[i].year
 				}

 				var html = template(globalsong);
 				console.log(html)
 				//stampo in pagina
 				$(".cds-container.container").append(html)
 			}

 		},
 		error: function (richiesta, stato, errori) {
 			alert("Errore " + richiesta + stato + errori);
 		}
 	})
 });
