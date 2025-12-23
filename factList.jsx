
import React, { useEffect, useState } from 'react';

const FactList = ({ update }) => {
    const [savedFact, setSavedFact] = useState([]);

    useEffect(() => {
        const storedFact = localStorage.getItem('catFacts121');
        setSavedFact(storedFact ? JSON.parse(storedFact) : []);
    }, [update]);

    const containerStyle = {
        maxWidth: 800,
        margin: '24px auto',
        padding: 20,
    };

    const cardStyle = {
        background: '#fff',
        borderRadius: 12,
        padding: 20,
        boxShadow: '0 8px 24px rgba(16,24,40,0.08)',
        color: '#111827',
    };

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    };

    const titleStyle = {
        margin: 0,
        fontSize: 18,
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gap: 10,
    };

    const itemStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
        padding: '12px 14px',
        borderRadius: 10,
        background: '#f8fafc',
        border: '1px solid rgba(17,24,39,0.04)',
        boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.6)',
        lineHeight: 1.4,
    };

    const emptyStyle = {
        padding: 16,
        textAlign: 'center',
        color: '#6b7280',
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle} aria-live="polite">
                <div style={headerStyle}>
                    <h2 style={titleStyle}>Saved Facts</h2>
                    <small style={{ color: '#6b7280' }}>{savedFact.length} saved</small>
                </div>

                {savedFact.length === 0 ? (
                    <div style={emptyStyle}>No saved facts yet — save a fact from the main card.</div>
                ) : (
                    <ul style={listStyle}>
                        {savedFact.map((fact, index) => (
                            <li key={index} style={itemStyle}>
                                <div style={{ flex: 1, marginRight: 12 }}>{fact}</div>
                                <div style={{ color: '#9ca3af', fontSize: 12, minWidth: 48, textAlign: 'right' }}>
                                    #{index + 1}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FactList;
