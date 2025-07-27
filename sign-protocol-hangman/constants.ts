import { Level } from './types';

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const MAX_WRONG_GUESSES = 6;

export const HANGMAN_STAGES = [
    "Ready to play!",
    "   ____\n   |  |\n   |\n   |\n   |\n___|___",
    "   ____\n   |  |\n   |  😟\n   |\n   |\n___|___",
    "   ____\n   |  |\n   |  😰\n   |  |\n   |\n___|___",
    "   ____\n   |  |\n   |  😱\n   | /|\n   |\n___|___",
    "   ____\n   |  |\n   |  😵\n   | /|\\\n   |\n___|___",
    "   ____\n   |  |\n   |  💀\n   | /|\\\n   | / \\\n___|___"
];


export const LEVELS: Level[] = [
    {
        levelIndex: 0,
        name: "Signer ✍️",
        category: "Core Ideas of Sign Protocol",
        words: [
            { word: "SCHEMA", hint: "Defines the structure of an attestation." },
            { word: "ATTEST", hint: "To make a formal declaration or claim." },
            { word: "SIGN", hint: "The action of creating a digital signature on a message." },
        ],
        color: "#22c55e"
    },
    {
        levelIndex: 1,
        name: "Builder 🏗️",
        category: "Key Building Blocks",
        words: [
            { word: "ATTESTATION", hint: "A signed, structured piece of data." },
            { word: "INDEXER", hint: "Service that discovers and stores attestations." },
            { word: "PROTOCOL", hint: "The set of rules governing the system." },
        ],
        color: "#3b82f6"
    },
    {
        levelIndex: 2,
        name: "Verifier 🧠",
        category: "How Attestations Work",
        words: [
            { word: "REVOCATION", hint: "The act of invalidating a previous attestation." },
            { word: "RECIPIENT", hint: "The entity an attestation is about." },
            { word: "RESOLVER", hint: "A contract that can verify attestations." },
        ],
        color: "#8b5cf6"
    },
    {
        levelIndex: 3,
        name: "Architect 📄",
        category: "Data Structures",
        words: [
            { word: "SCHEMA REGISTRY", hint: "An on-chain contract for storing schemas." },
            { word: "DATA", hint: "The content of an attestation, structured by a schema." },
            { word: "OFF CHAIN", hint: "Attestations are stored this way to save costs." },
        ],
        color: "#ef4444"
    },
    {
        levelIndex: 4,
        name: "Innovator ✨",
        category: "Advanced Sign Concepts",
        words: [
            { word: "SIGN SCAN", hint: "The official explorer for browsing attestations." },
            { word: "EAS", hint: "A popular, comparable attestation protocol on Ethereum." },
            { word: "VERAX", hint: "A partner attestation registry on the Linea network." },
        ],
        color: "#f59e0b"
    },
    {
        levelIndex: 5,
        name: "Protocol Master 🎓",
        category: "Deep Protocol Knowledge",
        words: [
            { word: "SEMANTIC ATTESTATION", hint: "An attestation with rich, contextual meaning." },
            { word: "ON CHAIN VERIFICATION", hint: "Confirming validity using smart contracts." },
            { word: "DECENTRALIZED IDENTITY", hint: "A core concept that attestations help build." },
        ],
        color: "#FF6B35"
    }
];