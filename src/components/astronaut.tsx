export function Astronaut() {
  return (
    <div className="astronaut-float mb-8">
      <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="80" r="45" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
        <circle cx="100" cy="80" r="40" fill="hsla(var(--accent)/0.2)" stroke="hsl(var(--accent))" strokeWidth="1" />
        <circle cx="92" cy="75" r="3" fill="#1F2937" />
        <circle cx="108" cy="75" r="3" fill="#1F2937" />
        <path d="M95 85 Q100 90 105 85" stroke="#1F2937" strokeWidth="2" fill="none" />
        <ellipse cx="100" cy="130" rx="35" ry="45" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
        <ellipse cx="70" cy="120" rx="12" ry="25" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
        <ellipse cx="130" cy="120" rx="12" ry="25" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
        <ellipse cx="85" cy="180" rx="10" ry="20" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
        <ellipse cx="115" cy="180" rx="10" ry="20" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
        <rect x="90" y="110" width="20" height="30" rx="5" fill="hsl(var(--accent))" />
        <circle cx="100" cy="125" r="3" fill="#EF4444" />
        <rect x="95" y="135" width="10" height="2" fill="#10B981" />
        <rect x="95" y="140" width="10" height="2" fill="#F59E0B" />
      </svg>
    </div>
  );
}
