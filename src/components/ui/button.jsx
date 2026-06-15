export function Button({ className = "", children, size, variant, ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}