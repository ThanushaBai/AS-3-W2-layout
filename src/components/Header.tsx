import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h2>Webstack.</h2>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
};
