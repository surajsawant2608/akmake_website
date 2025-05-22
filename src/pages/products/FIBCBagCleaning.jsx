import React from "react";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  return (
    <ProductCard
  title="FIBC BAG CLEANING MACHINE"
  subheader={
    <>
      <strong>Industrial-Grade Cleaning for FIBC Bags</strong><br />
      Designed for efficient, hygienic, and precise cleaning of FIBC bags, this machine combines power, automation, and safety to streamline your bag reuse and preparation process.
    </>
  }
  specs={[
    ['Machine Dimensions', 'L: 1700 mm | W: 2200 mm | H (Closed): 3500 mm | H (Open): 5000 mm'],
    ['Max Bag Body Height', '2300 mm'],
    ['Top Hood Lift System', 'Electric, 1.5 HP Brake Motor'],
    ['Air Blower', '3000 CFM with 12.5 HP Motor'],
    ['Visibility System', '2 HD Cameras (Top & Bottom), LED Monitoring Display'],
    ['Air Filter', 'SS 304, 50 Micron (Suction & Blow)'],
    ['Top & Bottom Hood Material', 'SS 202'],
    ['Control Panel', 'Star & Delta, 7-Color HMI with PLC'],
    ['Air Pressure Required', '6–7 Bar (Zero Earthing)'],
    ['Control Valves', 'Butterfly Type, Rotary Actuator'],
    ['Power Supply', 'Total 14 HP | 415V | 50 Hz | 3 Phase'],
    ['Vibrating System', 'With Vibrating Motor'],
    ['Required Manpower', '2 Workers'],
    ['Warranty', '1 Year (PLC & Motor)']
  ]}
  features={[
    'Motorized Top Hood Lifting for easy bag loading/unloading',
    '3000 CFM High-Performance Air Blower',
    'Stainless Steel Air Filtration – 50 Micron',
    'Dual HD Camera System for real-time inspection',
    'Durable SS Construction (SS202/SS304)',
    '7-Color HMI with Programmable PLC Control',
    'Energy-Efficient Motor and Blower Design',
    'Rotary-Operated Butterfly Valves',
    'Built-in Vibrating System for thorough cleaning'
  ]}
  includedFeatures={[
    'Electric lifting system for hood adjustment',
    'HD camera visibility from top and bottom',
    'Vibration-assisted cleaning',
    'Dual-mode air flow – suction and blow',
    'Full PLC-based operation and monitoring'
  ]}
  optionalFeatures={[
    'Auto bag infeed roller system',
    'Remote maintenance and fault monitoring',
    'Customized nozzle arrangements for special applications'
  ]}
  applications="Ideal for food-grade and non-food-grade FIBC bag cleaning in industrial settings. Enhances hygiene, efficiency, and reduces contamination risks for bag reuse."
  contactCta="Want a reliable, low-maintenance solution for FIBC bag cleaning? Let’s talk."
/>

  
  );
}
