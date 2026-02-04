import { useEffect, useRef } from 'react';

export default function RadiantText({ children, duration = 5, className = '' }) {
  const spanRef = useRef(null);

  useEffect(() => {
    const span = spanRef.current;
    if (!span) return;

    // Create radiant gradient animation
    const keyframes = `
      @keyframes radiant-gradient {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
    `;

    // Check if the animation is already added
    const styleId = 'radiant-gradient-animation';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = keyframes;
      document.head.appendChild(style);
    }

    // Apply the gradient
    span.style.background = 'linear-gradient(90deg, #6d6d79, #8b5cf6, #92e9f2, #f97316, #c5ff95, #000005)';
    span.style.backgroundSize = '200% 200%';
    span.style.backgroundClip = 'text';
    span.style.webkitBackgroundClip = 'text';
    span.style.color = 'transparent';
    span.style.animation = `radiant-gradient ${duration}s ease infinite`;

  }, [duration]);

  return (
    <span 
      ref={spanRef}
      className={`inline-flex items-center justify-center px-4 py-1 transition ease-out hover:opacity-80 hover:duration-300 ${className}`}
    >
      {children}
    </span>
  );
}

// Example usage
function App() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <RadiantText duration={5}>
        <span className="text-3xl font-bold">✨ Introducing Inspira UI</span>
      </RadiantText>
    </div>
  );
}
