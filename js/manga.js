var mangas = ["./img/Manga_01.png",
	      "./img/Manga_02.png",
	      "./img/Manga_03.png",
	      "./img/Manga_04.png",
	      "./img/Manga_05.png",
	      "./img/Manga_06.png",
	      "./img/Manga_07.png",
	      "./img/Manga_08.png"];
var n = Math.floor(Math.random() * mangas.length);
var output = '<a href="http://www.kspub.co.jp/book/detail/1538726.html"><img class="Manga" src="'+ mangas[n] + '" alt="Manga" title="fumio" width="225" height="160"/></a>';
document.write(output);
