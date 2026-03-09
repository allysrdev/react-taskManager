import { createPortal } from "react-dom";
import Button from "../Button";

interface ConfirmDialogProps {
  title: string;
  description: string;
  confirmDelete: () => void;
  cancelDelete: () => void;
}

export default function ConfirmDialog({
  confirmDelete,
  cancelDelete,
  title,
  description,
}: ConfirmDialogProps) {
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        <p className="text-sm text-gray-600 mb-6">{description}</p>

        <div className="flex justify-end gap-3">
          <Button
            onClick={cancelDelete}
            className="px-4 py-2 rounded-lg border cursor-pointer"
          >
            Cancelar
          </Button>

          <Button
            onClick={confirmDelete}
            className="px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer"
          >
            Excluir
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
