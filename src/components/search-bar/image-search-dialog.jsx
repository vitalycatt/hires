import classnames from "classnames";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../button";
import { Cross2Icon } from "@radix-ui/react-icons";

import CatImage from "../../assets/images/cat.png";
import UploadIcon from "../../assets/icons/upload.svg";
import UploadWhiteIcon from "../../assets/icons/upload-white.svg";

export const ImageSearchDialog = ({
  className,
  uploadImage,
  setUploadImage,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={classnames(
            "h-[48px] min-w-[48px] rounded-lg bg-white flex justify-center items-center cursor-pointer",
            className
          )}
        >
          <img src="../../images/picture.svg" alt="dropdown-picture" />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#1C2024]/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[394px] p-5 pt-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#F9F9FB] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="text-xl font-medium text-[#1C2024]">
            Поиск по картинке
          </Dialog.Title>

          <Dialog.Description className="my-4 text-sm leading-normal text-[#000714]/60">
            Загрузите изображение, чтобы найти похожие материалы (не более 2
            мб).
          </Dialog.Description>

          <div
            className="w-full flex justify-center items-center rounded-lg border-dashed border-[1px] border-[#60646C] cursor-pointer"
            onClick={() => setUploadImage((hasImage) => !hasImage)}
          >
            {!uploadImage ? (
              <div className="flex py-[34px] gap-[5px]">
                <p className="text-sm text-[#60646C]">Загрузить</p>

                <img src={UploadIcon} alt="upload-icon" />
              </div>
            ) : (
              <div className="relative group">
                <img src={CatImage} alt="cat-image" />

                <div className="absolute top-0 left-0 invisible group-hover:visible w-full h-full flex justify-center items-center gap-[5px] bg-[#000]/50">
                  <p className="text-sm text-white">Загрузить другое</p>

                  <img src={UploadWhiteIcon} alt="upload-icon" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button
                title="Найти"
                className="h-[64px] w-full px-6 bg-[#1F2D5C] rounded-lg text-lg text-white"
              />
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
