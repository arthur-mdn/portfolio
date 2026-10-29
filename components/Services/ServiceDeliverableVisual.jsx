"use client";

import { useCallback, useRef, useState } from "react";
import { FiMonitor, FiSmartphone, FiCheck, FiArrowRight, FiServer, FiLock, FiDatabase } from "react-icons/fi";

const MODULES = [
  { name: "Équipe", text: "Des comptes et des droits adaptés au rôle de chacun.", rows: ["Administrateur", "Collaborateur", "Lecture seule"] },
  { name: "Activité", text: "Une vue commune pour suivre les informations utiles au quotidien.", rows: ["Demandes à traiter", "Dossiers en cours", "Historique partagé"] },
  { name: "Connexions", text: "Vos outils échangent leurs données sans ressaisie manuelle.", rows: ["Formulaires", "API de vos outils", "Notifications"] },
];

function BeforeAfterCompare() {
  const [split, setSplit] = useState(50);
  const stageRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="deliverable-comparison">
      <p className="section-label">Exemple réel · Edissyum</p>
      <div
        ref={stageRef}
        className="deliverable-compare-stage deliverable-compare-stage-photos"
        role="slider"
        tabIndex={0}
        aria-label="Comparer avant et après la refonte"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        aria-valuetext={`${Math.round(split)} % de la version initiale visible`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") setSplit((value) => Math.max(0, value - 5));
          if (event.key === "ArrowRight") setSplit((value) => Math.min(100, value + 5));
        }}
      >
        <img
          className="deliverable-compare-img deliverable-compare-img-after"
          src="/projects/edissyum-apres.webp"
          alt="Site Edissyum après refonte"
          draggable={false}
        />
        <div
          className="deliverable-compare-before-wrap"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <img
            className="deliverable-compare-img deliverable-compare-img-before"
            src="/projects/edissyum-avant.webp"
            alt="Site Edissyum avant refonte"
            draggable={false}
          />
        </div>
        <span className="deliverable-compare-badge deliverable-compare-badge-before">
          Avant
        </span>
        <span className="deliverable-compare-badge deliverable-compare-badge-after">
          Après
        </span>
        <div
          className="deliverable-compare-line"
          style={{ left: `${split}%` }}
          aria-hidden="true"
        >
          <span className="deliverable-compare-handle" />
        </div>
      </div>
    </div>
  );
}

export default function ServiceDeliverableVisual({ type }) {
  const [module, setModule] = useState(0);

  if (type === "beforeAfter") return <BeforeAfterCompare />;

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
      <div className="deliverable-devices" aria-hidden="true">
        <div className="deliverable-browser">
          <div className="deliverable-browser-bar">
            <span /><span /><span />
            <div className="deliverable-browser-url" />
          </div>
          <div className="deliverable-browser-body">
            <small>Votre activité</small>
            <h3>Une offre claire.<br />Un contact simple.</h3>
            <p>Le bon message, au bon endroit.</p>
            <strong>Demander un devis <FiArrowRight /></strong>
            <div className="deliverable-browser-cols">
              <i /><i /><i />
            </div>
          </div>
        </div>
        <div className="deliverable-phone">
          <div className="deliverable-phone-notch" />
          <div className="deliverable-phone-screen">
            <small />
            <b />
            <b />
            <em />
            <div className="deliverable-phone-cards">
              <i /><i />
            </div>
          </div>
        </div>
      </div>
      <p>Vos visiteurs retrouvent les informations essentielles, quel que soit leur écran.</p>
    </div>
  );
}
