var mangas = ["./Images/Manga_01.png",
	      "./Images/Manga_02.png",
	      "./Images/Manga_03.png",
	      "./Images/Manga_04.png",
	      "./Images/Manga_05.png",
	      "./Images/Manga_06.png",
	      "./Images/Manga_07.png",
	      "./Images/Manga_08.png"];
var n = Math.floor(Math.random() * mangas.length);
var output = '<img class="Manga" src="'
    + mangas[n] + '" alt="Manga" title="fumio"/>';
document.write(output);