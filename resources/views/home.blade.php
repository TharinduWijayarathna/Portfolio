<!DOCTYPE html>
<html lang="en">

<head>
    <title>Tharindu Wijayarathna</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="keywords"
        content="Tharindu Wijayarathna, Portfolio, Web Developer, Software Engineer, Graphic Designer" />
    <meta name="description"
        content="Welcome to the portfolio of Tharindu Wijayarathna. I specialize in web development, software solutions, and graphic design. Explore my work and skills." />

    <meta name="og:image" property="og:image" content="{{ asset('/images/about.jpg') }}" />
    <meta name="og:image:secure_url" property="og:image:secure_url"
        content="{{ asset('/images/about.jpg') }}" />
    <meta name="og:image:width" property="og:image:width" content="@yield('ogimagewidth', 500)" />
    <meta name="og:image:height" property="og:image:height" content="@yield('ogimageheight', 200)" />
    <meta name="og:image:alt" property="og:image:alt"
        content="Tharindu Wijayarathna | Portfolio - Showcasing my skills and projects!" />
    <meta name="og:site_name" property="og:site_name" content="Tharindu Wijayarathna - Portfolio" />
    <meta name="og:type" property="og:type" content="@yield('og-type', 'website')" />
    <meta name="og:title" property="og:title" content="@yield('og-title', 'Tharindu Wijayarathna | Portfolio')" />
    <meta name="og:url" property="og:url" content="{{ Request::url() }}" />
    <meta name="og:description" property="og:description"
        content="Welcome to the portfolio of Tharindu Wijayarathna. I specialize in web development, software solutions, and graphic design. Explore my work and skills." />

    <meta name="twitter:image:src" content="{{ asset('/images/about.jpg') }}" />
    <meta name="twitter:site" content="@YourTwitterHandle" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="@yield('og-title', 'Tharindu Wijayarathna | Portfolio')" />
    <meta name="twitter:description"
        content="Welcome to the portfolio of Tharindu Wijayarathna. I specialize in web development, software solutions, and graphic design. Explore my work and skills." />


    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="css/ionicons.min.css">
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/icomoon.css">
    <link rel="stylesheet" href="css/style.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
    <link rel="manifest" href="images/favicon/site.webmanifest">

    <style>
        .btn-margin {
            margin-top: 7.5px;
        }

        .btn-mobile-cv {
            display: none;
        }

        @media only screen and (max-width: 600px) {
            .btn-margin {
                margin-top: 0px;
                display: none;
            }

            .btn-mobile-cv {
                display: block;
            }

            .skill-desktop {
                display: none;
            }

            .skill-mobile {
                display: block;
            }

        }

        @media only screen and (min-width: 600px) {


            .skill-desktop {
                display: block;
            }

            .skill-mobile {
                display: none;
            }
        }
    </style>
</head>

