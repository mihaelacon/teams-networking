function displayTeams(teams) {
    //console.warn("display", teams);

    var teamsHTML = "";
    teams.forEach(function (team) {
      //console.info(team.promotion);
        teamsHTML += ` 
           <tr>
                <td>${team.promotion}</td>
                <td>${team.members}</td>
                <td>${team.name}</td>
                <td>
                  <a href="${team.url}">open</a>
                </td>
                <td>x e</td>
            </tr>`;
    });
    //console.warn(teamsHTML);

    document.querySelector("table tbody").innerHTML = teamsHTML;
}

//afisare
//console.info(teamsHTML);

function loadTeams() {
    fetch("data/teams.json")
      .then(function (r) {
        //console.info(r);
        return r.json();
      })  
      .then(function (teams) {
        //console.warn("teams",teams);
        displayTeams(teams);
      });
}

function submitForm(e) {
  console.warn("submit",e);
  e.preventDefault();
  //nu mai face ce ar fi facut implicit -opreste formularul sa faca submit sa incarce pagina
  var promotion = document.querySelector('input[name=promotion]').value;
  var members = document.querySelector('input[name=members]').value;
  var name = document.querySelector('input[name=name]').value;
  var url = document.querySelector('input[name=url]').value;


  var team = {
    promotion: promotion, 
    members: members,
    name: name,
    url: url,
    //aici virgula poate sa fie sau sa nu fie; in json la ultima nu se pune virgula
  }

  console.warn("submit", JSON.stringify(team)); //submit {"promotion":"A","members":"B","name":"C","url":"D"}
  console.warn("submit", promotion, members, name, url);
  console.warn(team); //{promotion: 'A', members: 'B', name: 'C', url: 'D'}
}

function initEvents() {
  var form = document.getElementById("editForm");
  console.warn("form",form)
  console.info(form);
  form.addEventListener("submit", submitForm)
  //cand face submit se executa functia submitForm
}

loadTeams();
initEvents();
