import React from 'react';
import './index.css';

const categories = [
  { title: 'Society', image: 'images/categories1.jpg' },
  { title: 'Culture', image: 'images/categories1.jpg' },
  { title: 'Education', image: 'images/categories1.jpg' },
  { title: 'Arts', image: 'images/categories1.jpg' },
  { title: 'Business', image: 'images/categories2.jpg' },
  { title: 'Spirituality',image: 'images/categories2.jpg' },
  { title: 'Religion', image: 'images/categories2.jpg' },
  { title: 'Music', image: 'images/categories2.jpg' },
  { title: 'Self-Care', image: 'images/categories4.jpg' },
  { title: 'Health', image: 'images/categories4.jpg' },
  { title: 'Self-Help', image: 'images/categories4.jpg' },
  { title: 'Politics', image: 'images/categories4.jpg' },
  { title: 'Sports', image: 'images/categories.jpg' },
  { title: 'Books', image: 'images/categories.jpg' },
  { title: 'Careers', image: 'images/categories.jpg' },
  { title: 'Entertainment', image: 'images/categories.jpg' },
];

export default function ByCategories() {
  return (
    <div className="by-categories">
      <h3><b>Categories 🖤</b></h3><br/><br/>
      <div className="categories-wrapper">
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.title} className="category-image" />
              <div className="category-content">
                <h5><b>{category.title}</b></h5><br/>
                <a href="#/ByCategory/ViewEpisodes"><b>View ALL</b></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}