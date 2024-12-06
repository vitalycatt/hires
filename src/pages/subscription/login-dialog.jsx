import * as Dialog from "@radix-ui/react-dialog";
import { Login } from "./login";

export const LoginDialog = ({
  children,
  loginActiveTab,
  setLoginActiveTab,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-overlayShow" />

        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[400px] -translate-x-1/2 -translate-y-1/2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Login
            title="Вход"
            className="p-6 pb-6 bg-[#F7F9FF]"
            loginActiveTab={loginActiveTab}
            setLoginActiveTab={setLoginActiveTab}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
