import NextLink from "next/link";

export function Link({ url, children }) {
  return (
    <NextLink href={url}>
      <a>
        {children}
      </a>
    </NextLink>
  );
}
