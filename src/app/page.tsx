export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Đào Hoàng Quỳnh Như</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212433</strong>
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800">
            Công nghệ trong ngành phần mềm thay đổi theo từng ngày. Việc học môn
            này không chỉ giúp mình có kiến thức mới, mà quan trọng hơn là rèn
            luyện khả năng tự học và thích nghi – hai kỹ năng sống còn của một
            lập trình viên.
          </p>
        </div>

        <section className="mb-10 p-6 bg-gray-100 rounded-lg dark:bg-zinc-800/30">
          <h2 className="text-2xl font-semibold mb-4">🌟 Sở thích cá nhân</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Nghiên cứu các công nghệ Web mới</li>
            <li>Đọc sách về phát triển bản thân</li>
            <li>Nghe nhạc và du lịch trải nghiệm</li>
          </ul>
        </section>

        <section className="p-6 bg-blue-50 rounded-lg dark:bg-blue-900/10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
            🎯 Mục tiêu học tập
          </h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>Làm chủ Framework Next.js trong kỳ này</li>
            <li>Xây dựng hoàn thiện một dự án cá nhân trên GitHub</li>
            <li>Đạt điểm tốt môn Các công nghệ mới trong PTPM</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
