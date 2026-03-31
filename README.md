
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daniil Kardava — Mathematics @ UC Berkeley</title>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --ink: #1a1a2e;
    --paper: #faf8f5;
    --accent: #003262;
    --gold: #c4820e;
    --muted: #6b6b7b;
    --border: #e2ddd5;
    --card-bg: #ffffff;
    --card-hover: 0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06);
    --radius: 10px;
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--paper); color: var(--ink);
    line-height: 1.65; -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: center;
    padding: 1rem 3rem;
    background: rgba(250,248,245,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
  nav .logo {
    font-family: 'Newsreader', serif; font-weight: 600; font-size: 1.15rem;
    color: var(--accent); text-decoration: none;
  }
  nav .logo span { color: var(--gold); }
  nav .links { display: flex; gap: 2rem; }
  nav .links a {
    font-size: 0.85rem; font-weight: 500; color: var(--muted);
    text-decoration: none; letter-spacing: 0.04em; text-transform: uppercase;
    position: relative; transition: color var(--transition);
  }
  nav .links a::after {
    content: ''; position: absolute; bottom: -4px; left: 0;
    width: 0; height: 1.5px; background: var(--gold); transition: width var(--transition);
  }
  nav .links a:hover { color: var(--ink); }
  nav .links a:hover::after { width: 100%; }
  nav .links a.active { color: var(--accent); }
  nav .links a.active::after { width: 100%; background: var(--accent); }

  /* HERO */
  .hero {
    min-height: 100vh; display: flex; align-items: center;
    padding: 8rem 3rem 4rem; position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; top: -20%; right: -10%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(196,130,14,0.08) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .hero::after {
    content: '\222B  \2202  \2211  \220F  \221A  \221E  \2248  \221D  \2207  \0394';
    position: absolute; bottom: 8%; right: 5%;
    font-size: 4.5rem; font-family: 'Newsreader', serif;
    color: rgba(0,50,98,0.04); letter-spacing: 0.3rem;
    pointer-events: none; user-select: none;
  }
  .hero-content { max-width: 680px; position: relative; z-index: 1; }
  .hero-label {
    font-size: 0.78rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.12em; color: var(--gold); margin-bottom: 1.25rem;
    display: flex; align-items: center; gap: 0.6rem;
  }
  .hero-label::before { content: ''; width: 28px; height: 1.5px; background: var(--gold); }
  .hero h1 {
    font-family: 'Newsreader', serif; font-size: clamp(2.8rem,5vw,4rem);
    font-weight: 500; line-height: 1.15; letter-spacing: -0.02em;
    margin-bottom: 1.5rem; color: var(--accent);
  }
  .hero h1 em { font-style: italic; font-weight: 300; color: var(--gold); }
  .hero p { font-size: 1.1rem; color: var(--muted); max-width: 520px; margin-bottom: 2.5rem; line-height: 1.75; }
  .hero-links { display: flex; gap: 1rem; flex-wrap: wrap; }
  .hero-links a {
    padding: 0.7rem 1.6rem; font-size: 0.85rem; font-weight: 500;
    border-radius: 6px; text-decoration: none; transition: all var(--transition);
  }
  .btn-primary { background: var(--accent); color: #fff; border: 1.5px solid var(--accent); }
  .btn-primary:hover { background: #002147; border-color: #002147; }
  .btn-secondary { background: transparent; color: var(--accent); border: 1.5px solid var(--border); }
  .btn-secondary:hover { border-color: var(--accent); background: rgba(0,50,98,0.03); }

  /* SECTIONS */
  section { padding: 5rem 3rem; }
  .section-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: var(--gold); margin-bottom: 0.5rem; }
  .section-title { font-family: 'Newsreader', serif; font-size: 2rem; font-weight: 500; color: var(--accent); margin-bottom: 0.6rem; }
  .section-desc { color: var(--muted); font-size: 0.95rem; max-width: 560px; margin-bottom: 3rem; }

  /* ABOUT */
  #about { background: var(--card-bg); border-top: 1px solid var(--border); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; max-width: 1000px; }
  .about-text p { margin-bottom: 1rem; color: var(--muted); font-size: 0.95rem; }
  .about-details { display: flex; flex-direction: column; gap: 1.2rem; }
  .detail-item {
    display: flex; gap: 1rem; align-items: flex-start;
    padding: 1rem 1.25rem; background: var(--paper);
    border-radius: var(--radius); border: 1px solid var(--border);
  }
  .detail-icon {
    width: 36px; height: 36px; flex-shrink: 0;
    background: rgba(0,50,98,0.06); border-radius: 8px;
    display: flex; align-items: center; justify-content: center; font-size: 1rem;
  }
  .detail-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
  .detail-value { font-weight: 500; font-size: 0.92rem; }

  /* ACADEMICS */
  #academics { max-width: 1100px; margin: 0 auto; }
  .semester-group { margin-bottom: 2.5rem; }
  .semester-header {
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 1rem; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border);
  }
  .semester-header h3 { font-family: 'Newsreader', serif; font-size: 1.15rem; font-weight: 500; color: var(--accent); }
  .semester-tag {
    font-size: 0.68rem; font-weight: 600; background: rgba(0,50,98,0.06);
    color: var(--accent); padding: 0.15rem 0.55rem; border-radius: 20px;
    text-transform: uppercase; letter-spacing: 0.04em;
  }
  .semester-tag.current { background: rgba(196,130,14,0.12); color: var(--gold); }
  .semester-tag.transfer { background: rgba(107,107,123,0.1); color: var(--muted); }
  .course-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.75rem; }
  .course-card {
    padding: 0.9rem 1.15rem; background: var(--card-bg);
    border: 1px solid var(--border); border-radius: var(--radius);
    transition: all var(--transition); position: relative; overflow: hidden;
  }
  .course-card:hover { box-shadow: var(--card-hover); border-color: rgba(0,50,98,0.15); transform: translateY(-1px); }
  .course-card.tutored { border-left: 3px solid var(--gold); }
  .course-number { font-family: 'JetBrains Mono', monospace; font-size: 0.76rem; font-weight: 500; color: var(--gold); margin-bottom: 0.2rem; }
  .course-name { font-weight: 500; font-size: 0.9rem; color: var(--ink); }
  .tutor-badge {
    display: inline-flex; align-items: center; gap: 0.3rem;
    font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
    color: var(--gold); background: rgba(196,130,14,0.08);
    padding: 0.18rem 0.5rem; border-radius: 4px; margin-top: 0.4rem;
  }
  .tutor-badge::before { content: '\2726'; font-size: 0.55rem; }
  .category-divider { margin: 3.5rem 0 2.5rem; display: flex; align-items: center; gap: 1rem; }
  .category-divider h2 { font-family: 'Newsreader', serif; font-size: 1.5rem; font-weight: 500; color: var(--accent); white-space: nowrap; }
  .category-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
  .tutoring-banner {
    margin-top: 2.5rem; padding: 1.75rem 2rem;
    background: linear-gradient(135deg, rgba(0,50,98,0.04), rgba(196,130,14,0.06));
    border: 1px solid rgba(196,130,14,0.15); border-radius: var(--radius);
    display: flex; align-items: center; gap: 1.5rem;
  }
  .tutoring-icon {
    width: 48px; height: 48px; flex-shrink: 0; background: var(--gold);
    border-radius: 10px; display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem; color: #fff;
  }
  .tutoring-text h4 { font-family: 'Newsreader', serif; font-size: 1.05rem; font-weight: 500; color: var(--accent); margin-bottom: 0.25rem; }
  .tutoring-text p { font-size: 0.88rem; color: var(--muted); }
  .tutoring-courses { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.6rem; }
  .tutoring-courses span {
    font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 500;
    padding: 0.25rem 0.6rem; background: rgba(196,130,14,0.12);
    color: var(--gold); border-radius: 4px;
  }

  /* PROJECTS */
  #projects { background: var(--card-bg); border-top: 1px solid var(--border); }
  .projects-container { max-width: 1100px; margin: 0 auto; }
  .project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
  .project-card {
    padding: 1.75rem; background: var(--paper); border: 1px solid var(--border);
    border-radius: var(--radius); transition: all var(--transition); display: flex; flex-direction: column;
  }
  .project-card:hover { box-shadow: var(--card-hover); transform: translateY(-2px); }
  .project-card .placeholder-icon {
    width: 44px; height: 44px; background: rgba(0,50,98,0.05);
    border: 1.5px dashed var(--border); border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; color: var(--muted); margin-bottom: 1rem;
  }
  .project-card h4 { font-family: 'Newsreader', serif; font-size: 1.1rem; font-weight: 500; color: var(--muted); margin-bottom: 0.4rem; }
  .project-card p { font-size: 0.85rem; color: var(--muted); opacity: 0.7; flex: 1; }
  .project-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 1rem; }
  .project-tag {
    font-size: 0.7rem; font-weight: 500; padding: 0.2rem 0.55rem;
    background: rgba(0,50,98,0.05); border-radius: 4px; color: var(--muted);
    border: 1px dashed var(--border);
  }

  /* CONTACT */
  #contact { max-width: 1100px; margin: 0 auto; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .contact-card {
    padding: 1.5rem 1.75rem; background: var(--card-bg); border: 1px solid var(--border);
    border-radius: var(--radius); text-decoration: none; color: inherit;
    transition: all var(--transition); display: flex; align-items: center; gap: 1rem;
  }
  .contact-card:hover { box-shadow: var(--card-hover); border-color: rgba(0,50,98,0.15); }
  .contact-icon {
    width: 42px; height: 42px; flex-shrink: 0; background: rgba(0,50,98,0.05);
    border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
  }
  .contact-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
  .contact-value { font-weight: 500; font-size: 0.92rem; }

  /* FOOTER */
  footer {
    padding: 2rem 3rem; border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.8rem; color: var(--muted);
  }

  /* MOBILE */
  .mobile-toggle { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
  .mobile-toggle span { display: block; width: 20px; height: 1.5px; background: var(--ink); margin: 5px 0; transition: var(--transition); }
  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .mobile-toggle { display: block; }
    nav .links {
      display: none; position: absolute; top: 100%; left: 0; right: 0;
      flex-direction: column; gap: 0;
      background: rgba(250,248,245,0.97); backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
    }
    nav .links.open { display: flex; }
    nav .links a { padding: 1rem 1.5rem; }
    section { padding: 3rem 1.5rem; }
    .hero { padding: 7rem 1.5rem 3rem; min-height: auto; }
    .hero h1 { font-size: 2.2rem; }
    .about-grid { grid-template-columns: 1fr; gap: 2rem; }
    .contact-grid { grid-template-columns: 1fr; }
    .hero::after { display: none; }
    .tutoring-banner { flex-direction: column; text-align: center; }
    footer { flex-direction: column; gap: 0.5rem; text-align: center; }
  }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  .fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
  .fade-up:nth-child(1) { animation-delay: 0.1s; }
  .fade-up:nth-child(2) { animation-delay: 0.2s; }
  .fade-up:nth-child(3) { animation-delay: 0.3s; }
  .fade-up:nth-child(4) { animation-delay: 0.4s; }
