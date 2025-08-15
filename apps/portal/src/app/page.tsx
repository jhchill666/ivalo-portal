import { connectDb } from "@ivalo/db";
import { CompanyRepository } from "./_repositories/company.repository";

export default async function Index() {
  const { db } = await connectDb();
  const companyRepo = new CompanyRepository(db);

  try {
    const companies = await companyRepo.getCompanies();

    // Sort companies by tulosPercent in descending order for leaderboard
    const sortedCompanies = companies.sort(
      (a, b) => parseFloat(b.tulosPercent) - parseFloat(a.tulosPercent)
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-5xl font-bold text-gray-800 mb-3">
                  COMPANY PERFORMANCE
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  Ranked by validation score and sustainability metrics
                </p>
              </div>
              <div className="bg-white rounded-full p-4 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">360</span>
                </div>
              </div>
            </div>
          </div>

          {sortedCompanies.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
              <p className="text-gray-500 text-xl">No companies found.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {sortedCompanies.map((company, index) => {
                const rank = index + 1;
                const isFirst = rank === 1;
                // const scoreValue = parseFloat(company.tulosPercent);

                // Color coding based on score ranges
                const getScoreColor = (score: number) => {
                  if (score >= 80) return "text-green-600";
                  if (score >= 60) return "text-yellow-600";
                  if (score >= 40) return "text-orange-600";
                  return "text-red-600";
                };

                const getProgressColor = (score: number) => {
                  if (score >= 80)
                    return "bg-gradient-to-r from-green-400 to-green-600";
                  if (score >= 60)
                    return "bg-gradient-to-r from-yellow-400 to-yellow-600";
                  if (score >= 40)
                    return "bg-gradient-to-r from-orange-400 to-orange-600";
                  return "bg-gradient-to-r from-red-400 to-red-600";
                };

                return (
                  <div
                    key={company.id}
                    className={`relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-lg ${
                      isFirst
                        ? "ring-2 ring-orange-200 bg-gradient-to-r from-orange-50 to-pink-50"
                        : ""
                    }`}
                  >
                    {/* Rank Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-100 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-700">
                        #{rank}
                      </span>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex-1 ml-4">
                        <div className="flex items-center gap-4 mb-6">
                          <h2 className="text-3xl font-bold text-gray-800">
                            {company.name}
                          </h2>
                          {isFirst && (
                            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              TOP PERFORMER
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                              Validation Score
                            </div>
                            <div
                              className={`text-4xl font-bold ${getScoreColor(
                                parseFloat(company.tulosPercent)
                              )}`}
                            >
                              {company.tulosPercent}%
                            </div>
                          </div>

                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                              Total Points
                            </div>
                            <div className="text-2xl font-semibold text-gray-700">
                              {company.tulosPoints}
                            </div>
                          </div>

                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                              Member Since
                            </div>
                            <div className="text-lg text-gray-600">
                              {new Date(company.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Visualization */}
                      <div className="ml-8 w-48">
                        <div className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide text-right">
                          Performance
                        </div>
                        <div className="space-y-3">
                          <div className="w-full bg-gray-100 rounded-full h-4">
                            <div
                              className={`h-4 rounded-full transition-all duration-700 ${getProgressColor(
                                parseFloat(company.tulosPercent)
                              )}`}
                              style={{
                                width: `${Math.min(
                                  parseFloat(company.tulosPercent),
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>0%</span>
                            <span className="font-semibold">
                              {company.tulosPercent}%
                            </span>
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load companies:", error);
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-900 mb-4">
              Error Loading Companies
            </h1>
            <p className="text-red-700">
              Failed to load companies. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
