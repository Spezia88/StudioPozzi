import {database,firebaseAuth,storageCircolari} from './database.js';
import {getKeys} from './js/common.js'

export function getAssociati() {
  return database.ref('associati')/*.once('value').then(data => {
 
    const associati = data.val();
    return associati;
  });*/
}


export function getEsecuzioni() {
  return database.ref('esecuzioni_immobiliari')/*.once('value').then(data => {
 
    const esecuzioni = data.val();
    return esecuzioni;
  });*/
}

export function saveEsecuzioni(esecuzioni){
    
    let esecuzioniNew=[];

    esecuzioni.map((esecuzione,index)=>{
               
                delete esecuzione[".key"];
                esecuzioniNew.push(esecuzione);

        })
    return database.ref('esecuzioni_immobiliari').set(esecuzioniNew);
}

export function getSitiPerLaProfessione() {
  return database.ref('siti_per_la_professione')
 
}  
export function getAnniCircolari() {
  return database.ref('anni')
 
}  
export function getCircolariAnno(anno){
  
   return database.ref('anniCircolari').child(anno);
}

export function downloadCircolare(fileName,anno){

    var starsRef = storageCircolari.child(anno+'/'+fileName);

      // Get the download URL
      return starsRef.getDownloadURL();

}

export function getAttivita() {
  return database.ref('attivita')/*.once('value').then(data => {
 
   
  });*/ 
 
}  
export function getContatti() {
  return database.ref('contatti')
}

export function deleteContatto(key){


  return database.ref('contatti').child(key).remove().then(function() {
    console.log("coontatto eliminato");
  });
}
export function addContatto(contatto){
 
        
        return database.ref("contatti").push().set({
                  email: contatto.email,
                  email_certificata: contatto.email_certificata,
                  fax:contatto.fax,
                  indirizzo:contatto.indirizzo,
                  lat:Number(contatto.lat),
                  lng:Number(contatto.lng),
                  luogo:contatto.luogo,
                  telefono:contatto.telefono,
                  titolo:contatto.titolo
                });

}
export function saveContatti(sedi){
    
    let sediNew=[];

    sedi.map((sede,index)=>{
               
                delete sede[".key"];
                sediNew.push(sede);

        })
    return database.ref('contatti').set(sediNew);
}

export function getPrivacy() {
  return database.ref('privacy').once('value').then(data => {
 
    const privacy = data.val();
    return privacy;
  });
}
export function getDisclaimer() {
  return database.ref('disclaimer').once('value').then(data => {
 
    const disclaimer = data.val();
    return disclaimer;
  });
}
export function getNoteLegali() {
  return database.ref('note_legali').once('value').then(data => {
 
    const noteLegali = data.val();
    return noteLegali;
  });
}
export function saveNoteLegali(note){
   

   return database.ref('note_legali').set(
                      note
          );
}


export function getHome(){
  return database.ref('home')/*.once('value').then(data => {
 
    const home = data.val();
    return home;
  });*/
}
export function getProfessionistiFromCategoria(categoria,fn){
  
   database.ref('associati/categorieProfessionisti').child(categoria).on('child_added',(idProfessionista)=>{
        return fn(database.ref('associati/professionisti').child(idProfessionista.key).once('value').then(professionista =>{

          return professionista;

      }));
        
  })
}
export function getCategorieProfessionali(){
  
  return database.ref('associati/categorie')
}

export function saveProfessionistiFromCategoria(categoria,fn){
  
   database.ref('associati/categorieProfessionisti').child(categoria).on('child_added',(idProfessionista)=>{
        return fn(database.ref('associati/professionisti').child(idProfessionista.key).once('value').then(professionista =>{

          return professionista.val();

      }));
        
  })
}

export function addProfessionista(professionista){
        
       
        var newProfessionistaKey = database.ref('associati/professionisti').push().key;
        var newProfessionista={ 

                    contatti:{

                              email:professionista.email,
                              fax:professionista.fax,
                              telefono:professionista.telefono,

                            },
                    istruzione:professionista.istruzione,
                    nomeCompleto:professionista.nomeCompleto,
                    cv:professionista.cv,
                    ruolo:professionista.ruolo



        };
        database.ref("associati/professionisti/"+newProfessionistaKey).set(newProfessionista,function(error){
                  
                  if(error){
                      return;
                  }
                  else{

                      let newProfessionistaCategoria={};
                      newProfessionistaCategoria[newProfessionistaKey]=newProfessionista;
                      return database.ref("associati/categorieProfessionisti/"+professionista.categoria).update(newProfessionistaCategoria);
                  }
                });

}
export function deleteProfessionista(idProfessionista,idCategoria){


  return database.ref('associati/professionisti').child(idProfessionista).remove().then(function() {
     
      console.log("professionista eliminato");     
      
      database.ref('associati/categorieProfessionisti/'+idCategoria).child(idProfessionista).remove().then(function() {
                                                                    
         
          console.log("professionista eliminato da categoria");

      })
    

  });
}
export function saveStoria(storia){
  
   return database.ref('associati/storia').set(
                                                    storia
          );
}


export function saveHome(home){

  return database.ref('home').set({
                                    DescrizioneAreaAmministrativa:home.DescrizioneAreaAmministrativa,
                                    DescrizioneAreaFiscale:home.DescrizioneAreaFiscale,
                                    DescrizioneOperazioniStraordinarie: home.DescrizioneOperazioniStraordinarie
  });
}
export function saveAttivita(attivita){

  delete attivita[".key"];
  return database.ref('attivita').update(
                                          attivita
          );
}

export function saveAssociati(associati){

  return database.ref('associati').update({
                                    categorie:associati.categorie,
                                    professionisti:associati.professionisti,
                                    storia: associati.storia
  });
}

export function saveProfessionista(professionista,idProfessionista,idCategoria){
   
    return database.ref('associati/professionisti').child(idProfessionista).update(professionista).then(function(){

           database.ref('associati/categorieProfessionisti/'+idCategoria).child(idProfessionista).update(professionista);
    });
}

export function saveCircolare(anno,circolari,file){
 
        var circolariNew=[];

        circolari.map((circolare,index)=>{
               
                delete circolare[".key"];
                circolariNew.push(circolare);

        })
        circolariNew.push({"nome":file});
      
        return database.ref('anniCircolari').update({
                                                          [anno]:circolariNew
                                                    });

}

export function deleteCircolare(anno,circolari){

  
  var circolariNew=[];
  circolari.map((circolare,index)=>{
       
        delete circolare[".key"];
        circolariNew.push(circolare);

  })
 
  return database.ref('anniCircolari').update({
                                                  [anno]:circolariNew
                                              });
}

export function deleteEsecuzione(key){


  return database.ref('esecuzioni_immobiliari').child(key).remove().then(function() {
    console.log("esecuzione eliminata");
  });
}
export function addEsecuzione(esecuzione){
 
        return database.ref("esecuzioni_immobiliari").push().set({
                  documentazione: esecuzione.documentazione,
                  luogo: esecuzione.luogo,
                  professionista:esecuzione.professionista,
                  registro:esecuzione.registro,
                  tipologia:esecuzione.tipologia
                });

}


export function login (username, pw) {
  return firebaseAuth().signInWithEmailAndPassword(username, pw)
}  


export function signOutCircolari(){
  return firebaseAuth().signOut()
}

export function getUserRole(uid){

  return database.ref('users').child(uid).once('value');
}




