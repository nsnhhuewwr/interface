/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@starcoin/providers";
import type {
  ArgentWalletContract,
  ArgentWalletContractInterface,
} from "../ArgentWalletContract";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "_transactions",
        type: "tuple[]",
      },
    ],
    name: "wc_multiCall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_msgHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ArgentWalletContract__factory {
  static readonly abi = _abi;
  static createInterface(): ArgentWalletContractInterface {
    return new utils.Interface(_abi) as ArgentWalletContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArgentWalletContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArgentWalletContract;
  }
}
