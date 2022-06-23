
    let galerie2021 ={clankyalias:["Minisail.pl","Rajce-Ferodedek","Drive-Val","Fotky Google-Snek"],
    clanky:["http://www.minisail.pl/index.php/2021/10/06/terlicko-2021/?fbclid=IwAR34HRgYVQOMhwWfLUEv8cdUjZQgTdGfFcr2uejdDD8dvlsD7uwIIFKEILU","https://minisail.rajce.idnes.cz/Terlicka_plachta_1._-_3._10._2021/","https://drive.google.com/drive/folders/1JG2F9iNUn6NOawPQnZOkL0AGFgLFxVpd?usp=sharing","https://photos.google.com/share/AF1QipNnHDr13oX2xww9A2vgowscje3L-Q2GszbPmqOWp4COteTuuM1zFRxtRB-rCBN-Cw?key=VE9GN1dhQmd6VjdxTHoyd19wRWdxVE1MMHY1TE93"],
    key:2021,
    };
    let galerie2020 ={clankyalias:["Drive-Val"],
    clanky:["https://drive.google.com/drive/folders/1zKT3x748ADWmIbU-sOcDF5jGU6uX26-1?usp=sharing"],
    key:2020,
    };

var galerie_list=[];

function build_list_g()
{

    galerie_list.push(galerie2021);
    galerie_list.push(galerie2020);
}

function down_galerie(sender)
{
  if(galerie_list.length==0)
  {
      build_list_g()
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

  for(var i=0;i<galerie_list.length;i++)
  {
      if("clanky-"+galerie_list[i].key==sender.id || "vysledky-"+galerie_list[i].key==sender.id || "galerie-"+galerie_list[i].key==sender.id)
      {
          var place=document.getElementById(sender.id.split("-")[1]+"place")
          place.innerHTML="";
          for(var j=0;j<galerie_list[i].clankyalias.length;j++)
          {
            var butt=document.createElement("button");
            
            butt.classList.add("odkazy_butt");
            var a=document.createElement("a");
        
            a.innerHTML=galerie_list[i].clankyalias[j];
            
            a.href=galerie_list[i].clanky[j];
            butt.appendChild(a);
            place.appendChild(butt);
            place.appendChild(document.createElement("br"));
          }

      }
  }
}