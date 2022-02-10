/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SpaceRouterInterface extends utils.Interface {
  functions: {
    "addLiquidity(uint256,address)": FunctionFragment;
    "currentEthBalance()": FunctionFragment;
    "receiveEther()": FunctionFragment;
    "removeLiquidity(uint256,address)": FunctionFragment;
    "spaceCoin()": FunctionFragment;
    "spaceCoinEthPair()": FunctionFragment;
    "swapETHForSPC(uint256,address)": FunctionFragment;
    "swapSPCForETH(uint256,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentEthBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveEther",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "spaceCoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "spaceCoinEthPair",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapETHForSPC",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapSPCForETH",
    values: [BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEthBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "spaceCoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "spaceCoinEthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapETHForSPC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapSPCForETH",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SpaceRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SpaceRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidity(
      amountSpc: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentEthBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    receiveEther(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      liquidity: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spaceCoin(overrides?: CallOverrides): Promise<[string]>;

    spaceCoinEthPair(overrides?: CallOverrides): Promise<[string]>;

    swapETHForSPC(
      amountOutMin: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapSPCForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amountSpc: BigNumberish,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentEthBalance(overrides?: CallOverrides): Promise<BigNumber>;

  receiveEther(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    liquidity: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spaceCoin(overrides?: CallOverrides): Promise<string>;

  spaceCoinEthPair(overrides?: CallOverrides): Promise<string>;

  swapETHForSPC(
    amountOutMin: BigNumberish,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapSPCForETH(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amountSpc: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        calculatedAmountSpc: BigNumber;
        calculatedAmountEth: BigNumber;
        liquidity: BigNumber;
      }
    >;

    currentEthBalance(overrides?: CallOverrides): Promise<BigNumber>;

    receiveEther(overrides?: CallOverrides): Promise<boolean>;

    removeLiquidity(
      liquidity: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountSpc: BigNumber; amountEth: BigNumber }
    >;

    spaceCoin(overrides?: CallOverrides): Promise<string>;

    spaceCoinEthPair(overrides?: CallOverrides): Promise<string>;

    swapETHForSPC(
      amountOutMin: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapSPCForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      amountSpc: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentEthBalance(overrides?: CallOverrides): Promise<BigNumber>;

    receiveEther(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      liquidity: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spaceCoin(overrides?: CallOverrides): Promise<BigNumber>;

    spaceCoinEthPair(overrides?: CallOverrides): Promise<BigNumber>;

    swapETHForSPC(
      amountOutMin: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapSPCForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amountSpc: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentEthBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveEther(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      liquidity: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spaceCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    spaceCoinEthPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapETHForSPC(
      amountOutMin: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapSPCForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}