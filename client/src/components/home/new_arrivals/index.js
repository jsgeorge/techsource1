import React from 'react';

const NewArrivals = () => {
    const imgLoc="/images";
    const category = "phones";
    const product = "Google Pixel 2";
    const imgPhone = "google_pixel_2.png";
    return (
         <div className="container">
        <div className="card_block">
            <h3 className="title">New Arrivals</h3>
          <div class="card_items_wrapper">
       <div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
         <tag className="name">Product</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>

 <div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
         <tag className="name">Product</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>

<div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
        <tag className="name">Product</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>
        <div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
         <tag className="name">Product</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>
</div>
        </div>
        </div>
    );
};

export default NewArrivals;