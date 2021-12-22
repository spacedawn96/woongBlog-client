import clsx from 'clsx';
import * as React from 'react';

export default function TailInput({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      placeholder="blah blahblah blah"
      className={clsx(
        className,
        'max-w-sm rounded-md dark:bg-dark',
        'border border-gray-300 dark:border-gray-600',
        'dark:focus:border-primary-300 focus:border-primary-300 focus:ring-0 focus:outline-none',
      )}
      {...rest}
    />
  );
}
