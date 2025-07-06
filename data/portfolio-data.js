// ==========================================
// PORTFOLIO DATA
// ==========================================

const portfolioData = {
    projects: [
        // {
        //     id: 1,
        //     icon: '🦾',
        //     category: 'Autonomous Systems',
        //     title: 'Autonomous Delivery Robot',
        //     tech: 'ROS2, Python, SLAM, Computer Vision, LiDAR',
        //     description: 'Developed a fully autonomous delivery robot capable of navigating complex indoor environments using advanced SLAM algorithms and real-time path planning.',
        //     demoLink: '#',
        //     githubLink: '#'
        // },
        // {
        //     id: 2,
        //     icon: '🦿',
        //     category: 'Medical Robotics',
        //     title: 'Robotic Prosthetic Arm',
        //     tech: 'C++, EMG Sensors, Machine Learning, Arduino',
        //     description: 'Created an affordable prosthetic arm with EMG-based control system, featuring 5 DOF and machine learning for gesture recognition.',
        //     paperLink: '#',
        //     videoLink: '#'
        // },
        // {
        //     id: 3,
        //     icon: '🏭',
        //     category: 'Industrial Automation',
        //     title: 'Smart Factory Robot Arm',
        //     tech: 'PLC, Computer Vision, TensorFlow, ROS',
        //     description: 'Implemented an intelligent robotic arm system for quality control in manufacturing, reducing defect rates by 40% using AI-powered visual inspection.',
        //     caseStudyLink: '#',
        //     specsLink: '#'
        // },
        // {
        //     id: 4,
        //     icon: '🚁',
        //     category: 'Aerial Robotics',
        //     title: 'Swarm Drone System',
        //     tech: 'Python, ArduPilot, ROS, Computer Vision',
        //     description: 'Designed a coordinated swarm of autonomous drones for search and rescue operations, featuring distributed decision-making and obstacle avoidance.',
        //     docsLink: '#',
        //     simulationLink: '#'
        // }
    ],
    
    research: [
        {
            title: 'Autonomous Floor and Staircase Cleaning Framework by Reconfigurable sTetro Robot with Perception Sensor',
            publication: 'Journal of Intelligent & Robotic Systems',
            description: 'Introduced sTetro, a reconfigurable cleaning robot capable of autonomously navigating and climbing staircases in multi-storey buildings using RGB-D mapping and a customized deep convolutional neural network. The system achieves high accuracy in staircase detection and efficient area coverage across both floors and stairs.',
            link: 'https://link.springer.com/article/10.1007/s10846-020-01281-2'
        },
        {
            title: 'Disease Classification in Solanum melongena using Deep learning',
            publication: 'Spanish Journal of Agricultural Research',
            description: 'Applied pre-trained deep learning models (AlexNet, VGG16) to classify five diseases and healthy cases in eggplant using field-acquired smartphone images, achieving up to 96.7% validation accuracy with a modified VGG16 architecture. The study emphasizes whole-plant image usage and dataset augmentation for improved real-world disease detection.',
            link: 'https://sjar.revistas.csic.es/index.php/sjar/article/view/14762'
        },
        {
            title: 'Grape crop disease classification using Transfer learning approach',
            publication: '2018 ISMAC-CVB– Springer',
            description: 'Utilized a transfer learning approach with AlexNet to classify grape leaf diseases, achieving 97.62% accuracy using CNN and 99.23% using MSVM with features from the ReLU3 layer. The study demonstrates effective disease detection using deep learning on the PlantVillage dataset.',
            link: 'https://link.springer.com/chapter/10.1007/978-3-030-00665-5_150'
        },
        {
            title: 'Disease Classification in Maize Crop using Bag of Features and Multiclass Support Vector Machine',
            publication: 'IEEE ICISC– IEEE Xplore',
            description: 'Used image processing and multiclass SVM to classify maize leaf diseases from the PlantVillage dataset, achieving up to 83.7% accuracy using a bag of features approach and 81.3% with combined statistical features. The study highlights the role of texture-based analysis for early crop disease detection.',
            link: 'https://ieeexplore.ieee.org/document/8398993'
        }
    ],
    
    experience: [
        {
            date: 'January 2024 – Present',
            position: 'Software Robotics Engineer',
            company: 'BeeX, Marine Autonomous Systems, Singapore',
            description: 'Spearheaded the development and integration of advanced software and perception systems for Autonomous Underwater Vehicles (AUVs), supporting mission-critical deployments and defense-related marine robotics projects.',
            details: {
                'Roles & Responsibilities': [
                    'Lead prototyping, development, integration, testing, and deployment of software and hardware enhancements for Autonomous Underwater Vehicles (AUV), significantly improving overall system architecture, performance, and efficiency.',
                    'Conduct rigorous sea trials and optimize vehicle systems for precise underwater survey and inspection missions, ensuring high-quality data collection and reports to clients aligned with International Hydrographic Organization (IHO) standards.',
                    'Collaborate with Singapore government-funded organizations and UK-based underwater research institutes on marine robotics projects related to underwater defence.',
                    'Collaboration with HTX, Singapore for safety and security projects in dealing with Ship Hull inspections, finding dead bodies at sea floor and Mine target detections.',
                    'Collaborated with HTX Singapore on safety and security initiative projects, including ship hull inspections, underwater body recovery operations, and mine detection on seafloor.',
                    'Provide technical leadership and on-site support to the Robot Support Team, ensuring seamless execution of deployments and trials.',
                    'Continuously enhance system architecture, ensuring scalability and adaptability to evolving mission requirements.'
                ],
                'Technical Achievements': [
                    'Developed comprehensive, high-performance vision processing pipelines including camera driver integration, AI GAN-based underwater image enhancement, and optimized H264 video compression leveraging hardware acceleration, achieving ultra-low latency, high-quality underwater video streams.',
                    'Implemented automated Computer Vision Annotation Tool (CVAT) pipelines to streamline ML dataset annotation, significantly boosting annotator productivity and ensuring rapid deployment of accurate object and anomaly detection models.',
                    'Managed the end-to-end integration of critical AUV sensors such as Lights, 2D Forward Looking Sonar, 3D Sonar, Sidescan Sonar, Stereo Vision Systems, Doppler Velocity Logger (DVL), and Evologics Modems, from initial testing to production deployment, improving usability and reliability.',
                    'Enhanced software infrastructure through targeted improvements in time synchronization, system profiling, automated troubleshooting tools, INS navigation systems, data logging mechanisms, and internal AI based workflow automation tools.',
                    'Established a complete stereo vision pipeline encompassing driver development, automated data collection, photogrammetric processing, and marine growth measurement techniques, enabling detailed client reporting and accurate 3D modelling of underwater structures.'
                ]
            }
        },
        {
            date: 'June 2020 – December 2023',
            position: 'Software Robotics Engineer',
            company: 'Lionsbot International, Cleaning Robotics Systems, Singapore',
            description: 'Led software development and production scaling of multi-robot cleaning systems, with a focus on autonomy, machine vision, and real-world deployment. Delivered fully functional prototypes and enhanced perception pipelines.',
            details: {
                'Factory-Level Automation & Multi-Robots Production Enhancement': [
                    'Led robot production teams, ensuring high-quality control and rapid issue resolution on both software and hardware across various autonomous cleaning robot models.',
                    'Developed automated QA modules, significantly accelerating the production capacity to 800 units within six months.',
                    'Engaged with managers and development teams to systematically identify, troubleshoot, and resolve production bottlenecks, ensuring consistent operational efficiency.',
                    'Provided onsite technical support during robot deployments and trials.'
                ],
                'Software Autonomy & Machine Vision Stack Enhancements': [
                    'Managed the full Software Development Lifecycle (SDLC), including requirement analysis, system design, implementation, testing, peer code reviews and ongoing maintenance of robotic software applications.',
                    'Engineered advanced negative obstacle detection and ground segmentation methodologies, enhancing robotic navigation safety in complex cleaning environments.',
                    'Developed automated calibration toolkits for vision sensors, streamlining the calibration process and significantly reducing manual intervention.',
                    'Optimized perception pipelines for efficient image preprocessing for large-scale dataset handling and expanded AI detection models, managing end-to-end deployment.',
                    'Optimized vision sensor drivers to substantially reduce CPU memory usage.',
                    'Implemented advanced sensor fusion models combining Lidar and camera, significantly improving object detection and distance estimation accuracy.'
                ],
                'R&D and Prototyping – Staircase Cleaning Robot (Descending)': [
                    'Delivered 6 functional robots to Lionsbot International and Singapore’s IMDA Board.',
                    'Engineered full-stack functionality—ROS drivers, behavior trees, firmware, and personality modules with voice packs, pager, and app interface for enhanced user interaction.'
                ]
            }
        },
        {   
            date: 'Jan 2020 – Jun 2020',
            position: 'Junior Research Engineer',
            company: 'Singapore University of Technology and Design, Singapore',
            description: 'Contributed to the R&D of an autonomous staircase-cleaning robot, developing complete autonomy and perception stacks from simulation to real-world deployment using sensor fusion and deep learning.',
            details: {
                'R&D Project – Staircase Cleaning Robot (Ascending)': [
                    'Designed and developed a real-world autonomous stair-climbing cleaning robot, progressing from URDF simulation to physical deployment with integrated sensor fusion (LiDAR, depth camera, IMU, ultrasonic) for robust perception.',
                    'Implemented a full autonomy stack including PID controllers, deep learning–based staircase detection, and image processing for localization, enabling reliable stair ascent and targeted cleaning operations.'
                ]
            }
        },
        {   
            date: 'May 2019 – Jun 2019',
            position: 'Robotics Research Intern',
            company: 'Swaayatt Robots, India',
            description: 'Designed and simulated a four-wheeled autonomous SUV in Gazebo using Ackermann steering, Pure Pursuit control and PID controller, while researching robot dynamics to implement precise trajectory tracking and optimized motion planning.'
        },
        {   
            date: 'Nov 2018 – Dec 2018',
            position: 'Embedded & Software Engineer Intern',
            company: 'Aspagteq Technology, India',
            description: 'Collaborated on the development of a ROS-based humanoid robot for autonomous student assistance in schools, integrating SLAM, differential drive navigation, and synchronized sensor modules through multi-language firmware programming (C++, Python, Embedded C).'
            
        },
        {   
            date: 'Aug 2017 – Feb 2018',
            position: 'Undergraduate Research Assistant',
            company: 'SASTRA Deemed to be University, India',
            description: 'Conducted AI-driven research in agricultural automation under Dr. Raja Purushothaman (Professor, School of Mechanical Engineering), developing a robotic platform for real-time crop image acquisition and plant disease detection using image processing techniques and ML/DL models (SVM, Random Forest, transfer learning); co-authored 3 research publications based on the work.'
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}