import React, { useState } from 'react';
import './App.css';

// Task 1: Reusable Component with Props
function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <span className="category-badge">{category}</span>
      <h3>{title}</h3>
      <p className="price">${price}</p>
    </div>
  );
}

// Task 2: State & Event Handling (useState)
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-container">
      <button className="like-btn" onClick={handleLike}>
        ❤️ Like ({likes})
      </button>
    </div>
  );
}

// Main App Component
export default function App() {
  const students = [
    { id: 1, name: "Ali", score: 85 },
    { id: 2, name: "Sara", score: 42 },
    { id: 3, name: "Usman", score: 65 },
    { id: 4, name: "Zainab", score: 38 },
  ];

  return (
    <div className="app-container">
      <h1>React Practical Tasks</h1>

      {/* Task 1 */}
      <section className="section">
        <h2>Task 1: Product Cards (Props)</h2>
        <div className="products-grid">
          <ProductCard 
            title="Wireless Headphones" 
            price={99.99} 
            category="Electronics" 
          />
          <ProductCard 
            title="Running Shoes" 
            price={59.50} 
            category="Footwear" 
          />
        </div>
      </section>

      {/* Task 2 */}
      <section className="section">
        <h2>Task 2: Interactive Counter (useState)</h2>
        <LikeButton />
      </section>

      {/* Task 3 */}
      <section className="section">
        <h2>Task 3: Student Results (List & Conditional)</h2>
        <div className="student-list">
          {students.map((student) => (
            <div key={student.id} className="student-card">
              <span className="student-name">{student.name}</span>
              <span className="student-score">Score: {student.score}</span>
              <span 
                className={`status-badge ${student.score >= 50 ? 'pass' : 'fail'}`}
              >
                {student.score >= 50 ? 'Pass' : 'Fail'}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}