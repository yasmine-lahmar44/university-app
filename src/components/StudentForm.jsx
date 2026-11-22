import '../App.css';
import { useState } from 'react';
function StudentForm({onAjouterEtudiant,etudiantAModifier,onModifierEtudiant}) {
    const [formData, setFormData]=useState({
        nom:etudiantAModifier?.nom ||"",
        prenom:etudiantAModifier?.prenom ||  "",
        email:etudiantAModifier?.email || "",
        tel:etudiantAModifier?.tel || "",
        filiére:etudiantAModifier?.filiére || "",
        anne:etudiantAModifier?.anne || "",
        grp:etudiantAModifier?.grp || "",
        ville:etudiantAModifier?.ville ||"",
        image:etudiantAModifier?.image || ""
    });
const [erreurs, setErreurs]=useState({});

function validerFormulaire(){
    const nouvellesErreurs={};
    if(!formData.nom.trim()){
        nouvellesErreurs.nom="Nom est obligatoire";
    }
    if(!formData.prenom.trim()){
        nouvellesErreurs.prenom="Prenom est obligatoire";
    }
    if(!formData.email.trim()){
        nouvellesErreurs.email = "Email est obligatoire";
    }
    if (!formData.tel.trim()) {
        nouvellesErreurs.tel = "Téléphone est obligatoire";
    }
    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length ===0;
}
function handleSubmit(e){
    e.preventDefault();
    console.log("Avant soumission: ", formData);
    const nouvelEtudiant= {
        nom :formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        tel: formData.tel,
        filiére: formData.filiére,
        anne: formData.anne,
        grp: formData.grp,
        ville: formData.ville,
        image: formData.image,
    };
    if(!validerFormulaire()){
        return;
    }
    if(etudiantAModifier){
        onModifierEtudiant({
            ...etudiantAModifier,
            ...nouvelEtudiant,
        });
    }else{
        onAjouterEtudiant(nouvelEtudiant);
        setFormData({nom:"", prenom:"", email:"", tel:"", filiére:"", anne:"", ville:"", image:""})
    }
}


return (
    <form action="" method="post" className='form' onSubmit={handleSubmit}>
    <h2 className='h2'>{etudiantAModifier ? "Modifier l'etudiant" : "Ajouter un étudiant"}</h2>
    <label htmlFor="nom" id="lab">Nom:</label>
    <input type="text" id="nom" required value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value})} />
    {erreurs.nom && <p className='error-msg'>{erreurs.nom}</p>}
    <label htmlFor="prenom" id="lab">Prénom:</label>
    <input type="text" id="prenom" required value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value})}/>
    {erreurs.prenom && <p className='error-msg'>{erreurs.prenom}</p>}
    <label htmlFor="email" id="lab">Email:</label>
    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value})} />
    {erreurs.email && <p className='error-msg'>{erreurs.email}</p>}
    <label htmlFor="tel" id="lab">Téléphone:</label>
    <input type="tel" id="tel" required value={formData.tel} onChange={(e) => setFormData({ ...formData, tel: e.target.value})}/>
    {erreurs.tel && <p className='error-msg'>{erreurs.tel}</p>}
    <label htmlFor="fil" id="lab">Filiére</label>
    <select id="fil" required value={formData.filiére} onChange={(e) => setFormData({...formData, filiére: e.target.value})}>
        <option value="">Choisir une filiére</option>
        <option value="GLSI">GLSI</option>
        <option value="IOT">IOT</option>
    </select>
    
    <label htmlFor="anne" id="lab">Année d'etude:</label>
    <input type="text" id="anne" value={formData.anne} onChange={(e) => setFormData({...formData, anne: e.target.value})}/>
    <label htmlFor="grp" id="lab">Groupe:</label>
    <input type="text" id="grp" value={formData.grp} onChange={(e) => setFormData({...formData, grp: e.target.value})} />
    <label htmlFor="ville" id="lab">Ville:</label>
    <input type="text" id="ville" value={formData.ville} onChange={(e) => setFormData({...formData, ville: e.target.value})}/>
    <label htmlFor="img" id="lab">Image</label>
    <input type="file" className='img' accept="image/*"
     onChange={(e) => {const fichier= e.target.files[0];
        if (fichier){
            setFormData({
                ...formData,
                image:URL.createObjectURL(fichier)
            });
        }
    }}/>
    <button className='btn' type="submit" value="">{etudiantAModifier ? "Modifier" : "Ajouter"}</button>
</form>
)
}

export default StudentForm;