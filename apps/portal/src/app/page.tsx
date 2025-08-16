import { connectDb } from "@ivalo/db";
import { CompanyRepository } from "./_repositories/company.repository";

export default async function Index() {
  const { db } = await connectDb();
  const companyRepo = new CompanyRepository(db);

  try {
    const companies = await companyRepo.getCompanies(20);

    // Sort companies by tulosPercent in descending order for leaderboard
    const sortedCompanies = companies.sort(
      (a, b) =>
        parseFloat(String(b.tulosPercent ?? "0")) -
        parseFloat(String(a.tulosPercent ?? "0"))
    );

    // Calculate portfolio average
    const portfolioAverage =
      companies.length > 0
        ? companies.reduce(
            (sum, company) =>
              sum + parseFloat(String(company.tulosPercent ?? "0")),
            0
          ) / companies.length
        : 0;

    return (
      <div className="min-h-screen blob-yellow">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-8">
              <div className="space-y-3">
                <h1 className="text-5xl text-slate-800 font-bold leading-relaxed font-display">
                  360 RETAIL
                </h1>
                <p className="text-lg text-slate-600  font-bold max-w-2xl leading-relaxed">
                  From chaos to clarity, in a matter of weeks.
                </p>
                <p className="text-lg font-normal text-slate-600 max-w-2xl leading-relaxed">
                  A lightweight and comprehensive way to assess, score, and
                  manage the sustainability of your brand portfolio all at once
                  - without surveys, spreadsheets, or headaches.
                </p>
              </div>

              {/* Portfolio Score Badge */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2 font-display">
                    {portfolioAverage.toFixed(1)}%
                  </div>
                  <div className="text-sm font-medium text-slate-600 mb-1">
                    Portfolio Average
                  </div>
                  <div className="w-24 h-2 bg-slate-100 rounded-full mx-auto">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min(portfolioAverage, 100)}%` }}
                    />
                  </div>
                  <div className="text-xs font-normal text-slate-500 mt-2">
                    {companies.length} brands assessed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Score Legend */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-xs font-normal">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-600">90-100%: EXCELLENT</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-600">70-89%: Very good</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-600">50-69%: Good</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-slate-600">30-49%: OK</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-slate-600">0-29%: Basic</span>
              </div>
            </div>
          </div>

          {/* Leaderboard Content */}
          {sortedCompanies.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-16 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                No Companies Found
              </h3>
              <p className="text-slate-500">
                Start by adding some companies to see them appear on the
                leaderboard.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedCompanies.map((company, index) => {
                const rank = index + 1;
                const isFirst = rank === 1;
                const isSecond = rank === 2;
                const isThird = rank === 3;

                const getScoreColor = (score: number) => {
                  if (score >= 60) return "text-green-600";
                  if (score >= 40) return "text-emerald-600";
                  if (score >= 20) return "text-yellow-600";
                  return "text-red-600";
                };

                return (
                  <div
                    key={company.code}
                    className={`relative rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                      isFirst
                        ? "border-amber-400 bg-gradient-to-r from-amber-50 to-yellow-50 p-8"
                        : isSecond
                        ? "border-slate-300 bg-slate-100 p-6"
                        : isThird
                        ? "border-slate-300 bg-slate-100 p-6"
                        : "bg-white border-slate-200 p-6"
                    }`}
                  >
                    {/* Gold Star/Rosette for #1 */}
                    {isFirst && (
                      <div className="absolute -top-4 -right-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-lg">⭐</span>
                        </div>
                      </div>
                    )}

                    <a
                      className="flex items-center justify-between"
                      href={`/brands/${company.code}`}
                    >
                      {/* Company Info */}
                      <div className="flex items-center gap-6 flex-1">
                        {/* Rank */}
                        <div className="flex items-center gap-6">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-md transition-all duration-300 ${
                              isFirst
                                ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white ring-2 ring-amber-200"
                                : isSecond
                                ? "bg-gradient-to-br from-slate-300 to-slate-400 text-white ring-2 ring-slate-200"
                                : isThird
                                ? "bg-gradient-to-br from-amber-600 to-orange-600 text-white ring-2 ring-amber-200"
                                : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 border border-slate-200"
                            }`}
                          >
                            #{rank}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 font-display">
                              {company.name}
                            </h3>
                            {isFirst && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                  TOP PERFORMER
                                </span>
                                <span className="text-xs font-normal text-slate-500">
                                  Leading sustainable business practices
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Score */}
                        <div className="flex items-center gap-6 ml-auto">
                          <div className="text-center">
                            <div className="text-3xl font-semibold text-slate-500 font-display">
                              {company.tulosPoints}
                            </div>
                            <div className="text-sm font-normal text-slate-500">
                              Total Points
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="w-px h-12 bg-slate-200"></div>

                          <div className="text-center">
                            <div
                              className={`text-3xl font-bold font-display ${getScoreColor(
                                Number(company.tulosPercent ?? 0) * 100
                              )}`}
                            >
                              {Number(
                                (company.tulosPercent ?? 0) * 100
                              ).toFixed(2)}
                              %
                            </div>
                            <div className="text-sm font-medium text-slate-600">
                              Validation Score
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              ATTENTION: As we comply with the EU Green Claims directive, please
              note that the contents of this 360 analysis is for your internal
              sustainability development only. Not for B2C communication.
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto py-16 px-6">
          <div className="bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-3xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-red-900 mb-4">
              Unable to Load Leaderboard
            </h1>
            <p className="text-red-700 text-lg leading-relaxed">
              We encountered an issue while loading the sustainability data.
              Please refresh the page or try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
