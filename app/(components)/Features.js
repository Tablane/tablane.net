import Image from "next/image";

export default function Features() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="h-[400px] flex flex-row justify-center my-[150px] items-center w-[900px]">
        <div className="mr-[120px] text-left">
          <p className="text-[24px] font-bold">Subtasks</p>
          <p className="text-[#666]">
            Break larger tasks into smaller subtasks.
          </p>
        </div>
        <div>
          <Image
            className="rounded-xl image-shadow border border-[#cbcdd1]"
            src="/features/subtasks.png"
            alt="subtasks"
            width={578}
            height={325}
          />
        </div>
      </div>
      <div className="h-[400px] flex flex-row justify-between my-[150px] items-center w-[900px]">
        <div>
          <Image
            className="rounded-xl image-shadow border border-[#cbcdd1]"
            src="/features/task_fields.png"
            alt="subtasks"
            width={200}
            height={325}
          />
        </div>
        <div className="ml-[120px] text-left">
          <p className="text-[24px] font-bold">Todos with Superpowers</p>
          <p className="text-[#666]">
            Customizable to tackle any project or task.
          </p>
        </div>
      </div>
      <div className="h-[400px] flex flex-row justify-center my-[150px] items-center w-[900px]">
        <div className="mr-[120px] text-left">
          <p className="text-[24px] font-bold">Comment Threads</p>
          <p className="text-[#666]">
            Collaborate on tasks without losing context.
          </p>
        </div>
        <div>
          <Image
            className="rounded-xl image-shadow border border-[#cbcdd1]"
            src="/features/comment_threads.png"
            alt="subtasks"
            width={578}
            height={325}
          />
        </div>
      </div>

      <div className="flex justify-around w-[900px] mt-[128px] mb-[256px]">
        <div className="max-w-[300px] flex flex-col justify-center items-center">
          <Image src="/assets/bolt.svg" alt="bolt" width={24} height={24} />
          <p className="font-medium pb-3 pt-4">Breathtakingly fast</p>
          <p className="text-[#666]">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="max-w-[300px] flex flex-col justify-center items-center">
          <Image
            src="/assets/securityShield.svg"
            alt="bolt"
            width={24}
            height={24}
          />
          <p className="font-medium pb-3 pt-4">Safe and secure</p>
          <p className="text-[#666]">
            Designed to keep your data safe and protected.
          </p>
        </div>
      </div>
    </div>
  );
}
