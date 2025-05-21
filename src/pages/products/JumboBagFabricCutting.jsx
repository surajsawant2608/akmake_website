import React from "react";
export default function Products() {
  return (
    <section className="w-screen pt-[80px] sm:pt-[90px] md:pt-[130px] lg:pt-[155px] pb-[140px] overflow-hidden bg-white py-8 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:max-w-none md:grid-cols-1 items-center">
        <div className="md:pr-8">
          <div className="md:max-w-3xl">
            <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Jumbo Bag Fabric Cutting Machine
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              <strong>Model:</strong> 2200 FCM with Baffle Punching System
            </p>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Cutting Types & Sizes</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
              <li><strong>I-Cut:</strong> 500 mm, 600 mm, 650 mm</li>
              <li><strong>O-Cut:</strong> 300 mm, 350 mm, 400 mm, 450 mm, 500 mm</li>
              <li><strong>X-Cut:</strong> 300 mm, 350 mm, 400 mm, 450 mm</li>
            </ul>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Advanced Features</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
              <li>Automatic Endage Folding for precise folding</li>
              <li>Ultrasonic Welding for seamless, durable joints</li>
              <li>Baffle Panel: 2 sets (1 set = 5 nos)</li>
            </ul>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Automation & Control</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
              <li>Automatic Web Guide Hydraulic System for precise alignment</li>
              <li>Accumulator System for tension control & accuracy</li>
              <li>Operating System: Schneider or Fuji PLC-based system</li>
            </ul>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Specifications</p>
            <p className="mt-2 text-sm text-gray-600 leading-5">
              This advanced Fabric Cutting Machine ensures precision cutting and punching of FIBC fabrics,
              optimizing efficiency and quality. Built to deliver high-speed performance with durability,
              it's ideal for bulk bag manufacturing needs.
            </p>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Key Features</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
              <li>Cutting Width: 2200mm, suitable for U-panel, circular, & 4-panel FIBC bags</li>
              <li>Hot Knife Cutting Mechanism: Cuts & seals simultaneously, preventing fraying</li>
              <li>High-Speed Operation: 17-20 cuts per minute for increased production</li>
              <li>PLC-Controlled System: User-friendly, stores presets for various fabric types</li>
              <li>Servo Motor Drive: Ensures precise movement & reduces material wastage</li>
              <li>Auto Roll Feeding System: Automatic unwinder with tension control</li>
              <li>Edge Position Control (EPC): Ensures straight, aligned cutting</li>
              <li>Perforation & Marking: Supports easy folding, stitching, & branding</li>
              <li>Length Accuracy: ±10mm, handles 200mm - 3500mm fabric lengths</li>
              <li>Safety Features: Emergency stop buttons, blade guards & warning systems</li>
              <li>Energy Efficiency: Low power consumption for continuous operation</li>
            </ul>

            <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Applications</p>
            <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
              <li>Cutting fabrics for standard, coated, or uncoated FIBC bags</li>
              <li>Manufacturing cross-corner loops, side-seam loops, or liner-integrated bags</li>
            </ul>

            <p className="mt-6 text-sm leading-6 text-gray-600">
              This machine combines modern automation with robust construction to enhance fabric processing for jumbo bag production.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
