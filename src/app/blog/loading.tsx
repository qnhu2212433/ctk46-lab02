export default function Loading() {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-pulse">
      {/* Nút quay lại giả */}
      <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>

      <div className="space-y-4">
        {/* Category & Date giả */}
        <div className="flex gap-3">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-6 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Tiêu đề giả */}
        <div className="h-10 w-3/4 bg-gray-300 rounded"></div>

        {/* Tác giả giả */}
        <div className="h-4 w-40 bg-gray-200 rounded"></div>

        {/* Nội dung giả */}
        <div className="space-y-2 pt-4">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
