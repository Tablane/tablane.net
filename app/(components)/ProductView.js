import Image from "next/image";
import app_board_view from "../../public/app_board_view.png";

export default function ProductView() {
  return (
    <div className="flex justify-center items-center mb-[100px] px-[50px] lg:px-[150px]">
      <Image
        className="rounded-xl product-shadow border border-[#cbcdd1]"
        src={app_board_view}
        alt="taskboard app board view"
      />
    </div>
  );
}
