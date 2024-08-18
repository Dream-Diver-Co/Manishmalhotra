import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CelebrityShowcase.css';

const CelebrityShowcase = () => {
  const celebrities = [
    { name: 'Celebrity 1', image: 'path_to_image_1.jpg', link: '#' },
    { name: 'Celebrity 2', image: 'path_to_image_2.jpg', link: '#' },
    { name: 'Celebrity 3', image: 'path_to_image_3.jpg', link: '#' },
  ];

  return (
    <div className="celebrity-showcase">
      <h2>Celebrity Showcase</h2>
      <div className="card-deck">
        {celebrities.map((celebrity, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={celebrity.image} />
            <Card.Body>
              <Card.Title>{celebrity.name}</Card.Title>
              <Button variant="primary" href={celebrity.link}>View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CelebrityShowcase;
