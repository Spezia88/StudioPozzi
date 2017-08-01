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
/*export function getCircolari(){
  
   database.ref('anniCorcolari').child(categoria).on('child_added',(idProfessionista)=>{
        return fn(database.ref('associati/professionisti').child(idProfessionista.key).once('value').then(professionista =>{

          return professionista.val();

      }));
        
  })
}*/
export function getAttivita() {
  return database.ref('attivita')/*.once('value').then(data => {
 
   
  });*/ 
 
}  
export function getContatti() {
  return database.ref('contatti').once('value').then(data => {
 
    const contatti = data.val();
    return contatti;
  });
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

export function getHome(){
  return database.ref('home').once('value').then(data => {
 
    const home = data.val();
    return home;
  });
}
export function getProfessionistiFromCategoria(categoria,fn){
  
   database.ref('associati/categorieProfessionisti').child(categoria).on('child_added',(idProfessionista)=>{
        return fn(database.ref('associati/professionisti').child(idProfessionista.key).once('value').then(professionista =>{

          return professionista.val();

      }));
        
  })
}
export function saveProfessionistiFromCategoria(categoria,fn){
  
   database.ref('associati/categorieProfessionisti').child(categoria).on('child_added',(idProfessionista)=>{
        return fn(database.ref('associati/professionisti').child(idProfessionista.key).once('value').then(professionista =>{

          return professionista.val();

      }));
        
  })
}
export function login (username, pw) {
  return firebaseAuth().signInWithEmailAndPassword(username, pw)
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

export function saveProfessionisti(professionisti){
    
    return database.ref('associati').child("professionisti").update(professionisti)
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

export function deleteEsecuzione(esecuzioni){

  
  var esecuzioniNew=[];
  esecuzioni.map((esecuzione,index)=>{
       
        delete esecuzione[".key"];
        esecuzioniNew.push(esecuzione);

  })
 
  return database.ref('esecuzioni').update({
                                             esecuzioniNew
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
export function signOutCircolari(){
  return firebaseAuth().signOut()
}




