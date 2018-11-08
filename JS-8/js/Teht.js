const nappi = document.querySelector('#hakunappi');
nappi.addEventListener('click', function(evt) {
  let etsi = document.querySelector('#hakuteksti').value;
  fetch('http://api.tvmaze.com/search/shows?q=' + etsi)
  .then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
    etsiminen(json);
  }).catch(function(error) {
    console.log(error);
  });
})



function etsiminen(look) {
  for (let i=0; i<5; i++) {
    const body = document.getElementsByTagName('body')[0];

    const image = '<img src="">';
    const p = '<p></p>';
    body.innerHTML = body.innerHTML + p;
    document.getElementsByTagName('p')[i].innerHTML = '';

    if (look[i].show.name === null) {
      const nimi = "NULL";
    } else {
      const nimi = look[i].show.name;
    }

    if (look[i].show.summary === null) {
      const kuvaus = "NULL";
    } else {
      const kuvaus = look[i].show.summary;
    }

    if (look[i].show.url === null) {
      const linkki = "NULL";
    } else {
      const linkki = look[i].show.url;
    }

    if (look[i].show.officialSite === null) {
      const kotisivu = "NULL";
    } else {
      const kotisivu = look[i].show.officialSite;
    }

    if (look[i].show.image.medium === null) {
      const kuva = "NULL";
    } else {
      const kuva = look[i].show.image.medium;
    }

    const genres = look[i].show.genres.length;

    /*let i, s;
    s = 2;
    const body = document.getElementsByTagName('body')[0];
    for (i=0; i<=2; i++) {
      const image = '<img class="list">';
      const list = '<li></li>';
      body.innerHTML = list + body.innerHTML;
      document.getElementsByTagName('li')[0].innerHTML = image;
      document.getElementsByTagName('img')[0].src = pics[s].thumb;
      s--;
    }
    const bigImg = document.getElementsByTagName('img')[3];
    const img1 = document.getElementsByTagName('img')[0];
    const img2 = document.getElementsByTagName('img')[1];
    const img3 = document.getElementsByTagName('img')[2]; */

    /* let image = document.createElement('img');
    let p = document.createElement('p'); */


      p.innerHTML = p.innerHTML + 'Ohjelman nimi: ' + nimi + "<br>";

    for (let s=0; s<genres; s++) {
      const genre = look[i].show.genres[s];
      p.innerHTML = p.innerHTML + 'Ohjelman genret: ' + genre + "<br>";
    }

    p.innerHTML = p.innerHTML + 'Ohjelma linkki: ' + linkki.link(linkki) +
        "<br>";
    p.innerHTML = p.innerHTML + 'Ohjelma kotisivu: ' + kotisivu.link(kotisivu) +
        "<br><br>";
    p.innerHTML = p.innerHTML + 'Ohjelman kuvaus: ' + kuvaus;
    image.src = kuva;

  }
}