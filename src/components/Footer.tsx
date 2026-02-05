export default function Footer() {
  return (
    <footer style={styles.footer}>
      © 2026 Webstack. All rights reserved.
    </footer>
  );
}

const styles = {
  footer: {
    padding: "15px",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center" as const,
  },
};
