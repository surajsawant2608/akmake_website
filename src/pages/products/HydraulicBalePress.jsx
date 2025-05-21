import React from "react";
export default function Products() {
  return (
    <section className="w-screen pt-[80px] sm:pt-[90px] md:pt-[130px] lg:pt-[155px] pb-[140px] overflow-hidden bg-white py-8 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:max-w-none md:grid-cols-1 items-center">
        
        <div className="md:pr-8">
            <div className="md:max-w-3xl">
            <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Hydraulic Bale Press
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
                The Hydraulic Bale Press is engineered for efficient storage and transportation of finished bags by securely compressing and packing them into bales. The compacted bales are ideal for warehouse storage or shipment, optimizing space and logistics.
                <br /><br />
                We offer customizable bale dimensions to accommodate standard Euro pallets or other pallet sizes, ensuring flexibility to meet specific customer requirements.
            </p>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Technical Specifications</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
                <li><span className="font-medium text-gray-900">Type:</span> Four-Pillar Hydraulic Press</li>
                <li><span className="font-medium text-gray-900">Frame:</span> Three sides enclosed with one openable door & lever mechanism</li>
                <li><span className="font-medium text-gray-900">Cabin Dimensions:</span> 1200 x 1000 x 2300 mm (L x W x H)</li>
                <li><span className="font-medium text-gray-900">Space Requirement:</span> 4100 x 2800 x 5200 mm</li>
                <li><span className="font-medium text-gray-900">Operating Panel:</span> Semi-Automatic, Push Button, Electrical Panel</li>
                <li><span className="font-medium text-gray-900">Electrical Power Required:</span> 440V A/C, 3 Phase, 50 Hz</li>
                <li><span className="font-medium text-gray-900">Power Pack Motor:</span> 25+3 HP A/C Motor (Crompton/Havells Make)</li>
                <li><span className="font-medium text-gray-900">Press Capacity:</span> 120 Tons (Max)</li>
                <li><span className="font-medium text-gray-900">Operating Pressure:</span> Maximum 180 Bar</li>
                <li><span className="font-medium text-gray-900">Hydraulic Cylinder:</span> 300 mm Bore, 160 mm Ram Stroke</li>
                <li><span className="font-medium text-gray-900">Hydraulic Valve:</span> Yuken Make</li>
                <li><span className="font-medium text-gray-900">Bed Size:</span> 1200 x 1000 mm</li>
                <li><span className="font-medium text-gray-900">Stroke Length:</span> 1800 mm</li>
                <li><span className="font-medium text-gray-900">Stroke Speed:</span> Maximum 3 meters per minute (Adjustable)</li>
                <li><span className="font-medium text-gray-900">Daylight Gap:</span> 2000 mm</li>
                <li><span className="font-medium text-gray-900">Bale Size:</span> 1200 x 1000 x 1100/1200 mm (Customizable)</li>
                <li><span className="font-medium text-gray-900">Pusher:</span> 1 Pusher & 2 Hard Chrome Guide Rods (Stroke: 1100 mm)</li>
                <li><span className="font-medium text-gray-900">Oil Tank Capacity:</span> 550 Liters</li>
                <li><span className="font-medium text-gray-900">Oil Type:</span> Hydraulic Oil - Grade 68</li>
                <li><span className="font-medium text-gray-900">Number of Cylinders:</span> 1 Main Cylinder</li>
            </ul>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Key Features</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
                <li>Sturdy Construction – Designed to withstand heavy loads and pressure</li>
                <li>Stainless Steel Cladding – On all bag seating areas for durability</li>
                <li>Cast Nylon Solid Blocks – For smooth, reliable operation</li>
                <li>Heavy-Duty Power Pack – Ensures optimal performance</li>
                <li>Hydraulic Bale Ejection System – Smooth handling of compressed bales</li>
                <li>Custom Baling Sizes & Capacities – Tailored for customer-specific needs</li>
            </ul>

            <div className="mt-8 flex items-center gap-x-4">
                <a href="#/contact-us" className="rounded-md bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-500">
                Enquiry Now
                </a>
            </div>
            </div>
        </div>

        </div>
    </div>
    </section>
    );
}
