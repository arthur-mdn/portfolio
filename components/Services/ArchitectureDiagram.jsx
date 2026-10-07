const ORBIT = ["Comptes", "Admin", "API", "Temps réel", "BDD"];

export default function ArchitectureDiagram() {
  return (
    <div className="svc-visual svc-arch" aria-hidden="true">
      <div className="svc-saas">
        <aside className="svc-saas-side">
          <span />
          <span />
          <span />
          <span />
        </aside>
        <div className="svc-saas-main">
          <div className="svc-saas-top">
            <div className="svc-saas-search" />
            <div className="svc-saas-bell" />
          </div>
          <div className="svc-saas-chart" />
          <div className="svc-saas-rows">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="svc-arch-nodes">
        {ORBIT.map((node) => (
          <div key={node} className="svc-arch-node">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