</style>
</head>
<body>

<nav>
  <a href="#" class="logo">Daniil Kardava<span>.</span></a>
  <button class="mobile-toggle" onclick="document.querySelector('.links').classList.toggle('open')">
    <span></span><span></span><span></span>
  </button>
  <div class="links">
    <a href="#about">About</a>
    <a href="#academics" class="active">Academics</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-label fade-up">University of California, Berkeley</div>
    <h1 class="fade-up">Daniil Kardava<br><em>Mathematics</em></h1>
    <p class="fade-up">
      Undergraduate pursuing a B.A. in Mathematics at UC Berkeley.
      Interested in analysis, algebra, and probability.
      Tutor at the Student Learning Center.
    </p>
    <div class="hero-links fade-up">
      <a href="#academics" class="btn-primary">View Coursework</a>
      <a href="#contact" class="btn-secondary">Get in Touch</a>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="about-grid">
    <div class="about-text">
      <div class="section-label">About</div>
      <div class="section-title">Hello, I'm Daniil.</div>
      <p>
        I'm a senior studying Mathematics at UC Berkeley, having transferred from
        City College of San Francisco. My coursework spans pure and applied
        mathematics — from real and complex analysis to abstract algebra,
        topology, and probability.
      </p>
      <p>
        I serve as a tutor at the UC Berkeley Student Learning Center,
        helping students build confidence and fluency in upper-division
        math courses including analysis, algebra, linear algebra, and complex analysis.
      </p>
      <p>
        [Add more — research interests, career goals, hobbies, etc.]
      </p>
    </div>
    <div class="about-details">
      <div class="detail-item">
        <div class="detail-icon">🎓</div>
        <div>
          <div class="detail-label">Degree</div>
          <div class="detail-value">B.A. Mathematics</div>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-icon">🏛</div>
        <div>
          <div class="detail-label">University</div>
          <div class="detail-value">UC Berkeley</div>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-icon">📐</div>
        <div>
          <div class="detail-label">Role</div>
          <div class="detail-value">Tutor · Student Learning Center</div>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-icon">🗓</div>
        <div>
          <div class="detail-label">Expected Graduation</div>
          <div class="detail-value">Fall 2026</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ACADEMICS -->
