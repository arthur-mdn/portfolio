import { useRef, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({ items }) {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(items[0]);

  function openImage(item) {
    setSelected(item);
    dialog.current.showModal();
  }

  return (
    <section className="project-gallery" aria-labelledby="project-gallery-title">
      <p className="section-label">L’application en images</p>
      <h2 id="project-gallery-title">Du travail de préparation à la soirée</h2>
      <div className="project-gallery-grid">
        {items.map((item, index) => (
          <figure key={item.src}>
            <button className="project-gallery-image" onClick={() => openImage(item)} aria-label={`Agrandir : ${item.title}`}>
              <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 700px) 90vw, 480px" />
              <span>Agrandir ↗</span>
            </button>
            <figcaption>
              <span className="section-label">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} className="project-image-dialog" aria-label={selected.title} onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current.close();
      }}>
        <form method="dialog"><button className="btn btn-secondary" autoFocus>Fermer ×</button></form>
        <Image src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} sizes="90vw" />
        <p>{selected.caption}</p>
      </dialog>
    </section>
  );
}
