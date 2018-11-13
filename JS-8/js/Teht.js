'use strict';
for (let i=0; i<10; i++) { /* i<10 koska, look.length tuo näköjään 10 */
  const body = document.getElementsByTagName('body')[0];
  const image = '<img src="">';
  const text = '<p class="normal"></p>';
  const header = '<h1></h1>';
  const newDiv = '<div></div>';
  body.innerHTML = body.innerHTML + newDiv;
  const div = document.getElementsByTagName('div')[i];
  div.innerHTML = div.innerHTML + header + text;
  document.getElementsByTagName('p')[i].innerHTML = image;
  let p = document.getElementsByTagName('p')[i];
}

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
  for (let i=0; i<look.length; i++) {
    let nimi, kuvaus, linkki, kotisivu, kuva;
    const image = '<img src="">';
    let p = document.getElementsByClassName('normal')[i];
    let h = document.getElementsByTagName('h1')[i];
    p.innerHTML = image;
    h.innerHTML = "";

    p.innerHTML = p.innerHTML + "<br>" + (1 + i) + "/" + look.length + "<br>";

    if (look[i].show.name === undefined) {
      nimi = "-";
    } else {
      nimi = look[i].show.name;
    }
    h.innerHTML = h.innerHTML + nimi + "<br>";

    if (look[i].show.url === undefined || look[i].show.url === null) {
      linkki = "-";
      p.innerHTML = p.innerHTML + 'Ohjelman linkki: ' + linkki + "<br>";
    } else {
      linkki = look[i].show.url;
      p.innerHTML = p.innerHTML + 'Ohjelman linkki: ' + linkki.link(linkki) + "<br>";
    }

    if (look[i].show.officialSite === undefined || look[i].show.officialSite === null) {
      kotisivu = "-";
      p.innerHTML = p.innerHTML + 'Ohjelman kotisivu: ' + kotisivu + "<br><br>";
    } else {
      kotisivu = look[i].show.officialSite;
      p.innerHTML = p.innerHTML + 'Ohjelman kotisivu: ' + kotisivu.link(kotisivu) + "<br><br>";
    }


    if (look[i].show.image === null || look[i].show.image.medium === undefined) {
      kuva = "";
    } else {
      kuva = look[i].show.image.medium;
    }
    document.getElementsByTagName('img')[i].src = kuva;

    if (look[i].show.summary === undefined) {
      kuvaus = null;
    } else {
      kuvaus = look[i].show.summary;
      p.innerHTML = p.innerHTML + 'Ohjelman kuvaus: ' + kuvaus + "<br>";
    }

    const genres = look[i].show.genres.length;

    /*
    p.innerHTML = i+1 + "/5" + "<br>" + p.innerHTML + "<br>" + 'Ohjelman nimi: ' + nimi + "<br>"
        + 'Ohjelma linkki: ' + linkki.link(linkki) + "<br>"
        + 'Ohjelma kotisivu: ' + kotisivu.link(kotisivu) + "<br><br>"; */


    /* p.innerHTML = p.innerHTML + 'Ohjelman kuvaus: ' + kuvaus + "<br>"; */

    for (let s=0; s<genres; s++) {
      const genre = look[i].show.genres[s];
      p.innerHTML = p.innerHTML + 'Ohjelman genre ' + (1 + s) + ": " + genre + "<br>";
    }
  }
}