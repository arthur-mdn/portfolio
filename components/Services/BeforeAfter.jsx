export default function BeforeAfter() {
  return (
    <div className="svc-visual svc-ba" aria-hidden="true">
      <div className="svc-ba-split">
        <div className="svc-ba-panel svc-ba-before">
          <span>Avant</span>
          <div className="svc-ba-dense">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="svc-ba-panel svc-ba-after">
          <span>Après</span>
          <div className="svc-ba-block" />
          <div className="svc-ba-lines">
            <i />
            <i />
          </div>
          <b />
        </div>
      </div>
    </div>
  );
}
