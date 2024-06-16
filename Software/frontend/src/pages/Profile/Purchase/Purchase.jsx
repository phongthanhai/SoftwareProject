import React from 'react';
import PurchasedProduct from './Product Components/PurchasedProduct';

function Purchase() {
  const purchases = [
    {

      name: 'Nike 4 Protro Philly (2024)',
      price: '$190',
      size: '42',
      gender: 'Male',
      date: '13/4/2023',
      img: './Images/shoes1.png',
    },
    {
      name: 'Nike Kobe 6 Protro Italian Camo (2024)',
      price: '$190',
      size: '42',
      gender: 'Male',
      date: '13/4/2023',
      img: './Images/shoes2.png',
    },
    {
      name: 'Jordan 5 Retro SE Sail',
      price: '$210',
      size: '42',
      gender: 'Male',
      date: '13/4/2023',
      img: 'link-to-image3',
    },
    {
      name: 'Nike Kobe 8 Protro Venice Beach (2024)',
      price: '$190',
      size: '42',
      gender: 'Male',
      date: '13/4/2023',
      img: 'link-to-image4',
    },
  ];
  return (
    <div className="purchases">
      <div>
        <img src={"../Images/shoes2.png"}/>
      </div>
      {purchases.map((purchase) =>(
        <PurchasedProduct product={purchase} />
      ))}
      
    </div>
  );
}

export default Purchase;
