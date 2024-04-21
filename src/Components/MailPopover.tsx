import { Popover } from "@headlessui/react";


export const MailPopover = () => {
  return (
    <Popover className="relative outline-none hover:scale-110 transition-all ease-in-out">
      <Popover.Button className=' outline-none'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#03041c"
          width="45"
          height="55"
          viewBox="0 0 24 26"
          stroke-width="1.5"
          stroke="#15803d"
          className="-my-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bottom-12 right-5">
        <div className="bg-red-950 font-arapey text-xl text-yellow-500 text-center p-3 h-full rounded-xl ">
          <p>debugwithaspasht@gmail.com</p>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
