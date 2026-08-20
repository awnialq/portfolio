import { useEffect, useState } from 'react';

const SEEN_KEY = 'awni:converged';

const hasConverged = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    // Storage blocked (private mode, embedded contexts) — treat as unseen.
    return false;
  }
};

const markConverged = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    // Non-fatal: the animation simply plays again next route.
  }
};

/**
 * Renders text as three offset RGB channels that converge into white,
 * the way a CRT converges its guns. Plays once per session.
 */
const Convergence = ({ children }) => {
  const [animate, setAnimate] = useState(() => !hasConverged());

  useEffect(() => {
    if (!animate) return undefined;
    markConverged();
    const timer = setTimeout(() => setAnimate(false), 700);
    return () => clearTimeout(timer);
  }, [animate]);

  return (
    <span className={animate ? 'converge converge--animate' : 'converge'}>
      {children}
      <span aria-hidden="true" className="converge__layer converge__layer--r">
        {children}
      </span>
      <span aria-hidden="true" className="converge__layer converge__layer--g">
        {children}
      </span>
      <span aria-hidden="true" className="converge__layer converge__layer--b">
        {children}
      </span>
    </span>
  );
};

export default Convergence;
