import React from "react";
import ProductCard from "../../components/ProductCard";
export default function Products() {
  return (
    <ProductCard
  title="JUMBO BAG FABRIC CUTTING MACHINE – 2200 FCM WITH BAFFLE PUNCHING SYSTEM"
  subheader={
    <>
      <strong>Precision | Power | Performance</strong><br />
      Our 2200mm FIBC fabric cutting machine combines precision, speed, and durability to deliver high-quality cuts and baffle punching for bulk bag manufacturing.
    </>
  }
  specs={[
    ['Machine Type', 'Jumbo Bag Fabric Cutting Machine – 2200 FCM With Baffle Punching System'],
    ['Cutting Width', '2200 mm'],
    ['Cutting Types & Sizes', 'I-Cut: 500, 600, 650 mm | O-Cut: 300, 350, 400, 450, 500 mm | X-Cut: 300, 350, 400, 450 mm'],
    ['Cutting Speed', '17–20 cuts/min'],
    ['Length Accuracy', '±10 mm (200 mm - 3500 mm)'],
    ['Control System', 'PLC Controlled (Schneider/Fuji)'],
    ['Drive System', 'Servo Motor with Auto Tension Control'],
    ['Cutting Mechanism', 'Hot Knife Cutting & Sealing'],
    ['Welding Type', 'Ultrasonic Welding'],
    ['Baffle Punching', '2 sets (1 set = 5 nos)'],
    ['Automation', 'Web Guide Hydraulic System, EPC'],
    ['Additional Features', 'Automatic Endage Folding, Perforation, Marking']
  ]}
  features={[
    'Automatic Endage Folding for precise folding',
    'Ultrasonic Welding for seamless, durable joints',
    'Hydraulic Web Guide with EPC for straight alignment',
    'Servo-driven Auto Roll Feeding with tension control',
    'Hot Knife Cutting for clean, sealed edges',
    'PLC Controlled System with fabric presets',
    'Accumulator System for tension accuracy',
    'Emergency stop, blade guards & warning systems',
    'Low power consumption for 24x7 operation'
  ]}
  applications="Cutting coated and uncoated FIBC/Jumbo Bag fabrics. Producing U-panel, circular, and 4-panel bag styles. Cross-corner loops and side seam loop manufacturing. Pre-cutting for liner-integrated and baffled bags."
  contactCta="Ready to enhance your FIBC production with the 2200 FCM Baffle Punching System?"
/>

  );
}