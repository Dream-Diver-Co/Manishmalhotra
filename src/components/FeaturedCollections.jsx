import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './FeaturedCollections.css';

const FeaturedCollections = () => {
  const collections = [
    { title: 'Collection 1', image: 'path_to_image_1.jpg', link: '#' },
    { title: 'Collection 2', image: 'path_to_image_2.jpg', link: '#' },
    { title: 'Collection 3', image: 'path_to_image_3.jpg', link: '#' },
  ];

  return (
    <div className="featured-collections">
      <h2>Featured Collections</h2>
      <div className="card-deck">
        {collections.map((collection, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={collection.image} />
            <Card.Body>
              <Card.Title>{collection.title}</Card.Title>
              <Button variant="primary" href={collection.link}>View Collection</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
