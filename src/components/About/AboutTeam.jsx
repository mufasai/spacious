import React from 'react';
import './AboutTeam.css';

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Co-Founder & CEO",
    image: "/about/alex.png"
  },
  {
    name: "Sophia Chen",
    role: "Head of Product",
    image: "/about/sophia.png"
  },
  {
    name: "Daniel Reyes",
    role: "Lead AI Engineer",
    image: "/about/daniel.png"
  },
  {
    name: "Emma Patel",
    role: "Head of Customer Success",
    image: "/about/emma.png"
  }
];

const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="about-team-inner">
        <div className="team-header">
          <div className="team-badge">
            <span className="badge-icon">👨‍💼</span>
            <span className="badge-text">TEAMS</span>
          </div>
          <h2 className="team-heading">Meet our team</h2>
          <p className="team-subtext">Minds behind team of seasoned CRM experts.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image-wrapper">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
