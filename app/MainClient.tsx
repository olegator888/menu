"use client";

import Select from "react-select";
import { ISelectOption } from "types";
import { MenuItem } from "@prisma/client";
import { useState } from "react";

interface Props {
  menuItemsOptions: ISelectOption[];
  menuItems: MenuItem[];
}

const MainClient = ({ menuItemsOptions, menuItems }: Props) => {
  const [selectValue, setSelectValue] = useState<ISelectOption | undefined>();

  const onSelectChange = (value: ISelectOption) => {
    setSelectValue(value);
  };

  const composition = menuItems.find(
    (item) => item.title === selectValue?.label,
  )?.composition;

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full md:pt-12 md:px-8 pt-4 px-2">
      <Select
        className="w-full max-w-[400px]"
        placeholder="Блюдо"
        options={menuItemsOptions}
        noOptionsMessage={() => "Блюда не найдены"}
        value={selectValue}
        onChange={(value) => onSelectChange(value as ISelectOption)}
      />
      <div
        className={`max-w-[400px] text-center flex items-center justify-center border-neutral-300 border-[1px] rounded-xl p-4 ${
          !composition && "text-neutral-500"
        }`}
      >
        {composition || "Выберите блюдо, и тут появится его состав :)"}
      </div>
    </div>
  );
};

export default MainClient;
