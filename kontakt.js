(function() {
    emailjs.init("user_aHSZslb08hBUmqeZ4wJ6L");
      console.log("init");
    })();

    function sendEmail(form)
    {
        if(form.name.value==null||form.name.value=="")
        {
            document.getElementById("err").innerHTML="Jméno nezadáno";
            console.log("Jméno nezadáno")
            return;
        }
        if(form.email.value==null||form.email.value=="")
        {
            document.getElementById("err").innerHTML="Email nezadán";
            console.log("Email nezadán")
            return;
        }
        if(form.message.value==null||form.message.value=="")
        {
            document.getElementById("err").innerHTML="Zpráva nezadána";
            console.log("Zpráva nezadána")
            return;
        }
        var templateParams = {
            jmeno: form.name.value,
            email: form.email.value,
            typ_zpravy:form.tema.value,
            zprava:form.message.value,
            };
        emailjs.send('service_w22m9er', 'template_jwxganp', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        form.name.value="";
        form.tema.value="Vyberte";
        form.email.value="";
        form.email.zprava="";
        document.getElementById("err").innerHTML="Zpráva odeslána!";
        }, function(error) {
        console.log('FAILED...', error);
            
        alert("Něco se pokazilo ,zkuste odeslaní znovu"); 
        });
    }