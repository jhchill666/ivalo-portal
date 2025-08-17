import { Company } from "@ivalo/db";

export function ScoreStats({
  companies,
  portfolioAverage,
}: {
  companies: Company[];
  portfolioAverage: number;
}) {
  return (
    <div className="stats">
      <div className="stat p-0">
        <div className="flex justify-center gap-2">
          <h1 className="stat-value text-slate-600">
            {Number(portfolioAverage * 100).toFixed(1)}%
          </h1>
          <div className="stat-figure text-secondary mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              className="inline-block h-16 w-16 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
        </div>

        <h5 className="stat-title text-slate-500">Portfolio Average</h5>
        <h5 className="stat-desc text-secondary">
          {companies.length} brands assessed
        </h5>
      </div>
    </div>
  );
}
