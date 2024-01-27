import { type ReactNode } from "react";

type InfoHintProps = {
  mode: "hint";
  children: ReactNode;
};
type InfoWarningProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBoxProps = InfoHintProps | InfoWarningProps;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
