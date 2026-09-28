import "./Wordmark.css";

interface WordmarkProps {
  className?: string;
  trademark?: boolean;
}

export default function Wordmark({ className = "", trademark = true }: WordmarkProps) {
  return (
    <span className={`wordmark${className ? ` ${className}` : ""}`} aria-label={trademark ? "ePurse trademark" : "ePurse"}>
      <span className="wordmark__name" aria-hidden="true"><span className="wordmark__e">e</span>Purse</span>
      {trademark && <sup className="wordmark__trademark" aria-hidden="true">™</sup>}
    </span>
  );
}
