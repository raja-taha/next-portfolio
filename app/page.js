import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
const pic = "/assets/taha.png";
import { promises as fs } from "fs";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default async function Home() {
  const projectsFile = await fs.readFile(
    process.cwd() + "/public/assets/projects.json",
    "utf8"
  );
  const projects = JSON.parse(projectsFile);

  const experienceFile = await fs.readFile(
    process.cwd() + "/public/assets/experience.json",
    "utf8"
  );
  const experience = JSON.parse(experienceFile);
  return (
    <main className="bg-mainBg text-white">
      <section className="flex flex-col justify-center items-center">
        <Image
          src={pic}
          width={170}
          height={170}
          className="object-contain mt-16 mb-10 rounded-full"
        />
        <div className="max-w-lg text-center">
          <h1 className=" font-bold text-[45px] leading-tight mb-6">
            I do code and make projects{" "}
            <span className="text-gradient">about it!</span>
          </h1>
          <p className="text-secText">
            I am a seasoned full-stack software engineer with over 2 years of
            professional experience, specializing in frontend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 space-x-5">
          <Link href="#contact">
            <Button dark text="Get in Touch" />
          </Link>
          <Link
            href={"/assets/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
            download
          >
            <Button text="Download CV" />
          </Link>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center mt-16">
          <h3 className="font-semibold tracking-wider text-secText ">
            EXPERIENCE WITH
          </h3>
          <div className="flex space-x-20 mt-8">
            <Image src={"/assets/icons/js.svg"} width={40} height={40} />
            <Image src={"/assets/icons/next.svg"} width={40} height={40} />
            <Image src={"/assets/icons/html.svg"} width={40} height={40} />
            <Image src={"/assets/icons/css.svg"} width={40} height={40} />
            <Image src={"/assets/icons/react.svg"} width={40} height={40} />
          </div>
        </div>
      </section>
      <section
        className="mt-20 flex flex-col justify-around items-center w-full"
        id="projects"
      >
        <div>
          <h2 className="text-3xl orange-gradient font-bold">PROJECTS</h2>
        </div>
        <div className="w-full flex flex-wrap gap-5 justify-center items-center mt-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
      </section>
      <section
        className="my-20 flex flex-col justify-around items-center"
        id="experience"
      >
        <div>
          <h2 className="text-3xl blue-gradient font-bold">EXPERIENCE</h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-5 justify-center items-center mt-5">
          {experience.map((experience) => (
            <ExperienceCard key={experience.id} props={experience} />
          ))}
        </div>
      </section>
      <section className="bg-footerBg w-full" id="contact">
        <div className="w-2/3 mx-auto py-14">
          <h2 className="font-bold text-2xl mb-10">Contact</h2>
          <p className="text-secText">
            Seasoned Full Stack Software Engineer with over 2 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies.
          </p>
          <Link
            href={"mailto:rajataha062@gmail.com"}
            className="flex space-x-2 py-8"
          >
            <Image src={"/assets/icons/email.svg"} width={20} height={20} />
            <p>rajataha062@gmail.com</p>
          </Link>
          <div className="flex space-x-5 pb-5">
            <Link
              href={"https://www.linkedin.com/in/raja-taha"}
              target="_blank"
            >
              <Image
                src={"/assets/icons/linkedin.svg"}
                width={20}
                height={20}
              />
            </Link>
            <Link href={"https://github.com/raja-taha"} target="_blank">
              <Image src={"/assets/icons/github.svg"} width={20} height={20} />
            </Link>
            <Link
              href={"https://www.instagram.com/raja_taha_20/"}
              target="_blank"
            >
              <Image
                src={"/assets/icons/instagram.svg"}
                width={20}
                height={20}
              />
            </Link>
            <Link href={"https://www.x.com/EnggRajaTaha"} target="_blank">
              <Image src={"/assets/icons/twitter.svg"} width={20} height={20} />
            </Link>
            <Link href={"https://www.youtube.com/@raja-taha"} target="_blank">
              <Image src={"/assets/icons/youtube.svg"} width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
