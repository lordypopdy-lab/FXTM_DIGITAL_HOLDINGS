import React, { useEffect, useState } from "react";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { TonClient, Address } from "@ton/ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import "../utils/TonConnectButton.css";

const TonConnectWrapper = () => {
  const wallet = useTonWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!wallet?.account?.address) return;
      const endpoint = await getHttpEndpoint({ network: "mainnet" });
      const client = new TonClient({ endpoint });
      const address = Address.parse(wallet.account.address);
      const balance = await client.getBalance(address);
      setBalance(Number(balance) / 1e9);
    };

    fetchBalance();
  }, [wallet]);

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
          <p>
            <strong>Balance:</strong>{" "}
            {balance !== null ? `${balance.toFixed(3)} TON` : "Loading..."}
          </p>
        </div>
      )}
    </div>
  );
};

export default TonConnectWrapper;
