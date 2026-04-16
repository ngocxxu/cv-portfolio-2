export const DataUser = {
  home: {
    linkCV:
      'https://www.topcv.vn/xem-cv/DFlWBgQGAw9dDwILVwIFVg4GCQ8MAgIDXFQLUg74ed',
    name: 'Ngoc Quach',
    enName: 'Bono',
    jobTitle: 'Fullstack Developer',
    address: 'Ho Chi Minh City, Viet Nam',
    bigText: 'Say Hi from Ngoc, Fullstack Developer',
    bigText2: 'My energy never runs out at work!',
    mail: 'ngocquach43@gmail.com',
    dateToWork: '06/2021',
    smallText:
      'As a Software Engineer, I specialize in architecting robust and scalable backend systems. My approach prioritizes efficiency, high performance, and clean code in every infrastructure project I undertake. This engineering philosophy fuels my commitment to building highly reliable applications every day.',
  },
  about: {
    bigText: 'Every great application begins with a rock-solid foundation.',
    smallText:
      'With a comprehensive background in full-lifecycle web development, I have found my true passion in Backend engineering and Cloud infrastructure. Because I deeply understand how frontends consume data, I am able to design highly optimized APIs, automate deployment pipelines, and build scalable backend systems. The prospect of joining a tech-driven company excites me, as I prioritize tackling complex system architecture challenges. Combining server-side logic with DevOps practices, I am highly adaptable—always ready to master new technologies as company needs evolve to deliver innovative, high-performance solutions.',
  },
  resume: {
    experience: [
      {
        time: '10/2024 - Present',
        company: 'ST Engineering',
        position: 'Fullstack Developer',
        description: [
          '- Built and optimized backend services and APIs to handle efficient data flow and maintain system uptime.',
          '- Deployed scalable backend systems via Kubernetes and Docker, and streamlined CI/CD pipelines for automated delivery.',
          '- Collaborated with cross-functional teams to integrate APIs, troubleshooting end-to-end functionality for seamless system operations.',
          '- Implemented automated and reproducible environment setups utilizing core AWS services.',
        ],
      },
      {
        time: '06/2022 - 09/2024',
        company: 'Nexon Co., Ltd.',
        position: 'Fullstack Developer',
        description: [
          '- Engineered services for publishing and management systems, focusing on the core functionality of the Attendance page.',
          '- Collaborated tightly with engineers to design API integrations, build features, and conduct system experiments.',
          '- Troubleshot application codes and debugged software layers to resolve issues and ensure stable system performance.',
          '- Monitored and optimized client-side UI performance, ensuring consistent application rendering across various browser environments.',
        ],
      },
      {
        time: '11/2021 - 05/2022',
        company: 'MiTek Vietnam (Platinum Global Co., Ltd.)',
        position: 'Frontend Developer',
        description: [
          '- Design, code, test and debug new software utilizing technologies for the project assigned.',
          '- Website about construction process management, a house when built will display information including materials, time and labor. Customers can monitor and request changes directly on that house.',
          '- Participate in resolving production issues and tackling bugs in the system.',
          '- Work in an Agile software development environment (using Scrum), participating in daily scrum meetings, monthly retrospective and planning meetings.',
        ],
      },
      {
        time: '06/2021 - 08/2021',
        company: 'Kyanon Digital',
        position: 'Intern Frontend Developer',
        description: [
          '- Building UI for the landing page of the website on the client-side and server-side.',
          '- Join in realistic projects and daily meetings with team and customer.',
          '- Work with other project members, responsible for the implementation & code review.',
          '- Ensure the assigned tasks to be performed on-time and with high quality.',
        ],
      },
    ],
    education: [
      {
        time: '06/2023 - 12/2024',
        company: 'University of Information Technology (2nd Degree)',
        position: 'Information Technology',
      },
      {
        time: '08/2015 - 09/2019',
        company: 'Ton Duc Thang University',
        position: 'Chemical Engineering',
      },
    ],
  },
  services: [],
  skills: [],
  portfolio: {
    coding: [
      {
        imgTitle: 'vocab',
        image:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1764484658/Screenshot_2025-11-30_at_13.36.57_vqw0hq.png',
        images: [
          'https://res.cloudinary.com/ngocxxu/image/upload/v1764484919/Screenshot_2025-11-30_at_13.41.33_x9mdsa.png',
          'https://res.cloudinary.com/ngocxxu/image/upload/v1764485022/Screenshot_2025-11-30_at_13.43.04_gdkdx9.png',
          'https://res.cloudinary.com/ngocxxu/image/upload/v1764484658/Screenshot_2025-11-30_at_13.36.57_vqw0hq.png',
        ],
        title: 'Vocabulary Management',
        description:
          'For this project, I architected a self-hosted infrastructure on a VPS, systematically provisioning environments with Ansible and orchestrating microservices via K3s. To ensure automated and reliable continuous delivery, I implemented GitOps methodologies using FluxCD. The core application is powered by a robust backend engineered with NestJS, PostgreSQL, and Supabase, which integrates Redis and BullMQ for highly efficient asynchronous message queuing and background task processing. Furthermore, to maintain high system reliability and comprehensive observability, I configured Grafana for metrics monitoring, integrated Doppler for secure secrets management, and utilized Sentry for error tracking across the application.',
        hashtag: ['#fullstack', '#k8s', '#vocabulary'],
        frontend: 'https://github.com/ngocxxu/vocab-management-fe-2',
        backend: 'https://github.com/ngocxxu/vocab-management-be-2',
        devops: 'https://github.com/ngocxxu/infrastructure',
        demo: 'https://vocab.ngocquach.com/',
      },
      // {
      //   porfolioImage:
      //     "https://res.cloudinary.com/ngocxxu/image/upload/v1678979108/CV/democinema_y3pwag.png",
      //   title: "Cinema Management",
      //   description:
      //     "Cinema web is used to such as booking tickets as customer role and film & user management as admin role.",
      //   hashtag: ["#reactjs", "#booking", "#manage"],
      //   linkGithub: "https://github.com/ngocxxu/Cinema-Project",
      //   linkDemo: "https://zupi-cinema-project.web.app/",
      // },
      // {
      //   porfolioImage:
      //     "https://res.cloudinary.com/ngocxxu/image/upload/v1678979108/CV/demojira_lpuawr.png",
      //   title: "Jira Management",
      //   description:
      //     "Jira web is used to control the projects and tasks for members and help managers can be easy interact.",
      //   hashtag: ["#reactjs", "#tasks", "#manage"],
      //   linkGithub: "https://github.com/ngocxxu/JIRA_PROJECT",
      //   linkDemo: "https://zupi-jira-project.web.app/",
      // },
      // {
      //   porfolioImage:
      //     "https://res.cloudinary.com/ngocxxu/image/upload/v1678979110/CV/democv_ie8bc8.png",
      //   title: "Curriculum Vitae",
      //   description:
      //     "This project is used to help employers consult and learn more information from candidates.",
      //   hashtag: ["#reactjs", "#cv", "#information"],
      //   linkGithub: "https://github.com/ngocxxu/CV-Porfolio",
      //   linkDemo: "https://cv-bono-project.web.app/",
      // },
      // {
      //   porfolioImage:
      //     "https://res.cloudinary.com/ngocxxu/image/upload/v1678979108/CV/demomini2_l1wuar.png",
      //   title: "Chinese Dice",
      //   description:
      //     "Dice games are games that use or incorporate one or more dice as their sole or central component.",
      //   hashtag: ["#reactjs", "#game", "#dice"],
      //   linkGithub: "https://github.com/ngocxxu/BC08E-TaiXiu-Bono",
      //   linkDemo: "https://taixiucovid.netlify.app/",
      // },
      // {
      //   porfolioImage:
      //     "https://res.cloudinary.com/ngocxxu/image/upload/v1678979109/CV/demomini3_yvnykf.png",
      //   title: "Rock, Paper, Scissors",
      //   description:
      //     "Between two people which each player randomly forms one of three shapes from their hand.",
      //   hashtag: ["#reactjs", "#game", "#hand"],
      //   linkGithub: "https://github.com/ngocxxu/BC08E-OanTuTi-BaoNgoc",
      //   linkDemo: "https://oantuticovid.netlify.app/",
      // },
    ],
    design: [
      {
        porfolioImage:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1678979107/CV/demo4_hxflo9.png',
        title: 'Carousel 1',
        description:
          'A small project is taken and inspired which based on my handmade product. I use Illustrator app to build it',
        hashtag: ['#illustrator', '#paracord', '#strong'],
        linkDemo:
          'https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ',
      },
      {
        porfolioImage:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1678979107/CV/demo5_ifah0s.png',
        title: 'Carousel 2',
        description:
          'A small project is taken and inspired which based on my handmade product. I use Illustrator app to build it',
        hashtag: ['#illustrator', '#paracord', '#strong'],
        linkDemo:
          'https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ',
      },
      {
        porfolioImage:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1678979108/CV/demo6_bbppm4.png',
        title: 'Themes',
        description:
          'A small project is taken and inspired which based on my handmade product. I use Figma app to build it',
        hashtag: ['#illustrator', '#paracord', '#strong'],
        linkDemo:
          'https://www.figma.com/file/Gc6fEczJDy8ZoOw0z53zEE/Zupi-Paracord?node-id=0%3A1',
      },
      {
        porfolioImage:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1678979108/CV/demo1_a3y96s.png',
        title: 'Carousel 3',
        description:
          'A small project is taken and inspired which based on my handmade product. I use Illustrator app to build it',
        hashtag: ['#illustrator', '#paracord', '#strong'],
        linkDemo:
          'https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ',
      },
      {
        porfolioImage:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1678979107/CV/demo2_t3vklj.png',
        title: 'Carousel 4',
        description:
          'A small project is taken and inspired which based on my handmade product. I use Illustrator app to build it',
        hashtag: ['#illustrator', '#paracord', '#strong'],
        linkDemo:
          'https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ',
      },
      {
        porfolioImage:
          'https://res.cloudinary.com/ngocxxu/image/upload/v1678979107/CV/demo3_irelqr.jpg',
        title: 'Logo',
        description:
          'A small project is taken and inspired which based on my handmade product. I use Illustrator app to build it',
        hashtag: ['#illustrator', '#paracord', '#logo'],
        linkDemo:
          'https://drive.google.com/drive/folders/1Yfup9A77cBjFntYUZrC9RcLzVASHbasZ',
      },
    ],
  },
  testiminial: {
    quotes: [
      {
        id: 1,
        content:
          'Today is hard, tomorrow will be worse but the day after tomorrow will be sunshine.',
        author: 'Jack Ma',
      },
      {
        id: 2,
        content:
          'Life is like riding a bicycle. To keep your balance, you must keep moving.',
        author: 'Albert Einstein',
      },
      {
        id: 3,
        content:
          'Success is most often achieved by those who don’t know that failure is inevitable.',
        author: 'Coco Chanel',
      },
      {
        id: 4,
        content:
          'Life is not about waiting for the storm to pass, it’s about learning to dance in the rain.',
        author: 'Vivian Greene',
      },
    ],
    quotes_2: [
      {
        id: 1,
        content:
          'Lazy makes poor, but diligent does not make rich but you will not starve.',
        author: 'Ngoc Quach',
      },
      {
        id: 2,
        content: 'When you want to give up, remember why you started.',
        author: 'Noname',
      },
      {
        id: 3,
        content: 'No challenge shall never know all its capabilities.',
        author: 'Goethe',
      },
      {
        id: 4,
        content:
          'On the way to success, there will be no footprints of the lazy.',
        author: 'Noname',
      },
    ],
  },
};
