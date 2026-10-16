export default function FieldArt({ className = "" }) {
  return (
    <svg
      className={`field-art ${className}`}
      viewBox="0 0 900 500"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 13 }, (_, i) => (
        <path
          key={i}
          d={`M${-80 + i * 36} 540 C${120 + i * 24} ${260 - i * 9}, ${710 - i * 16} ${400 - i * 25}, ${960 - i * 13} ${-90 + i * 25}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      <circle cx="680" cy="110" r="58" stroke="currentColor" />
      <path
        d="M120 360V190m0 93c-68-3-82-48-81-70 51-2 78 25 81 70Zm0-34c67-3 82-48 81-70-52-2-79 25-81 70Zm0-56c-31-26-33-60 0-87 33 27 31 61 0 87Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
