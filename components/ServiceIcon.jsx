/**
 * Vector SVG icons for all Volpe Renovations Co. services.
 */
export default function ServiceIcon({ slug }) {
  switch (slug) {
    case 'bathrooms':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4Z" />
          <path d="M6 12V6a2.5 2.5 0 0 1 5 0v1" />
          <path d="M9 7h4" />
          <path d="M8 20v1.5M16 20v1.5" />
        </svg>
      );
    case 'kitchens':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16v6H4z" />
          <path d="M4 10h16v10H4z" />
          <path d="M12 10v10" />
          <path d="M8 7h2M14 7h2M9 14v2M15 14v2" />
        </svg>
      );
    case 'flooring':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6" />
        </svg>
      );
    case 'painting':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="13" height="5" rx="1.5" />
          <path d="M17 6.5h2.5a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-1.5 1.5H12v2.5" />
          <rect x="10" y="14.5" width="4" height="6" rx="1" />
        </svg>
      );
    case 'drywall':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20h16" />
          <path d="M6 16h12l-2-7H8l-2 7Z" />
          <path d="M12 9V4" />
          <path d="M9.5 4h5" />
        </svg>
      );
    case 'backsplashes':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 12h18M9 4v8M15 12v8" />
        </svg>
      );
    case 'accent-walls':
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4v16M16 4v16M3 12h5M16 12h5" />
        </svg>
      );
  }
}
