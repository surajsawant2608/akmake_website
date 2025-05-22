import React from "react";
import ProductCard from "../../components/ProductCard";
export default function Products() {
  return (
    <ProductCard
      title="JUMBO BAG FABRIC CUTTING MACHINE – 1400 FCM"
      subheader={
        <>
          <strong>Precision | Power | Performance</strong><br />
          Designed for FIBC bag manufacturers, this machine delivers high-precision cutting for PP/HDPE woven sack fabrics – tubular or flat, laminated or unlaminated.
        </>
      }
      specs={[
        ['Machine Type', 'Woven Sack FIBC Bag Cutting Machine'],
        ['Max. Fabric Width', '1400 mm'],
        ['Fabric Types Supported', 'PP/HDPE – Tubular/Flat, Laminated/Unlaminated'],
        ['Max. Fabric Roll Diameter', '2000 mm'],
        ['Max. Fabric Roll Weight', '1000 kg'],
        ['Cutting Length Range', '200 mm to 35,000 mm'],
        ['Production Speed', 'Up to 22 cuts/min (without Spout), 17 cuts/min (with Spout/Cross)'],
        ['Cutting Accuracy', '±10 mm'],
        ['Machine Speed', 'Up to 70 meters/min'],
        ['Power Requirement', 'Air Compressor – 3 HP (customer end)']
      ]}
      features={[
        'Hot Knife Cutting for clean, sealed edges',
        'Servo Motor Control for precise, repeatable cutting',
        'PLC-Controlled Interface (Fuji/Schneider) with preset storage',
        '"O" & "X" Die Cuts for various profile requirements',
        'Hydraulic/EPC Web Guide System for aligned fabric unwinding',
        'Pneumatic Hand for fabric roll lifting',
        'Compact and space-efficient design',
        'Integrated safety features: blade guards, emergency stops'
      ]}
      optionalFeatures={[
        'Endage Folding & Ultrasonic Stitching',
        'Hot Baffle Punching',
        '"I" Cut & "U" Cut',
        'Cold Cutter for Laminated Fabric'
      ]}
      applications="Cutting standard or coated/uncoated woven fabrics for FIBC bags. Supports U-panel, circular, and 4-panel bag production. Ideal for bags with cross-corner loops, side-seam loops, or integrated liners."
      contactCta="Ready to enhance your FIBC production with the 1400 FCM System?"
    />
  );
}
