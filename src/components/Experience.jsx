import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: "Software Developer",
      company: "Betsol Pvt Ltd",
      period: "June 2022 - Present",
      description: [
        "Developed and deployed a scalable monitoring infrastructure using Bash and Ansible for Linux-based products and network devices.",
        "Automated Linux system administration tasks with advanced Bash scripting, ensuring consistent monitoring setups.",
        "Implemented real-time data collection using TCP, SNMP, and HTTP/HTTPS protocols.",
        "Built and maintained Jenkins pipelines for automated testing and deployment of shell and Python scripts.",
        "Optimized Zabbix proxy deployments with OVA templates and automated scripts.",
        "Developed RESTful APIs with Django, incorporating OAuth and WebSockets for real-time communication.",
        "Built scalable microservices and APIs with unit testing and debugging.",
        "Enhanced performance with MongoDB and Redis caching.",
        "Automated CI/CD processes using Jenkins and Ansible for Linux-based services."
      ]
    },
    {
      position: "Mobile Application Developer (Intern)",
      company: "Snarweb, Sfity India LLP, Nioeye Solutions Pvt Limited",
      period: "Jul 2020 - Nov 2020",
      description: [
        "Utilized the BLoC pattern and Equatable for efficient state management in mobile applications, enabling seamless UI interactions.",
        "Integrated authentication and payment gateways in an e-commerce application using third-party APIs, ensuring secure transactions.",
        "Implemented push notifications for a mobile application, controlled via an admin panel as a CRM (Customer Relationship Manager).",
        "Enhanced the slot booking system by leveraging real-time data and date-time utilities for accurate availability tracking.",
        "Developed an e-commerce application, incorporating Google Maps API for custom markers, location tracking, and map animations for an enhanced user experience.",
        "Leveraged Dart packages like pagination for lazy loading, and applied animations, including Hero and shimmer effects, for smooth navigation and data presentation."
      ]
    },
    {
      position: "Technical Assistant (Intern)",
      company: "NCR Corporation India Pvt Limited",
      period: "Feb 2020 - Mar 2020",
      description: [
        "Managed databases and monitored the flow of cheques for Reserve Bank of India in Cheque Truncating System.",
        "Performed daily SQL queries for monitoring and data management."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-period">{exp.period}</p>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
