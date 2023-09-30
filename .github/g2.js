var id = '1wHpyiP1TnB4NpFWXu_a3MhH2RiSiEDGiPjPgx2bB0Wk';
var gid = '405380521';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = '<table><tr>'
  json.table.cols.forEach(colonne => table += '<th>' + colonne.label + '</th>')
  table += '</tr>'
  json.table.rows.forEach(ligne => {
    table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += '<td>' + valeur + '</td>'
      }
    )
    table += '</tr>'
    }
  )
  table += '</table>'
return table
}
