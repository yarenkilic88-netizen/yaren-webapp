export function Button({
  as: As = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 disabled:opacity-60 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-violet-500 text-white hover:bg-violet-400 shadow-sm shadow-violet-500/20',
    secondary:
      'bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/10',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  }

  return (
    <As
      className={[base, variants[variant], sizes[size], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}

