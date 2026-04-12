'use client'

interface Props {
  selectedLabel: string
  onConfirm: () => void
  onCancel: () => void
  isMath?: boolean
}

export default function ConfirmModal({ selectedLabel, onConfirm, onCancel, isMath }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 text-center animate-in slide-in-from-bottom-4 duration-200">
        <div className="text-5xl mb-3">🤔</div>
        <h2 className="text-xl font-black text-juz-navy mb-2">Lock in your answer?</h2>
        <p className="text-gray-500 text-sm mb-3">
          {isMath ? 'Your answer is:' : 'You picked:'}
        </p>
        <div className="bg-juz-purple-light rounded-2xl px-4 py-3 mb-3">
          <p className="text-juz-purple font-bold text-base leading-snug">{selectedLabel}</p>
        </div>
        <p className="text-gray-400 text-xs mb-5">You cannot change this once confirmed.</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-2xl gradient-purple text-white font-bold hover:opacity-90 transition-opacity shadow-md"
          >
            Yes, Lock It! 🔒
          </button>
        </div>
      </div>
    </div>
  )
}
