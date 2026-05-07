// src/app/projects/page.tsx

import styles from './projects.module.css';

export default function Projects() {
  //  Python dictionary
  const projectData = [
    {
      id: 1,
      title: "Data Pipeline Automation",
      description: "Cleaning and analyzing player data using Python, Pandas, AI agents, and n8n.",
      tags: ["Python", "Pandas", "AI Agents", "n8n"]
    },
    {
      id: 2,
      title: "Proxmox Linux Server",
      description: "Hand-built server that uses Proxmox VE to selfhost pihole, jellyfin, docker, and more.",
      tags: ["Linux", "Proxmox", "Docker", "Networking"]
    }
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>My Technical Projects</h1>
      <p className={styles.description}>
        A collection of my work in Python, Computer Hardware, and Machine Learning.
      </p>

      <div className={styles.projectList}>
        {/* --- THE REFACTORED LOOP --- */}
        {projectData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className={styles.tagContainer}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}