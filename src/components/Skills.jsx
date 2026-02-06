import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaGit,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiKotlin,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import { MdOutlinePhoneAndroid } from "react-icons/md";

const Skills = ({ darkMode }) => {

    const skills = [
    // Programming Languages
    { name: "C", icon: SiC, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "C++", icon: SiCplusplus, level: 80, color: "from-indigo-500 to-purple-500" },
    { name: "Java", icon: FaJava, level: 90, color: "from-orange-500 to-amber-500" },
    { name: "Python", icon: FaPython, level: 85, color: "from-blue-500 to-yellow-500" },
    { name: "JavaScript", icon: FaJs, level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "Kotlin", icon: SiKotlin, level: 80, color: "from-purple-500 to-pink-500" },

    // Frontend Development
    { name: "HTML", icon: FaHtml5, level: 95, color: "from-orange-600 to-red-500" },
    { name: "CSS", icon: FaCss3Alt, level: 90, color: "from-blue-600 to-blue-400" },
    { name: "React.js", icon: FaReact, level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "from-cyan-500 to-teal-400" },

    // Backend Development
    { name: "Node.js", icon: FaNodeJs, level: 85, color: "from-green-500 to-emerald-500" },
    { name: "Express.js", icon: SiExpress, level: 85, color: "from-gray-400 to-gray-600" },
    { name: "PHP", icon: FaPhp, level: 75, color: "from-indigo-500 to-purple-500" },

    // Database Management
    { name: "MySQL", icon: SiMysql, level: 80, color: "from-blue-500 to-indigo-500" },
    { name: "MongoDB", icon: SiMongodb, level: 85, color: "from-green-600 to-green-400" },

    // Mobile Development
    { name: "Android Development", icon: MdOutlinePhoneAndroid, level: 80, color: "from-green-500 to-lime-500" },
    { name: "Flutter", icon: SiFlutter, level: 75, color: "from-cyan-400 to-blue-400" },

    // Tools & Design
    { name: "Git", icon: FaGit, level: 85, color: "from-orange-500 to-red-500" },
    { name: "GitHub", icon: FaGithub, level: 85, color: "from-yellow-800 to-yellow-200" },
    { name: "Figma", icon: FaFigma, level: 80, color: "from-pink-500 to-purple-500" },
    ];

  return (
    <section
    id='skills'
    style={{backgroundColor: darkMode ? '#111827' : '#f9fafb'}}
    className='py-14 relative overflow-hidden'
    >
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>
                    <h1
                    className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f2937'}}
                    >
                        My <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                            >
                            Skills
                        </span>
                    </h1>
                    <p
                    className='text-lg max-w-2xl mx-auto leading-relaxed'
                    style={{
                        color: darkMode ? '#d1d5db' : '#4b5563'
                    }}
                    >
                        A focused set of skills covering full-stack development, problem-solving, and modern web technologies.
                    </p>
                </div>
                <div
                className='flex flex-wrap -m-4'
                data-aos='fade-up'
                data-aos-delay='200'
                >
                    {skills.map((skill, index) => (
                        <div
                        className='p-4 lg:w-1/4 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300 + index * 100}`}
                        >
                            <div
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to bottom right, #1f2937, #111827'
                                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6',
                                backgroundColor: darkMode ? '#374152' : '#e5e7eb'
                            }}
                            className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:translate-y-2 group hover:shadow-[0_0_30px_rgb(255,165,0,0,0.15)]'
                            >
                                <div className='flex items-center mb-6'>
                                    <div
                                    style={{
                                        background: darkMode
                                            ? 'linear-gradient(to bottom right, #374151, #1f2937'
                                            : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb' 
                                    }}
                                    className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'
                                    >
                                        <div className="w-full h-full flex items-center justify-center">
                                            <skill.icon className="w-8 h-8 text-orange-500" />
                                        </div>
                                    </div>
                                    <h3
                                    className="text-xl font-bold ml-4"
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}
                                    >
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className="mb-2 flex justify-between items-center">
                                    <span
                                    className="font-medium"
                                    style={{
                                        color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}
                                    >
                                        Proficiency
                                    </span>
                                    <span
                                    style={{
                                        background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: 'transparent'
                                    }}
                                    className="font-bold"
                                    >
                                        {skill.level}%
                                    </span>
                                </div>
                                <div
                                className="w-full rounded-full h-3 overflow-hidden"
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                }}
                                >
                                    <div
                                    className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                    style={{width: `${skill.level}%`}}
                                    > 
                                    </div>
                                </div>
                                <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                    <div
                                    className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3"
                                    style={{
                                        background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                    }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills