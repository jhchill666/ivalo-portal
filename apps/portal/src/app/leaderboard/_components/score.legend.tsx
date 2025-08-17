export function ScoreLegend() {
  return (
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
  );
}
