export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        © {new Date().getFullYear()} Antoine Assaf. All rights reserved.
      </p>

      <p className="builtWith">
        Website built with React, Vite, TypeScript, and deployed on Vercel.
      </p>
    </footer>
  );
}