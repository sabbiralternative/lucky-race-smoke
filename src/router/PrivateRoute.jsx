import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0c0c0c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Rajdhani', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  scanlines: {
    position: "absolute",
    inset: 0,
    background:
      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
    pointerEvents: "none",
    zIndex: 1,
  },
  blob: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    pointerEvents: "none",
    animation: "blob-drift 8s ease-in-out infinite",
  },
  blob1: {
    width: 340,
    height: 340,
    background: "rgba(78,240,208,0.06)",
    top: "30%",
    left: "40%",
    animationDelay: "0s",
  },
  blob2: {
    width: 260,
    height: 260,
    background: "rgba(30,180,160,0.04)",
    top: "45%",
    left: "50%",
    animationDelay: "-4s",
  },
  card: {
    position: "relative",
    zIndex: 10,
    width: 400,
    background: "rgba(18,20,20,0.92)",
    border: "1px solid rgba(78,240,208,0.25)",
    borderRadius: 10,
    backdropFilter: "blur(20px)",
    boxShadow:
      "0 0 0 1px rgba(78,240,208,0.06), 0 0 40px rgba(78,240,208,0.08), 0 20px 60px rgba(0,0,0,0.6)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    animation: "flicker 6s infinite",
  },
  topGlow: {
    height: 1,
    background:
      "linear-gradient(90deg, transparent, rgba(78,240,208,0.7) 30%, rgba(78,240,208,1) 50%, rgba(78,240,208,0.7) 70%, transparent)",
    borderRadius: "10px 10px 0 0",
    animation: "pulse-glow 3s ease-in-out infinite",
  },
  corner: {
    position: "absolute",
    width: 10,
    height: 10,
    borderColor: "rgba(78,240,208,0.8)",
    borderStyle: "solid",
  },
  cornerTL: {
    top: -1,
    left: -1,
    borderWidth: "2px 0 0 2px",
    borderRadius: "2px 0 0 0",
  },
  cornerTR: {
    top: -1,
    right: -1,
    borderWidth: "2px 2px 0 0",
    borderRadius: "0 2px 0 0",
  },
  cornerBL: {
    bottom: -1,
    left: -1,
    borderWidth: "0 0 2px 2px",
    borderRadius: "0 0 0 2px",
  },
  cornerBR: {
    bottom: -1,
    right: -1,
    borderWidth: "0 2px 2px 0",
    borderRadius: "0 0 2px 0",
  },
  inner: {
    padding: "28px 36px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  iconWrap: {
    position: "relative",
    marginBottom: 16,
  },
  iconGlow: {
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(78,240,208,0.2) 0%, transparent 70%)",
    animation: "pulse-glow 2s ease-in-out infinite",
  },
  title: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: "0.25em",
    color: "#4ef0d0",
    margin: 0,
    textAlign: "center",
    textShadow: "0 0 12px rgba(78,240,208,0.6), 0 0 30px rgba(78,240,208,0.2)",
    animation: "pulse-glow 3s ease-in-out infinite",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    margin: "16px 0",
    width: "60%",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: "linear-gradient(90deg, transparent, rgba(78,240,208,0.3))",
  },
  dividerDot: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "#4ef0d0",
    boxShadow: "0 0 6px rgba(78,240,208,0.8)",
  },
  body: {
    color: "rgba(220,230,228,0.75)",
    fontSize: 14,
    lineHeight: 1.7,
    textAlign: "center",
    margin: 0,
    letterSpacing: "0.02em",
    fontWeight: 400,
  },
  btn: {
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 24px",
    border: "1px solid rgba(78,240,208,0.4)",
    borderRadius: 6,
    background: "rgba(78,240,208,0.07)",
    boxShadow:
      "0 0 12px rgba(78,240,208,0.15), inset 0 0 8px rgba(78,240,208,0.04)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.15em",
  },
  btnText: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: 12,
    color: "#4ef0d0",
    fontWeight: 400,
    textShadow: "0 0 8px rgba(78,240,208,0.5)",
  },
};

const PrivateRoute = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const interval = setInterval(() => {
      setScanLine((prev) => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  const { token } = useSelector((state) => state.auth);
  return token ? (
    children
  ) : (
    <div style={styles.root}>
      {/* Scanline overlay */}
      <div style={styles.scanlines} />

      {/* Ambient glow blobs */}
      <div style={{ ...styles.blob, ...styles.blob1 }} />
      <div style={{ ...styles.blob, ...styles.blob2 }} />

      {/* Modal card */}
      <div
        style={{
          ...styles.card,
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.97)",
        }}
      >
        {/* Corner accents */}
        <span style={{ ...styles.corner, ...styles.cornerTL }} />
        <span style={{ ...styles.corner, ...styles.cornerTR }} />
        <span style={{ ...styles.corner, ...styles.cornerBL }} />
        <span style={{ ...styles.corner, ...styles.cornerBR }} />

        {/* Top border glow line */}
        <div style={styles.topGlow} />

        <div style={styles.inner}>
          {/* Icon */}
          <div style={styles.iconWrap}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#4ef0d0"
                strokeWidth="1.5"
              />
              <path
                d="M12 7v5.5"
                stroke="#4ef0d0"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16.5" r="1" fill="#4ef0d0" />
            </svg>
            <div style={styles.iconGlow} />
          </div>

          {/* Title */}
          <h2 style={styles.title}>SESSION EXPIRED</h2>

          {/* Divider */}
          <div style={styles.divider}>
            <span style={styles.dividerLine} />
            <span style={styles.dividerDot} />
            <span style={styles.dividerLine} />
          </div>

          {/* Body text */}
          <p style={styles.body}>
            Your session has expired because you were inactive for too long.
            Please return to the site to log in again.
          </p>

          {/* Button */}
          {/* <button
            style={styles.btn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(78,240,208,0.15)";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(78,240,208,0.35), inset 0 0 12px rgba(78,240,208,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(78,240,208,0.07)";
              e.currentTarget.style.boxShadow =
                "0 0 12px rgba(78,240,208,0.15), inset 0 0 8px rgba(78,240,208,0.04)";
            }}
            onClick={() => alert("Redirecting to login...")}
          >
            <span style={styles.btnText}>RETURN TO LOGIN</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginLeft: 8 }}
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#4ef0d0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600&display=swap');

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes flicker {
          0%, 97%, 100% { opacity: 1; }
          98% { opacity: 0.85; }
          99% { opacity: 0.95; }
        }
      `}</style>
    </div>
  );
};

export default PrivateRoute;
