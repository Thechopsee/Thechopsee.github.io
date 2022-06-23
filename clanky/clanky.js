

let clanky2021 ={clankyalias:["Polar","Minisail.cz","Oficiální report"],
                clanky:["https://polar.cz/zpravy/karvinsko/terlicko/11000027836/na-terlicke-plachte-zasahovali-potapeci?fbclid=IwAR2vnLrZcUTEOr5Ky3UY4bTVhog1Ef7xCsAeJpKNKf3HQvPQex_TubySk8U","https://www.minisail.cz/setkani/z-akci/id:13859","clanky/tp2021.pdf"],
                key:2021,
                };
let clanky2020 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:12507/x-terlicka-plachta-2020"],
                key:2020,
                };

var clanky_list=[];

function build_list()
{
    clanky_list.push(clanky2021);
    clanky_list.push(clanky2020);
}
function down_clanky(sender)
{
  if(clanky_list.length==0)
  {
      build_list()
  }
  for(var i=0;i<sender.classList.length;i++)
  {
    if(sender.classList[i]=='galery_butt_reversed')
    {
        sender.classList.add('galery_butt');
        sender.classList.remove('galery_butt_reversed');
        
        var place=document.getElementById(sender.id.split("-")[1]+"place")
        place.innerHTML="";
        return;
    }
    
    
  }
  document.getElementById("clanky-"+sender.id.split("-")[1]).classList.remove('galery_butt_reversed');
  document.getElementById("vysledky-"+sender.id.split("-")[1]).classList.remove('galery_butt_reversed');
  document.getElementById("galerie-"+sender.id.split("-")[1]).classList.remove('galery_butt_reversed');
  document.getElementById("clanky-"+sender.id.split("-")[1]).classList.add('galery_butt');
  document.getElementById("vysledky-"+sender.id.split("-")[1]).classList.add('galery_butt');
  document.getElementById("galerie-"+sender.id.split("-")[1]).classList.add('galery_butt');
  sender.classList.remove('galery_butt');
  sender.classList.add('galery_butt_reversed');
  for(var i=0;i<clanky_list.length;i++)
  {
    if("clanky-"+clanky_list[i].key==sender.id || "vysledky-"+clanky_list[i].key==sender.id || "galerie-"+clanky_list[i].key==sender.id)
      {
          var place=document.getElementById(sender.id.split("-")[1]+"place")
          place.innerHTML="";
          for(var j=0;j<clanky_list[i].clankyalias.length;j++)
          {
            var butt=document.createElement("button");
            
            butt.classList.add("odkazy_butt");
            var a=document.createElement("a");
        
            a.innerHTML=clanky_list[i].clankyalias[j];
            
            a.href=clanky_list[i].clanky[j];
            butt.appendChild(a);
            place.appendChild(butt);
            place.appendChild(document.createElement("br"));
          }

      }
  }
}