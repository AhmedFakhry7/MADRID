export function Astronaut() {
  return (
    <div className="astronaut-float mb-8">
      <svg className="w-64 h-64 mx-auto" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Stars */}
        <circle cx="210" cy="40" r="2" fill="white"/>
        <circle cx="30" cy="80" r="1.5" fill="white"/>
        <circle cx="220" cy="180" r="1" fill="white"/>
        <circle cx="80" cy="210" r="2.5" fill="white"/>
        <circle cx="150" cy="30" r="1" fill="white"/>

        {/* Planet */}
        <circle cx="60" cy="60" r="40" fill="#4A90E2"/>
        <path d="M40 75 Q 60 90 80 75" stroke="#90c2ff" strokeWidth="2" fill="none"/>
        <path d="M30 50 Q 60 70 90 50" stroke="#90c2ff" strokeWidth="3" fill="none" opacity="0.6"/>
        <circle cx="75" cy="55" r="5" fill="#3468a3"/>
        <circle cx="45" cy="45" r="8" fill="#3468a3" opacity="0.8"/>

        {/* Astronaut */}
        <g transform="translate(100, 80)">
          {/* Body */}
          <rect x="25" y="45" width="50" height="60" rx="25" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2"/>
          
          {/* Helmet */}
          <circle cx="50" cy="40" r="35" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2"/>
          <circle cx="50" cy="40" r="28" fill="hsla(var(--accent)/0.2)" stroke="hsl(var(--accent))" strokeWidth="1.5"/>
          <path d="M40 30 Q 50 25 60 30" stroke="white" strokeWidth="2" fill="none" opacity="0.7"/>

          {/* Backpack */}
          <rect x="15" y="55" width="70" height="40" rx="10" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="2" transform="translate(-5, 0)"/>
          
          {/* Arms */}
          <path d="M25 65 Q 0 75 -10 95" stroke="#E5E7EB" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <path d="M75 65 Q 100 75 110 95" stroke="#E5E7EB" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <circle cx="-10" cy="95" r="8" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2"/>
          <circle cx="110" cy="95" r="8" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2"/>
          
          {/* Legs */}
          <path d="M40 105 Q 30 135 20 155" stroke="#E5E7EB" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <path d="M60 105 Q 70 135 80 155" stroke="#E5E7EB" strokeWidth="12" fill="none" strokeLinecap="round"/>
          <rect x="10" y="145" width="20" height="15" rx="7.5" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2"/>
          <rect x="70" y="145" width="20" height="15" rx="7.5" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2"/>

           {/* Control panel */}
           <rect x="35" y="55" width="30" height="15" rx="5" fill="#B0C4DE"/>
           <circle cx="42" cy="62.5" r="2" fill="#EF4444"/>
           <circle cx="50" cy="62.5" r="2" fill="#3B82F6"/>
           <circle cx="58" cy="62.5" r="2" fill="#10B981"/>
        </g>
      </svg>
    </div>
  );
}
