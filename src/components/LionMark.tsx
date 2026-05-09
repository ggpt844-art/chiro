import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  withWordmark?: boolean;
  inverted?: boolean;
};

/**
 * Powerflow Chiropractic brand mark — uses the actual lion logo PNG.
 * On dark backgrounds (`inverted=true`), the lion sits on a white circular plate
 * so the red mark stays visible.
 */
export default function LionMark({
  size = 36,
  className = "",
  withWordmark = false,
  inverted = false,
}: Props) {
  const inner = Math.round(size * 0.78);

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative shrink-0 grid place-items-center rounded-full overflow-hidden ${
          inverted ? "bg-white shadow-md shadow-black/20" : "bg-transparent"
        }`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        <Image
          src="/images/powerflow-lion.png"
          alt=""
          width={inner}
          height={inner}
          className="object-contain"
        />
      </span>
      {withWordmark && (
        <span className="leading-[0.95] tracking-tight">
          <span
            className={`block font-black text-[14px] ${
              inverted ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            POWERFLOW
          </span>
          <span className="block text-[#b73026] text-[8.5px] font-bold tracking-[0.32em]">
            CHIROPRACTIC
          </span>
        </span>
      )}
    </span>
  );
}
