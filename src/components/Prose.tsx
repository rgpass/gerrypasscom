import clsx from 'clsx'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')} {...props} />
  )
}

export function ProseInline({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span className={clsx(className, 'prose dark:prose-invert')} {...props} />
  )
}
