import { Tags } from "./tags";

import ChevronDownIcon from "../../assets/icons/chevron-down.svg";

export const ProductDescription = ({
  tags,
  openDescription,
  descriptionDetails,
  setOpenDescription,
}) => {
  return (
    <>
      <div
        className="h-[32px] items-center cursor-pointer hidden sm:flex sm:mt-8"
        onClick={() => setOpenDescription((open) => !open)}
      >
        <div className="mr-3 font-medium text-sm text-[#1C2024]">
          Описание и данные
        </div>

        <img src={ChevronDownIcon} alt="chevron-down" className="size-4" />
      </div>

      <hr className="w-full mt-4 border-solid border border-[#F0F0F3] hidden sm:block" />

      {openDescription && (
        <div className="flex flex-col">
          <div className="mt-4">
            <h3 className="font-medium">Описание</h3>

            <div className="mt-4 max-w-[660px]">
              Зеленый лес. Сказочный лес «Сосны». Нетронутая ель. Лесной узор.
              Движение камеры в лесу. Коричневая трава на земле. Дрон,
              перемещающийся между деревьями прекрасным солнечным утром.
            </div>
          </div>

          <hr className="w-full mt-6 border-solid border border-[#F0F0F3] sm:hidden" />

          <ul className="mt-6 grid grid-cols-3 sm:grid-cols-1 sm:mt-6">
            {descriptionDetails.map((detail) => (
              <li
                key={detail.label}
                className="flex items-center text-sm sm:nth-item"
              >
                <div className="mr-[2px] font-medium">{detail.label}:</div>
                <div>{detail.value}</div>
              </li>
            ))}
          </ul>

          <Tags tags={tags} className="mt-8 sm:hidden" />
        </div>
      )}
    </>
  );
};
