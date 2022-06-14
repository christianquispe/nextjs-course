import { CSSProperties } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface ActiveLinkProps {
  href: string;
  text: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
