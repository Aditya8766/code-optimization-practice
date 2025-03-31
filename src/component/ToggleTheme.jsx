import React, { useState, useEffect } from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.style.background = isDark ? "#1a1a1a" : "#ffffff";
    document.body.style.color = isDark ? "#ffffff" : "#000000";
  }, [isDark]);

  return (
    <div style={wrapper}>
      <div style={switchOuter} onClick={() => setIsDark(!isDark)}>
        <div style={{ ...switchCircle, transform: isDark ? "translateX(26px)" : "translateX(0)" }} />
      </div>
      <p style={{ marginTop: "10px" }}>{isDark ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
};

export default ToggleTheme;

const wrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
};

const switchOuter = {
  width: "50px",
  height: "26px",
  background: "#ccc",
  borderRadius: "50px",
  position: "relative",
  cursor: "pointer",
  transition: "background 0.3s",
};

const switchCircle = {
  width: "22px",
  height: "22px",
  background: "#fff",
  borderRadius: "50%",
  position: "absolute",
  top: "2px",
  left: "2px",
  transition: "transform 0.3s ease",
};
