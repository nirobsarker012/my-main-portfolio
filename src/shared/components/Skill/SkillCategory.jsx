const SkillCategory = ({ title, skills }) => (
  <div className="rounded-lg border border-[#252425] pb-5">
    <h2 className="my-5 text-center text-2xl font-semibold text-gray-300">
      {title}
    </h2>
    <div className="flex flex-wrap items-center justify-center gap-5 p-2">
      {skills.map((skill) => (
        <div
          className="flex items-center gap-1 rounded-lg border border-gray-400 px-2 py-1"
          key={skill?.id}
        >
          {skill?.img && (
            <img
              className="h-5 w-5 object-cover"
              src={skill.img}
              alt={`Skill ${skill.id + 1}`}
            />
          )}
          <h1 className="capitalize text-gray-400">{skill?.name}</h1>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;
