const result = () =>
{
	let score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
 alert(""+score);
 
  
  

};

window.addEventListener("scroll", function () {
  let texto = document.getElementById("texto");
  let scrollY = window.scrollY;

  if (scrollY > 100) { // Ajusta el valor según necesites
    texto.style.opacity = "0"; // Desaparece
  } else {
    texto.style.opacity = "1"; // Aparece
  }
});


