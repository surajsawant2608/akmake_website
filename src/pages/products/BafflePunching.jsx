import React from "react";
import ProductCard from "../../components/ProductCard";

export default function Products() {
    return (
        <ProductCard
        title="BAFFLE PUNCHING MACHINE"
        subheader={
          <>
            <strong>Precision Hole Punching for FIBC Internal Baffles</strong><br />
            This high-performance Baffle Punching Machine is engineered to deliver accurate and consistent punching of baffles used in Flexible Intermediate Bulk Containers (FIBC). It enhances bag stability and material flow efficiency during use.
          </>
        }
        specs={[
          ['Max. Width of Unwinding Cloth', '750 mm'],
          ['Tension Control', 'Accumulator'],
          ['Machine Control', 'PLC & Servo Control (Fuji/Schneider)'],
          ['Air Pressure Requirement', '7 Bar'],
          ['Main Servo Motor', '1 kW'],
          ['Hitter of Cutting Nip', '2.5 kW'],
          ['Connection Load', '10 kW'],
          ['Air Compressor Required', '3 HP (Customer Supplied)']
        ]}
        features={[
          'High Precision – Designed for accurate hole punching in FIBC baffles',
          'PLC & Servo Controlled – Ensures consistent performance and minimal human error',
          'Durable Construction – Industrial-grade components for long life and low maintenance',
          'Efficient Tension Control – Accumulator system maintains steady tension throughout operation',
          'Fast & Reliable – Supports high-speed operations with a 2.5 kW cutting unit',
          'Compact Footprint – Ideal for integration into existing FIBC production lines',
          'Energy Efficient – Total load optimized at 10 kW'
        ]}
        includedFeatures={[
          '1 kW main servo motor (Fuji/Schneider)',
          '2.5 kW hitter cutting system',
          'PLC and touchscreen HMI control',
          'Accumulator-based cloth tensioning',
          'Robust frame for stable operations'
        ]}
        optionalFeatures={[
          'Auto unwinder module',
          'Hole pattern customization settings',
          'Remote fault diagnosis interface'
        ]}
        applications="Used for punching holes into baffles of FIBC (Flexible Intermediate Bulk Containers), improving material distribution and load stability in bulk packaging solutions."
        contactCta="Want better performance in your bulk bags? Contact us to automate baffle punching with precision."
      />
       
    );
}