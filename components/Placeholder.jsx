export default function Placeholder({ label = "Photo", ratio = "ratio-43", className = "" }) {
  return (
    <div className={`ph ${ratio} ${className}`}>
      <span>{label}</span>
    </div>
  );
}
