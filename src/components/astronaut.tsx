export function Astronaut() {
  return (
    <div className="astronaut-float mb-8">
      <svg className="w-64 h-64 mx-auto" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simple stars */}
        <circle cx="30" cy="40" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="220" cy="90" r="1" fill="white" opacity="0.8"/>
        <circle cx="50" cy="210" r="2" fill="white" opacity="0.7"/>
        <circle cx="200" cy="200" r="1.2" fill="white" opacity="0.9"/>
        
        {/* Astronaut */}
        <g transform="translate(60, 50) rotate(-15 75 75)">
          {/* Body */}
          <path d="M50 70 C 25 70, 25 120, 50 120 L 100 120 C 125 120, 125 70, 100 70 Z" fill="#E5E7EB" />
          
          {/* Helmet */}
          <circle cx="75" cy="60" r="40" fill="#F3F4F6" />
          <circle cx="75" cy="60" r="32" fill="hsla(var(--accent)/0.3)" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
          {/* Reflection on Helmet */}
          <path d="M90 40 C 85 38, 75 40, 70 45" stroke="white" strokeWidth="3" fill="none" opacity="0.9" strokeLinecap="round"/>

          {/* Backpack */}
          <rect x="35" y="75" width="80" height="50" rx="15" fill="#D1D5DB"/>
          
          {/* Arms */}
          <path d="M40 85 Q 10 95 15 120" stroke="#E5E7EB" strokeWidth="18" fill="none" strokeLinecap="round"/>
          <path d="M110 85 Q 140 95 135 120" stroke="#E5E7EB" strokeWidth="18" fill="none" strokeLinecap="round"/>
          
          {/* Legs - floating up */}
          <path d="M60 120 Q 50 150 65 165" stroke="#E5E7EB" strokeWidth="18" fill="none" strokeLinecap="round"/>
          <path d="M90 120 Q 100 150 85 165" stroke="#E5E7EB" strokeWidth="18" fill="none" strokeLinecap="round"/>
        </g>

        {/* Small floating planet */}
        <g transform="translate(20, 150)">
          <circle cx="0" cy="0" r="25" fill="#A78BFA"/>
          <circle cx="-10" cy="-5" r="5" fill="#C4B5FD" opacity="0.7" />
          <circle cx="8" cy="8" r="3" fill="#C4B5FD" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
