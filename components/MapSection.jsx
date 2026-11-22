'use client';

export default function MapSection() {
  return (
    <div className="leaflet-service-map map-embed" role="region" aria-label="Map showing Volpe Renovations Co.'s service area across Tampa Bay, Florida">
      <iframe
        title="Volpe Renovations Co. Tampa Bay service area map"
        src="https://www.google.com/maps?q=Tampa+Bay%2C+Florida&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-radius" aria-hidden="true" />
      <div className="map-note">
        <strong>Hillsborough · Hernando · Pasco · Pinellas</strong>
        <span>Serving the greater Tampa Bay area</span>
      </div>
    </div>
  );
}
