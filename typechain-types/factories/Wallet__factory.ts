/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Wallet, WalletInterface } from "../Wallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWalletBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxy",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107d73803806107d78339818101604052810190610032919061011c565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610149565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b61067f806101586000396000f3fe6080604052600436106100745760003560e01c8063329a27e71161004e578063329a27e7146100fd5780638da5cb5b14610128578063b60d428814610153578063ec5568891461015d5761007b565b806304d2dec61461008057806312514bba146100ab5780632e1a7d4d146100d45761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b50610095610188565b6040516100a2919061042b565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610481565b610190565b005b3480156100e057600080fd5b506100fb60048036038101906100f69190610481565b6102e9565b005b34801561010957600080fd5b50610112610396565b60405161011f91906104bd565b60405180910390f35b34801561013457600080fd5b5061013d61039e565b60405161014a91906104f9565b60405180910390f35b61015b6103c2565b005b34801561016957600080fd5b506101726103c4565b60405161017f91906104f9565b60405180910390f35b600030905090565b804710156101d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ca90610597565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025a90610629565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166398e1b410826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156102cd57600080fd5b505af11580156102e1573d6000803e3d6000fd5b505050505050565b8047101561032c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032390610597565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610392573d6000803e3d6000fd5b5050565b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610415826103ea565b9050919050565b6104258161040a565b82525050565b6000602082019050610440600083018461041c565b92915050565b600080fd5b6000819050919050565b61045e8161044b565b811461046957600080fd5b50565b60008135905061047b81610455565b92915050565b60006020828403121561049757610496610446565b5b60006104a58482850161046c565b91505092915050565b6104b78161044b565b82525050565b60006020820190506104d260008301846104ae565b92915050565b60006104e3826103ea565b9050919050565b6104f3816104d8565b82525050565b600060208201905061050e60008301846104ea565b92915050565b600082825260208201905092915050565b7f54686520726571756972656420616d6f756e74206973206e6f7420696e20746860008201527f65206163636f756e740000000000000000000000000000000000000000000000602082015250565b6000610581602983610514565b915061058c82610525565b604082019050919050565b600060208201905081810360008301526105b081610574565b9050919050565b7f4f6e6c79207468652070726f78792063616e2063616c6c20746869732066756e60008201527f6374696f6e000000000000000000000000000000000000000000000000000000602082015250565b6000610613602583610514565b915061061e826105b7565b604082019050919050565b6000602082019050818103600083015261064281610606565b905091905056fea264697066735822122024040c554fd105269303e932f2f2532f4f810b86168c7e84ef8a1e69550f4c0464736f6c63430008150033";

type WalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Wallet__factory extends ContractFactory {
  constructor(...args: WalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override deploy(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_owner, overrides || {}) as Promise<
      Wallet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Wallet__factory {
    return super.connect(runner) as Wallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new Interface(_abi) as WalletInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Wallet {
    return new Contract(address, _abi, runner) as unknown as Wallet;
  }
}
