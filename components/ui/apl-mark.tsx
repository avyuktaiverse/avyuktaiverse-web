/**
 * APL orbit mark — inline SVG so it stays crisp, themeable and dependency-free.
 * Geometric A and P in white, lime L, a lime orbit sweeping through the A with
 * a glowing node. viewBox is 260×100; size it with `height` / className.
 */
export function AplMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="-20 0 270 100"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={className}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="apl-lime" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E4FF5A" />
          <stop offset="1" stopColor="#8FD400" />
        </linearGradient>
        <linearGradient id="apl-orbit" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#CCFF00" stopOpacity="0" />
          <stop offset="0.35" stopColor="#CCFF00" stopOpacity="0.85" />
          <stop offset="1" stopColor="#CCFF00" />
        </linearGradient>
        <filter id="apl-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* Orbit — back half, dimmer, behind the letters */}
      <ellipse
        cx="54" cy="54" rx="72" ry="22"
        transform="rotate(-22 54 54)"
        stroke="#CCFF00" strokeOpacity="0.35" strokeWidth="5"
      />

      {/* A */}
      <path
        d="M18 88 L54 14 L90 88"
        stroke="#FFFFFF" strokeWidth="15" strokeLinejoin="miter" strokeMiterlimit="6"
      />
      <path d="M37 63 H71" stroke="#FFFFFF" strokeWidth="13" />

      {/* P */}
      <path d="M112 88 V14" stroke="#FFFFFF" strokeWidth="15" />
      <path
        d="M112 21.5 H142 a20 20 0 0 1 0 40 H112"
        stroke="#FFFFFF" strokeWidth="15" strokeLinejoin="round"
      />

      {/* L */}
      <path
        d="M182 14 V80.5 H232"
        stroke="url(#apl-lime)" strokeWidth="15" strokeLinejoin="miter"
      />

      {/* Orbit — front arc, passes in front of the A */}
      <path
        d="M120.6 33.2 A72 22 -22 0 1 -12.6 74.8"
        stroke="url(#apl-orbit)" strokeWidth="5.5" strokeLinecap="round"
      />

      {/* Orbit node with glow */}
      <circle cx="82.4" cy="22.4" r="7" fill="#CCFF00" opacity="0.55" filter="url(#apl-glow)" />
      <circle cx="82.4" cy="22.4" r="4.2" fill="#E9FF7A" />
    </svg>
  );
}