<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div class="container">
            <a class="navbar-brand" href="{{ route('home') }}"><span>T</span>harindu</a>
            <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
                data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav nav ml-auto">
                    <li class="nav-item"><a href="#home-section" class="nav-link"><span>Home</span></a></li>
                    <li class="nav-item"><a href="#about-section" class="nav-link"><span>About</span></a></li>
                    <li class="nav-item"><a href="#resume-section" class="nav-link"><span>Resume</span></a></li>
                    <li class="nav-item"><a href="#projects-section" class="nav-link"><span>Projects</span></a></li>
                    <!-- <li class="nav-item"><a href="#blog-section" class="nav-link"><span>My Blog</span></a></li> -->
                    <li class="nav-item"><a href="#contact-section" class="nav-link"><span>Contact</span></a></li>
                    <li class="nav-item"><a class="btn btn-primary btn-margin" href="CV.pdf"
                            download="Tharindu Wijayarathna CV" class="nav-link"><span>Download CV</span></a></li>
                    <li class="nav-item"><a class="btn-mobile-cv" href="CV.pdf" download="Tharindu Wijayarathna CV"
                            class="nav-link"><span>Download CV</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="hero-wrap js-fullheight">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                <div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
                    <div class="text text-center">
                        <span class="subheading">Hey! I am</span>
                        <h1>Tharindu Wijayarathna</h1>
                        <h2>I'm a
                            <span class="txt-rotate" data-period="2000"
                                data-rotate="[ &quot;Associate Software Engineer.&quot;, &quot;Content Creator.&quot;]"></span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="mouse">
            <a href="#" class="mouse-icon">
                <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
            </a>
        </div>
    </section>
    <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
        <div class="container">
            <div class="row d-flex no-gutters">
                <div class="col-md-6 col-lg-6 d-flex">
                    <div class="img-about img d-flex align-items-stretch">
                        <div class="overlay"></div>
                        <div class="img d-flex align-self-stretch align-items-center"
                            style="background-image:url(images/about.jpg);">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pl-md-5 py-5">
                    <div class="row justify-content-start pb-3">
                        <div class="col-md-12 heading-section ftco-animate">
                            <h1 class="big">About</h1>
                            <h2 class="mb-4">About Me</h2>
                            <p>A highly motivated and hardworking individual, who always strives to achieve the highest
                                standard possible, at any given task.</p>
                            <ul class="about-info mt-4 px-md-0 px-2">
                                <li class="d-flex"><span>Name:</span> <span>Tharindu Wijayarathna</span></li>
                                <li class="d-flex"><span>Date of birth:</span> <span>November 14, 2001</span></li>
                                <li class="d-flex"><span>Address:</span> <span>No 79, Hapugoda, Ambatenna</span></li>
                                <li class="d-flex"><span>Zip code:</span> <span>20136</span></li>
                                <li class="d-flex"><span>Email:</span> <span><a href="mailto:wikum.dev@gmail.com"
                                            class="__cf_email__">wikum.dev@gmail.com</a></span></li>
                                <li class="d-flex"><span>Phone: </span> <span>+94 76 578 1398</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {{--
    <section class="ftco-section ftco-partner">
        <div class="container">
            <div class="row">
                <div class="col-sm ftco-animate">
                    <a href="#" class="partner"><img src="images/partner-1.png" class="img-fluid"
                            alt="Colorlib Template"></a>
                </div>
                <div class="col-sm ftco-animate">
                    <a href="#" class="partner"><img src="images/partner-2.png" class="img-fluid"
                            alt="Colorlib Template"></a>
                </div>
                <div class="col-sm ftco-animate">
                    <a href="#" class="partner"><img src="images/partner-3.png" class="img-fluid"
                            alt="Colorlib Template"></a>
                </div>
                <div class="col-sm ftco-animate">
                    <a href="#" class="partner"><img src="images/partner-4.png" class="img-fluid"
                            alt="Colorlib Template"></a>
                </div>
                <div class="col-sm ftco-animate">
                    <a href="#" class="partner"><img src="images/partner-5.png" class="img-fluid"
                            alt="Colorlib Template"></a>
                </div>
            </div>
        </div>
    </section>
    --}}
    <br>
    <br>
    <section class="ftco-section ftco-no-pb goto-here" id="resume-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <nav id="navi">
                        <ul>
                            <li><a href="#page-1">Education</a></li>
                            <li><a href="#page-2">Experience</a></li>
                            <li><a href="#page-3">Skills</a></li>
                            <li><a href="#page-4">Certificates</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-9">
                    <div id="page-1" class="page one">
                        <h2 class="heading">Education</h2>
                        <div class="resume-wrap d-flex ftco-animate">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-ideas"></span>
                            </div>
                            <div class="text pl-3">
                                <span class="date">2023 - Present</span>
                                <h2>Bsc. (Hons) Software Engineering</h2>
                                <span class="position">Cardiff Metropolitan University</span>
                                <p>I am currently following the Bsc. (Hons) Software Engineering degree at Cardiff
                                    Metropolitan
                                    University.</p>
                            </div>
                        </div>
                        <div class="resume-wrap d-flex ftco-animate">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-ideas"></span>
                            </div>
                            <div class="text pl-3">
                                <span class="date">2021 - 2022</span>
                                <h2>Diploma in Software Engineering</h2>
                                <span class="position">JIAT</span>
                                <p>I have completed the Diploma in Software Engineering at JIAT.</p>
                            </div>
                        </div>

                    </div>
                    <div id="page-2" class="page two">
                        <h2 class="heading">Experience</h2>
                        <div class="resume-wrap d-flex ftco-animate">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-ideas"></span>
                            </div>
                            <div class="text pl-3">
                                <span class="date">2022 - Present</span>
                                <h2>Associate Software Engineer</h2>
                                <span class="position">CyberElysium Pvt Ltd</span>
                                <p>Dynamic and results-driven Associate Software Engineer with a background in
                                    full-stack web
                                    development. Rapidly advanced from intern to the current role at CyberElysium Pvt
                                    Ltd. Proficient in
                                    Laravel, VueJs, Inertia JS, JavaScript, and jQuery. Experienced in the entire
                                    software development
                                    lifecycle, emphasizing performance optimization and seamless user experiences. Adept
                                    at collaborative
                                    problem-solving and committed to ongoing learning. Ready to contribute skills and
                                    innovation to
                                    dynamic software projects.</p>
                            </div>
                        </div>
                    </div>
                    <div id="page-3" class="page three">
                        <h2 class="heading">Skills</h2>
                        <div class="info">
                            <h5 class="font-weight-bold">Frontend Technologies</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Vue JS</li>
                                        <li>Inertia JS</li>
                                        <li>jQuery</li>
                                        <li>AJAX</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <h5 class="font-weight-bold">Languages and Frameworks</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>PHP</li>
                                        <li>JAVA</li>

                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Laravel</li>
                                        <li>Spring Boot</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <h5 class="font-weight-bold">Database Servers and Tools</h5>
                            <div class="row">
                                <div class="col-12 col-md-6 skill-mobile">
                                    <ul>
                                        <li>MYSQL</li>
                                        <li>MariaDB</li>
                                        <li>PostgreSQL</li>
                                        <li>Firebase</li>
                                        <li>phpMyAdmin</li>
                                        <li>MySQL Workbench</li>
                                        <li>MSSQL Management Studio</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-6 skill-desktop">
                                    <ul>
                                        <li>MYSQL</li>
                                        <li>MariaDB</li>
                                        <li>PostgreSQL</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-6 skill-desktop">
                                    <ul>
                                        <li>phpMyAdmin</li>
                                        <li>MySQL Workbench</li>
                                        <li>MSSQL Management Studio</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="info">
                            <h5 class="font-weight-bold">Report Tools</h5>
                            <div class="row">
                                <div class="col-12">
                                    <ul>
                                        <li>Jasper Reports</li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="info">
                            <h5 class="font-weight-bold">Version Control Systems and Tools</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>Git</li>
                                        <li>GitLab</li>

                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>GitHub</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="info">
                            <h5 class="font-weight-bold">Build Tools</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>Ant</li>

                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Maven</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="info">
                            <h5 class="font-weight-bold">Project Management</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>Scrum</li>

                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Trello</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <br>
                    </div>
                    <div id="page-4" class="page four">
                        <h2 class="heading">Certificates</h2>
                        <div class="resume-wrap d-flex ftco-animate">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-ideas"></span>
                            </div>
                            <div class="text pl-3">
                                <span class="date">Feb 2023</span>
                                <h2>The Fundamentals of Digital Marketing</h2>
                                <span class="position">Google Digital Garage</span>
                                <p>Skills: Search Engine Optimization, Digital Marketing</p>
                            </div>
                        </div>
                        <div class="resume-wrap d-flex ftco-animate">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-ideas"></span>
                            </div>
                            <div class="text pl-3">
                                <span class="date">Jan 2023</span>
                                <h2>NDG Linux Unhatched</h2>
                                <span class="position">Cisco Networking Academy</span>
                                <p>Skills: Bash, Linux</p>
                            </div>
                        </div>
                        <div class="resume-wrap d-flex ftco-animate">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="flaticon-ideas"></span>
                            </div>
                            <div class="text pl-3">
                                <span class="date">Jan 2023</span>
                                <h2>The Complete Flutter Development Bootcamp with Dart</h2>
                                <span class="position">Udemy</span>
                                <p>Skills: Flutter, Dart, Mobile Application Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section class="ftco-section ftco-project" id="projects-section">
        <div class="container-fluid px-md-0">
            <div class="row no-gutters justify-content-center pb-5">
                <div class="col-md-12 heading-section text-center ftco-animate">
                    <h1 class="big big-2">Projects</h1>
                    <h2 class="mb-4">My Projects</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
            </div>
            <div class="container">
                <div class="resume-wrap d-flex ftco-animate">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas"></span>
                    </div>
                    <div class="text pl-3">
                        <span class="date">2022</span>
                        <h2>Neo POS</h2>
                        <span class="position">Java SE, SQL</span>
                        <p>
                            Neo POS System is a Point of Sale (POS) system built using Java, MySQL, and Swing. The
                            system is designed
                            to be used in a supermarket setting and offers a range of features to support sales
                            transactions and
                            inventory management.
                            <br>
                            <br>
                            The Neo POS System includes a user-friendly interface with intuitive navigation, making it
                            easy for
                            supermarket staff to use the system. To enhance the user experience, the system incorporates
                            the FlatLaf
                            UI library, which provides a modern and streamlined interface.
                            <br>
                            <br>
                            The system includes features such as product management, sales management, inventory
                            management, and
                            reporting. With product management, supermarket staff can easily add, edit, and delete
                            products in the
                            system. Sales management allows staff to create and manage sales transactions, including the
                            ability to
                            apply for discounts and promotions. Inventory management enables staff to track inventory
                            levels and
                            receive notifications when stock levels are low.
                            <br>
                            <br>
                            To generate reports from the system, the Neo POS System uses Jasper Reports, which allows
                            for the creation
                            of detailed reports on sales, inventory levels, and other metrics. These reports can be used
                            to make
                            informed decisions about stock levels, sales strategies, and more.
                            <br>
                            <br>
                            The Neo POS System is built to be scalable, allowing for easy expansion as the supermarket
                            grows. The
                            system can be customized to meet the unique needs of the supermarket, including the addition
                            of new
                            features and integrations with other systems.
                            <br>
                            <br>
                            In conclusion, the Neo POS System is a comprehensive and user-friendly POS system designed
                            for
                            supermarkets. With its range of features, including product management, sales management,
                            inventory
                            management, and reporting, the system provides a powerful tool for managing sales
                            transactions and
                            inventory.
                        </p>
                    </div>
                </div>
                <div class="resume-wrap d-flex ftco-animate">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas"></span>
                    </div>
                    <div class="text pl-3">
                        <span class="date">2022</span>
                        <h2>Redox LMS</h2>
                        <span class="position">PHP, SQL, HTML, CSS, JS, SMTP, Stripe</span>
                        <p>Redox LMS is a Learning Management System (LMS) built using PHP, HTML, CSS, JS, JQuery, and
                            MySQL. This
                            system is designed to help educational institutions manage their learning resources and
                            facilitate online
                            learning for students. The system offers four different roles for users: Admin, Academic
                            Officer, Teacher,
                            and Student.
                            <br>
                            <br>
                            The Admin role is responsible for managing the entire system, including user accounts,
                            courses, and
                            resources. The Admin can create and delete user accounts, assign roles and permissions,
                            manage courses and
                            classes, and track user progress.
                            <br>
                            <br>
                            The Academic Officer role is responsible for managing academic affairs, including scheduling
                            classes,
                            managing teacher assignments, and tracking student progress. The Academic Officer can create
                            and manage
                            courses, assign teachers to classes, and track student progress.
                            <br>
                            <br>
                            The Teacher role is responsible for managing individual classes and delivering course
                            content to students.
                            Teachers can create and manage class content, such as assignments, quizzes, and readings.
                            They can also
                            track student progress, provide feedback, and manage grades.
                            <br>
                            <br>
                            The Student role is responsible for accessing course content and completing assignments.
                            Students can view
                            course materials, complete assignments, take quizzes, and participate in class discussions.
                            <br>
                            <br>
                            Redox LMS is designed to be user-friendly and easy to navigate. The system is built with a
                            responsive
                            design, allowing users to access the LMS on any device. Additionally, the system is
                            scalable, allowing
                            educational institutions to add new courses and users as needed.
                            <br>
                            <br>
                            In conclusion, Redox LMS is a comprehensive learning management system that offers robust
                            functionality
                            for educational institutions. With its four user roles and intuitive design, Redox LMS
                            provides
                        </p>
                    </div>
                </div>
                <div class="resume-wrap d-flex ftco-animate">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="flaticon-ideas"></span>
                    </div>
                    <div class="text pl-3">
                        <span class="date">2022</span>
                        <h2>MintStore</h2>
                        <span class="position">PHP, SQL, HTML, CSS, Bootstrap, JQuery, Payhere</span>
                        <p>Mintstore is a fully-featured e-commerce website built using HTML, CSS, JavaScript, PHP,
                            jQuery, and
                            MySQL. The website provides a user-friendly and responsive platform for customers to buy
                            products online.
                            It includes advanced features such as Google APIs for user login and integration of the
                            Payhere payment
                            gateway for handling online payments.
                            <br>
                            <br>
                            Mintstore is designed to provide an intuitive shopping experience to users, with an
                            attractive and
                            easy-to-use interface. The website includes a wide range of products that are categorized
                            and listed in an
                            organized manner, making it easier for users to find what they are looking for.
                            <br>
                            <br>
                            To ensure a smooth shopping experience, the website includes Google APIs for user login.
                            This allows users
                            to easily create an account and securely sign in using their Google credentials. To handle
                            online
                            payments, Mintstore integrates with the Payhere payment gateway, which provides a secure and
                            reliable
                            platform for processing payments.
                            <br>
                            <br>
                            The Mintstore website also includes a fully built admin panel for managing all aspects of
                            the website,
                            including products, orders, and customers. The admin panel provides an easy-to-use interface
                            for managing
                            inventory, processing orders, and tracking sales.
                            <br>
                            <br>
                            In addition to its e-commerce features, Mintstore includes a chat function that allows
                            customers to
                            communicate directly with the website owner. This feature provides a personal touch to the
                            shopping
                            experience, allowing users to ask questions or seek assistance in real time.
                            <br>
                            <br>
                            Overall, Mintstore is a comprehensive e-commerce website that offers a range of features to
                            ensure a
                            seamless shopping experience for customers. With its user-friendly interface, advanced
                            features such as
                            Google APIs and Payhere payment gateway, and a fully built admin panel, Mintstore provides a
                            powerful
                            platform for managing an online store.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section class="ftco-section" id="blog-section">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-5">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <h1 class="big big-2">Blog</h1>
          <h2 class="mb-4">Our Blog</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry justify-content-end">
            <a href="single.html" class="block-20" style="background-image: url('images/image_1.jpg');">
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">Sept. 12, 2019</span>
                  <a href="#" class="mr-2">Admin</a>
                  <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                </p>
              </div>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry justify-content-end">
            <a href="single.html" class="block-20" style="background-image: url('images/image_2.jpg');">
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">Sept. 12, 2019</span>
                  <a href="#" class="mr-2">Admin</a>
                  <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                </p>
              </div>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex ftco-animate">
          <div class="blog-entry">
            <a href="single.html" class="block-20" style="background-image: url('images/image_3.jpg');">
            </a>
            <div class="text mt-3 float-right d-block">
              <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
              <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                  <span class="mr-2">Sept. 12, 2019</span>
                  <a href="#" class="mr-2">Admin</a>
                  <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                </p>
              </div>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
    <section class="ftco-section ftco-hireme img" style="background-image: url(images/bg_1.jpg)">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7 ftco-animate text-center">
                    <h2>I'm <span>Available</span> for freelancing</h2>
                    <p>I am currently available for freelance projects. If you have any project that you want to get
                        done, feel free
                        to contact me.</p>
                    <p class="mb-0"><a href="#" class="btn btn-primary py-3 px-5">Hire me</a></p>
                </div>
            </div>
        </div>
    </section>
    <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <h1 class="big big-2">Contact</h1>
                    <h2 class="mb-4">Contact Me</h2>
                    <p>Feel free to contact me for any inquiries. I am always available on social media.</p>
                </div>
            </div>
            <div class="row d-flex contact-info mb-5">
                <div class="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div class="align-self-stretch box text-center p-4 shadow">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="icon-map-signs"></span>
                        </div>
                        <div>
                            <h3 class="mb-4">Address</h3>
                            <p>No 79, Hapugoda, Ambatenna</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div class="align-self-stretch box text-center p-4 shadow">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="icon-phone2"></span>
                        </div>
                        <div>
                            <h3 class="mb-4">Contact Number</h3>
                            <p><a href="tel://1234567920">+94 76 578 1398</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div class="align-self-stretch box text-center p-4 shadow">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="icon-paper-plane"></span>
                        </div>
                        <div>
                            <h3 class="mb-4">Email Address</h3>
                            <p><a href="mailto:wikum.dev@gmail.com" class="__cf_email__">wikum.dev@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex ftco-animate">
                    <div class="align-self-stretch box text-center p-4 shadow">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="icon-globe"></span>
                        </div>
                        <div>
                            <h3 class="mb-4">Website</h3>
                            <p><a href="#">wikum.live</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters block-9">
                <div class="col-md-6 order-md-last d-flex">
                    <form class="bg-light p-4 p-md-5 contact-form" enctype="multipart/form-data" id='contact-form'>
                        @csrf
                        <div class="form-group">
                            <input type="text" class="form-control" id="name" name="name"
                                placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" name="email"
                                placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="subject" name="subject"
                                placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <textarea cols="30" rows="7" id="message" name="message" class="form-control" required
                                placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="button" onclick="postData()" value="Send Message"
                                class="btn btn-primary py-3 px-5">
                        </div>
                    </form>
                </div>
                <div class="col-md-6 d-flex">
                    <div class="img" style="background-image: url(images/call.jpg);"></div>
                </div>
            </div>
        </div>
    </section>
    <footer class="ftco-footer ftco-section">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">About</h2>
                        <p>Feel free to contact me for any inquiries. I am always available on social media.</p>
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4 ml-md-4">
                        <h2 class="ftco-heading-2">Links</h2>
                        <ul class="list-unstyled">
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>About</a></li>
                            <!-- <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Services</a></li> -->
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Projects</a></li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Services</h2>
                        <ul class="list-unstyled">
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Desktop App
                                    Development</a>
                            </li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Development</a>
                            </li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Business
                                    Solutions</a></li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Data Analysis</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Have a Questions?</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><span class="icon icon-map-marker"></span><span class="text"> No 79, Hapugoda,
                                        Ambatenna

                                    </span></li>
                                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+94
                                            76 578
                                            1398</span></a></li>
                                <li><a href="mailto:wikum.dev@gmail.com"><span class="icon icon-envelope"></span><span
                                            class="text"><span class="__cf_email__"
                                                data-cfemail="7e171018113e07110b0c1a11131f1710501d1113">wikum.dev@gmail.com</span></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>
                        Copyright &copy;
                        <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                        <script>
                            document.write(new Date().getFullYear());
                        </script> All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px">
            <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                stroke="#eeeeee" />
            <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                stroke-miterlimit="10" stroke="#F96D00" />
        </svg></div>


    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/jquery.animateNumber.min.js"></script>
    <script src="js/scrollax.min.js"></script>
    <script src="js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-23581568-13');
    </script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317"
        integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA=="
        data-cf-beacon='{"rayId":"84c85e595b84b2f7","b":1,"version":"2024.1.0","token":"cd0b4b3a733644fc843ef0b185f98241"}'
        crossorigin="anonymous"></script>

    <script>
        //onsubmit 

        function postData() {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let subject = document.getElementById('subject').value;
            let message = document.getElementById('message').value;
            let formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            $.ajax({
                url: "{{ route('contact') }}",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function(data) {

                    if (data == 1) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Message Sent Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        document.getElementById('contact-form').reset();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data.message,
                        })
                    }
                },
            });
        }
    </script>

</body>

</html>
