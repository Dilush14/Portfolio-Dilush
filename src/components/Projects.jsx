import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const Projects = ({ darkMode }) => {

    const projects = [
        {
            id: 1,
            title: "SKM Construction Website",
            desc: "Construction company website with project registration and CRUD functionality.",
            image: project1,
            tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            demo: "#",
            code: "#"
        },
        {
            id: 2,
            title: "Online Gaming Management System",
            desc: "Web-based gaming system with player management and CRUD operations.",
            image: project2,
            tags: ["Java", "JavaScript", "CSS", "MySQL"],
            demo: "#",
            code: "#"
        },
        {
            id: 3,
            title: "Pet Care & Adoption Management System",
            desc: "Full-stack MERN application for pet listing and adoption management.",
            image: project3,
            tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
            demo: "#",
            code: "#"
        },
        {
            id: 4,
            title: "Mobile App UI – Figma",
            desc: "Mobile application UI design focused on clean layout and usability.",
            image: project4,
            tags: ["Figma", "UI/UX Design"],
            demo: "#",
            code: "#"
        },
        {
            id: 5,
            title: "Android App – UI/UX Implementation",
            desc: "Android application focusing on UI/UX layout implementation.",
            image: project5,
            tags: ["Kotlin", "Android Studio"],
            demo: "#",
            code: "#"
        },
        {
            id: 6,
            title: "Wellness Tracker App",
            desc: "Mobile wellness tracking application with CRUD functionality.",
            image: project6,
            tags: ["Kotlin"],
            demo: "#",
            code: "#"
        },
        {
            id: 7,
            title: "Portfolio Website",
            desc: "Personal portfolio website with responsive design and dark/light mode.",
            image: project3,
            tags: ["React.js", "Tailwind CSS", "Framer Motion"],
            demo: "#",
            code: "#"
        }
    ];

  return (
    <section
    id='projects'
    style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
    }}
    className='relative py-24'
    >
        <div className='container mx-auto px-4'>
            <div className='text-center mb-10' data-aos='fade-up'>
                <h2
                className='text-3xl sm:text-4xl font-bold mb-3'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}
                >
                    My <span
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                        >
                        Projects
                    </span>
                </h2>
                <p
                className='text-lg max-w-2xl mx-auto leading-relaxed'
                style={{
                    color: darkMode ? '#d1d5db' : '#4b5563'
                }}
                >
                    Hands-on projects demonstrating my technical skills and readiness for real development environments.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    style={{
                        background: darkMode
                            ? 'linear-gradient(to right, #1f2937, #111827)'
                            : 'linear-gradient(to right, #ffffff, #f9fafb)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay={index * 100}
                    >
                        <div className='h-36 overflow-hidden rounded-t-xl'>
                            <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                        </div>
                        <div className='p-4'>
                            <h3
                            className='text-lg font-bold mb-2'
                            style={{
                                color: darkMode ? 'white' : '#1f2937'
                            }}
                            >
                                {project.title}
                            </h3>
                            <p
                            className='text-sm mb-3'
                            style={{
                                color: darkMode ? '#d1d5db' : '#6b7280'
                            }}
                            >
                                {project.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.tags.map((tag, idx) => (
                                    <span
                                    key={idx}
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? '#d1d5db' : "#4b5563"
                                    }}
                                    className='px-2 py-1 text-xs rounded-full'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex gap-2'>
                                {/* Code */}
                                <a
                                href={project.code}
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                    color: darkMode ? 'white' : "#374151"
                                }}
                                className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                data-aos='zoom-in'
                                data-aos-delay='300'
                                >
                                    <FaGithub className='text-sm' />
                                    <span>Code</span>
                                </a>

                                {/* Demo */}
                                <a
                                href={project.demo}
                                style={{
                                    background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                }}
                                className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                data-aos='zoom-in'
                                data-aos-delay='400'
                                >
                                    <FaExternalLinkAlt className='text-sm' />
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10'>
                <a
                href='https://github.com/Dilush14'
                style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)'
                }}
                className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                data-aos='zoom-in'
                data-aos-delay='400'
                >
                    <FaGithub />
                    <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm' />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projects