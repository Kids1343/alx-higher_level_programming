$.get('http://swapi.co/api/films?format=json', (data) => {
  for (let i = 0; i < data.results.length; i++) {
    $('UL#list_movies').append('<li>' + data.results[i].title + '</li>');
  }
});
