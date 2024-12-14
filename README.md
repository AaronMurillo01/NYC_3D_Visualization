# NYC 3D Visualization

A React-based 3D visualization of New York City built with Three.js and React Three Fiber. This project showcases an interactive 3D cityscape with dynamic buildings, streets, and environmental effects.

Created by Aaron Murillo as a practice/learning project.

## 🎯 Purpose & Learning Goals

This project was created as a practice implementation to explore and demonstrate:
- Advanced 3D web development techniques
- Three.js and React Three Fiber integration
- Complex material and texture management
- Performance optimization for 3D scenes
- Procedural geometry generation
- Dynamic lighting and environmental effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── buildings/       # Building-related components
│   │   ├── Districts.tsx        # City district generation
│   │   ├── LandmarkBuilding.tsx # Notable buildings
│   │   └── NameBuildings.tsx    # Text buildings
│   ├── environment/     # Environmental components
│   │   ├── park/       # Central Park components
│   │   ├── materials/  # Material definitions
│   │   ├── CentralPark.tsx
│   │   └── Streets.tsx
│   ├── materials/      # Shared material components
│   └── Scene.tsx       # Main scene composition
├── constants/          # Configuration constants
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
│   └── materials/     # Material utilities
└── main.tsx          # Application entry point
```

## 🎮 Key Features

- Interactive 3D cityscape with realistic buildings
- Dynamic camera controls with orbit functionality
- Procedurally generated city districts
- Custom building materials with realistic textures
- Dynamic lighting system with day/night cycle
- Animated water and environmental effects
- Performance-optimized rendering
- Responsive design for different screen sizes
- Custom text display using 3D buildings
- Central Park recreation with trees and paths

## 🛠️ Technology Stack

- React 18.3
- TypeScript
- Three.js
- React Three Fiber
- @react-three/drei
- Tailwind CSS

## 🔧 Development Notes

This project is primarily for learning and practice purposes. It demonstrates:

- Modern React patterns and best practices
- 3D graphics programming concepts
- Performance optimization techniques
- Component composition in 3D environments
- Material and texture management
- Dynamic geometry generation

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Learning Outcomes

Through this project, I gained experience with:
- Three.js and WebGL fundamentals
- React Three Fiber ecosystem
- 3D scene composition and optimization
- Material and texture creation
- Dynamic geometry generation
- Performance optimization for 3D web applications
- TypeScript with 3D graphics

## 🎓 Resources Used

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 👨‍💻 Author

Created by Aaron Murillo as a learning exercise in 3D web development.

## 📄 License

This project is open-source and available for learning purposes.