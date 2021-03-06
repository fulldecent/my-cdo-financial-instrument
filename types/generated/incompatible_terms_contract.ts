/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import { TxData, TxDataPayable } from "../common";
import { promisify } from "@0xproject/utils";
import { classUtils } from "../common";
import { BigNumber } from "bignumber.js";
import * as fs from "fs-extra";
import * as Web3 from "web3";

import { BaseContract } from "../base_contract";

export class IncompatibleTermsContractContract extends BaseContract {
  public getValueRepaidToDate = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as IncompatibleTermsContractContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getValueRepaidToDate.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public getTermEndTimestamp = {
    async callAsync(
      _agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as IncompatibleTermsContractContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getTermEndTimestamp.call,
        self.web3ContractInstance
      )(_agreementId);
      return result;
    }
  };
  public registerRepayment = {
    async sendTransactionAsync(
      agreementId: string,
      payer: string,
      beneficiary: string,
      unitsOfRepayment: BigNumber,
      tokenAddress: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as IncompatibleTermsContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.registerRepayment.estimateGasAsync.bind(
          self,
          agreementId,
          payer,
          beneficiary,
          unitsOfRepayment,
          tokenAddress
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.registerRepayment,
        self.web3ContractInstance
      )(
        agreementId,
        payer,
        beneficiary,
        unitsOfRepayment,
        tokenAddress,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      payer: string,
      beneficiary: string,
      unitsOfRepayment: BigNumber,
      tokenAddress: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as IncompatibleTermsContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.registerRepayment.estimateGas,
        self.web3ContractInstance
      )(
        agreementId,
        payer,
        beneficiary,
        unitsOfRepayment,
        tokenAddress,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      payer: string,
      beneficiary: string,
      unitsOfRepayment: BigNumber,
      tokenAddress: string,
      txData: TxData = {}
    ): string {
      const self = this as IncompatibleTermsContractContract;
      const abiEncodedTransactionData = self.web3ContractInstance.registerRepayment.getData();
      return abiEncodedTransactionData;
    }
  };
  public registerTermStart = {
    async sendTransactionAsync(
      agreementId: string,
      debtor: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as IncompatibleTermsContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.registerTermStart.estimateGasAsync.bind(self, agreementId, debtor)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.registerTermStart,
        self.web3ContractInstance
      )(agreementId, debtor, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      debtor: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as IncompatibleTermsContractContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.registerTermStart.estimateGas,
        self.web3ContractInstance
      )(agreementId, debtor, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      debtor: string,
      txData: TxData = {}
    ): string {
      const self = this as IncompatibleTermsContractContract;
      const abiEncodedTransactionData = self.web3ContractInstance.registerTermStart.getData();
      return abiEncodedTransactionData;
    }
  };
  public getExpectedRepaymentValue = {
    async callAsync(
      agreementId: string,
      timestamp: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as IncompatibleTermsContractContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getExpectedRepaymentValue.call,
        self.web3ContractInstance
      )(agreementId, timestamp);
      return result;
    }
  };
  async deploy(...args: any[]): Promise<any> {
    const wrapper = this;
    const rejected = false;

    return new Promise((resolve, reject) => {
      wrapper.web3ContractInstance.new(
        wrapper.defaults,
        (err: string, contract: Web3.ContractInstance) => {
          if (err) {
            reject(err);
          } else if (contract.address) {
            wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(
              contract.address
            );
            wrapper.address = contract.address;
            resolve();
          }
        }
      );
    });
  }
  static async deployed(
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<IncompatibleTermsContractContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new IncompatibleTermsContractContract(
      web3ContractInstance,
      defaults
    );
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<IncompatibleTermsContractContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new IncompatibleTermsContractContract(
      web3ContractInstance,
      defaults
    );
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/IncompatibleTermsContract.json",
        "utf8"
      );
      const { abi, networks } = JSON.parse(artifact);
      return { abi, networks };
    } catch (e) {
      console.error("Artifacts malformed or nonexistent: " + e.toString());
    }
  }
  constructor(
    web3ContractInstance: Web3.ContractInstance,
    defaults: Partial<TxData>
  ) {
    super(web3ContractInstance, defaults);
    classUtils.bindAll(this, ["web3ContractInstance", "defaults"]);
  }
} // tslint:disable:max-file-line-count
