const EMAIL = "antoineassaf25@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="fullscreen-section">
      <h1 className="divider">Contact</h1>

      <p style={{ fontSize: "26px", marginTop: "20px" }}>
        Please contact me directly at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="emailLink"
          style={{ textDecoration: "underline", fontWeight: 500 }}
        >
          {EMAIL}
        </a>
      </p>

      <div style={{ marginTop: "10px", display: "flex", gap: "24px" }}>
        <a
          href="https://linkedin.com/in/aassaf25"
          target="_blank"
          rel="noreferrer"
          style={{fontSize: "20px"}}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/antoineassaf25"
          target="_blank"
          rel="noreferrer"
          style={{fontSize: "20px"}}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}