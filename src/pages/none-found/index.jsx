import { Filters } from "../../components/filters";

export const NoneFound = () => {
  return (
    <div className="mx-10 flex flex-col mb-auto">
      <Filters />

      <div className="mt-[100px] flex flex-col">
        <h1 className="font-medium text-4xl text-[#1C2024]">
          По запросу “Природа” ничего не найдено.
        </h1>

        <ul className="mt-8 text-xl list-disc text-[#000714]/65">
          <li className="list-disc [&::marker]:text-sm">
            Попробуйте перенастроить фильтры.
          </li>
          <li className="list-disc [&::marker]:text-sm">
            Проверьте свой запрос на наличие опечаток.
          </li>
          <li className="list-disc [&::marker]:text-sm">
            Введите запрос по-другому.
          </li>
        </ul>
      </div>
    </div>
  );
};
