import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          {/* <Link href="/home" className="p-2 hover:bg-slate-800 rounded-lg transition-colors"> */}
          <Link href="/start" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-300" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Terms & Conditions</h1>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-orange-400">Terms of Service</CardTitle>
            <p className="text-slate-400 text-sm">Last updated: December 29, 2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            <section>
              <h3 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h3>
              <p>
                By accessing and using Quizrunz, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">2. Use License</h3>
              <p>
                Permission is granted to temporarily use Quizrunz for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">3. Virtual Currency</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Coins earned in Quizrunz have no real-world monetary value</li>
                <li>Coins cannot be exchanged for real money or prizes</li>
                <li>Coins are for entertainment purposes only</li>
                <li>We reserve the right to modify coin values and rewards</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">4. User Conduct</h3>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to cheat or manipulate quiz results</li>
                <li>Interfere with the proper working of the service</li>
                <li>Use automated tools to play quizzes</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">5. Content Accuracy</h3>
              <p>
                While we strive for accuracy in our quiz content, we do not guarantee that all information is completely
                accurate or up-to-date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">6. Limitation of Liability</h3>
              <p>
                Quizrunz shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of the service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">7. Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting.
              </p>
            </section>

            <div className="bg-gradient-to-r from-orange-400/20 to-yellow-500/20 p-4 rounded-lg border border-orange-500/30">
              <p className="text-orange-300 font-medium">
                By continuing to use Quizrunz, you agree to these terms and conditions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
