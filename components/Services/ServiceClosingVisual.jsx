import { FiCheck, FiArrowUpRight } from "react-icons/fi";

export default function ServiceClosingVisual({ service }) {
  return (
    <div className="svc-closing-note">
      <span className="svc-closing-icon"><FiArrowUpRight /></span>
      <p>Votre prochain projet</p>
      <strong>{service.title}</strong>
      <ul>
        <li><FiCheck /> Un besoin clarifié</li>
        <li><FiCheck /> Une solution adaptée</li>
        <li><FiCheck /> Un interlocuteur du début à la fin</li>
      </ul>
      <span className="svc-closing-signature">De l’idée à la mise en ligne.</span>
    </div>
  );
}
