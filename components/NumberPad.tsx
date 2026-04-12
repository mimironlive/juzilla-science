'use client'

interface Props {
  value: string
  onChange: (val: string) => void
  onSubmit: () => void
  disabled?: boolean
}

export default function NumberPad({ value, onChange, onSubmit, disabled }: Props) {
  const handleDigit = (d: string) => {
    if (disabled) return
    if (value.length >= 4) return // max 4 digits
    onChange(value + d)
  }

  const handleBack = () => {
    if (disabled) return
    onChange(value.slice(0, -1))
  }

  const btn = (label: string, action: () => void, variant: 'digit' | 'back' | 'check' = 'digit') => {
    const base = 'flex items-center justify-center rounded-2xl font-bold text-xl select-none transition-all active:scale-95 h-14'
    const variants = {
      digit: 'bg-white border-2 border-juz-purple-light text-juz-navy shadow-sm hover:bg-juz-purple-light',
      back:  'bg-juz-orange-light border-2 border-orange-200 text-orange-600 hover:bg-orange-100',
      check: `${disabled || !value ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'gradient-purple text-white shadow-md hover:opacity-90 cursor-pointer'}`,
    }
    return (
      <button
        key={label}
        onClick={action}
        disabled={variant === 'check' && (disabled || !value)}
        className={`${base} ${variants[variant]}`}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="w-full">
      {/* Answer display */}
      <div className="mb-3 bg-white border-2 border-juz-purple-light rounded-2xl px-4 py-3 flex items-center justify-between">
        <span className="text-sm text-gray-400 font-medium">Your answer:</span>
        <span className={`text-3xl font-black tabular-nums min-w-[80px] text-right ${value ? 'text-juz-navy' : 'text-gray-200'}`}>
          {value || '—'}
        </span>
      </div>

      {/* Pad grid */}
      <div className="grid grid-cols-3 gap-2">
        {['7','8','9','4','5','6','1','2','3'].map(d =>
          btn(d, () => handleDigit(d), 'digit')
        )}
        {btn('⌫', handleBack, 'back')}
        {btn('0', () => handleDigit('0'), 'digit')}
        {btn('✓ Check', onSubmit, 'check')}
      </div>
    </div>
  )
}
