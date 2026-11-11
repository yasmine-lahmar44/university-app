import './App.css';
import StudentCard from "./components/StudentCard.jsx";
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
      nom: "Lahmar",
      prénom: "Yasmine",
      email: "lahmaryasmine@outlook.com",
      tel: "98755259",
      filiére: "GLSI",
      année: "2026/2027",
      ville: "Mahdia",
      image: yasmine
    },
    {
      nom: "Mounani",
      prénom: "Ellissa",
      email: "ellissa@outlook.com",
      tel: "43567876",
      filiére: "GLSI",
      année: "2026/2027",
      ville: "Mahdia",
      image: ellissa
    },
    {
      nom: "Hammouda",
      prénom: "Mayssem",
      email: "mayssem@outlook.com",
      tel: "76890987",
      filiére: "GLSI",
      année: "2026/2027",
      ville: "Nabeul",
      image: mayssem
    },
  ]);
  const [filiéreFiltre, setfiliéreFiltre]=useState("Toutes");
function ajouterEtudiant(){
  const nouvelEtudiant = {
      nom: "Kacem",
      prénom: "Yacine",
      email: "yacine@gmail.com",
      tel: "43567898",
      filiére: "IOT",
      année: "2026/2027",
      ville: "Tunis",
      image: yacin
  }
  setEtudiants([...etudiants, nouvelEtudiant]);
}
function suppEtudiant(email) {
  setEtudiants(
    etudiants.filter((etudiant) =>etudiant.email !==email)
  );
}
function modifierEtudiant(email){
  console.log("Fonction appelée: ",email);
  const nouvelleVille=window.prompt("entrez la nouvelle ville");
  console.log("nouvelle ville: ",nouvelleVille);
  if(nouvelleVille==null || nouvelleVille.trim()===""){
    return;
  }
  setEtudiants((anciensEtudiants) =>
    anciensEtudiants.map((etudiant) =>
      etudiant.email==email
      ? { ...etudiant, ville: nouvelleVille }
      : etudiant
    )
  );
}
  return (
    <div className="Container">
      <Header />
      <Navbar />

      <div className='actions'>
        <button className='ajouter' onClick={ajouterEtudiant}> + Ajouter un étudiant </button>
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
          key={etudiant.email}
          prénom={etudiant.prénom}
          nom={etudiant.nom}
          email={etudiant.email}
          tel={etudiant.tel}
          filiére={etudiant.filiére}
          année={etudiant.année}
          ville={etudiant.ville}
          image={etudiant.image}
          suppEtudiant={suppEtudiant}
          modifierEtudiant={modifierEtudiant}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;