import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode,
  href: string,
  className?: string,
}

export function Link({
  children,
  href,
  ...props
}: Props) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}