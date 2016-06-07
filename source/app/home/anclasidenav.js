function anclaprestamorequest(){
   $('#prestamorequest').slideToggle();
   $('#prestamoslist').hide();
   $('#historial').hide();
   $('#settings').hide();
   return false;
 }

 function anclaprestamoslist(){
   $('#prestamoslist').slideToggle();
   $('#prestamorequest').hide();
   $('#historial').hide();
   $('#settings').hide();
   return false;
 }

 function anclahistorial(){
   $('#historial').slideToggle();
   $('#prestamorequest').hide();
   $('#prestamoslist').hide();
   $('#settings').hide();
   return false;
 }

 function anclasettings(){
   $('#settings').slideToggle();
   $('#prestamorequest').hide();
   $('#prestamoslist').hide();
   $('#historial').hide();
   return false;
 }
