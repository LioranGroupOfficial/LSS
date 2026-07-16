import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 3v5c0 4.5-2.7 7.9-7 10-4.3-2.1-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 12.5l1.8 1.8 3.2-4" />
    </BaseIcon>
  );
}

export function ServerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01" />
      <path d="M7 17h.01" />
      <path d="M11 7h6" />
      <path d="M11 17h6" />
    </BaseIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </BaseIcon>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 8 4 4-4 4" />
      <path d="M13 16h5" />
    </BaseIcon>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </BaseIcon>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 18.8 5 4.8 4.8 0 0 0 18.7 1S17.5.7 15 2.4a13.4 13.4 0 0 0-6 0C6.5.7 5.3 1 5.3 1A4.8 4.8 0 0 0 5.2 5a5.2 5.2 0 0 0-1.4 3.8c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 9 18.1V22" />
    </BaseIcon>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10 13a5 5 0 0 0 7.1 0l1.4-1.4a5 5 0 0 0-7.1-7.1L10 5" />
      <path d="M14 11a5 5 0 0 0-7.1 0L5.5 12.4a5 5 0 0 0 7.1 7.1L14 19" />
    </BaseIcon>
  );
}
