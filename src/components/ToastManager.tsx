import { ToastMessageState, ToastMessageType } from "../types/toast";
import SuccessIcon from "../icons/SuccessIcon";
import ErrorIcon from "../icons/ErrorIcon";
import WarningIcon from "../icons/WarningIcon";
import InfoIcon from "../icons/InfoIcon";
import { useToastListStore } from "../store/useToastListStore";

const ICON_MAP = {
  [ToastMessageType.SUCCESS]: SuccessIcon,
  [ToastMessageType.ERROR]: ErrorIcon,
  [ToastMessageType.WARNING]: WarningIcon,
  [ToastMessageType.INFO]: InfoIcon,
};

export const ToastManager = () => {
  const { toasts } = useToastListStore();

  return (
    <div className="fixed z-50 top-10 left-0 w-full flex flex-col items-center gap-y-4 pointer-events-none">
      {toasts.map(({ id, type, message, state }) => {
        const Icon = ICON_MAP[type];
        return (
          <div
            key={id}
            className={`flex items-start gap-x-2 min-w-80 mx-20 px-6 py-3 bg-neutral-800/90 rounded-lg text-white text-base shadow-[0_0_10px_rgba(0,0,0,0.4)] 
              ${
                state === ToastMessageState.VISIBLE
                  ? "translate-y-0 opacity-100"
                  : state === ToastMessageState.CREATE
                  ? "translate-y-2 opacity-0"
                  : "-translate-y-2 opacity-0"
              } duration-200`}
          >
            <Icon width={16} height={16} />
            <p>{message}</p>
          </div>
        );
      })}
    </div>
  );
};
