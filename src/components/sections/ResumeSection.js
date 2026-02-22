'use client';

import { useState, useEffect, useRef } from 'react';
import {
    SiPython, SiScala, SiMysql, SiCplusplus, SiC, SiPhp, SiDart,
    SiNodedotjs, SiNestjs, SiLaravel, SiHtml5, SiCss3, SiJavascript,
    SiReact, SiTailwindcss, SiBootstrap, SiMongodb, SiGithub, SiGitlab, SiPostman,
    SiFigma, SiCpanel, SiJupyter, SiPandas,
    SiNumpy, SiDocker
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { BiBarChartAlt } from 'react-icons/bi';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

export default function Resume() {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [expLineHeight, setExpLineHeight] = useState(0);
    const [eduLineHeight, setEduLineHeight] = useState(0);
    const expTimelineRef = useRef(null);
    const eduTimelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const startPoint = windowHeight * 0.8;
            const endPoint = windowHeight * 0.2;

            // Handle Experience Timeline
            if (expTimelineRef.current) {
                const rect = expTimelineRef.current.getBoundingClientRect();
                const totalHeight = rect.height;
                const scrollProgress = (startPoint - rect.top) / (startPoint - endPoint + totalHeight - (windowHeight * 0.6));
                setExpLineHeight(Math.min(Math.max(scrollProgress * 100, 0), 100));
            }

            // Handle Education Timeline
            if (eduTimelineRef.current) {
                const rect = eduTimelineRef.current.getBoundingClientRect();
                const totalHeight = rect.height;
                const scrollProgress = (startPoint - rect.top) / (startPoint - endPoint + totalHeight - (windowHeight * 0.6));
                setEduLineHeight(Math.min(Math.max(scrollProgress * 100, 0), 100));
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const skills = [
        { name: "Python", icon: SiPython },
        { name: "Scala", icon: SiScala },
        { name: "SQL", icon: SiMysql },
        { name: "C++", icon: SiCplusplus },
        { name: "C", icon: SiC },
        { name: "PHP", icon: SiPhp },
        { name: "Dart", icon: SiDart },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "NestJS", icon: SiNestjs },
        { name: "Laravel", icon: SiLaravel },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React.js", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "GitHub", icon: SiGithub },
        { name: "GitLab", icon: SiGitlab },
        { name: "Postman", icon: SiPostman },
        { name: "Figma", icon: SiFigma },
        { name: "cPanel", icon: SiCpanel },

        { name: "Power BI", icon: BiBarChartAlt },
        { name: "Jupyter", icon: SiJupyter },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Docker", icon: SiDocker },
        { name: "Azure Pipelines", icon: VscAzureDevops },
    ];

    const experience = [
        {
            title: "Intern Software Engineer",
            company: "Dialog Axiata PLC",
            period: "December 2025 - Present",
            description: "Currently contributing to an analytics-based automation system for new network cell deployment at Dialog Axiata PLC.",
        },
        {
            title: "Full Stack Developer",
            company: "Ceygenic Global",
            period: "February 2025 – October 2025 (Part-Time)",
            description: "Worked on medium to large-scale client-focused web applications, contributing to both front-end and back-end development.",
        },
    ];

    const education = [
        {
            degree: "B.Sc. in Computer Science",
            institution: "University of Colombo",
            period: "2023 - 2026",
            description: "GPA: [ GPA] | [Degree Class]",
        },
        {
            degree: "GCE Advanced Level",
            institution: "Holy Angels Girls College",
            period: "2008 - 2021",
            description: "Maths Stream – ICT: A, Combined Maths: B, Physics: C (Z-Score: 1.679)",
        },
    ];

    return (
        <section id="resume" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black pt-24 pb-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        Resume
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto"></div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-white text-center">Skills & Technologies</h3>
                    <div className="relative w-full max-w-4xl mx-auto h-[450px] flex items-center justify-center">


                        {/* Stars in Sky Layout */}
                        <div className="relative w-full h-full">
                            {skills.map((skill, index) => {
                                // Predefined scattered positions (like stars in the sky)
                                const positions = [
                                    { x: -28, y: -32, size: 10 },      // Python
                                    { x: -14, y: -36, size: 10 },      // Scala
                                    { x: 0, y: -35, size: 10 },        // SQL
                                    { x: 14, y: -36, size: 10 },       // C++
                                    { x: 28, y: -32, size: 10 },       // C
                                    { x: -32, y: -22, size: 10 },      // PHP
                                    { x: -20, y: -23, size: 10 },      // Dart
                                    { x: -7, y: -24, size: 10 },       // Node.js
                                    { x: 7, y: -24, size: 10 },        // NestJS
                                    { x: 20, y: -23, size: 10 },       // Laravel
                                    { x: 32, y: -22, size: 10 },       // HTML
                                    { x: -34, y: -10, size: 10 },      // CSS
                                    { x: -22, y: -11, size: 10 },      // JavaScript
                                    { x: -7, y: -12, size: 10 },       // React.js
                                    { x: 7, y: -12, size: 10 },        // Tailwind CSS
                                    { x: 22, y: -11, size: 10 },       // Bootstrap
                                    { x: 34, y: -10, size: 10 },       // MongoDB
                                    { x: -25, y: 2, size: 10 },        // MySQL
                                    { x: -11, y: 0, size: 10 },        // GitHub
                                    { x: 11, y: 0, size: 10 },         // GitLab
                                    { x: 25, y: 2, size: 10 },         // Postman
                                    { x: -30, y: 14, size: 10 },       // Figma
                                    { x: -16, y: 12, size: 10 },       // cPanel
                                    { x: 0, y: 15, size: 10 },         // Power BI
                                    { x: 16, y: 12, size: 10 },        // Jupyter
                                    { x: 30, y: 14, size: 10 },        // Pandas
                                    { x: -18, y: 26, size: 10 },       // NumPy
                                    { x: 0, y: 28, size: 10 },         // Docker
                                    { x: 18, y: 26, size: 10 },        // Azure Pipelines
                                ];

                                const position = positions[index % positions.length];
                                const IconComponent = skill.icon;

                                const isHovered = hoveredSkill === skill.name;
                                const shouldBlur = hoveredSkill && !isHovered;

                                return (
                                    <button
                                        key={index}
                                        onMouseEnter={() => setHoveredSkill(skill.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        title={skill.name}
                                        className={`group absolute transition-all duration-300 ${shouldBlur ? 'blur-[1px] opacity-80' : 'blur-none'} ${isHovered ? 'z-30' : 'z-10'}`}
                                        style={{
                                            left: `${50 + position.x}%`,
                                            top: `${50 + position.y}%`,
                                            transform: 'translate(-50%, -50%)',
                                            animation: `float-${(index % 5) + 1} ${4 + (index % 3)}s ease-in-out infinite`,
                                            animationDelay: `${(index % 10) * 0.2}s`,
                                        }}
                                    >
                                        {/* Star-like glow effect */}
                                        <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ width: `${position.size * 6}px`, height: `${position.size * 6}px`, transform: 'translate(-25%, -25%)' }}></div>

                                        <div
                                            className="relative bg-gradient-to-br from-purple-600/80 to-purple-500/60 rounded-lg flex items-center justify-center hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:scale-125 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/60"
                                            style={{
                                                width: `${position.size * 4}px`,
                                                height: `${position.size * 4}px`
                                            }}
                                        >
                                            <IconComponent
                                                className="text-white transition-all"
                                                style={{ width: `${position.size * 2.5}px`, height: `${position.size * 2.5}px` }}
                                            />
                                        </div>

                                        {/* Tooltip on hover */}
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-purple-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none border border-purple-500/50 shadow-lg z-50">
                                            {skill.name}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="max-w-3xl mx-auto px-4 mb-24">
                    <h3 className="text-3xl font-bold mb-12 text-white text-center">Work Experience</h3>

                    <div
                        ref={expTimelineRef}
                        className="relative ml-4 pl-10 flex flex-col gap-12"
                    >
                        <div className="absolute left-0 top-0 w-[2px] h-full bg-purple-500/10 rounded-full"></div>
                        <div
                            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(192,132,252,0.6)] transition-all"
                            style={{ height: `${expLineHeight}%` }}
                        ></div>

                        {/* Experience Items */}
                        {experience.map((job, index) => (
                            <div key={`exp-${index}`} className="relative">
                                {/* Timeline Dot & Icon */}
                                <div className="absolute -left-[61px] top-0 w-10 h-10 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center z-10">
                                    <FaBriefcase className="text-purple-400 text-sm" />
                                </div>

                                <div className="flex flex-col mb-1">
                                    <h4 className="text-xl font-bold text-white leading-tight mb-1">{job.title}</h4>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                                        <div className="flex items-center gap-1.5 text-gray-400">
                                            <FaCalendarAlt className="text-xs" />
                                            <span className="text-sm font-medium">{job.period}</span>
                                        </div>
                                        <span className="text-purple-400 font-medium text-lg md:text-right">{job.company}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mt-3 text-justify">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="max-w-3xl mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-12 text-white text-center">Education</h3>

                    <div
                        ref={eduTimelineRef}
                        className="relative ml-4 pl-10 flex flex-col gap-12 mb-16"
                    >
                        <div className="absolute left-0 top-0 w-[2px] h-full bg-purple-500/10 rounded-full"></div>
                        <div
                            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(192,132,252,0.6)] transition-all"
                            style={{ height: `${eduLineHeight}%` }}
                        ></div>

                        {/* Education Items */}
                        {education.map((edu, index) => (
                            <div key={`edu-${index}`} className="relative">
                                {/* Timeline Dot & Icon */}
                                <div className="absolute -left-[61px] top-0 w-10 h-10 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center z-10">
                                    <FaGraduationCap className="text-purple-400 text-sm" />
                                </div>

                                <div className="flex flex-col mb-1">
                                    <h4 className="text-xl font-bold text-white leading-tight mb-1">{edu.degree}</h4>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                                        <div className="flex items-center gap-1.5 text-gray-400">
                                            <FaCalendarAlt className="text-xs" />
                                            <span className="text-sm font-medium">{edu.period}</span>
                                        </div>
                                        <span className="text-purple-400 font-medium text-lg md:text-right">{edu.institution}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mt-3 text-justify">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
