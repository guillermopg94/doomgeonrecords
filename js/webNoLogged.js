$(document).ready(function() {

    let arrayArtista = [];

    $.ajax({
        type: "GET",
        url: "php/mostrarArtistas.php",
        dataType: "json",
        success: function (resultado) {
           
          for (var x of resultado) {
            JSON.stringify(x);
        
            arrayArtista.push({ name: x.nombre_artista, src: x.imagen_artista, facebook: x.facebook, instagram:x.instagram, bandcamp:x.bandcamp});
         
          }
      
          artistas (arrayArtista);
        
        },
        error: function (xhr) {
          localStorage.setItem("errorMostrandoArtista", xhr);
        },
      });
  

if(localStorage.getItem("ubication")=="login"){

    $("<div id='register-div'><form id='login'><p>Nombre de usuario</p><input type='text' name='user' placeholder='Username' required='required'/>"+
    "<p>Contraseña</p><input type='password' name='pass' placeholder='Password' required='required' /><br><br><button class='boton' id='btn-login'>"+
    "Acceder</button><br></form><p class='p-login-register'>¿No tienes una cuenta creada? Puedes crearla &nbsp; <a href='' class='register'>aquí</a><p></div>").appendTo("main");
}
else if (localStorage.getItem("ubication")=="register"){
   $("<div id='login-div'><form id='registro'><p>Nombre de usuario</p>"+
    "<input type='text' name='user' placeholder='Nombre de usuario' required='required'>"+
    "<p>Nombre</p><input type='text' name='nombre' placeholder='Nombre' required='required'>"+
    "<p>Primer Apellido</p><input type='text' name='primerapellido' placeholder='Primer Apellido' required='required'>"+
    "<p>Segundo apellido</p><input type='text' name='segundoapellido' placeholder='Segundo Apellido' required='required'>"+
    "<p>Email</p><input type='text' name='email' id='email' placeholder='Email' required='required'>"+
    "<p>Contraseña</p><input type='password' name='pass' id='pass' placeholder='Contraseña' required='required'/>"+
    "<p> Repite contraseña</p><input type='password' name='passAgain' id='passAgain' placeholder='Repite la contraseña' required='required' />"+
    "<div id='passstrength'></div><br><br><button class='boton'id='btn-create'>Crear Cuenta</button><br>"+
    "</form><p class='p-login-register'>¿Ya tienes una cuenta creada? Puedes iniciar sesión &nbsp; <a href='' class='a-login'>aquí</a></p></div>").appendTo("main");
}

else if(localStorage.getItem("ubication")=="contact-no-logged"){
    $("<div class='container-contact'><h1>CONTACTA CON NOSOTROS</h1><hr size='2px' color='black' /><div class='contact-form'><form id='send-mail' ><input type='text' name='nombre' placeholder='Tu Nombre' required='required'><input type='email' name='email' required='required' id='email-contact' placeholder='Tu Email'>"+
    "<input type='text' name='asunto' required='required' placeholder='Asunto'><input type='text-area' name='mensaje' placeholder='Mensaje'><div class='g-recaptcha' data-sitekey='6Lc9W5YfAAAAAKGuAVi7XR0dHR0vpjsRZorXj0ol'></div><input type='button' id='enviar-mensaje-contacto' value='Enviar Mensaje'></form></div>"+
    "<div class='div-iframe-contact'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6163.706932235603!2d-0.4234726723776185!3d39.427437905252845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604e5c5d63bf9f%3A0x1082e832842f1655!2s46200%20Paiporta%2C%20Valencia!5e0!3m2!1ses!2ses!4v1649618259845!5m2!1ses!2ses' width='100%' height='600' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div></div>")
    .appendTo("main");
}

else if(localStorage.getItem("ubication")=="home-no-logged"){

   function artistas(artista){
    $("<h1 class='h1-home'>DOOMGEON RECORDS</h1><div class='slider'></div><div class='text-home'><p>Esta es la página web oficial de Doomgeon Records, un sello discográfico que se fundó en Valencia (España) "+
    "en 2019 con la intención de editar y promocionar bandas locales de Rock Progresivo y otros estilos más duros "+
    "como el Doom Metal o el Punk. La mirada del sello está puesta en bandas locales del género underground donde podemos "+
    "encontrar sonidos potentes y transgresores. Actualmente ha editado ya a grupos como Double Horse, Bloody Crom y Here the "+
    "Captain Speaking, the Captain is Dead, aunque pronto se unirán otros grupos a su lista.<br>En esta web encontrás la <a href='https://santich.com.es/es/' target='_blank'>tienda oficial</a> del sello, la cual está enfocada a la venta de los productos de merchandising y también a los discos de las bandas que componen el sello de Doomgeon Records. Aquí podrás encontrar una gama de productos compuesta por cds, casetes, vinilos y camisetas. Con la venta de estos productos estarás apoyando a nuestras bandas y a ayudarás a mantener una rica cultura musical local y underground.</p></div>")
    .appendTo("main");
    artista.sort(()=> Math.random() - 0.5);

        artista.forEach(element => {
            $( "<div class='slider-div'><img src='assets/artistas/"+element.src+"' alt='"+element.name+" imagen' class='slider-img'></div>")
            .appendTo(".slider");
         });
         $('.slider').bxSlider({
            adaptiveHeight:false,
            responsive:true,
            mode:'fade',
            auto: true,
            keyboardEnabled:true,
            speed: 50,
            autoStart:true
         });
    }
  

}

else if(localStorage.getItem("ubication")=="artists-no-logged"){
       
$("<h1 class='h1-home'>ARTISTAS</h1>").appendTo("main");     
    function artistas(artista){
        artista.forEach(element => {
            $("<div class='band'><img src=assets/artistas/"+element.src+" alt='"+element.name+" image of the band' class='band-artists-img' title='"+element.name+"'><div class='name-band'> <b> "+element.name+"</b></div></div>")
            .appendTo("main");           
           });
           $(".band-artists-img").mouseenter(function(){ 
            $(this).animate({ width: "105%", height: "105%"}, 500, "linear");
           });
           $(".band-artists-img").mouseleave(function(){ 
               $(this).stop(true);
               $(this).animate({ width: "100%", height: "100%"}, 500, "linear");
           });
    }
    
       

}

});