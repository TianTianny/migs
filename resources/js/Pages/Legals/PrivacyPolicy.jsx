import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "/public/image/Hero/LOGO.png";

const PrivacyPolicy = () => {
    return (
        <>
            <Head title="Privacy Policy and Confidentiality" />
            <section className="font-sans text-gray-900 dark:text-gray-100 antialiased h-full overflow-y-auto">
                <div className="pt-4 bg-gray-100 dark:bg-gray-900">
                    <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                        <Link href={route("landing.show")}>
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </Link>

                        <div className="w-full sm:max-w-5xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert">
                            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                Privacy and Confidentiality at MIGS
                            </h1>

                            <div className="prose dark:prose-invert max-w-full px-2 text-gray-700 dark:text-gray-300">
                                <p className="mb-4">
                                    Thank you for exploring the MIGS Masters
                                    Institute for Graphics Inc. website. We
                                    recognize the significance of protecting
                                    your privacy and are fully committed to
                                    adhering to the principles outlined in the
                                    Data Privacy Act of 2012.
                                </p>
                                <p className="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.,
                                    we place the utmost importance on ensuring
                                    the privacy and confidentiality of our
                                    users, thereby establishing a secure and
                                    trustworthy environment for all aspiring
                                    graphic artists. Below, we outline our
                                    approach to privacy and confidentiality.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Secure Data Handling:
                                </h4>
                                <p className="mb-4">
                                    We employ robust security measures to
                                    safeguard your personal information from
                                    unauthorized access, disclosure, alteration,
                                    or destruction. Your data is protected with
                                    the utmost care to ensure its
                                    confidentiality throughout your educational
                                    journey at MIGS.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Confidentiality in Student Transactions:
                                </h4>
                                <p className="mb-4">
                                    In the realm of graphic design education, we
                                    recognize the sensitivity of student records
                                    and interactions. Rest assured that all
                                    details related to courses, assignments, and
                                    academic transactions are treated with
                                    strict confidentiality to safeguard your
                                    educational interests.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Encryption for Secure Communication:
                                </h4>
                                <p className="mb-4">
                                    Communication within our academic community
                                    is fortified with encryption protocols. This
                                    extra layer of protection ensures that your
                                    messages, project submissions, and any
                                    information shared within the Institute's
                                    platform are secure and private.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Limited Access to Personal Information:
                                </h4>
                                <p className="mb-4">
                                    Access to student personal information is
                                    strictly limited to authorized personnel at
                                    MIGS Masters Institute for Graphics Inc. Our
                                    staff members who require this data for
                                    legitimate educational purposes are
                                    carefully vetted. We ensure that only those
                                    individuals essential for providing our
                                    graphic design education services have
                                    access to your information.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Third-Party Data Handling:
                                </h4>
                                <p className="mb-4">
                                    In cases where third-party services are
                                    integrated into our educational platform, we
                                    uphold stringent standards. Partners are
                                    meticulously vetted to ensure they meet our
                                    high standards of privacy and
                                    confidentiality. Your data is shared
                                    externally only with your explicit consent
                                    and under secure conditions.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Privacy Policy Transparency:
                                </h4>
                                <p className="mb-4">
                                    Our Privacy Policy serves as a guiding
                                    document that provides comprehensive
                                    information about how we collect, use, and
                                    protect your data. We encourage all
                                    students, faculty, and staff to review this
                                    policy to understand the principles that
                                    govern our privacy practices at MIGS.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Data Privacy Contact:
                                </h4>
                                <p className="mb-4">
                                    Should you have any privacy concerns,
                                    inquiries, or require assistance regarding
                                    your data, our dedicated Data Privacy
                                    Service is here to help. You can reach out
                                    to our team at the following email address:
                                    <span className="underline text-blue-600">
                                        migsdesigninc@gmail.com
                                    </span>
                                    .
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    DATA THAT WE COLLECT
                                </h1>
                                <p className="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.,
                                    we collect and process various types of
                                    information to enhance our graphic design
                                    services and ensure a personalized
                                    experience. The data we gather falls into
                                    the following categories:
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Personal Information:
                                </h4>
                                <p className="mb-4">
                                    In order to create and manage your access to
                                    our graphic design resources, we collect
                                    information such as your name, email
                                    address, and contact details. This ensures
                                    secure access to our institute's resources
                                    and enables effective communication within
                                    our community.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Design Preferences and Resource Interests:
                                </h4>
                                <p className="mb-4">
                                    When you indicate design preferences, or
                                    specify interests in design topics, we
                                    collect data to tailor our recommendations.
                                    This helps us align our offerings with your
                                    creative interests and professional needs.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Device and Usage Information:
                                </h4>
                                <p className="mb-4">
                                    We gather information about the devices you
                                    use to access our resources, as well as your
                                    interactions with our platform. This
                                    includes IP addresses, browser types, and
                                    page views, enabling us to optimize your
                                    experience and ensure compatibility with
                                    various devices.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Website Analytics and Optimization:
                                </h4>
                                <p className="mb-4">
                                    We utilize cookies and similar technologies
                                    to enhance your browsing experience, analyze
                                    site performance, and deliver personalized
                                    content related to graphic design. For
                                    detailed information, please refer to our
                                    Cookie Policy.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    User Contribution and Feedback:
                                </h4>
                                <p className="mb-4">
                                    Information you voluntarily provide, such as
                                    feedback on resources, comments, or
                                    inquiries, contributes to our community's
                                    enrichment. Your contributions are valued
                                    and stored securely in accordance with our
                                    Privacy Policy.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Communication Records:
                                </h4>
                                <p className="mb-4">
                                    We collect data related to your
                                    communications with us, including emails,
                                    messages, and feedback. This enables us to
                                    address inquiries, provide support, and
                                    continuously improve our graphic design
                                    services.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Third-Party Integrations for Resource
                                    Enrichment:
                                </h4>
                                <p className="mb-4">
                                    When you integrate third-party services
                                    (e.g., design tools, portfolio platforms)
                                    with our resources, we may collect data from
                                    these integrations in accordance with your
                                    privacy settings. This enriches your
                                    resource access and enables seamless
                                    integration of external tools with our
                                    offerings.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    OUR DISCLOSURE OF YOUR INFORMATION
                                </h1>
                                <p className="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.,
                                    we are committed to transparency in how we
                                    handle your information while providing our
                                    graphic design services. In compliance with
                                    relevant laws and regulations, we may
                                    disclose information for specific purposes
                                    to enhance your experience and improve our
                                    services:
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Compliance with Legal Requirements:
                                </h4>
                                <p className="mb-4">
                                    In compliance with applicable laws and
                                    regulations, we may disclose personal
                                    information to satisfy legal requirements,
                                    enforce our policies, address claims of
                                    rights infringement, or safeguard the
                                    rights, property, or safety of any person.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Customer Support and Academic Guidance:
                                </h4>
                                <p className="mb-4">
                                    In providing support for your academic
                                    journey, we may access and use your personal
                                    information to address inquiries, offer
                                    guidance on design projects, and enhance
                                    your overall learning experience with our
                                    graphic design services and resources.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Collaboration with Design Tools and Software
                                    Providers:
                                </h4>
                                <p className="mb-4">
                                    We may engage third-party providers of
                                    design tools and software to enhance your
                                    learning experience. These providers may
                                    have access to your information to support
                                    various functions, such as software
                                    training, technology support, and
                                    industry-relevant projects.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    With Your Consent:
                                </h4>
                                <p className="mb-4">
                                    In some instances, we may request your
                                    explicit consent to share your information
                                    with a specific third party. For example,
                                    this could involve signing up for a mailing
                                    list managed by a partner organization. We
                                    will always be clear about the purpose of
                                    data sharing and obtain your affirmative
                                    consent before proceeding.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    What We Don't Do:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters will never sell or rent your
                                    personal information to third-party
                                    marketers. We are committed to using your
                                    data responsibly and only for the purposes
                                    outlined in this policy.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Your Control Over Your Information:
                                </h4>
                                <p className="mb-4">
                                    We respect your right to control your
                                    information. Please refer to the "Your
                                    Rights" section of our Privacy Policy for
                                    details on how to access, update, or request
                                    deletion of your information.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Commitment to Transparency:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters remains committed to keeping
                                    you informed about how we handle your
                                    information. We will update this policy as
                                    needed and encourage you to review it
                                    periodically.
                                </p>

                                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    How We Use Your Information:
                                </h1>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Delivering Educational Services:
                                </h4>
                                <p className="mb-4">
                                    We use your information to provide you with
                                    the educational services you request, such
                                    as processing your application, enrolling
                                    you in courses, and delivering course
                                    materials.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Communication and Updates:
                                </h4>
                                <p className="mb-4">
                                    We may use your contact information to send
                                    you program information, updates,
                                    newsletters, and important announcements
                                    related to MIGS Masters.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Website Improvement:
                                </h4>
                                <p className="mb-4">
                                    We use website usage data to analyze trends,
                                    improve the functionality of our website,
                                    and personalize your experience.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    THIRD PARTIES AND LINKS
                                </h1>
                                <p className="mb-4">
                                    MIGS Masters Institute for Graphics Inc.
                                    strives to provide a comprehensive and
                                    inspiring online experience for aspiring
                                    designers. However, it's important to be
                                    aware of the presence of third-party content
                                    on our website:
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Advertisements:
                                </h4>
                                <p className="mb-4">
                                    You may encounter advertisements from
                                    companies offering design software,
                                    hardware, or services that complement your
                                    educational journey. While we carefully
                                    select these advertisers, MIGS Masters does
                                    not control their privacy practices. We
                                    encourage you to review their policies
                                    before interacting with their ads.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    External Links:
                                </h4>
                                <p className="mb-4">
                                    Our website may include links to external
                                    websites, such as design portfolios of
                                    successful alumni, industry blogs, online
                                    communities, or relevant educational
                                    resources. These links are provided as a
                                    courtesy and for your informational benefit.
                                    We are not responsible for the content or
                                    privacy practices of these external sites.
                                </p>

                                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Here are some tips for navigating
                                    third-party content on our website:
                                </h1>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Be cautious:
                                </h4>
                                <p className="mb-4">
                                    Before clicking on a link or interacting
                                    with an ad, take a moment to assess its
                                    legitimacy. Look for familiar logos or brand
                                    names, and be wary of anything that seems
                                    too good to be true.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Review privacy policies:
                                </h4>
                                <p className="mb-4">
                                    If you choose to visit a third-party
                                    website, take some time to review their
                                    privacy policy before submitting any
                                    personal information.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Protect your data:
                                </h4>
                                <p className="mb-2">
                                    Never share your personal information with a
                                    third-party website unless you are confident
                                    in their security practices.
                                </p>
                                <p className="mb-4">
                                    MIGS Masters is committed to providing a
                                    secure and inspiring online environment. By
                                    understanding the nature of third-party
                                    content and following these simple
                                    guidelines, you can maximize your learning
                                    experience with peace of mind.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    ACCOUNT PROTECTION
                                </h1>
                                <p className="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.,
                                    we understand that your online account holds
                                    valuable information about your educational
                                    journey. We take account security very
                                    seriously and have implemented robust
                                    measures to safeguard your data:
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Strong Password Policies:
                                </h4>
                                <p className="mb-4">
                                    We enforce the creation of strong passwords
                                    to protect your account from unauthorized
                                    access. These policies typically include a
                                    minimum length requirement, a mix of
                                    uppercase and lowercase letters, numbers,
                                    and symbols.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Secure Logins:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters utilizes a secure connection
                                    (HTTPS) during login processes. This
                                    encrypts the data transmitted between your
                                    device and our servers, adding an extra
                                    layer of protection.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Regular Security Updates:
                                </h4>
                                <p className="mb-4">
                                    We maintain a rigorous schedule of security
                                    updates on our website and systems to
                                    address any potential vulnerabilities.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    User Education:
                                </h4>
                                <p className="mb-4">
                                    We are committed to user education and may
                                    provide resources or tips for creating
                                    strong passwords and practicing safe online
                                    habits.
                                </p>

                                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Here's what you can do to further protect
                                    your account:
                                </h1>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Choose a strong and unique password:
                                </h4>
                                <p className="mb-4">
                                    Avoid using easily guessable information
                                    like birthdays or pet names.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Choose a strong and unique password:
                                </h4>
                                <p className="mb-4">
                                    Avoid using easily guessable information
                                    like birthdays or pet names.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Practice safe online habits:
                                </h4>
                                <p className="mb-2">
                                    Avoid clicking on suspicious links or
                                    downloading unknown files, and be wary of
                                    phishing attempts that try to trick you into
                                    revealing your login information.
                                </p>
                                <p className="mb-4">
                                    By working together, we can ensure a secure
                                    and worry-free learning experience at MIGS
                                    Masters. If you have any questions about
                                    account security, please don't hesitate to
                                    contact us.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    SECURITY
                                </h1>
                                <p className="mb-4">
                                    We understand the importance of safeguarding
                                    your information and fostering a secure
                                    environment for your creative journey.
                                    Here's how we prioritize your data security:
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Secure Servers:
                                </h4>
                                <p className="mb-4">
                                    Your information is stored on secure servers
                                    protected by firewalls and intrusion
                                    detection systems. These measures help
                                    prevent unauthorized access and data
                                    breaches.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Data Encryption:
                                </h4>
                                <p className="mb-4">
                                    We utilize industry-standard data encryption
                                    practices to protect sensitive information,
                                    both in transit and at rest. This scrambles
                                    your data, making it unreadable to anyone
                                    who shouldn't see it.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Regular Security Audits:
                                </h4>
                                <p className="mb-4">
                                    We conduct regular security audits to
                                    identify and address any potential
                                    vulnerabilities in our systems.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Staying Updated:
                                </h4>
                                <p className="mb-4">
                                    We maintain a rigorous update schedule for
                                    website software and applications to ensure
                                    we have the latest security patches and
                                    protections.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    User Education:
                                </h4>
                                <p className="mb-4">
                                    We believe in user education as a key
                                    element of security. We may provide
                                    resources and tips on creating strong
                                    passwords, recognizing phishing attempts,
                                    and practicing safe online habits.
                                </p>

                                <p className="mb-4">
                                    As detailed in the "Account Protection"
                                    section, we enforce strong password
                                    policies, secure login protocols, and offer
                                    optional two-factor authentication to
                                    fortify your account security.
                                </p>
                                <p className="mb-4">
                                    At MIGS Masters, we are committed to
                                    providing a learning environment where you
                                    can focus on honing your creative skills
                                    with peace of mind. By implementing robust
                                    security measures and collaborating with our
                                    users, we can create a safe and inspiring
                                    platform for future design leaders. If you
                                    have any questions about our security
                                    practices, please don't hesitate to contact
                                    us.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    MIGS COOKIE POLICY
                                </h1>
                                <p className="mb-4">
                                    We strive to create an inspiring and
                                    user-friendly online experience for aspiring
                                    designers and anyone interested in the world
                                    of graphic design. This Cookie Policy
                                    explains how we use cookies and similar
                                    technologies to personalize your experience
                                    and ensure our website functions at its
                                    best.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Understanding Cookies:
                                </h4>
                                <p className="mb-4">
                                    Cookies are small data files that a website
                                    places on your device when you visit. They
                                    act like tiny memory chips, remembering your
                                    preferences and activity on the site. This
                                    can include things like:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>
                                        Login information (if you have an
                                        account)
                                    </li>
                                    <li>Recently viewed pages</li>
                                    <li>Preferred browsing language</li>
                                    <li>
                                        Items added to a shopping cart (if
                                        applicable on our site)
                                    </li>
                                </ul>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Why We Use Cookies:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters utilizes cookies for several
                                    key purposes:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>
                                        <span className="font-bold">
                                            Enhanced Functionality:
                                        </span>
                                        Cookies help us remember your
                                        preferences, so you don't have to
                                        re-enter information every time you
                                        visit. This streamlines your browsing
                                        experience and allows you to focus on
                                        exploring the creative content we offer.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Website Analytics:
                                        </span>
                                        Cookies provide valuable insights into
                                        how visitors interact with our website.
                                        This data helps us understand user
                                        preferences, identify areas for
                                        improvement, and ultimately deliver a
                                        more engaging experience for everyone.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Content Personalization:
                                        </span>
                                        By understanding your browsing habits,
                                        we can tailor the content you see on our
                                        website to your interests. This might
                                        involve showcasing design portfolios
                                        relevant to your preferred style or
                                        highlighting upcoming workshops that
                                        align with your career goals.
                                    </li>
                                </ul>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    What Cookies Do We Use?
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters primarily uses two types of
                                    cookies:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>
                                        <span className="font-bold">
                                            Session Cookies:
                                        </span>
                                        These temporary cookies are deleted once
                                        you close your browser. They help us
                                        remember your preferences during your
                                        current visit.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Persistent Cookies:
                                        </span>
                                        These cookies remain on your device for
                                        a predetermined period of time, even
                                        after you close your browser. They allow
                                        us to recognize you on your next visit
                                        and personalize your experience
                                        accordingly.
                                    </li>
                                </ul>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Most web browsers allow you to manage your
                                    cookie preferences. You can choose to:
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>
                                        <span className="font-bold">
                                            Accept all cookies:
                                        </span>
                                        This is the default setting for most
                                        browsers.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Block all cookies:
                                        </span>
                                        This may limit the functionality of some
                                        websites, including MIGS Masters.
                                    </li>
                                </ul>

                                <p className="mb-4">
                                    Be notified before a cookie is placed: This
                                    gives you the option to accept or reject
                                    cookies on a case-by-case basis.
                                </p>
                                <p className="mb-4">
                                    MIGS Masters is committed to protecting your
                                    privacy. The information we collect through
                                    cookies is used solely to improve your
                                    experience on our website and does not
                                    contain any personally identifiable data
                                    (unless you have created an account on our
                                    site).
                                </p>
                                <p className="mb-4">
                                    If you have any questions about our Cookie
                                    Policy, please don't hesitate to contact us.
                                    We are happy to provide further
                                    clarification.
                                </p>
                                <p className="mb-4">
                                    By continuing to use our website, you
                                    acknowledge your understanding and
                                    acceptance of this Cookie Policy.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    YOUR RIGHTS
                                </h1>
                                <p className="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.,
                                    we believe in transparency and user
                                    empowerment. This section outlines your
                                    choices and control over your information on
                                    our website:
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Accessing Your Information:
                                </h4>
                                <p className="mb-4">
                                    You have the right to request a copy of the
                                    information we hold about your interaction
                                    with our website. This may include browsing
                                    history, preferences you've set (if
                                    applicable), and any limited data collected
                                    through cookies (as outlined in our Cookie
                                    Policy).
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Updating Your Information:
                                </h4>
                                <p className="mb-4">
                                    If any of your information changes, you have
                                    the right to request an update. This ensures
                                    we have accurate records and can continue to
                                    personalize your experience effectively.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Data Deletion:
                                </h4>
                                <p className="mb-4">
                                    In certain circumstances, you may have the
                                    right to request the deletion of your
                                    personal information from our systems. This
                                    right may be subject to limitations, such as
                                    legal requirements or the technical
                                    feasibility of erasing specific data points.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Exercising Your Rights:
                                </h4>
                                <p className="mb-4">
                                    We strive to make it easy for you to
                                    exercise your data rights. If you wish to
                                    access, update, or request deletion of your
                                    information, please contact us through the
                                    methods provided on our website. We will
                                    respond to your request promptly and in
                                    accordance with applicable regulations.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    Commitment to Transparency:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters is committed to clear and
                                    transparent communication regarding your
                                    data privacy. We will keep this policy
                                    updated to reflect any changes in our
                                    practices and ensure you remain informed
                                    about your choices.
                                </p>

                                <h1 class="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    UPDATES TO OUR PRIVACY POLICY
                                </h1>
                                <p class="mb-4">
                                    We are dedicated to keeping pace with the
                                    ever-changing digital landscape. This
                                    includes regularly reviewing and updating
                                    our Privacy Policy to ensure it reflects the
                                    latest practices and safeguards your
                                    privacy.
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Transparency in Updates:{" "}
                                    <span className="text-red-500">
                                        (IF APPLICABLE)
                                    </span>
                                    .
                                </h4>
                                <p class="mb-4">
                                    We will provide clear and concise
                                    notifications whenever significant changes
                                    are made to our Privacy Policy. These
                                    notifications will be prominently displayed
                                    on our website or communicated through
                                    direct channels.
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Your Right to Know:
                                </h4>
                                <p class="mb-4">
                                    The updated policy will be readily available
                                    on our website, allowing you to easily
                                    review the changes and understand how your
                                    information is handled.
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Commitment to Improvement:
                                </h4>
                                <p class="mb-4">
                                    Our goal with any policy updates is to
                                    enhance user privacy and strengthen the
                                    security measures protecting your
                                    information.
                                </p>
                                <p class="mb-4">
                                    We encourage you to periodically review our
                                    Privacy Policy to stay informed about any
                                    updates. If you have any questions or
                                    concerns, please don't hesitate to contact
                                    us. We are committed to open communication
                                    and value your feedback.
                                </p>
                                <p class="mb-4">
                                    By continuing to use our website, you
                                    acknowledge your understanding of this
                                    commitment to ongoing policy updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
