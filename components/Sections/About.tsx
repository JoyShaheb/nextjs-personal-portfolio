import React from "react";
import Image from "next/image";
import { ITechStackOptionProp } from "@/types/interface";
import TooltipComponent from "../Tooltip/TooltipComponent";

const About = ({
  about,
  tech,
}: {
  about: any;
  tech: ITechStackOptionProp[];
}) => {
  // const serializedTech = tech?.map((item) => {});

  return (
    <section id="about" className="pt-20 text-muted-foreground sm:text-lg">
      {/* about me */}
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer">About me</h1>
        <p>
          Joy is an experienced Senior Frontend Developer and mentor based in
          Dhaka, Bangladesh. He is highly enthusiastic about Typescript and
          genuinely enjoys teaching web dev to others. He is currently on a
          mission to create the best web dev tutorials on the internet.
        </p>
      </div>

      {/* techs I used */}
      <div className="group">
        <h1 className="title-bottom-line mt-14 cursor-pointer">Tech Stack</h1>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <TooltipComponent
              key={item?._id}
              label={item?.title}
              item={
                <Image
                  className="cursor-pointer"
                  width={45}
                  height={45}
                  src={item?.mainImage}
                  alt={item?.title}
                />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
