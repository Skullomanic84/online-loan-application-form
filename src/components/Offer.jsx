import ProductCard from "@/constant/Card";
import React from 'react'

const Offer = () => {
   const products = [
     {
       id: 1,
       amountOne: "R250 000.00",
       repayment: "Repayment terms",
       installment: "R7 927.00 pm",
       subtitle: "Loan Amount",
       featureone: "72 months",
       featuretwo: "Loan without proposed credit-life",
       buttonText: "Accept this offer",
     },
     {
       id: 2,
       amountOne: "R250 000.00",
       repayment: "Repayment terms",
       installment: "R8 126.00 pm",
       subtitle: "Loan Amount",
       featureone: "72 months",
       featuretwo: "Loan without proposed credit-life",
       buttonText: "Accept this offer",
     },
   ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Offer