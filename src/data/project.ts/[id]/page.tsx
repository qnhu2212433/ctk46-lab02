export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Giả sử bạn có hàm getProjectById
  return (
    <div className="p-8">
      <h1>Chi tiết dự án: {id}</h1>
      {/* Hiển thị nội dung dự án ở đây */}
    </div>
  );
}
