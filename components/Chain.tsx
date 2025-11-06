"use client";

interface ChainProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  isHovered: boolean;
}

export default function Chain({ startX, startY, endX, endY, isHovered }: ChainProps) {
  const numLinks = 10;
  const links = [];

  // Calculate positions along the chain path
  for (let i = 0; i < numLinks; i++) {
    const t = i / (numLinks - 1);
    const controlX = (startX + endX) / 2;
    const controlY = (startY + endY) / 2;

    const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
    const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;

    // Calculate angle for this segment
    const nextT = Math.min(t + 0.1, 1);
    const nextX = (1 - nextT) * (1 - nextT) * startX + 2 * (1 - nextT) * nextT * controlX + nextT * nextT * endX;
    const nextY = (1 - nextT) * (1 - nextT) * startY + 2 * (1 - nextT) * nextT * controlY + nextT * nextT * endY;
    const angle = Math.atan2(nextY - y, nextX - x) * (180 / Math.PI);

    links.push({ x, y, angle, index: i });
  }

  const linkWidth = isHovered ? 3.5 : 3;
  const linkHeight = isHovered ? 6 : 5;
  const strokeWidth = isHovered ? 1.2 : 1;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Metallic gradient for chain */}
        <linearGradient id={`metalGrad-${startX}-${startY}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: '#d0d0d0', stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: '#a0a0a0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c0c0c0', stopOpacity: 1 }} />
        </linearGradient>

        {/* Highlight gradient */}
        <radialGradient id={`highlight-${startX}-${startY}`}>
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
        </radialGradient>

        {/* Shadow gradient */}
        <radialGradient id={`shadow-${startX}-${startY}`}>
          <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id={`linkShadow-${startX}-${startY}`}>
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8"/>
        </filter>
      </defs>

      {/* Draw interlocking chain links */}
      {links.map((link) => {
        const isEven = link.index % 2 === 0;

        return (
          <g key={link.index} transform={`translate(${link.x}, ${link.y}) rotate(${link.angle})`}>
            {/* Chain link - rounded rectangle */}
            <g transform={`rotate(${isEven ? 0 : 90})`}>
              {/* Main link body */}
              <rect
                x={-linkWidth / 2}
                y={-linkHeight / 2}
                width={linkWidth}
                height={linkHeight}
                rx={linkWidth / 2}
                ry={linkWidth / 2}
                fill="none"
                stroke={`url(#metalGrad-${startX}-${startY})`}
                strokeWidth={strokeWidth}
                filter={`url(#linkShadow-${startX}-${startY})`}
                className="transition-all duration-300"
              />

              {/* Inner shadow for depth */}
              <rect
                x={-linkWidth / 2 + strokeWidth / 2}
                y={-linkHeight / 2 + strokeWidth / 2}
                width={linkWidth - strokeWidth}
                height={linkHeight - strokeWidth}
                rx={(linkWidth - strokeWidth) / 2}
                ry={(linkWidth - strokeWidth) / 2}
                fill="none"
                stroke="#000000"
                strokeWidth={0.3}
                opacity={0.4}
              />

              {/* Top highlight */}
              <ellipse
                cx={0}
                cy={-linkHeight / 3}
                rx={linkWidth / 3}
                ry={linkWidth / 4}
                fill={`url(#highlight-${startX}-${startY})`}
                opacity={0.6}
              />

              {/* Bottom shadow */}
              <ellipse
                cx={0}
                cy={linkHeight / 3}
                rx={linkWidth / 3}
                ry={linkWidth / 4}
                fill={`url(#shadow-${startX}-${startY})`}
                opacity={0.3}
              />

              {/* Left edge highlight */}
              <rect
                x={-linkWidth / 2}
                y={-linkHeight / 4}
                width={strokeWidth / 2}
                height={linkHeight / 2}
                fill="white"
                opacity={0.3}
              />

              {/* Right edge shadow */}
              <rect
                x={linkWidth / 2 - strokeWidth / 2}
                y={-linkHeight / 4}
                width={strokeWidth / 2}
                height={linkHeight / 2}
                fill="black"
                opacity={0.2}
              />
            </g>
          </g>
        );
      })}
    </svg>
  );
}
