function App() {
    React.useEffect(() => {
        lucide.createIcons();
    }, []);
    return (
        <div>
            <Header />
            <Hero />
            <WhatWeDo />
            <WhyHospitals />
            <Services />
            <WhoWeWorkWith />
            <WhyChooseUs />
            <CTA />
        </div>
    );
}

/* ---------- Header ---------- */
function Header() {
    return (
        <header className="header">
            <h2>🏥 Hospital Procurement</h2>
            <nav>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

/* ---------- Hero ---------- */
function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-text">
                <h1>Hospital Procurement<br />Consultation & Support</h1>
                <p>
                    Helping hospitals source the right medical equipment,
                    consumables, and services cost-effectively.
                </p>
                <button className="btn-primary">Request Consultation</button>
                <button className="btn-secondary">Contact Us</button>
            </div>
            <img src="/images/doctor.jpg" alt="Hospital Doctors" />
        </section>
    );
}

/* ---------- What We Do ---------- */
function WhatWeDo() {


    const services = [
        { icon: "stethoscope", title: "Medical Equipment Sourcing" },
        { icon: "package", title: "Consumables Planning" },
        { icon: "handshake", title: "Vendor Negotiation" },
        { icon: "wallet", title: "Cost Optimization" }
    ];



    return (
        <section id="services" className="section">
            <h2>What We Do</h2>
            <p>End-to-end procurement solutions for hospitals & clinics.</p>
            <div className="grid">
                {services.map(service => (
                    <div className="card" key={service.title}>
                        <i data-lucide={service.icon}></i>
                        <h4>{service.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ---------- Why Hospitals ---------- */
function WhyHospitals() {
    const services = [
        { icon: "chart-candlestick", title: "High procurement costs" },
        { icon: "circle-off", title: "Wrong vendor selection" },
        { icon: "shield-x", title: "Non-standard equipment" },
        { icon: "cable", title: "Delays in supply" },
        { icon: "clipboard-minus", title: "Lack of documentation" },
    ]

    return (
        <section className="section light">
            <h2>Why Hospitals Need Procurement Support</h2>
            <div className="grid">
                {services.map(service => (
                    <div className="card" key={service.title}>
                        <i data-lucide={service.icon}></i>
                        <h4>{ service.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ---------- Services ---------- */
function Services() {
    const services = [
        { icon: "brain", title: "Equipment Consultation" },
        { icon: "arrow-down-z-a", title: "Vendor Shortlisting" },
        { icon: "send-horizontal", title: "Budget Planning" },
        { icon: "credit-card", title: "Purchase Documentation" },
        { icon: "notebook-pen", title: "AMC & Contracts" }
    ];

    return (
        <section className="section">
            <h2>Our Procurement Services</h2>
            <div className="grid">
                {services.map(service => (
                    <div className="card" key={service.title}>
                        <i data-lucide={ service.icon}></i>
                        <h4>{service.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ---------- Process ---------- */
function WhoWeWorkWith() {
    const services = [
        { icon: "glasses", title: "Needs Assessment" },
        { icon: "vault", title: "Vendor Evaluation" },
        { icon: "chart-line", title: "Cost Analysis" },
        { icon: "hospital", title: "Procurement Process" },
        { icon: "shopping-bag", title: "Post Purchase Support" }
    ];


    return (
        <section id="about" className="section light">
            <h2>Who We Work With</h2>
            <div className="grid">
                {services.map(service => (
                    <div className="card" key={service.title}>
                        <i data-lucide={service.icon}></i>
                        <h4>{ service.title }</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ---------- Why Choose Us ---------- */
function WhyChooseUs() {
    const services = [
        { icon: "hand-metal", title: "Healthcare Domain Expertise" },
        { icon: "meh", title: "Vendor-Neutral Guidance" },
        { icon: "hat-glasses", title: "Cost Analysis" },
        { icon: "badge-percent", title: "Cost-Effective Decisions" },
        { icon: "compass", title: "Hospital-Focused Solutions" }
    ];
    return (
        <section className="section">
            <h2>Why Choose Us</h2>
            <div className="whychooseus-section">
                <div>
                    {services.map(service => (
                        <div className="why-left-section">
                            <i data-lucide={service.icon}></i>
                            <h4>{service.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="why-right-section">
                    <img src="/images/doctor2.jpg" alt="Hospital Doctors" />
                </div> 
            </div>
        </section>
    );
}

/* ---------- CTA ---------- */
function CTA() {
    return (
        <footer id="contact" className="cta">
            <h2>Looking to streamline your hospital procurement?</h2>
            <button className="btn-secondary">📞 +91 99496 91327</button>
            <button className="btn-primary">Get Procurement Consultation</button>
        </footer>
    );
}

/* ---------- Render ---------- */
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

