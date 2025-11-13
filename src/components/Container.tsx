import type { ReactNode } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: ContainerProps) => (
  <div className={clsx('mx-auto w-full max-w-7xl px-6 md:px-8', className)}>{children}</div>
);

export default Container;
