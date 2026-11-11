
import '../App.css';
import { useState } from 'react';


function StudentCard(props) {
  const [Visibles, setCoordonneesVisibles] = useState(false);
  function basculerInformations(){
    setCoordonneesVisibles(!Visibles)
  }

  return (
  
  <div className='fiche'>
            <img
                src={props.image}
                alt="Photo étudiant"
                className="photo"
            />
    <h1>Fiche Etudiant</h1>
    <strong>Nom et prénom:</strong>{props.nom} {props.prénom}<br></br>
    {Visibles && (
      <>
      <strong>Email:</strong> {props.email}
      <strong>Tel:</strong> {props.tel} 
      </>
      )}
    
    <strong>Filiére:</strong>{props.filiére}<br></br>
    <strong>Année d'etude:</strong>{props.année}<br></br>
    <strong>Ville:</strong>{props.ville}
    <br /><br />
    
    <button className="btn">Contacter l'étudiant</button>
    <button onClick={basculerInformations} className='btn'>{Visibles
      ? "Masquer les informations"
      : "Afficher les informations"
    }</button>
    <button onClick={() => props.modifierEtudiants(props.email)} className='btn'>Modifier</button>
    <button onClick={() => props.suppEtudiant(props.email)} className='btn'>Supprimer</button>

  </div>
  )
}

export default StudentCard