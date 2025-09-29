import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/home" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-300" />
          </Link>
          <h1 className="text-2xl font-bold text-white">About Quizrunz</h1>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-400">Welcome to Quizrunz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <p>
              Quizrunz is an engaging quiz platform where knowledge meets rewards. Test your skills across various
              categories and earn coins for every correct answer!
            </p>

            <h3 className="text-lg font-semibold text-white">How It Works</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Choose from 40+ exciting quiz categories</li>
              <li>Pay entry fees using your earned coins</li>
              <li>Answer questions within the time limit</li>
              <li>Earn coins based on your performance</li>
              <li>Build your coin balance and play more quizzes</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">Features</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>No registration required - play as a guest</li>
              <li>Wide variety of topics and difficulty levels</li>
              <li>Real-time scoring and instant rewards</li>
              <li>Track your progress and statistics</li>
              <li>Mobile-optimized experience</li>
            </ul>

            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <p>
              Explore quizzes in Business & Economics, Science & Technology, Sports, Entertainment, History, Geography,
              Mathematics, Literature, and more!
            </p>

            <div className="bg-gradient-to-r from-orange-400/20 to-yellow-500/20 p-4 rounded-lg border border-orange-500/30">
              <p className="text-orange-300 font-medium">
                Start your quiz journey today and see how much you can earn!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
