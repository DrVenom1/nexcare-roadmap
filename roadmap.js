import React from "react";

const Roadmap = () => {
  const phases = [
    { title: "Phase 1: Initial Development", details: [
        "Research blockchain donation platforms",
        "Design UI/UX for NexCare",
        "Develop smart contracts for secure donations",
        "Implement basic wallet connection (MetaMask)",
        "Deploy on a testnet (Sepolia or Polygon Mumbai)"
      ] },
    { title: "Phase 2: MVP Launch", details: [
        "Launch a working prototype for public testing",
        "Add real-time transaction tracking on blockchain",
        "Improve security (audit smart contracts)",
        "Integrate NGO verification system",
        "Deploy on a public blockchain (Ethereum, Polygon, BSC)"
      ] },
    { title: "Phase 3: Advanced Features & Adoption", details: [
        "Enable multi-currency donations (BTC, ETH, USDT)",
        "Implement donor leaderboard & rewards system",
        "Develop a mobile app (Android/iOS)",
        "Enable AI-based fraud detection for NGO verification"
      ] },
    { title: "Phase 4: Global Scaling & Nonprofit Expansion", details: [
        "Partner with NGOs & charitable foundations",
        "Enable cross-border crypto donations",
        "Develop a DAO (Decentralized Autonomous Organization) for governance",
        "Register NexCare as a nonprofit organization",
        "Integrate CBDCs (Central Bank Digital Currencies) if adopted globally"
      ] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">NexCare Roadmap</h1>
      <div className="max-w-4xl w-full space-y-8">
        {phases.map((phase, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">{phase.title}</h2>
            <ul className="list-disc pl-5 space-y-2">
              {phase.details.map((detail, i) => (
                <li key={i} className="text-gray-300">{detail}</li>
              ))}
            </ul>43
44
45
46
47
48
49
50
51
52
53
54

          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
