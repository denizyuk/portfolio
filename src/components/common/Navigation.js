import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', margin: '0' }}>
        <li style={{ marginRight: '1rem' }}><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
        <li style={{ marginRight: '1rem' }}><Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link></li>
        <li style={{ marginRight: '1rem' }}><Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link></li>
        <li><Link to="/projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <nav style={{ backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', padding: '1rem' }}>
//       <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
//         <li style={{ marginBottom: '1rem' }}><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
//         <li style={{ marginBottom: '1rem' }}><Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link></li>
//         <li style={{ marginBottom: '1rem' }}><Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link></li>
//         <li><Link to="/projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</Link></li>
//       </ul>
//     </nav>
//   );
// }

// function SidebarButton() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <button onClick={handleButtonClick} style={{ padding: '1rem', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '1rem' }}>
//         Show Navigation
//       </button>
//       {isNavOpen && <Navigation />}
//     </div>
//   );
// }

// export default SidebarButton;
