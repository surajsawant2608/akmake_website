import React from 'react';
import ProductCard from '../../components/ProductCard';
import lineropenermachine from '../../styles/images/product_img/lineropenermachine.png';

const LinerOpenerPage = () => {
  const specs = [
    ['Machine Type', 'Semi-Automatic'],
    ['Power Supply', '415V, 50Hz (Three Phase)'],
    ['Motor Power', '3 HP'],
    ['Production Capacity', '2 Bags Per Minute'],
    ['Liner Size', '30 cm (Minimum)'],
    ['Air Consumption', '6 Bar'],
    ['Compressed Air Pressure', '6-8 Bar'],
    ['Control System', 'Manual Operating System'],
    ['Safety Features', 'Emergency Stop'],
  ];

  const features = [
    'Optimized performance with minimal operator intervention',
    'Efficient and continuous operation with 3 HP motor',
    'Handles 2 bags per minute – ideal for moderate-scale operations',
    'Minimum liner size of 30 cm offers versatility',
    'Compressed air operation ensures consistent output',
    'Simple manual control for ease of use',
    'Emergency stop for enhanced operator safety',
    'Reliable and cost-effective industrial solution',
  ];

  const applications = `Our Semi-Automatic Liner Opener Machine is designed for efficient and safe opening of liners in industrial packaging processes. With its reliable 3 HP motor and consistent air pressure operation, it is an ideal solution for moderate production environments.`;

  const contactCta = `Contact us today to learn how this machine can improve your liner-opening workflow and operator safety.`;

  return (
    <ProductCard
      title="Liner Opener Machine"
      subheader="Semi-Automatic system for efficient and safe liner opening"
      imageUrl={lineropenermachine}
      specs={specs}
      features={features}
      applications={applications}
      contactCta={contactCta}
    />
  );
};

export default LinerOpenerPage;
