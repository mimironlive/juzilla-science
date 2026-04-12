'use client'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function LegacyPracticeRedirect() {
  const params = useParams()
  const router = useRouter()
  useEffect(() => {
    router.replace(`/science/practice/${params.topic}`)
  }, [params.topic, router])
  return null
}
