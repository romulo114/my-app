import { toast, ToastPosition } from "react-toastify";
import { EToastType, TToastType } from "./types";

export const showToast = (
  message: string,
  mode: TToastType = EToastType.SUCCESS,
  position: ToastPosition = toast.POSITION.TOP_RIGHT
) => {
  switch (mode) {
    case EToastType.ERROR:
      toast.error(message, {
        position: position,
      });
      break;

    case EToastType.INFO:
      toast.info(message, {
        position: position,
      });
      break;
    case EToastType.WARNING:
      toast.warning(message, {
        position: position,
      });
      break;
    case EToastType.SUCCESS:
    default:
      toast.success(message, {
        position: position,
      });
      break;
  }
};
