import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Data: Products with their specific ingredients mapped
  const productList = [
    {
      id: 1,
      name: "Neelyadi Oil",
      sinhalaName: "නීල්‍යාදි තෙල්",
      description: "Traditional herbal oil for hair growth and head cooling.",
      category: "Hair Care",
      price: "LKR 850",
      ingredients: ["Blue Lotus (Nil Manel)", "Savandara Roots", "Sesame Oil", "Keekirindiya", "Amla (Nelli)"] 
    },
    {
      id: 2,
      name: "Arthritis Relief Oil",
      sinhalaName: "ආතරයිටීස් වලට තෙල්",
      description: "Potent formula for reducing joint swelling and arthritis pain.",
      category: "Pain Relief",
      price: "LKR 1,200",
      ingredients: ["Castor (Edaru)", "Nika", "Turmeric (Kaha)", "Ketakela", "Garlic (Sudu Lunu)", "Mustard Seeds (Aba)"]
    },
    {
      id: 3,
      name: "Herbal Joint Oil",
      sinhalaName: "හන්දි තෙල්",
      description: "General relief for joint pains, muscle aches, and stiffness.",
      category: "Pain Relief",
      price: "LKR 950",
      ingredients: ["Wel Penala", "Wild Ginger (Wal Inguru)", "Black Pepper", "Clove (Karabu Nati)", "Nutmeg (Sadikka)"]
    },
    {
      id: 4,
      name: "Sinusitis Oil",
      sinhalaName: "පීනස් තෙල්",
      description: "Relieves catarrh, headaches, and nasal congestion.",
      category: "Wellness",
      price: "LKR 700",
      ingredients: ["Black Cumin (Kalu Duru)", "Red Onion", "Ginger (Inguru)", "Cinnamon", "Pepper"]
    },
    {
      id: 5,
      name: "Pain Relief Balm",
      sinhalaName: "වේදනානාශක බාම්",
      description: "Fast-acting analgesic balm for instant muscle relief.",
      category: "Balms",
      price: "LKR 450",
      ingredients: ["Menthol", "Eucalyptus", "Clove Oil", "Citronella", "Cinnamon Oil"]
    },
    {
      id: 6,
      name: "Herbal Powders (Choorna)",
      sinhalaName: "චූර්න සැකසීම",
      description: "Custom prepared herbal powders for various treatments.",
      category: "Supplements",
      price: "Varies",
      ingredients: ["Aralu", "Bulu", "Nelli", "Senna (Nilawariya)", "Rasakinda"]
    }
  ];

  // Function to open the popup
  const handleOpenIngredients = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the popup
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <header className="products-header">
        <h1>Ayurvedic Wellness</h1>
        <p>100% Natural remedies crafted with traditional Sri Lankan herbs.</p>
      </header>

      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card-image-placeholder">
              <span>IMG</span>
            </div>
            <div className="card-content">
              <span className="category-tag">{product.category}</span>
              <h3>{product.name}</h3>
              <h4 className="sinhala-title">{product.sinhalaName}</h4>
              <p>{product.description}</p>
              
              <div className="card-footer">
                <span className="price">{product.price}</span>
                <div className="button-group">
                  <button 
                    className="outline-btn"
                    onClick={() => handleOpenIngredients(product)}
                  >
                    Ingredients
                  </button>
                  <button className="add-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={handleCloseModal}>&times;</button>
            
            <h2>{selectedProduct.name}</h2>
            <h4 className="modal-sinhala-subtitle">{selectedProduct.sinhalaName}</h4>
            
            <div className="modal-body">
              <p>Contains the following natural ingredients:</p>
              <ul className="ingredient-list">
                {selectedProduct.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
            
            <button className="modal-action-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;