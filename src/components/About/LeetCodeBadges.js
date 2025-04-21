// LeetCodeBadges.jsx

import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './LeetCodeBadges.css'; // Import the CSS file

function LeetCodeBadges() {
  // Static data for badges
  const badges = [
    
    {
      id: "4930886",
      displayName: "100 Days Badge 2024",
      icon: "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png",
      creationDate: "2024-09-14"
    },
    {
      id: "4457936",
      displayName: "50 Days Badge 2024",
      icon: "https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png",
      creationDate: "2024-07-22"
    },
    {
      id: "5869760",
      displayName: "Dec LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-12.png",
      creationDate: "2024-12-31"
    },
    {
      id: "5658070",
      displayName: "Nov LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-11.png",
      creationDate: "2024-12-03"
    },
    {
      id: "5317875",
      displayName: "Oct LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-10.png",
      creationDate: "2024-10-31"
    },
    {
      id: "5050062",
      displayName: "Sep LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-9.png",
      creationDate: "2024-10-01"
    },
    {
      id: "4847874",
      displayName: "Aug LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-8.png",
      creationDate: "2024-09-01"
    },
    {
      id: "4617122",
      displayName: "Jun LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-6.png",
      creationDate: "2024-08-01"
    },
    {
      id: "4537171",
      displayName: "Jul LeetCoding Challenge",
      icon: "https://leetcode.com/static/images/badges/dcc-2024-7.png",
      creationDate: "2024-07-31"
    }
  ];

  return (
    <Container className="badges-container">
      <Row className="justify-content-center">
        <h1 className="project-heading">
          My <strong className="purple">Badges</strong> on LeetCode
        </h1>

        {badges.map((badge) => (
          <Col key={badge.id} lg={2} md={4} sm={6} xs={12}>
            <Card className="text-center badge-card">
              <div className="image-cropper">
                <Card.Img variant="top" src={badge.icon} alt={badge.displayName} />
              </div>
              {/* <Card.Body>
                <Card.Title className="badge-title">{badge.displayName}</Card.Title>
                <Card.Text className="badge-date">Earned on: {badge.creationDate}</Card.Text>
              </Card.Body> */}
            </Card>
          </Col>
        ))}

      </Row>
    </Container>
  );
}

export default LeetCodeBadges;