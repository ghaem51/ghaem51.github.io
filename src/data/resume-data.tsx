import muninLogo from "../images/logos/munin.jpeg";
import BifrostLogo from "../images/logos/bifrost.jpeg";
import Defectdojo_WazuhLogo from "../images/logos/defectdojo_wazuh_intigration.jpeg";

import OmpfinexLogo from "../images/logos/ompfinex.svg";
import PartSoftwareLogo from "../images/logos/partsoftware.svg";
import NikModernLogo from "../images/logos/nikmodern.png";
import HiWebLogo from "../images/logos/hiweb.svg";

import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Ghaem Arasteh",
  initials: "GA",
  location: "Canada, Ontario, Torento",
  locationLink: "https://www.google.com/maps/place/Mashhad,+Razavi+Khorasan+Province/",
  about:
    "Full Stack Engineer and network security researcher",
  summary:
  "I'm a diligent Computer Engineering graduate with a First Class Honours degree from Birjand University of Technology. Passionate about problem-solving and coding since school, I continuously deepen my understanding and refine my skills. Currently, I'm engaged in Network Security, applying and expanding my knowledge. I thrive on tackling challenges, contributing to team success with diligence, attention to detail, and strong organizational abilities.",
    // "A dynamic and diligent Computer Engineering graduate from Birjand University of Technology, I hold a First Class Honours degree and a passion for problem-solving. My journey into the fascinating world of coding began during my school days and has relentlessly driven me to deepen my understanding and enhance my skills.Though I describe myself as a 'noob' in computers, this merely reflects my commitment to lifelong learning and my belief that there is always more to master in this rapidly evolving field. As I continue to learn, I am fortunate to apply and expand my knowledge in my current role in Network Security.In my work, I demonstrate an eagerness to tackle challenging issues and contribute to team success through hard work, attention to detail, and excellent organizational skills. I'm always open to connecting with like-minded professionals who are also passionate about technology and its potential to influence the future.",
  avatarUrl: "https://avatars.githubusercontent.com/u/17712146?v=4",
  personalWebsiteUrl: "https://ghaem51.github.io/",
  contact: {
    email: "ghaem1376@gmail.com",
    tel: "+16477653853",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ghaem51",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ghaem51/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ghaem51",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "K. N. Toosi University of Technology",
      degree: "Master, Computer Systems Networking and Telecommunications",
      start: "2020",
      end: "2023",
    },
    {
      school: "Birjand University of Technology",
      degree: "Bachelor of Computer Software Engineering",
      start: "2015",
      end: "2019",
    }
  ],
  work: [
    {
      company: "OMPFinex",
      link: "https://ompfinex.com",
      badges: ["full-time","hybrid"],
      title: "Network Security",
      logo: OmpfinexLogo,
      start: "Apr 2023",
      end: "Present",
      description:
        "Skills: netbox · opensearch elastic · Graylog · Vault · HAProxy · Nginx · Network Security",
      projects:[
        {name:"Munin", description:"integration wazuh , vcneter ,... with netbox for auto add new assets",link:"https://github.com/ghaem51/munin"},
        {name:"Munin2", description:"integration wazuh , vcneter ,... with netbox for auto add new assets",link:"https://github.com/ghaem51/munin"},
      ]
    },
    {
      company: "Part Software Group",
      link: "https://www.partsoftware.com/",
      badges: ["full-time","on-site"],
      title: "Network Security",
      logo: PartSoftwareLogo,
      start: "Nov 2021",
      end: "Mar 2023",
      description: "Skills: Wazuh · Ansible · Web Application Security · Network Security · Firewalls · Security · MongoDB",
      projects:[
        {name:"munin", description:"integration wazuh , vcneter ,... with netbox for auto add new assets",link:"https://github.com/ghaem51/munin"},
      ]
    },
    {
      company: "Nik Modern",
      link: "https://jobinja.ir/companies/nikmodern-1/jobs",
      badges: ["part-time","remote"],
      title: "Full-stack Developer",
      logo: NikModernLogo,
      start: "Oct 2020",
      end: "Nov 2021",
      description: "Skills: React.js · MongoDB · ASP.NET MVC · React Native · SQL · Unity",
      projects:[
        {name:"munin", description:"integration wazuh , vcneter ,... with netbox for auto add new assets",link:"https://github.com/ghaem51/munin"},
      ]
    },
    {
      company: "HiWEB",
      link: "https://www.hiweb.ir/",
      badges: ["full-time","on-site"],
      title: "Intern for a month Network Support SpecialistNetwork Support Specialist",
      logo: HiWebLogo,
      start: "Sep 2020",
      end: "Oct 2020",
      description: "Skills: Firewalls · Networking · mikrotick",
      projects:[
        {name:"munin", description:"integration wazuh , vcneter ,... with netbox for auto add new assets",link:"https://github.com/ghaem51/munin"},
      ]
    },
    {
      company: "Nik Modern",
      link: "https://jobinja.ir/companies/nikmodern-1/jobs",
      badges: ["full-time","remote"],
      title: "Full-stack Developer",
      logo: NikModernLogo,
      start: "May 2019",
      end: "Oct 2019",
      description: "Skills: React.js · MongoDB · ASP.NET MVC · React Native · SQL · Unity",
      projects:[
        {name:"unin", description:"integration wazuh , vcneter ,... with netbox for auto add new assets",link:"https://github.com/ghaem51/munin"},
      ]
    }
  ],
  skills: [
    "Netbox",
    "Opensearch",
    "Logstash",
    "Graylog",
    "Vault",
    "Haproxy",
    "Nginx",
    "Wazuh",
    "Ansible",
    "Network Security",
    "FortiWeb",
    "Mikrotick",
    "Virtual Private Network(VPN)",
    "Security",
    "Networking",
    "React.js",
    "MongoDB",
    "C++",
    "C#",
    "ASP.net",
    "Python",
    "React Native",
    "SQL",
    "Unity",
  ],
  projects: [
    {
      title: "Munin",
      techStack: [
        "Python",
        "Netbox",
        "Vcenter",
        "Wazuh",
      ],
      description: "Integrated Wazuh and vCenter with NetBox enables the automatic addition of new assets",
      logo: muninLogo,
      link: {
        label: "munin",
        href: "https://github.com/ghaem51/munin",
      },
    },
    {
      title: "Bifrost",
      techStack: ["Python", "Opensearch", "bash"],
      description:
        "Bifrost is a Python tool for managing multi-cluster data in OpenSearch, automating snapshot creation and index deletion for enhanced efficiency",
      logo: BifrostLogo,
      link: {
        label: "bifrost",
        href: "https://github.com/ghaem51/bifrost",
      },
    },
    {
      title: "dejavo",
      techStack: ["Python", "wazuh", "defectdojo"],
      description:
        "Auto integrates Wazuh vulnerabilities into DefectDojo with a simple Python project, enhancing vulnerability tracking and management efficiency",
      logo: Defectdojo_WazuhLogo,
      link: {
        label: "dejavu",
        href: "https://github.com/ghaem51/dejavu",
      },
    }
  ],
  achievements:[
    {
      logo: "",
      name: "VM2",
      techStack: ["nodejs","RCE"],
      description: "Vm2 sandbox allows running untrusted code with whitelisted Node modules but is vulnerable to Arbitrary Code Execution.",
      link: "https://security.snyk.io/vuln/SNYK-JS-VM2-2990237",
    },
    {
      logo: "",
      name: "CVE-2022-32211",
      techStack: ["nodejs","mongodb","NoSQLInjection"],
      description: "NoSQL injection vulnerability in Rocket.Chat <v3.18.6, <v4.4.4, <v4.7.3 allows attacker to retrieve reset password token or 2FA secret.",
      link: "https://docs.rocket.chat/docs/cve-2022-32211",
    },
  ]
} as const;
