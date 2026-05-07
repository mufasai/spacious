import React, { useEffect } from 'react';
import ProductHero from '../components/Product/ProductHero';
import Intelligence from '../components/Product/Intelligence';
import CustomerContext from '../components/Product/CustomerContext';
import Features from '../components/Features/Features';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-page">
      <ProductHero />
      <Intelligence />
      <CustomerContext />
      <CTA />
    </div>
  );
};

export default ProductPage;
