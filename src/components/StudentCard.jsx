
import '../App.css';
import { useState } from 'react';


function StudentCard({etudiant, onModifier, onSupp}) {
  const [Visibles, setVisibles] = useState(false);


  return (
  
  <div className='fiche'>
    {etudiant.image &&(
         <img
                src={etudiant.image}
                alt="Photo étudiant"
                className="photo"
            />
    )}
         
    <h1>Fiche Etudiant</h1>
    <strong>Nom et prénom:</strong>{etudiant.nom} {etudiant.prenom}<br></br>
    {Visibles && (
      <>
      <strong>Email:</strong> {etudiant.email}
      <strong>Tel:</strong> {etudiant.tel} 
      </>
      )}
    
    <strong>Filiére:</strong>{etudiant.filiére}<br></br>
    <strong>Année d'etude:</strong>{etudiant.anne}<br></br>
    <strong>Groupe</strong>{etudiant.grp}<br></br>
    <strong>Ville:</strong>{etudiant.ville}
    <br /><br />
    
    <button className="btn">Contacter l'étudiant</button>
    <button onClick={() => setVisibles(!Visibles)} className='btn'>{Visibles
      ? "Masquer les informations"
      : "Afficher les informations"
    }</button>
    <button onClick={() => onModifier(etudiant)} className='btn'>Modifier</button>
    <button onClick={() => onSupp(etudiant.email)} className='btn'>Supprimer</button>

  </div>
  )
}

export default StudentCard;