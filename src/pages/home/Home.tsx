import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import emailjs from 'emailjs-com';

const Home: React.FC = () => {

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        Name: '',
        Company: '',
        'E-mail': '',
        Phone: '',
        Message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                'service_reur3ak', // Replace with your Service ID
                'template_91idtnp', // Replace with your Template ID
                formData,
                '6IN1I7v-Vw55vpnaw' // Replace with your User ID
            )
            .then((response) => {
                setFormData({
                    Name: '',
                    Company: '',
                    'E-mail': '',
                    Phone: '',
                    Message: '',
                });
                setSuccess('Your message has been sent successfully!' as string);
                setError(null);
            })
            .catch((error) => {
                setError('An error occurred while sending your message. Please try again later.' as string);
                setSuccess(null);
            });
    };


    return (
        <AppLayout>
            <div id="content" className="content">
                <div className="content__wrapper">
                    {/* Intro Section Start */}
                    <section id="home" className="main intro">
                        {/* Headline Start */}
                        <div
                            id="headline"
                            className="headline d-flex align-items-start flex-column"
                            data-speed={1}
                        >
                            <p className="headline__subtitle animate-headline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 13 13"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                                                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                                                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                                    />
                                </svg>
                                <span>Introducing myself!</span>
                            </p>
                            <h1 className="headline__title animate-headline text-start">
                                I'm Tharindu Wijayarathna,
                                <br />a proactive software professional passionate about
                                leveraging technology to drive positive change.
                            </h1>
                            <div className="headline__btnholder d-flex flex-column flex-sm-row">
                                <a
                                    className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
                                    href="#portfolio"
                                >
                                    <span className="btn-caption">My Works</span>
                                    <i className="ph-bold ph-squares-four" />
                                </a>
                                <a
                                    className="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline"
                                    href="/TharinduWijayarathna.pdf"
                                    download="TharinduWijayarathna.pdf"
                                >
                                    <span className="btn-caption">Download CV</span>
                                    <i className="ph-bold ph-download-simple" />
                                </a>
                            </div>
                        </div>
                        {/* Headline End */}
                        {/* Scroll Button Start */}
                        <div className="rotating-btn">
                            <a href="#portfolio" className="rotating-btn__link slide-down">
                                {/* SVG rotating text */}
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 120 120"
                                    // style={{ enableBackground: 'new 0 0 120 120' }}
                                    xmlSpace="preserve"
                                    className="animate-rotation"
                                    data-value={360}
                                >
                                    <defs>
                                        <path
                                            id="textPath"
                                            d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"
                                        />
                                    </defs>
                                    <g>
                                        <use xlinkHref="#textPath" fill="none" />
                                        <text>
                                            {/* button text here!!! */}
                                            <textPath xlinkHref="#textPath">

                                            </textPath>
                                        </text>
                                    </g>
                                </svg>
                                {/* arrow icon */}
                                <i className="ph-bold ph-arrow-down" />
                            </a>
                        </div>
                        {/* Scroll Button End */}
                    </section>
                    {/* Intro Section End */}
                    {/* About Section Start */}
                    <section id="about" className="inner about">
                        {/* Content Block - H2 Section Title Start */}
                        <div className="content__block text-start section-grid-title text-start">
                            <p className="h2__subtitle animate-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 13 13"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                                                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                                                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                                    />
                                </svg>
                                <span>About Me</span>
                            </p>
                            <h2 className="h2__title animate-in-up">
                                Turning challenges into user-centric solutions
                            </h2>
                        </div>
                        {/* Content Block - H2 Section Title End */}
                        {/* Content Block - Achievements Start */}
                        <div className="content__block text-start grid-block">
                            <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
                                {/* achievements single item */}
                                <div className="achievements__item d-flex flex-column grid-item animate-card-3">
                                    <div className="achievements__card">
                                        <p className="achievements__number">15+</p>
                                        <p className="achievements__descr">Personal clients</p>
                                    </div>
                                </div>
                                {/* achievements single item */}
                                <div className="achievements__item d-flex flex-column grid-item animate-card-3">
                                    <div className="achievements__card">
                                        <p className="achievements__number">4+</p>
                                        <p className="achievements__descr">Years of experience</p>
                                    </div>
                                </div>
                                {/* achievements single item */}
                                <div className="achievements__item d-flex flex-column grid-item animate-card-3">
                                    <div className="achievements__card">
                                        <p className="achievements__number">30+</p>
                                        <p className="achievements__descr">Project enrollments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Block - Achievements End */}
                        {/* Content Block - About Me Data Start */}
                        <div className="content__block text-start grid-block block-large">
                            <div className="container-fluid p-0">
                                <div className="row g-0 justify-content-between">
                                    {/* About Me Description Start */}
                                    <div className="col-12 col-xl-8 grid-item about-descr">
                                        <p className="about-descr__text animate-in-up">
                                            As a software professional, I bring a blend of creativity
                                            and technical expertise to every project. With a
                                            background in software engineering, project management,
                                            and full-stack development, I excel in crafting efficient
                                            solutions to complex problems. My commitment to continuous
                                            learning keeps me at the forefront of industry trends,
                                            ensuring that I deliver high-quality results that exceed
                                            expectations.
                                        </p>
                                        <p className="about-descr__text animate-in-up">
                                            Let's work together to turn your ideas into reality!
                                            Whether it's developing intuitive user interfaces,
                                            optimizing backend systems for performance, or
                                            architecting scalable solutions, I am driven by a
                                            relentless pursuit of excellence. My adaptability and
                                            strong communication skills allow me to effectively
                                            collaborate with cross-functional teams, ensuring seamless
                                            integration and delivery of high-quality products.
                                        </p>
                                        <div className="btn-group about-descr__btnholder animate-in-up">
                                            <a
                                                className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                                                href="/TharinduWijayarathna.pdf"
                                                download="TharinduWijayarathna.pdf"
                                            >

                                                <span className="btn-caption">Download CV</span>
                                                <i className="ph-bold ph-download-simple" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* About Me Description End */}
                                    {/* About Me Information Start */}
                                    <div className="col-12 col-xl-4 grid-item about-info">
                                        <div className="about-info__item animate-in-up">
                                            <h6>
                                                <small className="top">Name</small>
                                                Tharindu Wijayarathna
                                            </h6>
                                        </div>
                                        <div className="about-info__item animate-in-up">
                                            <h6>
                                                <small className="top">Phone</small>
                                                <a className="text-link-bold" href="tel:+94765781398">
                                                    +94765781398
                                                </a>
                                            </h6>
                                        </div>
                                        <div className="about-info__item animate-in-up">
                                            <h6>
                                                <small className="top">Email</small>
                                                <a
                                                    className="text-link-bold"
                                                    href="mailto:wikum.dev@gmail.com?subject=Message%20from%20your%20site"
                                                >
                                                    wikum.dev@gmail.com
                                                </a>
                                            </h6>
                                        </div>
                                        <div className="about-info__item animate-in-up">
                                            <h6>
                                                <small className="top">Location</small>
                                                Kandy, Sri Lanka
                                            </h6>
                                        </div>
                                    </div>
                                    {/* About Me Information End */}
                                </div>
                            </div>
                        </div>
                        {/* Content Block - About Me Data End */}
                        {/* Content Block - Services Start */}
                        <div className="content__block text-start grid-block">
                            <div className="container-fluid p-0">
                                <div className="row g-0 align-items-stretch cards">
                                    {/* services cards grid single item */}
                                    <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                                        <div className="cards__card d-flex flex-column">
                                            <div className="cards__descr">
                                                <h4 className="cards__title animate-in-up">
                                                    Web Development
                                                </h4>
                                                <div className="cards__tags d-flex flex-wrap animate-in-up">
                                                    <span className="rounded-tag tag-outline">
                                                        Frontend &amp; Backend
                                                    </span>
                                                    <span className="rounded-tag tag-outline">
                                                        Responsive Design
                                                    </span>
                                                </div>
                                                <p className="small cards__text animate-in-up">
                                                    Crafting modern and user-friendly websites using HTML,
                                                    CSS, JavaScript, and various frameworks to bring your
                                                    vision to life.
                                                </p>
                                            </div>
                                            <div className="cards__image d-flex animate-in-up">
                                                <img
                                                    src="assets/img/services/web.svg"
                                                    alt="Service/Feature Image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* services grid cards single item */}
                                    <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                                        <div className="cards__card d-flex flex-column">
                                            <div className="cards__descr">
                                                <h4 className="cards__title animate-in-up">
                                                    Mobile App Development
                                                </h4>
                                                <div className="cards__tags d-flex flex-wrap animate-in-up">
                                                    <span className="rounded-tag tag-outline">
                                                        iOS &amp; Android
                                                    </span>
                                                    <span className="rounded-tag tag-outline">
                                                        Cross-Platform
                                                    </span>
                                                </div>
                                                <p className="small cards__text animate-in-up">
                                                    Designing and building native and cross-platform
                                                    mobile applications tailored to your specific needs.
                                                </p>
                                            </div>
                                            <div className="cards__image d-flex">
                                                <img
                                                    src="assets/img/services/mobile.svg"
                                                    alt="Service/Feature Image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* services grid cards single item */}
                                    <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                                        <div className="cards__card d-flex flex-column">
                                            <div className="cards__descr">
                                                <h4 className="cards__title animate-in-up">
                                                    UI/UX Design
                                                </h4>
                                                <div className="cards__tags d-flex flex-wrap animate-in-up">
                                                    <span className="rounded-tag tag-outline">
                                                        Wireframing &amp; Prototyping
                                                    </span>
                                                    <span className="rounded-tag tag-outline">
                                                        User Research
                                                    </span>
                                                </div>
                                                <p className="small cards__text animate-in-up">
                                                    Creating intuitive and visually appealing user
                                                    interfaces, focusing on enhancing user experience and
                                                    usability.
                                                </p>
                                            </div>
                                            <div className="cards__image d-flex animate-in-up">
                                                <img
                                                    src="assets/img/services/1200x900_s02.webp"
                                                    alt="Service/Feature Image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* services grid cards single item */}
                                    <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
                                        <div className="cards__card d-flex flex-column">
                                            <div className="cards__descr">
                                                <h4 className="cards__title animate-in-up">
                                                    Technical Consultation
                                                </h4>
                                                <div className="cards__tags d-flex flex-wrap animate-in-up">
                                                    <span className="rounded-tag tag-outline">
                                                        Project Planning
                                                    </span>
                                                    <span className="rounded-tag tag-outline">
                                                        Technology Stack Selection
                                                    </span>
                                                </div>
                                                <p className="small cards__text animate-in-up">
                                                    Providing expert advice and guidance on project
                                                    strategy, architecture, and technology selection to
                                                    ensure successful project execution.
                                                </p>
                                            </div>
                                            <div className="cards__image d-flex animate-in-up">
                                                <img
                                                    src="assets/img/services/1200x900_s04.webp"
                                                    alt="Service/Feature Image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Block - Services End */}
                    </section>
                    {/* About Section End */}
                    {/* Resume Section Start */}
                    <section id="resume" className="inner resume">
                        {/* Content Block - H2 Section Title Start */}
                        <div className="content__block text-start block-large text-start">
                            <p className="h2__subtitle animate-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 13 13"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                                                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                                                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                                    />
                                </svg>
                                <span>Resume</span>
                            </p>
                            <h2 className="h2__title animate-in-up">
                                Education and Work Experience
                            </h2>
                            <p className="h2__text animate-in-up">
                                Drawing from my academic journey and professional endeavors,
                                I've cultivated a versatile skill set in software engineering
                                and design. I've pursued rigorous education in computer science
                                and software engineering while gaining practical experience
                                through internships and positions at esteemed companies. Below,
                                you'll find a snapshot of my educational achievements and work
                                history.
                            </p>
                        </div>
                        {/* Content Block - H2 Section Title End */}
                        {/* Content Block - Education Start */}
                        <div className="content__block text-start block-large">
                            {/* H3 Block Start */}
                            <div className="section-h3">
                                <h3 className="h3__title animate-in-up extra-padding">
                                    My Education
                                </h3>
                            </div>
                            {/* H3 Block End */}
                            {/* Education Lines Start */}
                            <div className="container-fluid p-0 resume-lines">
                                {/* education single item */}
                                <div className="row g-0 resume-lines__item animate-in-up">
                                    <div className="col-12 col-md-2">
                                        <span className="resume-lines__date animate-in-up">
                                            Feb 2023 – Present
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="resume-lines__title animate-in-up">
                                            Bsc (Hons) in Software Engineering
                                        </h5>
                                        <p className="resume-lines__source animate-in-up">
                                            Cardiff Metropolitan University | ICBT Kandy Campus
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <p className="small resume-lines__descr animate-in-up text-white">
                                            Pending
                                        </p>
                                        <p className="small resume-lines__descr animate-in-up">
                                            Deepened my understanding of computer science fundamentals
                                            and gained practical experience in various programming
                                            languages, including Java, C#, and PHP. Recognized for my
                                            all-rounder abilities and won several industry
                                            competitions. Served as project manager for the final
                                            project, leading my team to significant success. This
                                            period was instrumental in enhancing my ability to tackle
                                            complex software engineering challenges and preparing me
                                            for a career in the tech industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid p-0 resume-lines">
                                {/* education single item */}
                                <div className="row g-0 resume-lines__item animate-in-up">
                                    <div className="col-12 col-md-2">
                                        <span className="resume-lines__date animate-in-up">
                                            Feb 2021 – Present
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="resume-lines__title animate-in-up">
                                            Professional Diploma in Software Engineering
                                        </h5>
                                        <p className="resume-lines__source animate-in-up">
                                            Java Institute for Advanced Technology
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <p className="small resume-lines__descr animate-in-up text-white">
                                            Merit
                                        </p>
                                        <p className="small resume-lines__descr animate-in-up">
                                            Gained in-depth knowledge of software development
                                            principles and practices, focusing on Java-based
                                            technologies. Developed proficiency in Java programming,
                                            web development, and database management. Completed
                                            several hands-on projects, including a fully functional
                                            web application, to demonstrate my skills and knowledge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Education Lines End */}
                        </div>
                        {/* Content Block - Education End */}
                        {/* Content Block - Experience Start */}
                        <div className="content__block text-start block-large">
                            {/* H3 Block Start */}
                            <div className="section-h3">
                                <h3 className="h3__title animate-in-up extra-padding">
                                    Work Experience
                                </h3>
                            </div>
                            {/* H3 Block End */}
                            {/* Experience Lines Start */}
                            <div className="container-fluid p-0 resume-lines">
                                {/* experience single item */}
                                <div className="row g-0 resume-lines__item animate-in-up">
                                    <div className="col-12 col-md-2">
                                        <span className="resume-lines__date animate-in-up">
                                            Feb 2022 – Apr 2024
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="resume-lines__title animate-in-up">
                                            Software Engineer
                                        </h5>
                                        <p className="resume-lines__source animate-in-up">
                                            CyberElysium (Pvt) Ltd
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <p className="small resume-lines__descr animate-in-up">
                                            Responsible for developing software solutions, focusing on
                                            enhancing user experience and performance. Worked on
                                            various projects, including web applications and mobile
                                            apps, gaining practical experience in full-stack
                                            development. Collaborated with senior developers to
                                            deliver high-quality software solutions.
                                        </p>
                                    </div>
                                </div>
                                {/* experience single item */}
                                <div className="row g-0 resume-lines__item animate-in-up">
                                    <div className="col-12 col-md-2">
                                        <span className="resume-lines__date animate-in-up">
                                            Sep 2020 - Feb 2022
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="resume-lines__title animate-in-up">
                                            Associate Software Engineer
                                        </h5>
                                        <p className="resume-lines__source animate-in-up">
                                            CyberElysium (Pvt) Ltd
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <p className="small resume-lines__descr animate-in-up">
                                            Played a key role in developing software solutions,
                                            focusing on enhancing user experience and performance.
                                            Worked on various projects, including web applications and
                                            mobile apps, gaining practical experience in full-stack
                                            development. Collaborated with senior developers to
                                            deliver high-quality software solutions.
                                        </p>
                                    </div>
                                </div>
                                {/* experience single item */}
                                <div className="row g-0 resume-lines__item animate-in-up">
                                    <div className="col-12 col-md-2">
                                        <span className="resume-lines__date animate-in-up">
                                            Mar 2020 – Sep 2020
                                        </span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h5 className="resume-lines__title animate-in-up">
                                            Software Engineer Intern
                                        </h5>
                                        <p className="resume-lines__source animate-in-up">
                                            CyberElysium (Pvt) Ltd
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <p className="small resume-lines__descr animate-in-up">
                                            Participated in the development of software solutions,
                                            focusing on enhancing user experience and performance.
                                            Worked on various projects, including web applications and
                                            mobile apps, gaining practical experience in full-stack
                                            development. Collaborated with senior developers to
                                            deliver high-quality software solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Experience Lines End */}
                        </div>
                        {/* Content Block - Experience End */}
                    </section>
                    {/* Resume Section End */}
                    {/* Content Block - H2 Block Start */}
                    <section id="skills" className="inner skills">
                        <div className="content__block text-start section-title">
                            <p className="h2__subtitle animate-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 13 13"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                                                      C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                                                      C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                                    />
                                </svg>
                                <span>Skills</span>
                            </p>
                            <h2 className="h2__title animate-in-up">Review My Skill Set</h2>
                        </div>
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">
                                    Frameworks &amp; Libraries
                                </h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            React
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Angular
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Laravel
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Vue.js
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Nuxt.js
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Express.js
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Node.js
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Bootstrap
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Tailwind CSS
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=yWv6GQVz58uJ&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            jQuery
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* Tools List End */}
                        </div>
                        {/* Content Block - Tools List End */}
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">
                                    Programming Languages
                                </h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">Java</h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=45490&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">C#</h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            JavaScript
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">PHP</h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            .Net Core
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">C++</h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            TypeScript
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Python
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            HTML5
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">CSS3</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Tools List End */}
                        </div>
                        {/* Content Block - Tools List End */}
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">
                                    Database Technologies
                                </h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            MySQL
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            MSSQL
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            MongoDB
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Firebase
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* Tools List End */}
                        </div>
                        {/* Content Block - Tools List End */}
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">
                                    Version Control &amp; Project Management
                                </h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">Git</h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=34886&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            GitLab
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=x2g9nPCwQPOn&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            BitBucket
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=EREcg1COGLlB&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Trello
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">Jira</h6>
                                    </div>
                                </div>
                                {/* Tools List End */}
                            </div>
                            {/* Content Block - Tools List End */}
                        </div>
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">Cloud Platforms</h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">AWS</h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=81727&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Azure
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=20774&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Google Cloud Platform
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=LdUzF8b5sz2R&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Docker
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Kubernetes
                                        </h6>
                                    </div>
                                </div>
                                {/* Tools List End */}
                            </div>
                            {/* Content Block - Tools List End */}
                        </div>
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">
                                    Content Management Systems
                                </h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=gjVkeGTRPkpG&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Kentico
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=13664&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            WordPress
                                        </h6>
                                    </div>
                                </div>
                                {/* Tools List End */}
                            </div>
                            {/* Content Block - Tools List End */}
                        </div>
                        {/* Content Block - H3 Block Start */}
                        <div className="content__block text-start">
                            <div className="section-h3 section-h3-grid">
                                <h3 className="h3__title animate-in-up">Design Tools</h3>
                            </div>
                        </div>
                        {/* Content Block - H3 Block End */}
                        {/* Content Block - Tools List Start */}
                        <div className="content__block text-start grid-block block-large">
                            {/* Tools List Start */}
                            <div className="tools-cards d-flex justify-content-start flex-wrap">
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Figma
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Adobe Xd
                                        </h6>
                                    </div>
                                </div>
                                {/* tools simgle item */}
                                <div className="tools-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="tools-cards__card">
                                        <img
                                            className="tools-cards__icon animate-in-up"
                                            src="https://img.icons8.com/?size=100&id=13631&format=png&color=000000"
                                            alt="Tools Icon"
                                        />
                                        <h6 className="tools-cards__caption animate-in-up">
                                            Adobe Illustrator
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/* Content Block - Tools List End */}
                        </div>
                    </section>
                    {/* Portfolio Section Start */}
                    <section id="portfolio" className="inner inner-first portfolio">
                        {/* Content Block - H2 Section Title Start */}
                        <div className="content__block text-start section-grid-title">
                            <p className="h2__subtitle animate-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 13 13"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                                                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                                                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                                    />
                                </svg>
                                <span>Portfolio</span>
                            </p>
                            <h2 className="h2__title animate-in-up">
                                Check out my featured projects
                            </h2>
                        </div>
                        {/* Content Block - H2 Section Title End */}
                        {/* Content Block - Works Gallery Start */}
                        <div className="content__block text-start grid-block">
                            <div className="container-fluid px-0 inner__gallery">
                                <div
                                    className="row gx-0 my-gallery"
                                    itemType="http://schema.org/ImageGallery"
                                >
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/slo.webp"
                                            data-image="assets/img/works/slo.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/slo.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr"
                                            itemProp="caption description"
                                        >
                                            <h5>Isometric House</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">3D Render</span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/janitor.webp"
                                            data-image="assets/img/works/janitor.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/janitor.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr opposite"
                                            itemProp="caption description"
                                        >
                                            <h5 className="opposite">Dashboard Template</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag">UI Design</span>
                                                <span className="rounded-tag">Figma</span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/bdo.webp"
                                            data-image="assets/img/works/bdo.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/bdo.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr opposite"
                                            itemProp="caption description"
                                        >
                                            <h5 className="opposite">Notification Icon</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag">Illustrations</span>
                                                <span className="rounded-tag">3D Render</span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/harrison.webp"
                                            data-image="assets/img/works/harrison.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/harrison.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/brokersnapshot-ui.webp"
                                            data-image="assets/img/works/brokersnapshot-ui.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/brokersnapshot-ui.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/toymart.webp"
                                            data-image="assets/img/works/toymart.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/toymart.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/math.webp"
                                            data-image="assets/img/works/math.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/math.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/daisys.webp"
                                            data-image="assets/img/works/daisys.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/daisys.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/slo-admin.webp"
                                            data-image="assets/img/works/slo-admin.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/slo-admin.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/sunrise.webp"
                                            data-image="assets/img/works/sunrise.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/sunrise.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/yien.webp"
                                            data-image="assets/img/works/yien.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/yien.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                    {/* Works Gallery Single Item Start */}
                                    <figure
                                        className="col-12 col-md-6 gallery__item grid-item animate-card-2"
                                        itemProp="associatedMedia"
                                        itemType="http://schema.org/ImageObject"
                                    >
                                        <a
                                            href="assets/img/works/zenandsu.webp"
                                            data-image="assets/img/works/zenandsu.webp"
                                            className="gallery__link"
                                            itemProp="contentUrl"
                                            data-size="1400x1400"
                                        >
                                            <img
                                                src="assets/img/works/zenandsu.webp"
                                                className="gallery__image"
                                                itemProp="thumbnail"
                                                alt="Image description"
                                            />
                                        </a>
                                        <figcaption
                                            className="gallery__descr "
                                            itemProp="caption description"
                                        >
                                            <h5>Smart Penguin</h5>
                                            <div className="card__tags d-flex flex-wrap">
                                                <span className="rounded-tag opposite">
                                                    Illustrations
                                                </span>
                                                <span className="rounded-tag opposite">
                                                    AI Experiment
                                                </span>
                                            </div>
                                            <p className="small">
                                                Mauris porttitor lobortis ligula, quis molestie lorem
                                                scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                                                tristique eu.
                                            </p>
                                        </figcaption>
                                    </figure>
                                    {/* Works Gallery Single Item End */}
                                </div>
                            </div>
                        </div>
                        {/* Content Block - Works Gallery End */}
                    </section>
                    {/* Portfolio Section End */}
                    {/* Contact Section Start */}
                    <section id="contact" className="inner contact">
                        {/* Content Block - H2 Section Title Start */}
                        <div className="content__block text-start section-title">
                            <p className="h2__subtitle  animate-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 13 13"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                                                                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                                                                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                                    />
                                </svg>
                                <span>Contact</span>
                            </p>
                            <h2 className="h2__title  animate-in-up">
                                Let's make something awesome together!
                            </h2>
                        </div>
                        {/* Content Block - H2 Section Title End */}
                        {/* Content Block - Contact Form Start */}
                        <div className="content__block text-start grid-block block-grid-large">
                            <div className="form-container">
                                {/* Reply Messages Start */}
                                <div className="form__reply centered text-center">
                                    <i className="ph-bold ph-smiley reply__icon" />
                                    <p className="reply__title">Done!</p>
                                    <span className="reply__text">
                                        Thanks for your message. I'll get back as soon as possible.
                                    </span>
                                </div>
                                {/* Reply Messages End */}
                                {/* Contact Form Start */}
                                <div className="content__block text-start grid-block block-grid-large">
                                    <div className="form-container">
                                        {/* Reply Messages Start */}
                                        <div
                                            className="form__reply centered text-center"
                                            style={{ display: "none" }}
                                        >
                                            <i className="ph-bold ph-smiley reply__icon" />
                                            <p className="reply__title">Done!</p>
                                            <span className="reply__text">
                                                Thanks for your message. I'll get back as soon as
                                                possible.
                                            </span>
                                        </div>
                                        {/* Reply Messages End */}
                                        {/* Contact Form Start */}

                                        {error && (
                                            <div className="alert alert-danger" role="alert">
                                                {error}
                                            </div>
                                        )}

                                        {success && (
                                            <div className="alert alert-success" role="alert">
                                                {success}
                                            </div>
                                        )}

                                        <form className="form contact-form" onSubmit={handleSubmit}>
                                            <div className="container-fluid p-0">
                                                <div className="row gx-0">
                                                    <div className="col-12 col-md-6 form__item animate-in-up">
                                                        <input
                                                            type="text"
                                                            name="Name"
                                                            placeholder="Your Name*"
                                                            value={formData.Name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form__item animate-in-up">
                                                        <input
                                                            type="text"
                                                            name="Company"
                                                            placeholder="Company Name/ Subject"
                                                            value={formData.Company}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form__item animate-in-up">
                                                        <input
                                                            type="email"
                                                            name="E-mail"
                                                            placeholder="Email Address*"
                                                            value={formData['E-mail']}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-12 col-md-6 form__item animate-in-up">
                                                        <input
                                                            type="tel"
                                                            name="Phone"
                                                            placeholder="Phone Number*"
                                                            value={formData.Phone}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12 form__item animate-in-up">
                                                        <textarea
                                                            name="Message"
                                                            placeholder="Compose your message. Press Enter [ ↲ ] for new lines. Don't worry, pressing Enter won't send it.*"
                                                            value={formData.Message}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-12 form__item animate-in-up">
                                                        <button className="btn btn-default btn-hover btn-hover-accent" type="submit">
                                                            <span className="btn-caption">Send Message</span>
                                                            <i className="ph-bold ph-paper-plane-tilt" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {/* Contact Form End */}
                                    </div>
                                </div>
                                {/* Contact Form End */}
                            </div>
                        </div>
                        {/* Content Block - Contact Form End */}
                        <div className="content__block text-start grid-block">
                            <div className="socials-cards d-flex justify-content-start flex-wrap">
                                {/* socials item */}
                                <div className="socials-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="socials-cards__card">
                                        <i className="fa-brands fa-linkedin-in" />
                                        <a
                                            className="socials-cards__link"
                                            href="https://www.linkedin.com/in/tharindu-wijayarathna-98499a203/"
                                            target="_blank"
                                        />
                                    </div>
                                </div>
                                {/* socials item */}
                                <div className="socials-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="socials-cards__card">
                                        <i className="fa-brands fa-github" />
                                        <a
                                            className="socials-cards__link"
                                            href="https://github.com/TharinduWijayarathna"
                                            target="_blank"
                                        />
                                    </div>
                                </div>
                                {/* socials item */}
                                <div className="socials-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="socials-cards__card">
                                        <i className="fa-brands fa-stack-overflow" />
                                        <a
                                            className="socials-cards__link"
                                            href="https://stackoverflow.com/users/17042914/tharindu-wijayarathna"
                                            target="_blank"
                                        />
                                    </div>
                                </div>
                                {/* socials item */}
                                <div className="socials-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="socials-cards__card">
                                        <i className="fa-brands fa-x-twitter" />
                                        <a
                                            className="socials-cards__link"
                                            href="https://twitter.com/wikum1100"
                                            target="_blank"
                                        />
                                    </div>
                                </div>
                                {/* socials item */}
                                <div className="socials-cards__item d-flex grid-item-s animate-card-5">
                                    <div className="socials-cards__card">
                                        <i className="fa-brands fa-facebook-f" />
                                        <a
                                            className="socials-cards__link"
                                            href="https://web.facebook.com/tharinduwijayarathna.ck"
                                            target="_blank"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Block - Socials Cards End */}
                        {/* Content Block - Teaser Start */}
                        <div className="content__block text-start">
                            <div className="teaser">
                                <p className="teaser__text animate-in-up">
                                    If you're interested in having me on your team, let's talk!
                                    Reach out and let's discuss how I can contribute to your
                                    projects.
                                </p>
                                <p className="teaser__text animate-in-up">
                                    Drop me a line{" "}
                                    <a
                                        className="text-link-bold"
                                        href="mailto:wikum.dev@gmail.com?subject=Message%20from%20your%20site"
                                    >
                                        here
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                        {/* Content Block - Teaser End */}
                        {/* Content Block - Contact Data Start */}
                        <div className="content__block text-start">
                            <div className="container-fluid p-0 contact-lines animate-in-up">
                                <div className="row g-0 contact-lines__item">
                                    {/* data item */}
                                    <div className="col-12 col-md-4 contact-lines__data">
                                        <p className="contact-lines__title animate-in-up">
                                            Location
                                        </p>
                                        <p className="contact-lines__text animate-in-up">
                                            <a className="text-link-bold" href="" target="_blank">
                                                No. 79, Hapugoda, Ambatenna, <br />
                                                Kandy, Sri Lanka (20136)
                                            </a>
                                        </p>
                                    </div>
                                    {/* data item */}
                                    <div className="col-12 col-md-4 contact-lines__data">
                                        <p className="contact-lines__title animate-in-up">Phone</p>
                                        <p className="contact-lines__text animate-in-up">
                                            <a className="text-link-bold" href="tel:+94765781398">
                                                +94 765 781 398
                                            </a>
                                        </p>
                                    </div>
                                    {/* data item */}
                                    <div className="col-12 col-md-4 contact-lines__data">
                                        <p className="contact-lines__title animate-in-up">Email</p>
                                        <p className="contact-lines__text animate-in-up">
                                            <a
                                                className="text-link-bold"
                                                href="mailto:wikum.dev@gmail.com"
                                            >
                                                wikum.dev@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Section End */}
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;
