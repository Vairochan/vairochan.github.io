import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Python", "Django", "FastAPI", "RESTful APIs", "Microservices", "WebSockets"]
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Android SDK", "Bloc", "Equatable", "Firebase"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL Server", "MySQL", "PostgreSQL", "SQLite"]
    },
    {
      title: "DevOps & Automation",
      skills: ["Git", "Docker", "CI/CD", "Linux", "Bash", "VCenter", "Ansible", "Jenkins", "Postman"]
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "eBPF", "BPFTrace", "OpenTelemetry", "Zabbix", "System Monitoring", "Network Observability", "Threat Detection"]
    },
    {
      title: "Networking & Protocols",
      skills: ["HTTPS", "TCP/IP", "SNMP", "SMTP", "WebSockets", "JSON", "XML", "YAML"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span className="skill-item" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
