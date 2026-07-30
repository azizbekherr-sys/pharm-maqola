interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full px-[var(--space-4)]
        ${narrow ? 'max-w-[var(--article-max-width)]' : 'max-w-[1200px]'}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
