import { MdPix } from "react-icons/md";

export function InformationBar() {
  return (
    <div class="h-10 w-full bg-informationBar text-white2 p-2 flex justify-center items-center">
      <span class="font-bold italic">
        Oferta Imperdível:
        <strong class="text-primaryDarkBlue">Economize 5%</strong>
        com Pagamentos em
        <strong class="text-primaryDarkBlue">  PIX! <MdPix size={24} /> </strong>

      </span>
    </div>
  );
}
