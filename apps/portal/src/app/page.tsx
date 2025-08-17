import {
  Building2,
  Glasses,
  Leaf,
  ShieldCheck,
  ShoppingCart,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { IvaloLink } from "./_components/home/ivalo.link";

export default function Index() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Greeting Header - Outside the box */}
        <div className="flex flex-row justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            360 Sustainability
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Need help?</span>
            <button className="btn btn-primary">Talk to us!</button>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="list bg-white/60 rounded-box overflow-hidden p-2">
          {/* Main Functionality Cards */}
          <div className="mb-6">
            <div className="grid md:grid-cols-3 gap-2">
              {/* Questions & Survey */}
              <Link
                href="/questionnaire?tab=questions"
                className="group h-full"
              >
                <div className="rounded-lg bg-slate-400/[0.10] p-7 m-3 mb-0 flex items-start gap-4 hover:bg-slate-400/[0.15] transition-colors h-full">
                  <div className="w-12 h-12 bg-green-300 rounded-lg flex items-center justify-center mb-4 transition-colors flex-shrink-0">
                    <Leaf />
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
                      Sustainability Assessment
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Evaluate across 6 sustainability pillars with detailed
                      scoring.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Company Information */}
              <Link href="/questionnaire" className="group h-full">
                <div className="rounded-lg bg-slate-400/[0.10] p-7 m-3 mb-0 flex items-start gap-4 hover:bg-slate-400/[0.15] transition-colors h-full">
                  <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center mb-4 transition-colors flex-shrink-0">
                    <Glasses />
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
                      Company Validation
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Complete company profile and sustainability baseline
                      assessment.
                    </p>
                  </div>
                </div>
              </Link>

              {/* 360 Leaderboard */}
              <Link href="/leaderboard" className="group h-full">
                <div className="rounded-lg bg-slate-400/[0.10] p-7 m-3 mb-0 flex items-start gap-4 hover:bg-slate-400/[0.15] transition-colors h-full">
                  <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center mb-4 transition-colors flex-shrink-0">
                    <Trophy />
                  </div>
                  <div className="flex flex-col w-full">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
                      360 Leaderboard
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Compare sustainability scores across your brand portfolio.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <br />

          <div className="flex flex-row px-2 w-full gap-10">
            <div className="flex-col flex-1">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  Sustainability Framework
                </h3>
                <IvaloLink />
              </div>

              <div className="flex flex-col py-3 gap-6">
                <div className="flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900">
                      Materials & Certifications
                    </span>
                    <span className="text-base text-gray-600">
                      GOTS-certified cotton, recycled materials, plant-based
                      alternatives, and responsible mulesing-free wool.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900">
                      Transparent Value Chain
                    </span>
                    <span className="text-base text-gray-600">
                      Production transparency, supplier auditing, code of
                      conduct, and material origin tracking.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Glasses className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900">
                      Design For Circularity
                    </span>
                    <span className="text-base text-gray-600">
                      Durable design, repair services, resale value, and waste
                      stream control.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900">
                      Inclusivity & Community
                    </span>
                    <span className="text-base text-gray-600">
                      Diversity, equality, inclusion practices, and inclusive
                      sizing in textiles.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900">
                      Commitment To Sustainability
                    </span>
                    <span className="text-base text-gray-600">
                      Factual targets, public policies, and measurable
                      sustainability goals.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900">
                      Responsible e-Commerce
                    </span>
                    <span className="text-base text-gray-600">
                      Inventory management, sustainable packaging, and slow
                      carbon-negative logistics.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col flex-1">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  Assessment Tools
                </h3>
              </div>

              <div className="flex flex-col py-3 gap-4">
                <Link href="/questionnaire" className="group h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-40 h-40 bg-gray-200/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-base">
                          <ShieldCheck />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold text-gray-900">
                        Register Company
                      </span>
                      <span className="text-base text-gray-600">
                        Complete your company details and sustainability
                        baseline information.
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/questionnaire?tab=questions"
                  className="group h-full"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-40 h-40 bg-gray-200/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-base">
                          <Leaf />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold text-gray-900">
                        Start Assessment
                      </span>
                      <span className="text-base text-gray-600">
                        Begin your sustainability evaluation across all 6
                        pillars with detailed scoring.
                      </span>
                    </div>
                  </div>
                </Link>

                <Link href="/leaderboard" className="group h-full">
                  <div className="flex items-center gap-6">
                    <div className="w-40 h-40 bg-gray-200/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-base">
                          <Trophy />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold text-gray-900">
                        View Leaderboard
                      </span>
                      <span className="text-base text-gray-600">
                        Compare sustainability scores across your brand
                        portfolio and track performance.
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
