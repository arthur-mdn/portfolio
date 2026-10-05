const STEPS = [
  "App",
  "Docker",
  "Traefik",
  "HTTPS",
  "VPS",
  "Monitoring",
  "Sauvegardes",
];

export default function DeployPipeline() {
  return (
    <div className="svc-visual svc-pipe" aria-hidden="true">
      {STEPS.map((step, index) => (
        <div key={step} className="svc-pipe-step">
          <div className="svc-pipe-node">{step}</div>
          {index < STEPS.length - 1 && <div className="svc-pipe-line" />}
        </div>
      ))}
    </div>
  );
}
