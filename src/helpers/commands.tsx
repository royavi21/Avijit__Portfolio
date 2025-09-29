import CommandData from "../assets/data/commands.json";
import Projects from "../assets/data/projects";
import CommandDetails from "../assets/data/commands.json";

const arrow = ">";

const CheckCommand = (command: string) => {
  const commands = Object.keys(CommandData);

  if (commands.includes(command.trim().toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const CheckCommandAndExecute = (command: string) => {
  command = command.trim().toLowerCase();
  if (command === "help" || command === "ls") {
    return HelpCommand();
  } else if (command === "about") {
    return AboutCommand();
  } else if (command === "contact") {
    return ContactCommand();
  } else if (command === "projects") {
    return ProjectsCommand();
  } else if (command === "skills") {
    return SkillsCommand();
  } else if (command === "education") {
    return EducationCommand();
  } else if (command === "experience") {
    return ExperienceCommand();
  } else {
    return (
      <li className="flex flex-col gap-2 my-2">
        <p className="text-error">
          The term '{command}' is not recognized as the name of a cmdlet,
          function, script file, or operable program.{" "}
        </p>
        <p className="text-white">Type "help" or "cls" for assistance.</p>
      </li>
    );
  }
};

const HelpCommand = () => {
  return (
    <div className="flex gap-2 flex-col ">
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">help - </p>
        <p>{CommandDetails["help"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">about - </p>
        <p>{CommandDetails["about"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">contact - </p>
        <p>{CommandDetails["contact"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">projects - </p>
        <p>{CommandDetails["projects"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">skills - </p>
        <p>{CommandDetails["skills"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">education - </p>
        <p>{CommandDetails["education"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">experience - </p>
        <p>{CommandDetails["experience"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">clear - </p>
        <p>{CommandDetails["clear"]}</p>
      </span>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult ">
      <h2 className="text-2xl font-bold mb-4">About Me:</h2>

      <span>
        <p>
          👋 Hello World! I'm Avijit Roy, a passionate Full Stack Developer and a Cybersecurity enthusiast
          with expertise in:
        </p>
      </span>
      <span className="mt-3">
        <p>
          I embarked on my coding journey in the 7th standard, initially with
          Java, but truly delved into it in December 2021. Since then, I've:
        </p>
      </span>
      <ul className="list-disc list-outside pl-4">
        <li>
          <p>🚀 Explored Web Development as my starting point.</p>
        </li>
        <li>
          <p>📱 Ventured into App Development with Flutter.</p>
        </li>
        <li>
          <p>🕹️ Dabbled in Game Development (C#) for a thrilling Hackathon.</p>
        </li>
        <li>
          <p>
            🔗 Acquired basic knowledge in Blockchain (Solidity, Smart
            Contracts, Ethereum).
          </p>
        </li>
        <li>
          <p>🚀 Recently learned GoLang to broaden my skill set.</p>
        </li>
      </ul>
      <span className="mt-3 mb-1">
        <p>
          I'm always eager to embrace new technologies and integrate them into
          my projects. Let's create something amazing together! 💻✨
        </p>
      </span>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <ul className="flex flex-col gap-2 list-disc list-outside pl-4 text-commandResult font-bold">
      <h2 className="text-2xl font-bold mb-4">Contact Me:</h2>

      <li className="mt-1">
        <p>
          Email:{" "}
          <a
            href="mailto:avijitroy9987@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            avijitroy9987@gmail.com
          </a>
        </p>
      </li>
      <li>
        <p>
          Github:{" "}
          <a
            href="https://github.com/royavi21"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @royavi21
          </a>
        </p>
      </li>
      <li>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/gray-hat-avi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
             @royavi21
          </a>
        </p>
      </li>
      <li>
        <p>
          X:{" "}
          <a
            href="https://x.com/alyehandro"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
             @royavi21
          </a>
        </p>
      </li>
      <li>
        <p>
          Instagram:{" "}
          <a
            href="https://instagram.com/_aviroy_"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
             @royavi21
          </a>
        </p>
      </li>
      <li className="list-none mt-1 font-normal">
        👆 Click on any to contact me!{" "}
      </li>
    </ul>
  );
};

const ProjectsCommand = () => {
  return (
    <ul className="flex flex-col gap-2 mt-6">
      <h2 className="text-2xl font-bold mb-4">Projects:</h2>

      {Projects.reverse().map((project, index: number) => (
        <li
          className="p-6 rounded-lg shadow-md mb-6"
          key={"project" + index + project.name}
        >
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(
              (tech: { name: string }, index: number) => (
                <span
                  key={"techName" + index.toString() + tech.name}
                  className="px-2 py-1 rounded text-commandResult"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const SkillsCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult ">
      <h2 className="text-2xl font-bold mb-4">Skills:</h2>

      <div className="flex flex-wrap gap-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Languages:</h2>
          <ul className="list-disc pl-4">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>GoLang</li>
            <li>Python</li>
            <li>C++</li>
            <li>C#</li>
            <li>Dart</li>
            <li>Solidity</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Frontend:</h2>
          <ul className="list-disc pl-4">
            <li>HTML</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Flutter</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Backend:</h2>
          <ul className="list-disc pl-4">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SST</li>
            <li>AWS</li>
            <li>NEXT.js</li>
            <li>HardHat</li>
            <li>RazorPay</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Technologies:</h2>
          <ul className="list-disc pl-4">
            <li>Figma</li>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type EducationCardProps = {
  institution: string;
  degree: string;
  location: string;
  grade: string;
  year: string;
};

const EducationCard = ({
  institution,
  degree,
  location,
  grade,
  year,
}: EducationCardProps) => {
  return (
    <div className="p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="mb-2">
        {institution}, {location}
      </p>
      <p className="mb-2">Grade: {grade}</p>
      <p>Year: {year}</p>
    </div>
  );
};

const EducationCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult mt-6">
      <h2 className="text-2xl font-bold mb-4">Education:</h2>

      <EducationCard
        degree="BSC (CSE)"
        institution="Northern University of Business and Technology"
        location="Khulna"
        grade="4/4 CGPA (1st Semester)"
        year="Ongoing"
      />

      <EducationCard
        degree="Diploma (CSE)"
        institution="Faridpur Polytechnic Institute"
        location="Faridpur"
        grade="3.96/4.0"
        year="2024"
      />

      <EducationCard
        degree="10th"
        institution="Khan Saheb S.Mosarorof H. School and College"
        location="Tungipara"
        grade="4.72/5.0"
        year="2020"
      />
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult">
      <h2 className="text-2xl font-bold mb-4">Work Experience:</h2>

      {/* Experience 1 */}
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">
          Agradut United Club
        </h3>
        <p className="mb-2">Full Stack Web Developer</p>
        <p className="mb-2">
          Managed backend operations, oversaw multiple websites, troubleshooted
          errors, devised innovative solutions, and led an intern team.
        </p>
        <p className="text-gray-400">From: November 2019 - Present</p>
      </div>

      {/* Experience 2 */}
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">Info Guard</h3>
        <p className="mb-2">Cybersecurity Analyst</p>
        <p className="mb-2">
          Monitors systems for threats, investigates security incidents, and implements protective measures to keep networks and data safe.
        </p>
        <p className="text-gray-400">From: August 2022 - October 2022</p>
      </div>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
