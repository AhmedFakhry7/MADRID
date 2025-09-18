export function Astronaut() {
  return (
    <div className="astronaut-float mb-8">
      <svg className="w-64 h-64 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          {/* Planet with ring */}
          <circle cx="40" cy="50" r="15" fill="#FFDDC1" />
          <path d="M25 50 C 25 40, 55 40, 55 50 C 55 60, 25 60, 25 50 Z" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />

          {/* Stars */}
          <path d="M160 30 L 162 35 L 167 36 L 163 40 L 164 45 L 160 42 L 156 45 L 157 40 L 153 36 L 158 35 Z" fill="#FFF700" />
          <path d="M70 20 L 71 23 L 74 23.5 L 71.5 25.5 L 72 28.5 L 70 27 L 68 28.5 L 68.5 25.5 L 66 23.5 L 69 23 Z" fill="#FFF700" />
          <path d="M130 150 L 131 153 L 134 153.5 L 131.5 155.5 L 132 158.5 L 130 157 L 128 158.5 L 128.5 155.5 L 126 153.5 L 129 153 Z" fill="#FFF700" />

          {/* Astronaut */}
          <g transform="translate(30, 20)">
            <ellipse cx="100" cy="125" rx="35" ry="45" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
            <circle cx="100" cy="75" r="45" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
            <rect x="95" y="70" width="10" height="20" rx="5" fill="#C7D2FE" />
            <ellipse cx="100" cy="75" rx="40" ry="35" fill="hsla(var(--accent)/0.2)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
            <circle cx="90" cy="72" r="4" fill="white" />
            <circle cx="110" cy="72" r="4" fill="white" />
            
            <ellipse cx="65" cy="115" rx="15" ry="30" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" transform="rotate(-15, 65, 115)" />
            <ellipse cx="135" cy="115" rx="15" ry="30" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" transform="rotate(15, 135, 115)" />
            
            <ellipse cx="85" cy="175" rx="12" ry="25" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
            <ellipse cx="115" cy="175" rx="12" ry="25" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />

            <rect x="90" y="110" width="20" height="30" rx="5" fill="hsl(var(--accent))" />
            
            <circle cx="96" cy="120" r="2" fill="#EF4444" />
            <circle cx="104" cy="120" r="2" fill="#3B82F6" />
            
            <rect x="95" y="130" width="10" height="3" rx="1.5" fill="#10B981" />
          </g>
        </g>
      </svg>
    </div>
  );
}
