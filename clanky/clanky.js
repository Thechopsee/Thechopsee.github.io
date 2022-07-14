//step 1.create new object where: clankyalias are text used in buttons on web page,clanky are links used as href on buttons and key is used for find exact object.
//krok 1.Vytvořit nový objekt ,kde clankyalias budou aliasy použité jako text tlačítek,clanky jsou pole linků na ,které tyto tlačítka budou ukazovat a key sloučí k nalezení správného objektu při zpracovaní. 
let clanky2021 ={clankyalias:["Polar","Minisail.cz","Oficiální report","Těrlický miniexpress"],
                clanky:["https://polar.cz/zpravy/karvinsko/terlicko/11000027836/na-terlicke-plachte-zasahovali-potapeci?fbclid=IwAR2vnLrZcUTEOr5Ky3UY4bTVhog1Ef7xCsAeJpKNKf3HQvPQex_TubySk8U","https://www.minisail.cz/setkani/z-akci/id:13859","clanky/tp2021.pdf","https://www.youtube.com/watch?v=llcK838mBz0"],
                key:2021,
                };
let clanky2020 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:12507/x-terlicka-plachta-2020"],
                key:2020,
                };
let clanky2019 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:11371/zamykani-terlicko-2019"],
                key:2019,
                };
let clanky2018 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:10492/terlicka-plachta-2018"],
                key:2018,
                };

let clanky2017 ={clankyalias:["modelyznojmo.webnode.cz","minisail.cz"],
                clanky:["https://modelyznojmo.webnode.cz/kde-jsme-byli/terlicka-plachta-30-9-2017/","https://www.minisail.cz/setkani/z-akci/id:9036/terlicko-2017"],
                key:2017,
                };
let clanky2016 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:6783/zaver-sezony-terlicko-2016"],
                key:2016,
                };
let clanky2015 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:4495/terlicko-zamykani-2015"],
                key:2015,
                };
let clanky2014 ={clankyalias:[""],
                clanky:[""],
                key:2014,
                };
let clanky2013 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:2524/terlicko-2013-pozdni-setkani-"],
                key:2013,
                };
let clanky2012 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:2481/terlicko-2012"],
                key:2012,
                };
let clanky2011 ={clankyalias:["minisail.cz"],
                clanky:["https://www.minisail.cz/setkani/z-akci/id:2438/terlicko-zamykani-2011"],
                key:2011,
                };
var clanky_list=[];

//step 2.add object to list.Function is run when page body is loaded.
//krok 2.přidat objekt do listu.Funkce se spustí při načtení těla stránky.
function build_list()
{
    clanky_list.push(clanky2021);
    clanky_list.push(clanky2020);
    clanky_list.push(clanky2019);
    clanky_list.push(clanky2018);
    clanky_list.push(clanky2017);
    clanky_list.push(clanky2016);
    clanky_list.push(clanky2015);
    clanky_list.push(clanky2014);
    clanky_list.push(clanky2013);
    clanky_list.push(clanky2012);
    clanky_list.push(clanky2011);
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