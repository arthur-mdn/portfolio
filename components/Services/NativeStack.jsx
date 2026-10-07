const BRICKS = ["SwiftUI", "Data", "API"];

export default function NativeStack() {
  return (
    <div className="svc-visual svc-native" aria-hidden="true">
      <div className="svc-native-devices">
        <div className="svc-native-phone">
          <div className="svc-native-phone-notch" />
          <div className="svc-native-phone-ui">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="svc-native-mac">
          <div className="svc-native-mac-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="svc-native-mac-body">
            <aside />
            <main>
              <div />
              <div />
            </main>
          </div>
        </div>
      </div>
      <div className="svc-native-bricks">
        {BRICKS.map((brick) => (
          <span key={brick}>{brick}</span>
        ))}
      </div>
    </div>
  );
}
