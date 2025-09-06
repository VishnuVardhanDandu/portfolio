import React, { useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
} from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";

const RESUME_PATH = "/resume.pdf";
const PHOTO_PATH = "/vishnu.jpg";

// ===== NEW: Data mapped from your resume =====
const COURSES = [
  "Project Management",
  "Construction Documents & Liability",
  "Wind & Steel Structures",
  "Green Buildings & Sustainability",
  "BIM",
];

const SKILLS = [
  "Cost Estimation",
  "Quality Control",
  "Specifications & Drawings Review",
  "Site Supervision & Inspection",
  "Bid Proposals",
  "Construction Safety",
  "Storm Water Management",
  "Change Order Review",
  "Risk Management",
  "Project Coordination",
  "Project Management",
  "Analytical Skills",
  "Problem Solving",
  "Documentation",
  "Seismic Design",
  "Construction Scheduling",
  "Cost Reports",
  "Post-Construction Work",
  "Project Delivery Methods",
];

const SOFTWARE = [
  "AutoCAD",
  "Revit Architecture",
  "Primavera P6",
  "BIM",
  "Procore",
  "Civil 3D",
  "Trello",
  "Excel",
  "Bluebeam Revu",
  "MATLAB",
  "Microsoft Project",
];

const CERTIFICATIONS = [
  "OSHA 30-Hour",
  "Nuclear Gauge Certification",
  "CMIT (Construction Manager-in-Training)",
  "ACI Certified",
  "RTT Certified",
  "BIM",
  "Quantity Surveying Building Estimation (Excel & CAD)",
  "CPR Pro Certification",
  "Civil 3D",
  "Procore Certification",
];

const PROFESSIONAL_DEV = [
  {
    title: "Supervisor of Operations Services (Part-time)",
    org: "University of Alabama at Birmingham – Recreation Center",
    time: "Nov 2023 – Dec 2024",
    points: [
      "Led teams, resolved conflicts, enforced safety protocols.",
      "Used Trello for scheduling/time-bound operations.",
    ],
  },
  {
    title: "Workshop",
    org: "Advanced Soil Testing Techniques",
    time: "",
    points: ["Hands-on with SPT, CPT and field testing equipment."],
  },
  {
    title: "Term Paper",
    org: "Gdynia Waterfront – Office Building (Green building)",
    time: "",
    points: ["Studied LEED-certified, sustainable building strategies."],
  },
];

