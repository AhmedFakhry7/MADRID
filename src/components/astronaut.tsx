export function Astronaut() {
  return (
    <div className="astronaut-float mb-8">
      <svg className="w-64 h-64 mx-auto" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stars in the background */}
        <circle cx="20" cy="50" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="230" cy="80" r="1" fill="white" opacity="0.9"/>
        <circle cx="40" cy="200" r="2" fill="white" opacity="0.7"/>
        <circle cx="210" cy="210" r="1.2" fill="white" opacity="0.8"/>
        <circle cx="125" cy="20" r="1" fill="white"/>

        {/* Planet with rings */}
        <circle cx="180" cy="60" r="35" fill="#D8B4FE" />
        <path d="M150 60 C 150 45, 210 45, 210 60 C 210 75, 150 75, 150 60 Z" stroke="#C4B5FD" strokeWidth="3" fill="none" transform="rotate(-20 180 60)" />
        <circle cx="170" cy="50" r="4" fill="#A78BFA" />
        <circle cx="190" cy="70" r="6" fill="#A78BFA" opacity="0.7" />

        {/* Astronaut */}
        <g transform="translate(50, 70)">
          {/* Body */}
          <rect x="25" y="45" width="50" height="60" rx="25" fill="#E5E7EB" />
          
          {/* Helmet */}
          <circle cx="50" cy="40" r="35" fill="#F3F4F6" />
          <circle cx="50" cy="40" r="28" fill="hsla(var(--accent)/0.25)" stroke="hsl(var(--accent))" strokeWidth="2"/>
          {/* Reflection on Helmet */}
          <path d="M65 25 C 60 22, 50 25, 45 30" stroke="white" strokeWidth="2.5" fill="none" opacity="0.8" strokeLinecap="round"/>

          {/* Backpack */}
          <rect x="10" y="50" width="80" height="45" rx="10" fill="#D1D5DB" transform="translate(0, 5)"/>
          
          {/* Arms - one waving */}
          <path d="M25 65 Q 5 50 -15 60" stroke="#E5E7EB" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M75 65 Q 100 75 115 90" stroke="#E5E7EB" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <circle cx="-15" cy="60" r="8" fill="#E5E7EB" />
          <circle cx="115" cy="90" r="8" fill="#E5E7EB" />
          
          {/* Legs - floating */}
          <path d="M40 105 Q 30 135 40 155" stroke="#E5E7EB" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M60 105 Q 70 135 60 155" stroke="#E5E7EB" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <rect x="30" y="148" width="20" height="15" rx="7.5" fill="#F3F4F6" />
          <rect x="50" y="148" width="20" height="15" rx="7.5" fill="#F3F4F6" />

           {/* Control panel on body */}
           <rect x="35" y="60" width="30" height="20" rx="5" fill="#94A3B8"/>
           <circle cx="42" cy="70" r="2.5" fill="#F87171"/>
           <circle cx="58" cy="70" r="2.5" fill="#60A5FA"/>
        </g>
      </svg>
    </div>
  );
}
