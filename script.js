function parseAlbumData(data) {
	return data.split('\n').map(line => {
		const [anno, numero, artista, titolo, copertina] = line.split('#');
		return { anno, numero, artista, titolo, copertina: 'image.png' }; 		// Assuming 'image.png' is a placeholder
	});
}

// Fetch and display albums
fetch('database.txt')
  .then(response => response.text())
  .then(data => {
    const albums = parseAlbumData(data);
    albums.forEach(album => {
      const albumElement = document.createElement('div');
      albumElement.classList.add('album-container');

      albumElement.innerHTML = `
        <img src="${album.copertina}" alt="Copertina Album">
        <h2>${album.titolo}</h2>
        <p>Artista: ${album.artista}</p>
        <p>Anno: ${album.anno}</p>
        <p>Numero: ${album.numero}</p>
        <a href="${album.copertina}" target="_blank" class="album-link">Vedi Copertina</a>
      `;

      document.getElementById('albums-container').appendChild(albumElement);
    });
  })
  .catch(error => console.error('Error loading album data:', error));