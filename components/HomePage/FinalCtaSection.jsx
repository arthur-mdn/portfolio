import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <h2 className="final-cta-title">Un projet en tête ?</h2>
        <p className="final-cta-lead">
          Parlons de ce que vous souhaitez créer. Site internet, application
          web, app iOS/macOS, refonte ou déploiement : expliquez-moi votre
          besoin et voyons ensemble comment le concrétiser.
        </p>
        <Link href="/contact" className="btn btn-final">
          Me parler de mon projet
          <FaArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

export default FinalCtaSection;
