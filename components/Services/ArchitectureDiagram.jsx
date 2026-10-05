const NODES = ["Comptes", "Admin", "API", "Temps réel", "BDD"];

export default function ArchitectureDiagram() {
  return (
    <div className="svc-visual svc-arch" aria-hidden="true">
      <div className="svc-arch-center">Application</div>
      <div className="svc-arch-nodes">
        {NODES.map((node) => (
          <div key={node} className="svc-arch-node">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
