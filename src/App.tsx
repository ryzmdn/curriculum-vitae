import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LanguageIcon,
  LightBulbIcon,
  MapPinIcon,
  PhoneIcon,
  TrophyIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { formatDate, formatYear, getEndYear } from "./utils/formatter";

import { Section } from "./components/Section";
import { List } from "./components/List";
import { Header } from "./components/Header";

import { educations } from "./assets/data/education";
import { skills } from "./assets/data/skills";
import { achievements } from "./assets/data/achievement";
import { experiences } from "./assets/data/experience";
import { languages } from "./assets/data/language";
import { publications } from "./assets/data/publication";
import { projects } from "./assets/data/project";

interface Contact {
  icon: JSX.Element;
  value: string;
}

const contacts: Contact[] = [
  {
    icon: <EnvelopeIcon aria-hidden="true" className="size-4" />,
    value: "devonwebb@example.com",
  },
  {
    icon: <PhoneIcon aria-hidden="true" className="size-4" />,
    value: "(207) 666-0118",
  },
  {
    icon: <MapPinIcon aria-hidden="true" className="size-4" />,
    value: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  {
    icon: <GlobeAltIcon aria-hidden="true" className="size-4" />,
    value: "https://www.portofolio.com",
  },
];

interface Social {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const socials: Social[] = [
  {
    name: "devebb",
    href: "https://facebook.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "@devnwbb",
    href: "https://instagram.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "@dwebb",
    href: "https://x.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: "dvwebb",
    href: "https://github.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "@dvnwb",
    href: "https://youtube.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function App() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-base/7 text-gray-700 mx-auto max-w-3xl divide-y">
        <Header />
        <div className="flex flex-col items-start gap-x-16 py-4 md:flex-row">
          <div className="space-y-8 w-full max-w-64 md:w-auto">
            <Section title="CONTACT" icon={UserIcon}>
              {contacts.map((contact, index) => (
                <address
                  key={index}
                  className="flex items-start gap-x-4 not-italic"
                >
                  <div className="shrink-0 flex justify-center items-center size-7 bg-blue-100 rounded-full">
                    <div className="text-sm text-blue-500">{contact.icon}</div>
                  </div>
                  <p>{contact.value}</p>
                </address>
              ))}
            </Section>
            <Section title="EDUCATION" icon={AcademicCapIcon}>
              <List content={educations}>
                {(education) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">
                      {education.degree}
                    </h4>
                    <h5 className="text-base/6 font-medium">
                      {education.institution}
                    </h5>
                    <div className="space-x-1.5">
                      <time dateTime={education.date.from}>
                        {formatYear(education.date.from)}
                      </time>
                      <span>-</span>
                      <time dateTime={education.date.to}>
                        {getEndYear(education.date.to)}
                      </time>
                    </div>
                    <p>
                      GPA <strong>{education.gpa.toFixed(2)}</strong>
                    </p>
                  </>
                )}
              </List>
            </Section>
            <Section title="SKILLS" icon={WrenchScrewdriverIcon}>
              {skills.map((skill, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div>
                    <h4 className="text-gray-800">{skill.name}</h4>
                  </div>
                  <div>
                    <label htmlFor={skill.name} className="sr-only">
                      {skill.name}
                    </label>
                    <progress id={skill.name} value={skill.level} max="100" />
                  </div>
                </div>
              ))}
            </Section>
            <Section title="LANGUAGES" icon={LanguageIcon}>
              {languages.map((language, index) => (
                <div key={index} className="grid grid-cols-2">
                  <div>
                    <h4 className="text-gray-800">{language.name}</h4>
                  </div>
                  <div>
                    <label htmlFor={language.name} className="sr-only">
                      {language.name}
                    </label>
                    <progress
                      id={language.name}
                      value={language.level}
                      max="100"
                    />
                  </div>
                </div>
              ))}
            </Section>
            <Section title="SOCIAL MEDIA" icon={LanguageIcon}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="flex items-center space-x-3.5 hover:text-blue-500"
                >
                  <social.icon aria-hidden="true" className="size-6" />
                  <span>{social.name}</span>
                </a>
              ))}
            </Section>
          </div>

          <div className="space-y-8 w-full">
            <Section title="ACHIEVEMENT" icon={TrophyIcon}>
              <List content={achievements}>
                {(achievment) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">
                      {achievment.title}
                    </h4>
                    <h5 className="font-medium">{achievment.institution}</h5>
                    <time dateTime={achievment.date}>
                      {formatDate(achievment.date)}
                    </time>
                    <p className="text-sm/6">{achievment.description}</p>
                  </>
                )}
              </List>
            </Section>
            <Section title="WORK EXPERIENCE" icon={BriefcaseIcon}>
              <List content={experiences}>
                {(experience) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">
                      {experience.title}
                    </h4>
                    <h5 className="font-medium">{experience.company}</h5>
                    <div className="space-x-1.5">
                      <time dateTime={experience.date.from}>
                        {formatYear(experience.date.from)}
                      </time>
                      <span>-</span>
                      <time dateTime={experience.date.to}>
                        {getEndYear(experience.date.to)}
                      </time>
                    </div>
                    <ul className="marker:text-blue-500 list-disc pl-5 space-y-2 py-2">
                      {experience.achievements.map((task, index) => (
                        <li key={index} className="text-sm/6 text-gray-700">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </List>
            </Section>
            <Section title="Project" icon={LightBulbIcon}>
              <List content={projects}>
                {(project) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">
                      {project.title}
                    </h4>
                    <h5 className="font-medium">{project.role}</h5>
                    <time dateTime={project.date}>
                      {formatDate(project.date)}
                    </time>
                    <p className="text-sm/6">{project.description}</p>
                  </>
                )}
              </List>
            </Section>
            <Section title="Publication" icon={BookOpenIcon}>
              <List content={publications}>
                {(publication) => (
                  <>
                    <h4 className="text-lg/relaxed text-gray-900 font-semibold">
                      {publication.title}
                    </h4>
                    <h5 className="text-base/6 font-medium">
                      {formatDate(publication.date)}
                    </h5>
                    <p>{publication.content}</p>
                  </>
                )}
              </List>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
