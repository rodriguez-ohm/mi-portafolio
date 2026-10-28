function HeroGraphic() {
  return (
    <svg viewBox="0 0 590 220" aria-hidden="true" className="h-auto w-full">
      {/* U1: el chip */}
      <rect
        x="10"
        y="55"
        width="90"
        height="110"
        rx="4"
        fill="none"
        strokeWidth="2"
        className="stroke-on-brand-muted"
      />
      <text x="24" y="78" fontSize="13" letterSpacing="1" className="fill-on-brand-muted font-mono">
        U1
      </text>
      <circle cx="22" cy="152" r="3" className="fill-on-brand-muted" />

      {/* Pistas: de los pines a la interfaz */}
      <g
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-brand-accent"
      >
        <path d="M100 80 H190 L218 52 H380" />
        <path d="M100 110 H380" />
        <path d="M100 140 H210 L227 157 H380" />
      </g>

      {/* Pulsos: la señal que recorre cada pista */}
      <g
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-on-brand"
      >
        <path d="M100 80 H190 L218 52 H380" pathLength="100" className="signal-pulse" />
        <path d="M100 110 H380" pathLength="100" className="signal-pulse signal-delay-1" />
        <path
          d="M100 140 H210 L227 157 H380"
          pathLength="100"
          className="signal-pulse signal-delay-2"
        />
      </g>

      <g className="fill-brand-accent">
        <circle cx="100" cy="80" r="4" />
        <circle cx="100" cy="110" r="4" />
        <circle cx="100" cy="140" r="4" />
      </g>

      {/* UI: la ventana */}
      <rect
        x="380"
        y="10"
        width="200"
        height="200"
        rx="8"
        fill="none"
        strokeWidth="2.5"
        className="stroke-on-brand"
      />
      <text
        x="396"
        y="32"
        fontSize="13"
        letterSpacing="1"
        className="fill-on-brand-muted font-mono"
      >
        UI
      </text>
      <rect x="400" y="46" width="110" height="12" rx="3" className="signal-glow fill-on-brand" />
      <rect x="400" y="68" width="160" height="6" rx="3" className="fill-on-brand-muted" />
      <rect x="400" y="80" width="120" height="6" rx="3" className="fill-on-brand-muted" />
      <rect
        x="400"
        y="98"
        width="80"
        height="24"
        rx="3"
        className="signal-glow signal-delay-1 fill-brand-accent"
      />
      <rect
        x="400"
        y="145"
        width="160"
        height="24"
        rx="3"
        fill="none"
        strokeWidth="2"
        className="signal-glow signal-delay-2 stroke-on-brand"
      />
    </svg>
  )
}

export default HeroGraphic
