"use client";
import SectionHeader from '../helper/SectionHeader';
import Frontend from '@/app/helper/skill_components/Frornend';
import Backend from '@/app/helper/skill_components/Backend';
import Language from '../helper/skill_components/Language';
import Tools from '../helper/skill_components/Tools';

export default function Experience() {


  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-8 overflow-hidden dark:bg-background">
      <div className="max-w-5xl mx-auto">

        <SectionHeader header="Work EXPERIENCE" tittle="My Experience and Contribution" />










        <div className="p-4 relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
          {/* Top row */}
          <div className="w-full">
            <Frontend />
          </div>
          <div className="w-full">
            <Backend />
          </div>

          {/* Circular spinning text */}
          <div className="w-full md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-32 h-32 md:w-40 md:h-40 animate-[spin_20s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text fontSize="17.2" className="fill-gray-800 dark:fill-gray-200 font-bold">
                <textPath href="#circlePath" startOffset="0%">
                  EAT · SLEEP · CODE · ENJOY · EAT · SLEEP · CODE · ENJOY ·
                </textPath>
              </text>
            </svg>
          </div>

          {/* Bottom row */}
          <div className="w-full">
            <Language />
          </div>
          <div className="w-full">
            <Tools />
          </div>
        </div>























      </div>
    </section >
  );
}