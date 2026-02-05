"use client";

export default function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      Click Me
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
