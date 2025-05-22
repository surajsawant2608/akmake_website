// import React from "react";
// export default function Products() {
//     return (
//       <section className="w-screen pt-[80px] sm:pt-[90px] md:pt-[130px] lg:pt-[155px] pb-[140px] overflow-hidden bg-white py-8 sm:py-16">
//   <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
//     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:max-w-none md:grid-cols-1 items-center">
      
//       <div className="md:pr-8">
//         <div className="md:max-w-3xl">
//           <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
//             Belt Cutting Machine
//           </p>

//           <p className="mt-4 text-sm leading-6 text-gray-600">
//             Our Belt Cutting Machine is designed for high efficiency and precision across various industrial applications. It supports a versatile cutting width range of 500 mm to 4000 mm, making it adaptable to different production needs.
//             <br /><br />
//             With an adjustable cutting speed of 30 to 100 meters per minute, this machine enables flexible and efficient operations. Powered by 3-phase 415V 50 Hz, it ensures seamless integration into most industrial environments.
//             <br /><br />
//             Built for durability and low maintenance, the machine features high-quality materials and a robust design. The user-friendly PLC control system or touchscreen interface ensures smooth and hassle-free operation.
//           </p>

//           <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Technical Specifications</p>
//           <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
//             <li><span className="font-medium text-gray-900">Cutting Length:</span> 500 mm to 4000 mm (Customizable)</li>
//             <li><span className="font-medium text-gray-900">Number of Cutting Lines:</span> 10</li>
//             <li><span className="font-medium text-gray-900">Cutting Speed:</span> 30-100 meters per minute</li>
//             <li><span className="font-medium text-gray-900">Power Supply:</span> 3-phase 415V 50 Hz</li>
//             <li><span className="font-medium text-gray-900">Cutting Precision:</span> ±10 mm</li>
//             <li><span className="font-medium text-gray-900">Control System:</span> PLC or touchscreen interface</li>
//             <li><span className="font-medium text-gray-900">Safety Features:</span> Emergency stop</li>
//             <li><span className="font-medium text-gray-900">Cutting Mechanism:</span> Knife blade cutter</li>
//             <li><span className="font-medium text-gray-900">Maintenance:</span> Low, due to high-quality materials and construction</li>
//             <li><span className="font-medium text-gray-900">Machine Type:</span> Fully automated</li>
//             <li><span className="font-medium text-gray-900">Machine Weight:</span> 200 kg to 1500 kg (varies by spec)</li>
//           </ul>

//           <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Key Features</p>
//           <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
//             <li>Versatile Cutting Width – 500 mm to 4000 mm range</li>
//             <li>High-Speed Operation – 30 to 100 meters per minute</li>
//             <li>Precision Cutting – ±10 mm accuracy with knife blade</li>
//             <li>Reliable Industrial Power – 3-phase 415V 50 Hz</li>
//             <li>Smart Control – PLC or touchscreen system</li>
//             <li>Enhanced Safety – Emergency stop feature</li>
//             <li>Durable Build – Low maintenance, long service life</li>
//             <li>Fully Automated – Minimal manual intervention</li>
//           </ul>

//           <div className="mt-8 flex items-center gap-x-4">
//             <a href="#/contact-us" className="rounded-md bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-500">
//               Enquiry Now
//             </a>
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>

//     );
// }
import ProductCard from '../../components/ProductCard';

export default function Products() {
  return (
    <ProductCard
      title="BELT CUTTING MACHINE"
      subheader={
        <>
          <strong>Efficiency | Accuracy | Durability</strong><br />
          Our Belt Cutting Machine is engineered for precision and high-speed performance across a wide cutting range of 500 mm to 4000 mm, ensuring seamless integration into industrial workflows with minimal maintenance and maximum uptime.
        </>
      }
      specs={[
        ['Cutting Length', '500 mm to 4000 mm (Customizable)'],
        ['Number of Cutting Lines', '10'],
        ['Cutting Speed', '30–100 meters per minute'],
        ['Power Supply', '3-phase 415V 50 Hz'],
        ['Cutting Precision', '±10 mm'],
        ['Control System', 'PLC or touchscreen interface'],
        ['Safety Features', 'Emergency stop'],
        ['Cutting Mechanism', 'Knife blade cutter'],
        ['Maintenance', 'Low, due to high-quality materials and construction'],
        ['Machine Type', 'Fully automated'],
        ['Machine Weight', '200 kg to 1500 kg (varies by specification)']
      ]}
      features={[
        'Versatile Cutting Width – 500 mm to 4000 mm range',
        'High-Speed Operation – 30 to 100 meters per minute',
        'Precision Cutting – ±10 mm accuracy with knife blade',
        'Reliable Industrial Power – 3-phase 415V 50 Hz',
        'Smart Control – PLC or touchscreen system',
        'Enhanced Safety – Emergency stop feature',
        'Durable Build – Low maintenance, long service life',
        'Fully Automated – Minimal manual intervention'
      ]}
      applications="Ideal for industries that require precise belt cutting for FIBC bag production, packaging lines, woven fabric processing, and custom length material cutting. This machine delivers speed and precision for a wide variety of industrial manufacturing setups."
      contactCta="Looking to optimize your belt cutting process? Get in touch with us to learn how our Belt Cutting Machine can elevate your production line."
    />
  );
};


