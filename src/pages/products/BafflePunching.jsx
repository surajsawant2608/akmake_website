import React from "react";

export default function Products() {
    return (
        <section className="w-screen pt-[80px] sm:pt-[90px] md:pt-[130px] lg:pt-[155px] pb-[140px] overflow-hidden bg-white py-8 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:max-w-none md:grid-cols-1 items-center">
        
        <div className="md:pr-8">
            <div className="md:max-w-3xl">
            <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                Baffle Punching Machine
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
                Our Baffle Punching Machine is specifically designed to punch precise holes in the internal baffles of Flexible Intermediate Bulk Containers (FIBC). This ensures optimal material flow and stability, enhancing the overall performance of bulk bags.
            </p>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Technical Specifications</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
                <li><span className="font-medium text-gray-900">Max. Width of Unwinding Cloth:</span> 750 mm</li>
                <li><span className="font-medium text-gray-900">Tension Control:</span> Accumulator</li>
                <li><span className="font-medium text-gray-900">Machine Control:</span> PLC & Servo Control (Fuji/Schneider)</li>
                <li><span className="font-medium text-gray-900">Air Pressure Requirement:</span> 7 Bar</li>
                <li><span className="font-medium text-gray-900">Main Servo Motor:</span> 1 kW</li>
                <li><span className="font-medium text-gray-900">Hitter of Cutting Nip:</span> 2.5 kW</li>
                <li><span className="font-medium text-gray-900">Connection Load:</span> 10 kW</li>
                <li><span className="font-medium text-gray-900">Air Compressor:</span> 3 HP (To be provided by the customer)</li>
            </ul>

            <p className="mt-6 text-sm text-gray-600 font-medium italic">
                Note: A 3 HP Air Compressor is required at the customer’s end for optimal machine operation.
            </p>

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