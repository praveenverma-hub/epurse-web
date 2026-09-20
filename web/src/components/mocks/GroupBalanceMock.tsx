import "./mocks.css";

const AVATARS = ["🧑‍🦱", "👩‍🦰", "🧔", "👩🏽"];

export default function GroupBalanceMock() {
  return (
    <div className="mock mock--group">
      <div className="mock__group-head">
        <div className="mock__group-icon">🏠</div>
        <div>
          <div className="mock__group-name">Flatmates</div>
          <div className="mock__avatar-stack">
            {AVATARS.slice(0, 3).map((a, i) => (
              <span className="mock__avatar" key={a} style={{ zIndex: AVATARS.length - i }}>{a}</span>
            ))}
            <span className="mock__avatar mock__avatar--count">+1</span>
          </div>
        </div>
      </div>
      <div className="mock__group-balance is-owed">you&apos;re owed ₹2,140</div>
      <div className="mock__group-activity">
        <div className="mock__activity-row">Aditi added <b>Electricity bill</b> · ₹1,860</div>
        <div className="mock__activity-row">You paid <b>Rahul</b> · ₹500</div>
      </div>
    </div>
  );
}
