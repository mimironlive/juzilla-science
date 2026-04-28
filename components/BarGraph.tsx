import { BarGraphData } from '@/lib/types'

const COLORS = ['#8636CE', '#FF82BD', '#2ABFBF', '#F78B64', '#6366f1', '#f59e0b']

interface Props {
  data: BarGraphData
}

export default function BarGraph({ data }: Props) {
  const { title, yLabel, scale, bars } = data

  // Layout constants (viewBox units)
  const W = 320
  const H = 190
  const padL = 42   // room for Y-axis labels
  const padR = 8
  const padT = 8
  const padB = 40   // room for X-axis labels
  const plotW = W - padL - padR
  const plotH = H - padT - padB

  // Compute max value: round up to nearest scale multiple
  const dataMax = Math.max(...bars.map(b => b.value))
  const maxVal = Math.ceil(dataMax / scale) * scale
  const numIntervals = maxVal / scale

  // Bar geometry
  const n = bars.length
  const gap = 10
  const barW = (plotW - gap * (n + 1)) / n

  const toY = (v: number) => padT + plotH - (v / maxVal) * plotH

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-100 p-3">
      <p className="text-xs font-bold text-center text-gray-500 mb-1">{title}</p>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ display: 'block' }}
        aria-label={title}
      >
        {/* Y-axis label */}
        <text
          x={8}
          y={padT + plotH / 2}
          fontSize={7}
          fill="#9ca3af"
          textAnchor="middle"
          transform={`rotate(-90, 8, ${padT + plotH / 2})`}
        >
          {yLabel}
        </text>

        {/* Horizontal grid lines + Y-axis tick labels */}
        {Array.from({ length: numIntervals + 1 }, (_, i) => {
          const val = i * scale
          const y = toY(val)
          return (
            <g key={i}>
              <line
                x1={padL} y1={y} x2={padL + plotW} y2={y}
                stroke={i === 0 ? '#d1d5db' : '#f3f4f6'}
                strokeWidth={i === 0 ? 1.5 : 1}
                strokeDasharray={i === 0 ? undefined : '3 3'}
              />
              <text x={padL - 4} y={y + 3} fontSize={8} fill="#6b7280" textAnchor="end">
                {val}
              </text>
            </g>
          )
        })}

        {/* Bars */}
        {bars.map((bar, i) => {
          const x = padL + gap * (i + 1) + barW * i
          const barH = (bar.value / maxVal) * plotH
          const y = padT + plotH - barH
          const color = COLORS[i % COLORS.length]
          return (
            <g key={bar.label}>
              {/* Bar */}
              <rect x={x} y={y} width={barW} height={barH} fill={color} rx={3} />
              {/* Value label on top of bar */}
              <text
                x={x + barW / 2} y={y - 3}
                fontSize={8} fill={color} textAnchor="middle" fontWeight="bold"
              >
                {bar.value}
              </text>
              {/* X-axis label (wrap long labels) */}
              <text
                x={x + barW / 2} y={padT + plotH + 12}
                fontSize={7.5} fill="#374151" textAnchor="middle"
              >
                {bar.label.length > 8 ? (
                  <>
                    <tspan x={x + barW / 2} dy={0}>{bar.label.slice(0, 8)}</tspan>
                    <tspan x={x + barW / 2} dy={10}>{bar.label.slice(8)}</tspan>
                  </>
                ) : bar.label}
              </text>
            </g>
          )
        })}

        {/* X-axis baseline */}
        <line
          x1={padL} y1={padT + plotH}
          x2={padL + plotW} y2={padT + plotH}
          stroke="#d1d5db" strokeWidth={1.5}
        />
        {/* Y-axis baseline */}
        <line
          x1={padL} y1={padT}
          x2={padL} y2={padT + plotH}
          stroke="#d1d5db" strokeWidth={1.5}
        />
      </svg>
    </div>
  )
}
