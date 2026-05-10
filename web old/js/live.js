function DenZavodu(datetime,nazev)
{
    this.datetime=datetime;
    this.nazev=nazev;
    this.rozjizdky= [];
}
function Rozjizdka(name,zacatek,konec)
{
    this.name=name;
    this.zacatek=zacatek;
    this.konec=konec;
}

let patek=new DenZavodu(new Date("September 30, 2022 00:00:00").getTime(),"Pátek");
patek.rozjizdky.push(new Rozjizdka("Prezentace",new Date("September 30, 2022 09:00:00").getTime(),new Date("September 30, 2022 10:00:00").getTime()));
patek.rozjizdky.push(new Rozjizdka("Páteční tradiční těrlická buchta",new Date("September 30, 2022 10:00:00").getTime(),new Date("September 30, 2022 18:00:00").getTime()));
let sobota=new DenZavodu(new Date("September 31, 2022 00:00:00").getTime(),"Sobota");

let nedele=new DenZavodu(new Date("October 1, 2022 00:00:00").getTime(),"Neděle");
nedele.rozjizdky.push(new Rozjizdka("„Maraton“ Regata NSS-A,B a C a RG-65",new Date("October 1, 2022 9:00:00").getTime()),new Date("October 1, 2022 12:00:00").getTime());
nedele.rozjizdky.push(new Rozjizdka("Zakončení a vyhlášení výsledků",new Date("October 1, 2022 13:00:00").getTime(),new Date("October 1, 2022 14:00:00").getTime()));
