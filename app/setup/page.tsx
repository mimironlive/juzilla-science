'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AVATARS } from '@/lib/types'
import { defaultProfile, saveProfile } from '@/lib/storage'

export default function SetupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(AVATARS[0])

  const handleStart = () => {
    if (!name.trim()) return
    const profile = defaultProfile(name.trim(), avatar)
    saveProfile(profile)
    router.replace('/')
  }

  return (
    <div className="min-h-screen bg-juz-purple-bg flex flex-col items-center justify-center p-6">
      {/* Card */}
      <div className="bg-white rounded-4xl shadow-card max-w-sm w-full p-8 text-center">
        <div className="text-6xl mb-2">🦖</div>
        <h1 className="text-2xl font-black text-juz-navy mb-1">Welcome!</h1>
        <p className="text-gray-500 text-sm mb-8">
          Let's set up your profile before we start.
        </p>

        {/* Name input */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-bold text-juz-navy mb-2">
            What is your name?
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Julian"
            maxLength={20}
            className="w-full border-2 border-juz-purple-light rounded-2xl px-4 py-3 text-lg font-bold text-juz-navy placeholder-gray-300 focus:outline-none focus:border-juz-purple transition-colors"
            onKeyDown={e => e.key === 'Enter' && handleStart()}
          />
        </div>

        {/* Avatar picker */}
        <div className="mb-8 text-left">
          <label className="block text-sm font-bold text-juz-navy mb-3">
            Pick your explorer!
          </label>
          <div className="grid grid-cols-4 gap-3">
            {AVATARS.map(a => (
              <button
                key={a}
                onClick={() => setAvatar(a)}
                className={`text-3xl h-14 rounded-2xl border-2 transition-all ${
                  avatar === a
                    ? 'border-juz-purple bg-juz-purple-light scale-110 shadow-glow-purple'
                    : 'border-gray-100 bg-gray-50 hover:border-juz-purple-light'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={!name.trim()}
          className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${
            name.trim()
              ? 'gradient-purple text-white shadow-md hover:opacity-90 active:scale-95'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Let's Go! 🚀
        </button>
      </div>
    </div>
  )
}
