const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5168/api';
const API_KEY = import.meta.env.VITE_API_KEY || 'https://9pwwf25t-8000.inc1.devtunnels.ms/';

async function request(path, options = {}) {
    const response = await fetch(`${BASE_URL}${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
        ...options,
    });

    if (response.status === 204) return null;

    if (!response.ok) {
        const message = await response.text().catch(() => '');
        throw new Error(`Request to ${path} failed (${response.status}): ${message || response.statusText}`);
    }

    return response.json();
}

export function getCases() {
    return request('/cases');
}

export function getCase(id) {
    return request(`/cases/${id}`);
}

export function getSuspects() {
    return request('/suspects');
}

export function getSuspect(id) {
    return request(`/suspects/${id}`);
}

export function getEvidence() {
    return request('/evidence');
}

export function getEvidenceItem(id) {
    return request(`/evidence/${id}`);
}

export function submitInvestigation(Investigation) {
    return request('/investigations', {
        method: 'POST',
        body: JSON.stringify(Investigation),
    });
}

// legacy misspelling kept for backward compatibility
export const submitInvestiogation = submitInvestigation;
