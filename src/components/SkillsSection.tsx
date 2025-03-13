import React from 'react';
import SkillTag from './SkillTag';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'C#', level: 'expert' },
    { name: 'C++', level: 'expert' },
    { name: 'Python', level: 'expert' },
    { name: 'Java', level: 'expert' },
    { name: 'Git', level: 'expert' },
    { name: '.NET', level: 'expert' },
    { name: 'Unity', level: 'expert' },
    // { name: 'Node.js', level: 'intermediate' },
    // { name: 'GraphQL', level: 'beginner' },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <SkillTag key={skill.name} name={skill.name} level={skill.level as 'beginner' | 'intermediate' | 'expert'} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;