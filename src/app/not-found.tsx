import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
        404
      </h1>
      <div className="bg-white px-2 text-sm rounded rotate-12 absolute border border-blue-600 text-blue-600">
        Trang không tìm thấy
      </div>
      <p className="text-gray-500 mt-8 mb-8 text-lg">
        Xin lỗi, chúng tôi không tìm thấy nội dung bạn yêu cầu.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
