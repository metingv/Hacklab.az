import { useState, useEffect, useRef } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";
import $ from "jquery";
import {
  Button,
  createStyles,
  Grid,
  Input,
  makeStyles,
  Theme
} from "@material-ui/core";

const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
 //   window.open("https://airtable.com/", "_blank");
    if (provider.isPhantom) {
      return provider;
    }
  }
// window.open("https://phantom.app/", "_blank");
};

export const Wallet = () => {
  const [signed, setSigned] = useState("");
  const [text, setText] = useState("");
  const provider = getProvider();
  console.log(provider);
  const [logs, setLogs] = useState([]);
  const addLog = (log) => setLogs([...logs, log]);
  const [, setConnected] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  useEffect(() => {
    if (provider) {
      provider.on("connect", () => {
        setConnected(true);
        $(".h1a").css("background", "blue");

        addLog("Connected to wallet " + provider.publicKey?.toBase58());
      });
      provider.on("disconnect", () => {
        setConnected(false);
        $(".h1a").css("background", "red");
        addLog("Disconnected from wallet");
      });
      // try to eagerly connect
      provider.connect({ onlyIfTrusted: true });
      return () => {
        provider.disconnect();
      };
    }
  }, [provider]);

  return (
    <div>
      {provider && provider.publicKey ? (
        <input
          id="walletinput"
          defaultValue={
            provider.publicKey?.toBase58() ? provider.publicKey?.toBase58() : ""
          }
          disabled
        />
      ) : (
        <>
          <button
            type="submit"
            className="btn1 btn-1"
            onClick={() => {
              if (!provider) {
                $(".alert1").css("display", "flex");
                setTimeout(() => {
                  $(".alert1").css("display", "none");
                }, 10000);
              } else {
                provider.connect();
              }
            }}
          >
            <svg>
              <rect x="0" y="0" fill="" width="100%" height="100%" />
            </svg>
            <span className="span-text-abune">CONNECT</span>
          </button>
        </>
      )}

       <div ref={ref2} className="alert1">
        Zəhmət olmasa, əvvəlcə Phantom pul kisəsi uzantısını quraşdırın və işə
        salın, rəsmi vebsayta daxil olmaq üçün 
        <a href="https://phantom.app/" target="_blank" style={{fontSize:"19px"}}>
        <span style={{fontWeight:"900",textDecoration:"underline"}}> buraya klikləyin </span>, Sehifeni yenilemeyi unutmayin
        </a>
      </div>
    </div>
  );
};
