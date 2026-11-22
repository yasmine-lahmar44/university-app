import './App.css';
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from './components/StudentForm.jsx';
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import yasmine from './images/yasmine.jpg';
import ellissa from './images/ellissa.png';
import mayssem from './images/mayssem.png';
import yacin from './images/yacin.webp';
import {useState } from "react";
function App() {
  const  [etudiants, setEtudiants ]= useState([
    {
      id:1,
      nom: "Lahmar",
      prenom: "Yasmine",
      email: "lahmaryasmine@outlook.com",
      tel: "98755259",
      filiére: "GLSI",
      anne: "2026/2027",
      grp:"C",
      ville: "Mahdia",
      image: yasmine
    },
    {
      id:2,
      nom: "Mounani",
      prenom: "Ellissa",
      email: "ellissa@outlook.com",
      tel: "43567876",
      filiére: "GLSI",
      anne: "2026/2027",
      grp:"C",
      ville: "Mahdia",
      image: ellissa
    },
    {
      id:3,
      nom: "Hammouda",
      prenom: "Mayssem",
      email: "mayssem@outlook.com",
      tel: "76890987",
      filiére: "GLSI",
      anne: "2026/2027",
      grp:"C",
      ville: "Nabeul",
      image: mayssem
    },
  ]);
const [filiéreFiltre, setfiliéreFiltre]=useState("Toutes");
function ajouterEtudiant(nouvelEtudiant){
  const etudiantAvecId = {
    ...nouvelEtudiant,
    id: Date.now(),
  };
  setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
}
function suppEtudiant(email) {
  setEtudiants(
    etudiants.filter((etudiant) =>etudiant.email !==email)
  );
}
const [etudiantAModifier, setEtudiantAModifier]= useState(null);
function modifierEtudiant(etudiant){
  setEtudiantAModifier(etudiant);
  }

function enregistrerModification(etudiantModifie){
  setEtudiants((anciensEtudiants) => 
    anciensEtudiants.map((etudiant) =>
      etudiant.id=== etudiantAModifier.id
      ? { ... etudiantModifie, id: etudiant.id}
      : etudiant
    ),
  );
  setEtudiantAModifier(null);
}

  return (
    <div className="Container">
      <Header />
      <Navbar />
      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
        
      />
      <div className='actions'>
       
      </div>
      <div className='filter'>
        <label className='filterlabel'>Filtrer par filiére</label>
        <select className='filterselect' value={filiéreFiltre} onChange={(e) => setfiliéreFiltre(e.target.value)}>
          <option value="Toutes">Toutes les filiéres</option>
          <option value="GLSI">GLSI</option>
          <option value="IOT">IOT</option>
        </select>
      </div>
      {etudiants.filter((etudiant) => filiéreFiltre==="Toutes" || (filiéreFiltre==="Autre" ? etudiant.filiére!=="GLSI":etudiant.filiére===filiéreFiltre)).map((etudiant) =>(
        <StudentCard
          key={etudiant.id}
          etudiant={etudiant}
          onModifier={modifierEtudiant}
          onSupp={suppEtudiant}
          
        />
      ))}

      <Footer />
    </div>
  );
}

export default App
