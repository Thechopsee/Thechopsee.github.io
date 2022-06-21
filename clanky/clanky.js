

let clanky2021 ={clankyalias:["polar","terlicka plachta"],
                clanky:["https://polar.cz/zpravy/karvinsko/terlicko/11000027836/na-terlicke-plachte-zasahovali-potapeci?fbclid=IwAR2vnLrZcUTEOr5Ky3UY4bTVhog1Ef7xCsAeJpKNKf3HQvPQex_TubySk8U", "clanky/tp2021.pdf"],
                key:2021,
                };

var clanky_list=[];

function build_list()
{
    clanky_list.push(clanky2021);
}
function down_clanky(sender)
{
  if(clanky_list.length==0)
  {
      build_list()
  }
  sender.classList.remove('galery_butt');
  sender.classList.add('galery_butt_reversed');
  for(var i=0;i<clanky_list.length;i++)
  {
      if("clanky-"+clanky_list[i].key==sender.id)
      {
          var place=document.getElementById(sender.id+"place")
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
          }

      }
  }
}