import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" name="Youdora Dora" category="LEBARAN" />
      <ReviewItems />
    </div>
      
  );
}

function ReviewItems() {
  const users = [
    {
      "id" : 1,
      "name" : "Masayoshi",
      "review" : "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren",
    },
    {
      "id" : 2,
      "name" : "Imran",
      "review" : "Mantaplah pokoknya",
    },
    {
      "id" : 3,
      "name" : "Said",
      "review" : "Jelek Ki",
    },
    {
      "id" : 4,
      "name" : "Hari",
      "review" : "Hancurkan saja",
    }
  ];

  const listReview = users.map((itemReview) => 
    <div className="Item">
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-guy-614810.jpg&fm=jpg" />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );

  return(
    <div className="Review-box">
    <h2>Reviews</h2>
    {listReview}
    </div>
  );

}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" />
    </div>
  );
}

function CheckDiscount(props){
  const {isDiscount} = props;
  if(isDiscount =="yes"){
    return(
      <p>Diskon 50% Off</p>
    );
  }
  else if(isDiscount =="coming"){
    return(
      <p>Akan Ada Diskon</p>
    );
  }
  else {
    return(
      <p>Belum Ada Diskon</p>
    );
  }
}


function ProdukInfo(props) {
  const {category, name, isDiscount} = props;
  const benefits = ["Tidak kusut kena air", "Bahan lebih halus", "Tidak gerah"];
  const listItems= benefits.map((benefitItem) =>
    <li>{benefitItem}</li>
  );
  return(
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price"> IDR 73.309.399</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum asperiores, tempora repellat voluptatem sunt, officia quasi vitae velit voluptate sit nulla. Autem tenetur sint pariatur accusantium rerum quibusdam. Minus.
        </p>
        <ul>
          {listItems}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}


function TambahCart(e) {
  return console.log("Membeli " + e);
}

export default App;
