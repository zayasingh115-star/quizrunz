"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, Play, X } from "lucide-react"

interface AdModalProps {
  isOpen: boolean
  onClose: () => void
  onAdComplete: () => void
}

export default function AdModal({ isOpen, onClose, onAdComplete }: AdModalProps) {
  const [isWatching, setIsWatching] = useState(false)
  const [adProgress, setAdProgress] = useState(0)

  if (!isOpen) return null

  const watchAd = () => {
    setIsWatching(true)
    setAdProgress(0)

    // Simulate ad watching with progress
    const interval = setInterval(() => {
      setAdProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsWatching(false)
            onAdComplete()
            onClose()
          }, 500)
          return 100
        }
        return prev + 2 // 5 second ad (100/2 = 50 intervals * 100ms = 5s)
      })
    }, 100)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          {!isWatching ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Earn Free Coins</h3>
                <button onClick={onClose} className="p-1 hover:bg-slate-700 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="text-center mb-6">
                <Coins className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <p className="text-slate-300 mb-2">Watch a short ad to earn</p>
                <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 rounded-lg p-3 mb-4">
                  <p className="text-xl font-bold">+100 Coins</p>
                </div>
                <p className="text-sm text-slate-400">Ad duration: ~5 seconds</p>
              </div>

              <Button
                onClick={watchAd}
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-slate-900 hover:from-orange-500 hover:to-yellow-600"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Ad
              </Button>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Watching Ad...</h3>

              <div className="mb-6">
                <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-yellow-500 h-3 rounded-full transition-all duration-100"
                    style={{ width: `${adProgress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-400">{Math.round(adProgress)}% complete</p>
              </div>

              <div className="bg-slate-700 rounded-lg p-8 mb-4">
                <div className="animate-pulse">
                  <div className="bg-slate-600 rounded h-4 mb-2"></div>
                  <div className="bg-slate-600 rounded h-4 w-3/4 mb-2"></div>
                  <div className="bg-slate-600 rounded h-4 w-1/2"></div>
                </div>
                <p className="text-center text-slate-400 mt-4 text-sm">[Simulated Ad Content]</p>
              </div>

              {adProgress === 100 && <div className="text-green-400 font-semibold">Ad Complete! +100 Coins Added</div>}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
