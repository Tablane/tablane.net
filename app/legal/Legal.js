export default function Legal({ name, children }) {
  return (
    <div className="">
      <div className="flex justify-center">
        <p className="text-[72px] font-extrabold my-[100px]">{name}</p>
      </div>
      <div className="bg-[#FAFAFA] flex justify-center border-b border-[#cbcdd1]">
        <div className="w-[900px]">{children}</div>
      </div>
    </div>
  );
}
