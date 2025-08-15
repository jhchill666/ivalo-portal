"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-900 mb-4">
            Something went wrong!
          </h1>
          <p className="text-red-700 mb-4">
            Failed to load assessment questions. Please try again.
          </p>
          <p className="text-red-700 mb-4">{error.message}</p>
          <button
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
