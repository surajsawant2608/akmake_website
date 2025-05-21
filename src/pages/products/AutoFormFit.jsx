import React from "react";
export default function Products() {
  return (
    <section className="w-screen pt-[80px] sm:pt-[90px] md:pt-[130px] lg:pt-[155px] pb-[140px] overflow-hidden bg-white py-8 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:max-w-none md:grid-cols-1 items-center">

      <div className="md:pr-8">
        <div className="md:max-w-3xl">
          <p className="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Auto Form Fit Machine
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            The Auto Form Fit Machine (PE Bottle Shape Liner Sealing Machine) is designed for high-precision liner sealing with a production capacity of 2 pieces per minute. It supports adjustable liner widths (60 cm to 140 cm) and film lengths (500 mm to 3500 mm), making it ideal for industries that require customizable and reliable liner solutions.
            <br /><br />
            Equipped with servo motor technology, precise sealing mechanisms, and a user-friendly PLC interface, this machine ensures consistent performance, energy efficiency, and durability for long-term industrial use.
          </p>

          <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Technical Specifications</p>
          <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
            <li><span className="font-medium text-gray-900">Material Processed:</span> Gusseted/Tubular Liner (Lay Flat)</li>
            <li><span className="font-medium text-gray-900">Production Capacity:</span> 2 Pieces/Minute</li>
            <li><span className="font-medium text-gray-900">Liner Width:</span> Min. 60 cm | Max. 140 cm</li>
            <li><span className="font-medium text-gray-900">Film Length:</span> Adjustable (500 mm - 3500 mm)</li>
            <li><span className="font-medium text-gray-900">Power Supply:</span> 415V, 3 Phase, 50 Hz</li>
            <li><span className="font-medium text-gray-900">Heaters:</span> 1700W Single Phase HD Heater</li>
            <li><span className="font-medium text-gray-900">Air Supply:</span> 12 Bars, 100 Ltr/Min (Customer Source)</li>
            <li><span className="font-medium text-gray-900">Film Roll Lifting:</span> 650 Kg Max. with Web Aligner</li>
            <li><span className="font-medium text-gray-900">Sealing Options:</span></li>
            <ul className="ml-4 list-disc">
              <li>Side Sealing: 2200 mm | Flange Distance 30–150 mm</li>
              <li>Spout Sealing: Length 1000 mm | Diameter 250–650 mm</li>
              <li>Bottom Sealing: Length 1600 mm | Width 10 mm</li>
            </ul>
            <li><span className="font-medium text-gray-900">Motor & Drives:</span> 2KW Servo Motor (Fuji/Schneider), 5 A/C Drives</li>
            <li><span className="font-medium text-gray-900">Cooling System:</span> Yes</li>
            <li><span className="font-medium text-gray-900">Cutting Unit:</span> Length Cutting Unit</li>
            <li><span className="font-medium text-gray-900">PLC System:</span> Programmable PLC</li>
            <li><span className="font-medium text-gray-900">HMI:</span> 10” Touchscreen</li>
            <li><span className="font-medium text-gray-900">Power Consumption:</span> 1700W (7 Heaters) + 2KW Servo + AC Motors</li>
            <li><span className="font-medium text-gray-900">Voltage:</span> 415V / 50Hz</li>
            <li><span className="font-medium text-gray-900">MCB for Supply:</span> 63 Amps</li>
            <li><span className="font-medium text-gray-900">Earthing:</span> Separate Earthing & Fully Loaded Neutral Wire</li>
            <li><span className="font-medium text-gray-900">Warranty:</span> 1 Year (PLC, HMI, Servo Motor, Drive & Switch Gear)</li>
          </ul>

          <p className="mt-6 text-sm leading-6 text-gray-600 font-medium">Key Features</p>
          <ul className="mt-2 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
            <li>High Efficiency – 2 pieces per minute for high-volume output</li>
            <li>Adjustable Liner Sizes – Width: 60–140 cm, Length: 500–3500 mm</li>
            <li>Precision Sealing – Supports side, spout, and bottom sealing</li>
            <li>Energy Efficient – 2KW Servo Motor & 1700W HD Heaters</li>
            <li>Advanced Controls – PLC system & 10” HMI touchscreen</li>
            <li>Robust Build – Durable aluminum dies & components</li>
            <li>Customizable Output – Adjustable film lengths</li>
            <li>Integrated Cooling & Cutting Systems</li>
            <li>Comprehensive 1-Year Warranty</li>
            <li>User-Friendly – Easy operation and maintenance</li>
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
