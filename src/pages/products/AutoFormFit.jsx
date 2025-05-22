import React from "react";
import ProductCard from "../../components/ProductCard";
export default function Products() {
  return (
    <ProductCard
    title="AUTO FORM FIT MACHINE"
    subheader={
      <>
        <strong>Precision Liner Sealing | Bottle Shape Liner | Industrial Grade Automation</strong><br />
        The Auto Form Fit Machine (PE Bottle Shape Liner Sealing Machine) is engineered for high-precision sealing of gusseted and tubular liners. With its advanced servo system and intuitive touchscreen controls, it delivers consistency, efficiency, and reliability for industrial liner production.
      </>
    }
    specs={[
      ['Material Processed', 'Gusseted / Tubular Liner (Lay Flat)'],
      ['Production Capacity', '2 Pieces/Minute'],
      ['Liner Width', 'Min. 60 cm | Max. 140 cm'],
      ['Film Length', 'Adjustable (500 mm - 3500 mm)'],
      ['Power Supply', '415V, 3 Phase, 50 Hz'],
      ['Voltage', '415V / 50Hz'],
      ['MCB for Supply', '63 Amps'],
      ['Earthing', 'Separate Earthing & Fully Loaded Neutral Wire'],
      ['Heaters', '1700W Single Phase HD Heater (7 Units)'],
      ['Air Supply', '12 Bars, 100 Ltr/Min (Customer Scope)'],
      ['Film Roll Lifting', '650 Kg Max. with Web Aligner'],
      ['Cooling System', 'Yes'],
      ['PLC System', 'Programmable PLC'],
      ['HMI', '10” Touchscreen'],
      ['Servo Motor', '2KW (Fuji/Schneider)'],
      ['A/C Drives', '5 Nos.'],
      ['Cutting Unit', 'Length Cutting Unit'],
      ['Power Consumption', '1700W (7 Heaters) + 2KW Servo Motor + Multiple AC Motors']
    ]}
    features={[
      'High Efficiency – 2 pieces per minute for high-volume liner production',
      'Adjustable Liner Sizes – Width from 60 cm to 140 cm, Length from 500 mm to 3500 mm',
      'Precision Sealing – Supports side, bottom, and spout sealing for various liner types',
      'Energy Efficient – 2KW servo motor & seven 1700W HD heaters for optimal heat and power usage',
      'Advanced Control – Programmable PLC with 10” HMI touchscreen for intuitive operation',
      'Robust Build – Aluminum dies and industrial-grade sealing mechanisms for durability',
      'Customizable Output – Adjustable film lengths and sealing configurations to suit diverse applications',
      'Air Supply Integration – Requires customer-supplied 12 bar air compressor (100 L/min)',
      'User-Friendly Interface – Real-time monitoring, easy troubleshooting, and preset memory',
      'Warranty – 1 Year coverage for PLC, HMI, Servo Motor, Drives, and Switch Gear'
    ]}
    optionalFeatures={[
      'Custom sealing flange configurations',
      'Auto reel changeover system',
      'Integrated printer/labeler (on request)'
    ]}
    includedFeatures={[
      'Side Sealing: 2200 mm length | 30–150 mm flange distance',
      'Spout Sealing: 1000 mm length | 250–650 mm diameter',
      'Bottom Sealing: 1600 mm length | 10 mm width',
      'Length Cutting Unit',
      '10” Touchscreen HMI',
      'Servo Motor & Web Aligner'
    ]}
    applications="Ideal for sealing PE bottle-shaped liners in bulk packaging industries. Perfect for form-fit liner manufacturing in chemical, food, and pharma sectors where hygiene and precision are critical."
    contactCta="Looking to automate your liner sealing process? Connect with us to learn more!"
  />


  );
}
