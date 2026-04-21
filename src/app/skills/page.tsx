export default function SkillsPage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Kỹ năng lập trình</h1>
      <ul className="list-disc ml-6 mt-4">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
