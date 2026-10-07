const FLOW = ["User", "HTTPS", "Traefik", "Docker", "App", "BDD"];

export default function DeployPipeline() {
  return (
    <div className="svc-visual svc-pipe" aria-hidden="true">
      <div className="svc-pipe-flow">
        {FLOW.map((step, index) => (
          <div key={step} className="svc-pipe-step">
            <div className={`svc-pipe-node${step === "App" ? " is-core" : ""}`}>
              {step}
            </div>
            {index < FLOW.length - 1 && <div className="svc-pipe-line" />}
          </div>
        ))}
      </div>
      <div className="svc-pipe-support">
        <div className="svc-pipe-branch">
          <span>Monitoring</span>
        </div>
        <div className="svc-pipe-vps">VPS</div>
        <div className="svc-pipe-branch">
          <span>Sauvegardes</span>
        </div>
      </div>
    </div>
  );
}
