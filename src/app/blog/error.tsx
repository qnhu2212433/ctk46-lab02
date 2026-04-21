"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Đã có lỗi xảy ra!
      </h2>
      <p className="text-gray-600 mb-6">
        {error.message || "Vui lòng thử lại sau."}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Thử lại
      </button>
    </div>
  );
}
