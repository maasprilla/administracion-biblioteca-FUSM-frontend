function anclaregisusers(){
   $('#regisusers').slideToggle();
   $('#userslist').hide();
   $('#reqlisttable').hide();
   $('#historialadmin').hide();
   $('#settingsadmin').hide();
   return false;
 }

function anclauserslist(){
  $('#userslist').slideToggle();
  $('#regisusers').hide();
  $('#reqlisttable').hide();
  $('#historialadmin').hide();
  $('#settingsadmin').hide();
  return false;
}

function anclareqlisttable(){
  $('#reqlisttable').slideToggle();
  $('#userslist').hide();
  $('#regisusers').hide();
  $('#historialadmin').hide();
  $('#settingsadmin').hide();
  return false;
}

function anclahistorialadmin(){
  $('#historialadmin').slideToggle();
  $('#userslist').hide();
  $('#regisusers').hide();
  $('#reqlisttable').hide();
  $('#settingsadmin').hide();
  return false;
}

function anclasettingsadmin(){
  $('#settingsadmin').slideToggle();
  $('#regisusers').hide();
  $('#userslist').hide();
  $('#reqlisttable').hide();
  $('#historialadmin').hide();
  return false;
}
