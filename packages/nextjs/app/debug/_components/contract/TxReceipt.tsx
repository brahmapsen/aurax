import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { TransactionReceipt } from "viem";
import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { ObjectFieldDisplay } from "~~/app/debug/_components/contract";
import { replacer } from "~~/utils/scaffold-eth/common";

export const TxReceipt = ({ txResult }: { txResult: TransactionReceipt }) => {
  const [txResultCopied, setTxResultCopied] = useState(false);

  return (
    <div className="flex min-h-0 rounded-3xl bg-secondary py-0 text-sm peer-checked:rounded-b-none">
      <div className="mt-1 pl-2">
        {txResultCopied ? (
          <CheckCircleIcon
            className="ml-1.5 h-5 w-5 cursor-pointer text-xl font-normal text-sky-600"
            aria-hidden="true"
          />
        ) : (
          <CopyToClipboard
            text={JSON.stringify(txResult, replacer, 2)}
            onCopy={() => {
              setTxResultCopied(true);
              setTimeout(() => {
                setTxResultCopied(false);
              }, 800);
            }}
          >
            <DocumentDuplicateIcon
              className="ml-1.5 h-5 w-5 cursor-pointer text-xl font-normal text-sky-600"
              aria-hidden="true"
            />
          </CopyToClipboard>
        )}
      </div>
      <div className="collapse collapse-arrow flex-wrap">
        <input type="checkbox" className="peer min-h-0" />
        <div className="collapse-title min-h-0 py-1.5 pl-1 text-sm after:!top-4">
          <strong>Transaction Receipt</strong>
        </div>
        <div className="collapse-content overflow-auto rounded-3xl rounded-t-none bg-secondary !pl-0">
          <pre className="text-xs">
            {Object.entries(txResult).map(([k, v]) => (
              <ObjectFieldDisplay name={k} value={v} size="xs" leftPad={false} key={k} />
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};