<section id="academics">
  <div class="section-label">Coursework</div>
  <div class="section-title">Academics</div>
  <div class="section-desc">
    Technical courses completed at UC Berkeley and City College of San Francisco.
    Courses I tutor at the Student Learning Center are marked with ✦.
  </div>

  <!-- UC BERKELEY -->
  <div class="category-divider"><h2>UC Berkeley</h2></div>

  <!-- Spring 2026 -->
  <div class="semester-group">
    <div class="semester-header">
      <h3>Spring 2026</h3>
      <span class="semester-tag current">In Progress</span>
    </div>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-number">MATH 202B</div>
        <div class="course-name">Introduction to Topology and Analysis</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 156</div>
        <div class="course-name">Numerical Analysis for Data Science and Statistics</div>
      </div>
      <div class="course-card">
        <div class="course-number">STAT 150</div>
        <div class="course-name">Stochastic Processes</div>
      </div>
      <div class="course-card">
        <div class="course-number">COMPSCI 194</div>
        <div class="course-name">Special Topics</div>
      </div>
    </div>
  </div>

  <!-- Fall 2025 -->
  <div class="semester-group">
    <div class="semester-header"><h3>Fall 2025</h3></div>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-number">MATH 202A</div>
        <div class="course-name">Introduction to Topology and Analysis</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 191</div>
        <div class="course-name">Experimental Courses in Mathematics</div>
      </div>
      <div class="course-card">
        <div class="course-number">STAT 155</div>
        <div class="course-name">Game Theory</div>
      </div>
    </div>
  </div>

  <!-- Summer 2025 -->
  <div class="semester-group">
    <div class="semester-header"><h3>Summer 2025</h3></div>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-number">STAT 135</div>
        <div class="course-name">Concepts of Statistics</div>
      </div>
    </div>
  </div>

  <!-- Spring 2025 -->
  <div class="semester-group">
    <div class="semester-header"><h3>Spring 2025</h3></div>
    <div class="course-grid">
      <div class="course-card tutored">
        <div class="course-number">MATH 185</div>
        <div class="course-name">Introduction to Complex Analysis</div>
        <div class="tutor-badge">SLC Tutor</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 105</div>
        <div class="course-name">Second Course in Analysis</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 125A</div>
        <div class="course-name">Mathematical Logic</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 198</div>
        <div class="course-name">Directed Group Study</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 199</div>
        <div class="course-name">Supervised Independent Study and Research</div>
      </div>
    </div>
  </div>

  <!-- Fall 2024 -->
  <div class="semester-group">
    <div class="semester-header"><h3>Fall 2024</h3></div>
    <div class="course-grid">
      <div class="course-card tutored">
        <div class="course-number">MATH 104</div>
        <div class="course-name">Introduction to Analysis</div>
        <div class="tutor-badge">SLC Tutor</div>
      </div>
      <div class="course-card tutored">
        <div class="course-number">MATH 113</div>
        <div class="course-name">Introduction to Abstract Algebra</div>
        <div class="tutor-badge">SLC Tutor</div>
      </div>
      <div class="course-card">
        <div class="course-number">PHYSICS 137A</div>
        <div class="course-name">Quantum Mechanics</div>
      </div>
      <div class="course-card">
        <div class="course-number">PHILOS 148</div>
        <div class="course-name">Probability and Induction</div>
      </div>
    </div>
  </div>

  <!-- Summer 2024 -->
  <div class="semester-group">
    <div class="semester-header"><h3>Summer 2024</h3></div>
    <div class="course-grid">
      <div class="course-card tutored">
        <div class="course-number">MATH 110</div>
        <div class="course-name">Abstract Linear Algebra</div>
        <div class="tutor-badge">SLC Tutor</div>
      </div>
      <div class="course-card">
        <div class="course-number">STAT 134</div>
        <div class="course-name">Concepts of Probability</div>
      </div>
    </div>
  </div>

  <!-- CCSF -->
  <div class="category-divider"><h2>City College of San Francisco</h2></div>

  <!-- Spring 2024 -->
  <div class="semester-group">
    <div class="semester-header">
      <h3>Spring 2024</h3>
      <span class="semester-tag transfer">Transfer</span>
    </div>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-number">CS 110C</div>
        <div class="course-name">Data Structures & Algorithms: C++</div>
      </div>
      <div class="course-card">
        <div class="course-number">CS 231</div>
        <div class="course-name">Advanced Python Programming</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 115</div>
        <div class="course-name">Discrete Mathematics</div>
      </div>
      <div class="course-card">
        <div class="course-number">MATH 130</div>
        <div class="course-name">Linear Algebra & Differential Equations</div>
      </div>
      <div class="course-card">
        <div class="course-number">PHYC 4A</div>
        <div class="course-name">Mechanics for Scientists and Engineers</div>
      </div>
    </div>
  </div>

  <!-- Fall 2023 -->
  <div class="semester-group">
    <div class="semester-header">
      <h3>Fall 2023</h3>
      <span class="semester-tag transfer">Transfer</span>
    </div>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-number">MATH 110C</div>
        <div class="course-name">Calculus III</div>
      </div>
    </div>
  </div>

  <!-- Summer 2023 -->
  <div class="semester-group">
    <div class="semester-header">
      <h3>Summer 2023</h3>
      <span class="semester-tag transfer">Transfer</span>
    </div>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-number">MATH 110B</div>
        <div class="course-name">Calculus II</div>
      </div>
    </div>
  </div>

  <!-- Tutoring Banner -->
  <div class="tutoring-banner">
    <div class="tutoring-icon">📚</div>
    <div class="tutoring-text">
      <h4>Student Learning Center Tutor</h4>
      <p>
        I tutor the following upper-division math courses at the
        UC Berkeley Student Learning Center. Drop by during office hours or reach out below.
      </p>
      <div class="tutoring-courses">
        <span>MATH 104</span>
        <span>MATH 110</span>
        <span>MATH 113</span>
        <span>MATH 185</span>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="projects-container">
    <div class="section-label">Work</div>
    <div class="section-title">Projects</div>
    <div class="section-desc">Selected projects and research. More coming soon.</div>
    <div class="project-grid">
      <div class="project-card">
        <div class="placeholder-icon">+</div>
        <h4>Project Title</h4>
        <p>Brief description of your project. Replace this placeholder with your actual work.</p>
        <div class="project-tags"><span class="project-tag">Tag</span><span class="project-tag">Tag</span></div>
      </div>
      <div class="project-card">
        <div class="placeholder-icon">+</div>
        <h4>Project Title</h4>
        <p>Brief description of your project. Replace this placeholder with your actual work.</p>
        <div class="project-tags"><span class="project-tag">Tag</span><span class="project-tag">Tag</span></div>
      </div>
      <div class="project-card">
        <div class="placeholder-icon">+</div>
        <h4>Project Title</h4>
        <p>Brief description of your project. Replace this placeholder with your actual work.</p>
        <div class="project-tags"><span class="project-tag">Tag</span><span class="project-tag">Tag</span></div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="section-label">Connect</div>
  <div class="section-title">Get in Touch</div>
  <div class="section-desc">Feel free to reach out for tutoring, collaboration, or just to chat about math.</div>
  <div class="contact-grid">
    <a href="mailto:you@berkeley.edu" class="contact-card">
      <div class="contact-icon">✉</div>
      <div><div class="contact-label">Email</div><div class="contact-value">you@berkeley.edu</div></div>
    </a>
    <a href="https://linkedin.com/in/yourprofile" class="contact-card" target="_blank">
      <div class="contact-icon">in</div>
      <div><div class="contact-label">LinkedIn</div><div class="contact-value">linkedin.com/in/yourprofile</div></div>
    </a>
    <a href="https://github.com/yourusername" class="contact-card" target="_blank">
      <div class="contact-icon">⌥</div>
      <div><div class="contact-label">GitHub</div><div class="contact-value">github.com/yourusername</div></div>
    </a>
    <a href="#" class="contact-card">
      <div class="contact-icon">📄</div>
      <div><div class="contact-label">Resume</div><div class="contact-value">Download CV</div></div>
    </a>
  </div>
</section>

<footer>
  <span>© 2026 Daniil Kardava · UC Berkeley Mathematics</span>
  <span>Built with care</span>
</footer>

</body>
</html>
