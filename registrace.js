function Registrace(){
    var jmeno;
    var prijmeni;
    var date;
    var mail;
    var klub;
    var licence;
    var stat;
    var rg;
    var kategorie;
    var nazev;
    var plocha;
    var delka;
    var vytlak;
    var meritko;

}

function validace(form){
    var registrace=Registrace;
    
    registrace.jmeno=form.jmeno.value;
    registrace.prijmeni=form.prijmeni.value;
    registrace.date=form.date.value;
    registrace.mail=form.mail.value;
    registrace.klub=form.klub.value;
    registrace.licence=form.licence.value
    registrace.stat=form.stat.value;
    

    registrace.rg=form.rg.value;
    registrace.kategorie=form.kategorie.value;
    registrace.nazev=form.nazev_modelu.value;
    registrace.plocha=form.plocha.value;
    registrace.delka=form.delka.value;
    registrace.vytlak=form.vytlak.value;
    registrace.meritko=form.meritko.value;


    console.log(registrace.jmeno);
    console.log(registrace.prijmeni);
    console.log(registrace.date);
    console.log(registrace.mail);
    console.log(registrace.klub);
    console.log(registrace.licence);
    console.log(registrace.stat);

    console.log(registrace.rg);
    console.log(registrace.kategorie);
    console.log(registrace.nazev);
    console.log(registrace.plocha);
    console.log(registrace.delka);
    console.log(registrace.vytlak);
    console.log(registrace.meritko);

    if(registrace.rg==0 && registrace.kategorie.value=="Vyber"){
        console.log("Zadej model nebo zaškrkni RG");
    }

}

(function() {
    emailjs.init("user_aHSZslb08hBUmqeZ4wJ6L");
      console.log("init");
    })();


    
     
    function sendEmail(form)
    {
        var templateParams = {
            name: form.jmeno.value,
            prijmeni: form.prijmeni.value,
            message: 'data_sem'
            };
        emailjs.send('service_w22m9er', 'template_pkbylb9', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
    }