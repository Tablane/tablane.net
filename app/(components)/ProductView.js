import Image from "next/image";

export default function ProductView() {
  return (
    <div className="flex justify-center items-center mb-[100px]">
      <Image
        className="rounded-xl image-shadow border border-[#cbcdd1]"
        src="/app_board_view.png"
        alt="taskboard app board view"
        width={480 * 2}
        height={270 * 2}
      />
    </div>
  );
}
