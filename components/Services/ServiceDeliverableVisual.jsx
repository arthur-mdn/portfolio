import { useState } from "react";
import { FiMonitor, FiSmartphone, FiCheck, FiArrowRight, FiServer, FiLock, FiDatabase } from "react-icons/fi";

const MODULES = [
  { name: "Équipe", text: "Des comptes et des droits adaptés au rôle de chacun.", rows: ["Administrateur", "Collaborateur", "Lecture seule"] },
  { name: "Activité", text: "Une vue commune pour suivre les informations utiles au quotidien.", rows: ["Demandes à traiter", "Dossiers en cours", "Historique partagé"] },
  { name: "Connexions", text: "Vos outils échangent leurs données sans ressaisie manuelle.", rows: ["Formulaires", "API de vos outils", "Notifications"] },
];

export default function ServiceDeliverableVisual({ type }) {
  const [module, setModule] = useState(0);
  const [split, setSplit] = useState(50);

  if (type === "beforeAfter") return (
    <div className="deliverable-comparison">
      <p className="section-label">Exemple de structure · illustration</p>
      <div className="deliverable-compare-stage">
        <div className="deliverable-after"><span>Après</span><h3>Une activité clairement présentée.</h3><p>Une offre lisible, un parcours simple.</p><strong>Parlons de votre projet →</strong></div>
        <div className="deliverable-before" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}><span>Avant</span><h3>Bienvenue sur notre site</h3><p>Actualités · Liens · Nos partenaires · Informations · Notre entreprise</p><div>Une offre difficile à repérer parmi les contenus.</div></div>
        <div className="deliverable-compare-line" style={{ left: `${split}%` }} aria-hidden="true">↔</div>
      </div>
      <label htmlFor="redesign-comparison">Comparer les structures avant / après</label>
      <input id="redesign-comparison" type="range" min="0" max="100" value={split} aria-valuetext={`${split} % de la structure initiale visible`} onChange={(event) => setSplit(Number(event.target.value))} />
    </div>
  );

  if (type === "architecture") return (
    <div className="deliverable-modules">
      <p className="section-label">Un outil, plusieurs usages</p>
      <div className="deliverable-module-buttons" role="group" aria-label="Explorer les modules d’une application métier">
        {MODULES.map((item, index) => <button key={item.name} aria-pressed={module === index} onClick={() => setModule(index)}>{item.name}</button>)}
      </div>
      <div className="deliverable-module-content" aria-live="polite">
        <h3>{MODULES[module].name}</h3><p>{MODULES[module].text}</p>
        <ul>{MODULES[module].rows.map((row) => <li key={row}><FiCheck aria-hidden="true" />{row}</li>)}</ul>
      </div>
    </div>
  );

  if (type === "pipeline") return (
    <div className="deliverable-infra">
      <p className="section-label">Une mise en ligne maîtrisée</p>
      <ol>
        <li><FiMonitor aria-hidden="true" /><div><h3>Vos visiteurs</h3><p>Un accès depuis leur navigateur</p></div></li>
        <li><FiLock aria-hidden="true" /><div><h3>HTTPS & accès</h3><p>Un point d’entrée sécurisé</p></div></li>
        <li><FiServer aria-hidden="true" /><div><h3>Votre application</h3><p>Un environnement isolé et suivi</p></div></li>
        <li><FiDatabase aria-hidden="true" /><div><h3>Vos données</h3><p>Stockage persistant et sauvegardes</p></div></li>
      </ol>
    </div>
  );

  if (type === "native") return (
    <div className="deliverable-native">
      <p className="section-label">Deux usages, une même exigence</p>
      <div><FiSmartphone aria-hidden="true" /><h3>Sur iPhone</h3><p>Une application pensée pour les gestes et les usages du quotidien.</p><span>SwiftUI · iOS</span></div>
      <div><FiMonitor aria-hidden="true" /><h3>Sur Mac</h3><p>Un outil de travail qui trouve sa place sur votre bureau.</p><span>SwiftUI · macOS</span></div>
    </div>
  );

  return (
    <div className="deliverable-site">
      <p className="section-label">Du grand écran au mobile</p>
      <div className="deliverable-browser" aria-hidden="true">
        <div className="deliverable-browser-bar"><span /><span /><span /></div>
        <div><small>Votre activité</small><h3>Une offre claire.<br />Un contact simple.</h3><p>Le bon message, au bon endroit.</p><strong>Demander un devis <FiArrowRight /></strong></div>
      </div>
      <div className="deliverable-phone" aria-hidden="true"><FiSmartphone /><span>La même clarté,<br />sur mobile.</span></div>
      <p>Vos visiteurs retrouvent les informations essentielles, quel que soit leur écran.</p>
    </div>
  );
}
