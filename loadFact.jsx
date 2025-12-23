
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoadFact = ({ setUpdate }) => {
    const [currentFact, setCurrentFact] = useState("");
    const [savedFacts, setSavedFact] = useState([]);
    const [elevated, setElevated] = useState(false);

    const loadNewFact = async () => {
        try {
            const response = await fetch(("https://catfact.ninja/fact"));
            const data = await response.json();
            setCurrentFact(data.fact);
        } catch (e) {
            console.log("errorrrr", e);
        }
    };

    const savedFact = () => {
        console.log("----",savedFacts);
        
        if (currentFact?.trim() === "" || savedFacts.includes(currentFact)) return;
        const updatedFacts = [...savedFacts, currentFact];
                console.log("--9999999--",updatedFacts);

        setSavedFact(updatedFacts);
        localStorage.setItem("catFacts121", JSON.stringify(updatedFacts));
        setUpdate(prev => !prev);
        alert("The data is saved successfully");
    };

    const navigate = useNavigate();
    const navigateToList = () => navigate("/list");

    const cardStyle = {
        margin: "24px auto",
        padding: 20,
        borderRadius: 12,
        display:"flex",
        background: "#fff",
        justifyContent:"center",
        boxShadow: elevated
            ? "0 20px 40px rgba(16,24,40,0.18), 0 6px 12px rgba(16,24,40,0.06)"
            : "0 6px 18px rgba(16,24,40,0.08)",
        color: "#111827",
        
        flexDirection: "column",
        gap: 12,
        
    };

    const btnRowStyle = {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        marginTop: 8,
    };

    const primaryBtn = {
        padding: "8px 14px",
        borderRadius: 8,
        border: "none",
        background: "#2563eb",
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 6px 10px rgba(37,99,235,0.12)",
    };

    const secondaryBtn = {
        padding: "8px 14px",
        borderRadius: 8,
        border: "1px solid #d1d5db",
        background: "#1c84ebff",
        color: "#fff",
        cursor: "pointer",
    };
 const listBtn = {
        padding: "8px 14px",
        borderRadius: 8,
        border: "1px solid #d1d5db",
        background: "#a1bbd4ff",
        color: "#111827",
        cursor: "pointer",
    };
    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setElevated(true)}
            onMouseLeave={() => setElevated(false)}
            role="region"
            aria-label="Cat fact card"
        >
            <h2 style={{ margin: 0 }}>Current fact</h2>
            <p style={{ margin: 0, lineHeight: 1.5, minHeight: 48 }}>
                {currentFact || "Click 'New fact' to load a cat fact."}
            </p>

            <div style={btnRowStyle}>
                <button style={primaryBtn} onClick={loadNewFact}>New fact</button>
                <button style={secondaryBtn} onClick={savedFact}>Save fact</button>
                <button style={listBtn} onClick={navigateToList}>View list</button>
            </div>
        </div>
    );
}
export default LoadFact;