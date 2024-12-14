import { Color } from 'three';

interface LandmarkBuilding {
  name: string;
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  isGlass?: boolean;
}

export const LANDMARK_BUILDINGS: LandmarkBuilding[] = [
  // Original landmarks with reduced heights
  {
    name: "Empire State Building",
    position: [0, 100, 0],
    scale: [15, 200, 15],
    color: "#c0c0c0",
    isGlass: false
  },
  {
    name: "One World Trade Center",
    position: [-50, 120, -50],
    scale: [20, 240, 20],
    color: "#87CEEB",
    isGlass: true
  },
  // Additional landmarks
  {
    name: "Hudson Yards",
    position: [-60, 80, -20],
    scale: [25, 160, 25],
    color: "#A4C2F4",
    isGlass: true
  },
  {
    name: "Bank of America Tower",
    position: [20, 90, -40],
    scale: [16, 180, 16],
    color: "#90EE90",
    isGlass: true
  },
  {
    name: "MetLife Building",
    position: [10, 60, 20],
    scale: [20, 120, 15],
    color: "#D3D3D3",
    isGlass: false
  }
];

export const DISTRICT_CONFIGS = {
  downtown: { 
    x: -50, 
    z: -50, 
    spread: 60, 
    style: 'modern',
    density: 100,
    maxHeight: 25 // Reduced height
  },
  midtown: { 
    x: 0, 
    z: 0, 
    spread: 70, 
    style: 'mixed',
    density: 120,
    maxHeight: 30 // Reduced height
  },
  upperEast: { 
    x: 40, 
    z: 40, 
    spread: 40, 
    style: 'classic',
    density: 80,
    maxHeight: 20 // Reduced height
  },
  upperWest: { 
    x: -40, 
    z: 40, 
    spread: 40, 
    style: 'classic',
    density: 80,
    maxHeight: 20 // Reduced height
  },
  financial: {
    x: -70,
    z: -70,
    spread: 50,
    style: 'modern',
    density: 110,
    maxHeight: 28 // Reduced height
  },
  residential: {
    x: 60,
    z: -40,
    spread: 45,
    style: 'classic',
    density: 90,
    maxHeight: 15 // Reduced height
  },
  industrial: {
    x: -90,
    z: 20,
    spread: 55,
    style: 'modern',
    density: 70,
    maxHeight: 12 // Reduced height
  },
  suburban: {
    x: 80,
    z: 80,
    spread: 60,
    style: 'mixed',
    density: 60,
    maxHeight: 10 // Reduced height
  }
} as const;