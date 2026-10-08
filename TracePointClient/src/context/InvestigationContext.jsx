import { createContext, useContext, useState, useMemo } from "react";

const InvestigationContext = createContext(null);

export function InvestigationProvider({ children }) {
    const [selectedSuspect, setSelectedSuspect] = useState(null);
    const [conclusion, setConclusion] = useState(null);
    const [selectedEvidence, setSelectedEvidence] = useState([]);

    const value = useMemo(
        () => ({
            selectedSuspect,
            setSelectedSuspect,
            conclusion,
            setConclusion,
            selectedEvidence,
            setSelectedEvidence,
        }),
        [selectedSuspect, conclusion, selectedEvidence]
    );

    return (
        <InvestigationContext.Provider value={value}>
            {children}
        </InvestigationContext.Provider>
    );
}

export function useInvestigation() {
    const context = useContext(InvestigationContext);
    if (!context) {
        throw new Error("useInvestigation must be used within an InvestigationProvider");
    }
    return context;
}