import React from "react";
import { Link } from "react-router-dom";
import lineropenermachine from "../styles/images/product_img/lineropenermachine.png";

export default function Products() {
  return (
    <section class="w-screen pt-[80px] sm:pt-[120px] md:pt-[160px] lg:pt-[175px] pb-[140px] overflow-hidden bg-white py-8 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:max-w-none md:grid-cols-2 items-center">

      <div class="md:pr-8">
        <div class="md:max-w-lg">
          <p class="mt-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Liner Opener Machine
          </p>

          <p class="mt-4 text-sm leading-6 text-gray-600">
            Our Semi-Automatic Liner Opener Machine is designed for efficient and safe opening of liners in industrial packaging processes. With a 3 HP motor and three-phase power supply (415V, 50Hz), it ensures reliable performance across diverse production environments.
          </p>

          <p class="mt-2 text-sm leading-6 text-gray-600">
            It handles liners with a minimum size of 30 cm and operates with compressed air pressure between 6 to 8 bar for consistent output. The manual operating system allows easy control, while built-in safety features like an emergency stop ensure a secure working environment.
          </p>

          <p class="mt-2 text-sm leading-6 text-gray-600">
            This machine provides a cost-effective and dependable solution for businesses aiming to streamline liner opening while maintaining flexibility and operator safety.
          </p>

          <ul class="mt-4 text-sm text-gray-600 leading-5 space-y-1 list-disc list-inside">
            <li><span class="font-medium text-gray-900">Semi-Automatic Operation:</span> Optimized performance with minimal operator intervention.</li>
            <li><span class="font-medium text-gray-900">Power Supply:</span> Works on 415V, 50Hz (Three Phase), suitable for industrial setups.</li>
            <li><span class="font-medium text-gray-900">Motor Power:</span> 3 HP motor ensures efficient and continuous operation.</li>
            <li><span class="font-medium text-gray-900">High Throughput:</span> Handles 2 bags per minute, ideal for medium-scale production.</li>
            <li><span class="font-medium text-gray-900">Liner Size:</span> Accommodates minimum liner size of 30 cm, providing versatility.</li>
            <li><span class="font-medium text-gray-900">Air Consumption:</span> Operates at 6 bar pressure for consistent air performance.</li>
            <li><span class="font-medium text-gray-900">Compressed Air Pressure:</span> Supports 6 to 8 bar, ensuring operational efficiency.</li>
            <li><span class="font-medium text-gray-900">Control System:</span> Manual operation for simplicity and ease of use.</li>
            <li><span class="font-medium text-gray-900">Safety Features:</span> Integrated emergency stop for enhanced operator safety.</li>
          </ul>

          <div class="mt-8 flex items-center gap-x-4">
            <a href="#/contact-us" class="rounded-md bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-500">
              Enquiry Now
            </a>
          </div>
        </div>
      </div>

      <div class="w-full order-first md:order-none">
        <img
          alt="Liner Opener Machine"
          class="w-full max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
          src={lineropenermachine}
        />
      </div>
    </div>
  </div>
</section>

  );
}
