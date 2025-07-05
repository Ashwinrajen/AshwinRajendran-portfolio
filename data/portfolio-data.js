// ==========================================
// PORTFOLIO DATA
// ==========================================

const portfolioData = {
    projects: [
        {
            id: 1,
            icon: '🦾',
            category: 'Autonomous Systems',
            title: 'Autonomous Delivery Robot',
            tech: 'ROS2, Python, SLAM, Computer Vision, LiDAR',
            description: 'Developed a fully autonomous delivery robot capable of navigating complex indoor environments using advanced SLAM algorithms and real-time path planning.',
            demoLink: '#',
            githubLink: '#'
        },
        {
            id: 2,
            icon: '🦿',
            category: 'Medical Robotics',
            title: 'Robotic Prosthetic Arm',
            tech: 'C++, EMG Sensors, Machine Learning, Arduino',
            description: 'Created an affordable prosthetic arm with EMG-based control system, featuring 5 DOF and machine learning for gesture recognition.',
            paperLink: '#',
            videoLink: '#'
        },
        {
            id: 3,
            icon: '🏭',
            category: 'Industrial Automation',
            title: 'Smart Factory Robot Arm',
            tech: 'PLC, Computer Vision, TensorFlow, ROS',
            description: 'Implemented an intelligent robotic arm system for quality control in manufacturing, reducing defect rates by 40% using AI-powered visual inspection.',
            caseStudyLink: '#',
            specsLink: '#'
        },
        {
            id: 4,
            icon: '🚁',
            category: 'Aerial Robotics',
            title: 'Swarm Drone System',
            tech: 'Python, ArduPilot, ROS, Computer Vision',
            description: 'Designed a coordinated swarm of autonomous drones for search and rescue operations, featuring distributed decision-making and obstacle avoidance.',
            docsLink: '#',
            simulationLink: '#'
        }
    ],
    
    research: [
        {
            title: 'Human-Robot Collaboration in Manufacturing',
            publication: 'IEEE Robotics and Automation Letters, 2023',
            description: 'Developed novel algorithms for safe and efficient human-robot collaboration in industrial settings.',
            link: '#'
        },
        {
            title: 'Deep Learning for Robotic Grasping',
            publication: 'International Conference on Robotics and Automation, 2023',
            description: 'Presented a deep learning approach for robotic grasping of unknown objects in cluttered environments.',
            link: '#'
        },
        {
            title: 'Bio-Inspired Locomotion Control',
            publication: 'Journal of Bionic Engineering, 2022',
            description: 'Research on adaptive locomotion strategies inspired by biological systems for legged robots.',
            link: '#'
        }
    ],
    
    experience: [
        {
            date: '2022 - Present',
            position: 'Senior Robotics Engineer',
            company: 'Boston Dynamics',
            description: 'Leading development of next-generation autonomous robots. Specialized in motion planning and control systems for quadruped robots.'
        },
        {
            date: '2020 - 2022',
            position: 'Robotics Software Engineer',
            company: 'Tesla Autopilot',
            description: 'Developed perception algorithms for autonomous vehicles. Worked on sensor fusion and real-time object detection systems.'
        },
        {
            date: '2018 - 2020',
            position: 'Research Assistant',
            company: 'MIT Computer Science & AI Lab',
            description: 'Conducted research on human-robot interaction and developed novel algorithms for collaborative robotics.'
        },
        {
            date: '2017 - 2018',
            position: 'Robotics Intern',
            company: 'NASA Jet Propulsion Laboratory',
            description: 'Contributed to Mars rover navigation systems and autonomous exploration algorithms.'
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}