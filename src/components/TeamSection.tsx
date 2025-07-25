import React, { useState } from 'react';
import './TeamSection.css'; // We'll create this CSS file next

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

const TeamSection: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialLinks: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialLinks: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialLinks: {
        linkedin: '#',
        dribbble: '#'
      }
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialLinks: {
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the talented people behind our success</p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="team-member-card"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image" 
                />
                {hoveredMember === member.id && (
                  <div className="social-links">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className="social-link">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} className="social-link">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {member.socialLinks.dribbble && (
                      <a href={member.socialLinks.dribbble} className="social-link">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;