import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./Button";
import { twMerge } from "tailwind-merge";

const className = " min-w-max py-2.5 px-8";

const CustomConnectButton = ({
  containerClassName,
}: {
  containerClassName?: string;
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted;
        const connected = ready && account && chain;
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className={twMerge("row-flex mx-auto", containerClassName)}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    title="Connect Wallet"
                    className={className}
                    onClick={openConnectModal}
                  />
                  // <button onClick={openConnectModal} type="button">
                  // 	Connect Wallet
                  // </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    title="Wrong network"
                    className={className}
                    onClick={openChainModal}
                  />
                  // <button onClick={openChainModal} type="button">
                  // 	Wrong network
                  // </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