export default function Portfolio() {
  // Cursor-follow glow
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div>
      {/* cursor glow layer */}
      <div className="cursor-glow" aria-hidden="true" />

      {/* NAVBAR */}
      <Navbar bg="white" expand="lg" fixed="top" className="border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="fw-semibold">
            Vishnu Vardhan Dandu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav" className="justify-content-end">
            <Nav className="gap-2">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#professional">Professional Dev</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button className="ms-3" variant="primary" href={RESUME_PATH} download>
              <FaDownload className="me-2" />
              Download Resume
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* offset for fixed navbar */}
      <div style={{ height: 72 }} />

      {/* HERO */}
      <section id="home" className="py-5 bg-light">
        <Container>
          <Row className="align-items-center gy-4">
            <Col md={7}>
              <h1 className="display-5 fw-bold mb-3">Civil / Structural Engineer</h1>
              <p className="lead mb-4">
                CMT-1 Staff Engineer • BIM • QA/QC • Geotechnical • Project Coordination
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button variant="primary" href="#contact">Let’s Connect</Button>
                <Button variant="outline-secondary" href={RESUME_PATH} download>
                  <FaDownload className="me-2" />
                  Resume (PDF)
                </Button>
              </div>
              <div className="d-flex flex-wrap gap-4 mt-4 text-muted">
                <a href="mailto:vishnudandu5377@gmail.com" className="text-decoration-none">
                  <FaEnvelope className="me-2" /> vishnudandu5377@gmail.com
                </a>
                <a href="tel:+12054136860" className="text-decoration-none">
                  <FaPhone className="me-2" /> (205) 413-6860
                </a>
                <a
                  href="https://www.linkedin.com/in/vishnudandu00/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <FaLinkedin className="me-2" /> LinkedIn
                </a>
              </div>
            </Col>

            <Col md={5} className="text-center">
              <div className="hero-photo-wrap mx-auto">
                <Image
                  src={PHOTO_PATH}
                  alt="Vishnu Vardhan Dandu"
                  roundedCircle
                  fluid
                  className="hero-photo"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <Container>
          <h2 className="fw-bold mb-3">About</h2>
          <p className="mb-0">
            I am a civil engineer with a Master’s degree from the University of Alabama at
            Birmingham (May 2023 – Dec 2024). My experience spans geotechnical evaluations,
            site supervision, QA/QC, BIM workflows, and materials testing. I focus on
            delivering safe, efficient projects and collaborating with cross-functional teams
            to meet schedule, budget, and quality standards.
          </p>
        </Container>
      </section>

      {/* ===== NEW: EDUCATION ===== */}
      <section id="education" className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-3">Education</h2>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-1 fw-semibold">Master of Science in Civil Engineering</h5>
              <div className="text-muted">University of Alabama at Birmingham • May 2023 – Dec 2024</div>
              <div className="mt-3">
                <div className="fw-semibold mb-2">Courses</div>
                <div className="d-flex flex-wrap gap-2">
                  {COURSES.map((c) => (
                    <Badge bg="secondary" key={c}>{c}</Badge>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ===== NEW: SKILLS & SOFTWARE ===== */}
      <section id="skills" className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">Skills & Software</h2>
          <Row className="g-4">
            <Col md={7}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-semibold">Core Skills</h5>
                  <div className="mt-3 d-flex flex-wrap gap-2">
                    {SKILLS.map((s) => (
                      <Badge bg="light" text="dark" key={s} className="border badge-large">{s}</Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h5 className="fw-semibold">Software Proficiency</h5>
                  <div className="mt-3 d-flex flex-wrap gap-2">
                    {SOFTWARE.map((s) => (
                      <Badge bg="light" text="dark" key={s} className="border badge-large">{s}</Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* EXPERIENCE (your existing content) */}
      {/* EXPERIENCE */}
<section id="experience" className="py-5 bg-light">
  <Container>
    <h2 className="fw-bold mb-4">Experience</h2>

    {/* Row 1: CMT-1 alone */}
    <Row className="g-4 mb-4">
      <Col md={12}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-semibold">CMT-1 Staff Engineer</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              United Consulting • Atlanta, USA • Mar 2025 – Present
            </Card.Subtitle>
            <ul className="mb-0">
              <li>Geotechnical evaluations for bridge foundations, retaining walls, and soil surveys.</li>
              <li>Field surveying and subsurface exploration; soil sampling and classification.</li>
              <li>Environmental assessments, daily logs, and technical reports; OSHA compliance.</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Row 2: Construction Engineer + Site Engineer Intern */}
    <Row className="g-4">
      <Col md={6}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-semibold">Construction Engineer</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Hima Sai Constructions • Hyderabad, India • Oct 2022 – Mar 2023
            </Card.Subtitle>
            <ul className="mb-0">
              <li>25,000 sq.ft 2-story commercial complex: site prep, materials, foundations, QC.</li>
              <li>Managed phases from procurement to labor to meet schedule.</li>
              <li>Assisted pay apps, cost reporting, inspections, punch lists.</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-semibold">
              Site Engineer Intern & Quality Control Engineer
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              GVK Constructions • Karimnagar, India • Sep 2021 – Sep 2022
            </Card.Subtitle>
            <ul className="mb-0">
              <li>Supervised ~$5M projects (~30,500 sq.ft), ensuring structural integrity and safety.</li>
              <li>Coordinated with 14-engineer team; Primavera P6 schedules; delivered on time and budget.</li>
              <li>QC Engineer (Jun–Sep 2022): concrete mix design/testing to IS standards; audits via Procore.</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* PROJECTS (your existing content) */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">Projects</h2>
        <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-semibold">Circular Overhead Water Tank (STAAD Pro)</Card.Title>
                  <Card.Text className="mb-0">
                    Designed 200,000-liter RCC circular tank per IS 3370; load calculations, reinforcement optimization; documentation in Excel & Bluebeam.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-semibold">Sustainable Permeable Concrete</Card.Title>
                  <Card.Text className="mb-0">
                    Evaluated Bagasse Ash & Rice Husk Ash as partial cement substitutes; strength/durability/permeability tests using MATLAB.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-semibold">Residential Building using BIM</Card.Title>
                  <Card.Text className="mb-0">
                    Drafted 2D plans/elevations (AutoCAD); 3D Revit model; construction docs & walkthroughs for presentations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== NEW: CERTIFICATIONS ===== */}
      <section id="certifications" className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-3">Certifications</h2>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex flex-wrap gap-2">
                {CERTIFICATIONS.map((c) => (
                  <Badge key={c} bg="light" text="dark" className="border badge-large">{c}</Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ===== NEW: PROFESSIONAL DEVELOPMENT ===== */}
      <section id="professional" className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">Professional Development</h2>
          <Row className="g-4">
            {PROFESSIONAL_DEV.map((item, idx) => (
              <Col md={4} key={idx}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="fw-semibold">{item.title}</div>
                    <div className="text-muted">{item.org}{item.time ? ` • ${item.time}` : ""}</div>
                    <ul className="mt-2 mb-0">
                      {item.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-3">Contact</h2>
          <p>Open to opportunities in civil/structural, QA/QC, geotechnical, and BIM.</p>
          <div className="d-flex flex-column gap-2">
            <a href="mailto:vishnudandu5377@gmail.com" className="text-decoration-none">
              <FaEnvelope className="me-2" /> vishnudandu5377@gmail.com
            </a>
            <a href="tel:+12054136860" className="text-decoration-none">
              <FaPhone className="me-2" /> (205) 413-6860
            </a>
            <a
              href="https://www.linkedin.com/in/vishnudandu00/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <FaLinkedin className="me-2" /> LinkedIn
            </a>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light py-3 text-center">
        <Container>
          <small>© {new Date().getFullYear()} Vishnu Vardhan Dandu — All rights reserved.</small>
        </Container>
      </footer>
    </div>
  );
}
