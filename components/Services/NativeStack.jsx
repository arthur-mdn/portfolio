const STEPS = ["UI", "SwiftUI", "Data", "StoreKit / API", "App Store"];

export default function NativeStack() {
  return (
    <div className="svc-visual svc-native" aria-hidden="true">
      {STEPS.map((step, index) => (
        <div key={step} className="svc-native-row">
          <div className="svc-native-node">{step}</div>
          {index < STEPS.length - 1 && <div className="svc-native-line" />}
        </div>
      ))}
    </div>
  );
}
