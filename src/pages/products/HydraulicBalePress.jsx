import React from "react";
import ProductCard from "../../components/ProductCard";
export default function Products() {
  return (
    <ProductCard
  title="HYDRAULIC BALE PRESS"
  subheader={
    <>
      <strong>Heavy-Duty Four-Pillar Hydraulic Press for Baling</strong><br />
      The Hydraulic Bale Press is designed to efficiently compress and pack finished bags for streamlined storage and shipment. Built with robust materials and a powerful hydraulic system, this machine ensures consistent performance and operational ease in industrial environments.
    </>
  }
  specs={[
    ['Type', 'Four-Pillar Hydraulic Press'],
    ['Frame', 'Three sides enclosed with one openable door & lever mechanism'],
    ['Cabin Dimensions', '1200 x 1000 x 2300 mm (L x W x H)'],
    ['Space Requirement', '4100 x 2800 x 5200 mm'],
    ['Operating Panel', 'Semi-Automatic, Push Button, Electrical Panel'],
    ['Electrical Power Required', '440V A/C, 3 Phase, 50 Hz'],
    ['Power Pack Motor', '25+3 HP A/C Motor (Crompton/Havells)'],
    ['Press Capacity', '120 Tons (Max)'],
    ['Operating Pressure', 'Max 180 Bar'],
    ['Hydraulic Cylinder', '300 mm Bore, 160 mm Ram Stroke'],
    ['Hydraulic Valve', 'Yuken Make'],
    ['Bed Size', '1200 x 1000 mm'],
    ['Stroke Length', '1800 mm'],
    ['Stroke Speed', 'Max 3 meters/min (Adjustable)'],
    ['Daylight Gap', '2000 mm'],
    ['Bale Size', '1200 x 1000 x 1100/1200 mm (Customizable)'],
    ['Pusher', '1 Pusher + 2 Hard Chrome Guide Rods (Stroke: 1100 mm)'],
    ['Oil Tank Capacity', '550 Liters'],
    ['Oil Type', 'Hydraulic Oil – Grade 68'],
    ['Number of Cylinders', '1 Main Cylinder']
  ]}
  features={[
    'Sturdy Construction – Heavy-duty top & bottom beds built for long-term pressure tolerance',
    'Stainless Steel Cladding – On all bag seating areas for hygiene, durability, and easy cleaning',
    'Cast Nylon Solid Blocks – For smooth motion on both pressing and bottom beds',
    'Heavy-Duty Power Pack – Crompton/Havells motor ensures high efficiency and reliability',
    'Hydraulic Bale Ejection – Smooth and safe bale handling with minimal manual effort',
    'Adjustable Stroke Speed – Control speed as per material type and volume',
    'Customizable Bale Sizes – Fit standard Euro pallets or tailored to specific storage needs',
    'Optimized Space Usage – Compact bale dimensions make warehouse logistics more efficient',
    'User-Friendly Panel – Semi-automatic interface with electrical push button control'
  ]}
  optionalFeatures={[
    'Digital pressure monitoring system',
    'Auto bale strapping setup',
    'Remote diagnostic module'
  ]}
  includedFeatures={[
    'Yuken hydraulic valve setup',
    '25+3 HP power pack (Crompton/Havells)',
    'Three-side enclosed frame with accessible front door',
    'Cast nylon guide blocks',
    'Adjustable stroke and bale size'
  ]}
  applications="Ideal for compacting finished plastic bags, liners, and similar packaging materials into transport-friendly bales. Widely used in industrial warehousing, logistics, and manufacturing units for efficient packaging and space optimization."
  contactCta="Need efficient bale packing for your finished goods? Contact us for a customized solution."
/>


    );
}
