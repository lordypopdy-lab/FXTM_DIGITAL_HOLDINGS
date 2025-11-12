import React from "react";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import "../utils/TonConnectButton.css";

const TonConnectWrapper = () => {
  const wallet = useTonWallet();

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div className="custom-ton-button">
        <TonConnectButton />
      </div>

      {wallet && (
        <div style={{ marginTop: "15px", fontFamily: "monospace" }}>
          <p>
            <strong>Address:</strong> {wallet.account.address.slice(0, 6)}...
            {wallet.account.address.slice(-6)}
          </p>
        </div>
      )}
    </div>
  );
};

export default TonConnectWrapper;
