const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/* RECUPERER LES ELEMENTS ET DECLARER LES VARIABLES */
let text = document.getElementById("text");
let flecheDroite = document.querySelector(".arrow_right");
let flecheGauche = document.querySelector(".arrow_left");
let index = 0;
let listeDot = document.getElementsByClassName("dot");
let baliseImage = document.getElementById("banner-img");

/* GESTION DE LA FLECHE DROITE */
flecheDroite.addEventListener ("click", () => {
	console.log ("Vous avez cliqué sur la flèche droite");
	index+= 1;
	if(index===4)index=0;
	baliseImage.src = "./assets/images/slideshow/"+slides[index].image;
	text.innerHTML=slides[index].tagLine;
	console.log(index);	
	for (let i=0; i<listeDot.length; i++){
		console.log (listeDot[i]);
		listeDot[i].className="dot";				
	}
	listeDot[index].className="dot dot_selected";	
});
	
/* GESTION DE LA FLECHE GAUCHE */
/* flecheGauche.addEventListener ("click", () => {
	console.log ("Vous avez cliqué sur la flèche gauche")	
	if(index===0)index=4;
	index=index-1;
	console.log(index);
	baliseImage.src = "./assets/images/slideshow/"+slides[index].image;
	text.innerHTML=slides[index].tagLine;
	for (let i=0; i<listeDot.length; i++){
		console.log (listeDot[i]);
		listeDot[i].className="dot";				
	}
	listeDot[index].className="dot dot_selected";
	
}); */