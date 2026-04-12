'use client'

interface Props {
  selectedLabel: string // e.g. "A) Mammals, because..."
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({ selectedLabel, onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
        <div className="text-4xl mb-3">🤔</div>
        <h2 className="text-xl font-bold text-brand-navy mb-2">
          Are you sure?
        </h2>
        <p className="text-gray-600 mb-1 text-sm">Your chosen answer is:</p>
        <p className="text-brand-purple font-semibold text-base mb-5 px-2 leading-snug">
          {selectedLabel}
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Once you confirm, you cannot change your answer.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
          >
            Yes, Confirm!
          </button>
        </div>
      </div>
    </div>
  )
}
