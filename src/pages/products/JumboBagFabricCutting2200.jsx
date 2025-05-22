import React from "react";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  return (
    <ProductCard
  title="JUMBO BAG FABRIC CUTTING MACHINE – 2200 FCM"
  subheader={
    <>
      <strong>Precision | Performance | Power</strong><br />
      Our 2200mm FIBC fabric cutting machine is a high-performance, specialized equipment designed for precision cutting of woven polypropylene (PP) fabrics. It caters to the needs of FIBC bag manufacturers.
    </>
  }
  specs={[
    ['Machine Type', 'Woven Sack FIBC Bag Cutting Machine'],
    ['Max. Fabric Width', '2200 mm'],
    ['Max. Unwinding Width', '2200 mm'],
    ['Fabric Type', 'PP/HDPE Tubular/Flat, Laminated/Unlaminated'],
    ['Max. Fabric Roll Diameter', '2000 mm'],
    ['Max. Fabric Roll Weight', '1000 kg'],
    ['Cutting Length', '200 mm to 35,000 mm'],
    ['Production Speed (1 Mtr Length)', 'Max. 20 cuts (without Spout), Max. 17 cuts (with Spout)'],
    ['Cutting Accuracy', '±10 mm'],
    ['Machine Speed', '70 meters/min'],
    ['Power Requirement', '15 kW'],
    ['Air Pressure', '7 Bar'],
    ['Air Compressor', '3 HP (Customer Scope)'],
    ['Main Servo Motor', '3 kW'],
    ['Hitter of Cutting Nip', '4 kW'],
    ['Machine Control', 'PLC & Servo (Fuji/Schneider)'],
    ['Tension Control', 'Accumulator']
  ]}
  features={[
    '2200mm Cutting Width – Handles various bag sizes including U-panel, circular, and 4-panel bags',
    'Hot Knife Cutting – Cuts and seals edges to prevent fraying',
    'High-Speed Operation – Up to 17–20 cuts per minute',
    'PLC-Controlled System – User-friendly interface with preset storage',
    'Servo Motor Drive – Ensures precise cuts and minimizes material wastage',
    'Auto Roll Feeding – Smooth unwinding with tension control',
    'Edge Position Control (EPC) – Ensures aligned cutting',
    'Perforation & Marking – Optional features for folding and branding',
    'Length Accuracy – Precision of ±10mm, cutting lengths from 200mm to 35,000mm',
    'Safety Features – Emergency stops and blade guards',
    'Energy Efficient & Compact Design – Reduces power consumption and integrates easily into production setups'
  ]}
  optionalFeatures={[
    'Endage Folding',
    'Ultrasonic Stitching',
    'Hot Baffle Punching',
    '"I" & "U" Cuts'
  ]}
  includedFeatures={[
    'Hot Plane Cutter',
    'Servo Precision Cutting',
    '"X" & "O" Cut Die',
    'Web Guide Unit'
  ]}
  applications="Cutting fabrics for standard, coated, or uncoated FIBC bags. Suitable for manufacturing cross-corner loops, side-seam loops, or liner-integrated bags."
  contactCta="Ready to boost your FIBC production with the 2200 FCM System?"
/>

  );
}
