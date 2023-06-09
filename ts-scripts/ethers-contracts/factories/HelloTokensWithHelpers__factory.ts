/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HelloTokensWithHelpers,
  HelloTokensWithHelpersInterface,
} from "../HelloTokensWithHelpers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wormholeRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenBridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wormhole",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "NotAnEvmAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "getLiquiditiesProvidedHistory",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "senderChain",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenA",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenB",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct LiquidityProvided[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "liquidityProvidedHistory",
    outputs: [
      {
        internalType: "uint16",
        name: "senderChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteRemoteLP",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "additionalVaas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "sendRemoteLP",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenBridge",
    outputs: [
      {
        internalType: "contract ITokenBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormholeRelayer",
    outputs: [
      {
        internalType: "contract IWormholeRelayer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620018613803806200186183398101604081905262000034916200006f565b6001600160a01b0392831660805290821660a0521660c052620000b9565b80516001600160a01b03811681146200006a57600080fd5b919050565b6000806000606084860312156200008557600080fd5b620000908462000052565b9250620000a06020850162000052565b9150620000b06040850162000052565b90509250925092565b60805160a05160c05161171d6200014460003960008181610158015281816103af0152818161045e01528181610c3c0152610d660152600081816101a40152818161027d015281816103150152818161050d015281816105a201528181610b8c01528181610c0d0152610df90152600081816101d80152818161067701526109c8015261171d6000f3fe60806040526004361061007b5760003560e01c806384acd1bb1161004e57806384acd1bb14610146578063c6328a4614610192578063da25b725146101c6578063df50b522146101fa57600080fd5b80631bac053a14610080578063529dca32146100e15780635a70e221146100f65780636a4e54b514610124575b600080fd5b34801561008c57600080fd5b506100a061009b366004610e63565b61020d565b6040805161ffff90961686526001600160a01b03948516602087015292841692850192909252919091166060830152608082015260a0015b60405180910390f35b6100f46100ef366004610fd5565b610263565b005b34801561010257600080fd5b506101166101113660046110cb565b61064b565b6040519081526020016100d8565b34801561013057600080fd5b506101396106f0565b6040516100d891906110ef565b34801561015257600080fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d8565b34801561019e57600080fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d257600080fd5b5061017a7f000000000000000000000000000000000000000000000000000000000000000081565b6100f4610208366004611186565b61078f565b6000818154811061021d57600080fd5b6000918252602090912060049091020180546001820154600283015460039093015461ffff83169450620100009092046001600160a01b03908116939181169291169085565b60008580602001905181019061027991906111ee565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c6878519866000815181106102bd576102bd61120b565b60200260200101516040518263ffffffff1660e01b81526004016102e19190611271565b600060405180830381600087803b1580156102fb57600080fd5b505af115801561030f573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c6878519866001815181106103555761035561120b565b60200260200101516040518263ffffffff1660e01b81526004016103799190611271565b600060405180830381600087803b15801561039357600080fd5b505af11580156103a7573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9e11893876000815181106103ef576103ef61120b565b60200260200101516040518263ffffffff1660e01b81526004016104139190611271565b600060405180830381865afa158015610430573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261045891908101906113c5565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9e118938860018151811061049e5761049e61120b565b60200260200101516040518263ffffffff1660e01b81526004016104c29190611271565b600060405180830381865afa1580156104df573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050791908101906113c5565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632b5113758460e001516040518263ffffffff1660e01b815260040161055b9190611271565b60e060405180830381865afa158015610578573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059c91906114ea565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632b5113758460e001516040518263ffffffff1660e01b81526004016105f09190611271565b60e060405180830381865afa15801561060d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063191906114ea565b905061063f87868484610a5b565b50505050505050505050565b60405163c23ee3c360e01b815261ffff82166004820152600060248201819052620557306044830152907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c23ee3c3906064016040805180830381865afa1580156106c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e99190611584565b5092915050565b60606000805480602002602001604051908101604052809291908181526020016000905b828210156107865760008481526020908190206040805160a08101825260048602909201805461ffff811684526001600160a01b036201000090910481168486015260018083015482169385019390935260028201541660608401526003015460808301529083529092019101610714565b50505050905090565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156107e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080691906115a8565b506040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038216906323b872dd906064016020604051808303816000875af115801561085a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087e91906115a8565b5060408051600280825260608201909252600091816020015b60408051606081018252600080825260208083018290529282015282526000199092019101816108975790505090506108d283858888610b5c565b816000815181106108e5576108e561120b565b60200260200101819052506108fc82858888610b5c565b8160018151811061090f5761090f61120b565b602002602001018190525060006109258761064b565b90508034146109935760405162461bcd60e51b815260206004820152602f60248201527f6d73672e76616c7565206d75737420657175616c2071756f746552656d6f746560448201526e4c5028746172676574436861696e2960881b60648201526084015b60405180910390fd5b604080513360208201526000910160408051601f198184030181529082905263329a2be760e01b825291506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063329a2be7908490610a0d908c908c90879060009062055730908c906004016115ca565b60206040518083038185885af1158015610a2b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a50919061166b565b505050505050505050565b60006040518060a001604052808661ffff168152602001856001600160a01b03168152602001610a8e8560400151610e37565b6001600160a01b03168152602001610aa98460400151610e37565b6001600160a01b0316815260200184602001516402540be400610acc9190611686565b9052815460018181018455600093845260209384902083516004909302018054948401516001600160a01b0390811662010000026001600160b01b031990961661ffff90941693909317949094178455604083015190840180549183166001600160a01b031992831617905560608301516002850180549190931691161790556080015160039091015550505050565b6040805160608101825260008082526020820181905281830152905163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820186905286169063095ea7b3906044016020604051808303816000875af1158015610be4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0891906115a8565b5060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630f5287b07f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631a90a2196040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc91906116b1565b8888886001600160a01b0389166040516001600160e01b031960e088901b1681526001600160a01b039094166004850152602484019290925261ffff166044830152606482015260006084820181905260a482015260c40160206040518083038185885af1158015610d32573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610d57919061166b565b905060405180606001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de691906116ca565b61ffff1681526020016001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020018267ffffffffffffffff16815250915050949350505050565b600060a082901c15610e5f5760405163033b960d60e41b81526004810183905260240161098a565b5090565b600060208284031215610e7557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610eb557610eb5610e7c565b60405290565b604051610160810167ffffffffffffffff81118282101715610eb557610eb5610e7c565b604051601f8201601f1916810167ffffffffffffffff81118282101715610f0857610f08610e7c565b604052919050565b600067ffffffffffffffff821115610f2a57610f2a610e7c565b50601f01601f191660200190565b600082601f830112610f4957600080fd5b8135610f5c610f5782610f10565b610edf565b818152846020838601011115610f7157600080fd5b816020850160208301376000918101602001919091529392505050565b600067ffffffffffffffff821115610fa857610fa8610e7c565b5060051b60200190565b61ffff81168114610fc257600080fd5b50565b8035610fd081610fb2565b919050565b600080600080600060a08688031215610fed57600080fd5b853567ffffffffffffffff8082111561100557600080fd5b61101189838a01610f38565b965060209150818801358181111561102857600080fd5b8801601f81018a1361103957600080fd5b8035611047610f5782610f8e565b81815260059190911b8201840190848101908c83111561106657600080fd5b8584015b8381101561109e578035868111156110825760008081fd5b6110908f8983890101610f38565b84525091860191860161106a565b509850505050604088013594506110ba91505060608701610fc5565b949793965091946080013592915050565b6000602082840312156110dd57600080fd5b81356110e881610fb2565b9392505050565b602080825282518282018190526000919060409081850190868401855b82811015611164578151805161ffff168552868101516001600160a01b039081168887015286820151811687870152606080830151909116908601526080908101519085015260a0909301929085019060010161110c565b5091979650505050505050565b6001600160a01b0381168114610fc257600080fd5b600080600080600060a0868803121561119e57600080fd5b85356111a981610fb2565b945060208601356111b981611171565b93506040860135925060608601356111d081611171565b915060808601356111e081611171565b809150509295509295909350565b60006020828403121561120057600080fd5b81516110e881611171565b634e487b7160e01b600052603260045260246000fd5b60005b8381101561123c578181015183820152602001611224565b50506000910152565b6000815180845261125d816020860160208601611221565b601f01601f19169290920160200192915050565b6020815260006110e86020830184611245565b805160ff81168114610fd057600080fd5b805163ffffffff81168114610fd057600080fd5b8051610fd081610fb2565b805167ffffffffffffffff81168114610fd057600080fd5b600082601f8301126112dd57600080fd5b81516112eb610f5782610f10565b81815284602083860101111561130057600080fd5b611311826020830160208701611221565b949350505050565b600082601f83011261132a57600080fd5b8151602061133a610f5783610f8e565b82815260079290921b8401810191818101908684111561135957600080fd5b8286015b848110156113ba57608081890312156113765760008081fd5b61137e610e92565b8151815284820151858201526040611397818401611284565b9082015260606113a8838201611284565b9082015283529183019160800161135d565b509695505050505050565b6000602082840312156113d757600080fd5b815167ffffffffffffffff808211156113ef57600080fd5b90830190610160828603121561140457600080fd5b61140c610ebb565b61141583611284565b815261142360208401611295565b602082015261143460408401611295565b6040820152611445606084016112a9565b60608201526080830151608082015261146060a084016112b4565b60a082015261147160c08401611284565b60c082015260e08301518281111561148857600080fd5b611494878286016112cc565b60e0830152506101006114a8818501611295565b9082015261012083810151838111156114c057600080fd5b6114cc88828701611319565b91830191909152506101409283015192810192909252509392505050565b600060e082840312156114fc57600080fd5b60405160e0810181811067ffffffffffffffff8211171561151f5761151f610e7c565b60405261152b83611284565b81526020830151602082015260408301516040820152606083015161154f81610fb2565b60608201526080838101519082015260a083015161156c81610fb2565b60a082015260c0928301519281019290925250919050565b6000806040838503121561159757600080fd5b505080516020909101519092909150565b6000602082840312156115ba57600080fd5b815180151581146110e857600080fd5b600061ffff8089168352602060018060a01b03891681850152604060c0818601526115f860c086018a611245565b60608681018a90526080870189905286820360a088015287518083528489019285019060005b81811015611657578451805189168452878101518885015286015167ffffffffffffffff1686840152938601939183019160010161161e565b50909e9d5050505050505050505050505050565b60006020828403121561167d57600080fd5b6110e8826112b4565b80820281158282048414176116ab57634e487b7160e01b600052601160045260246000fd5b92915050565b6000602082840312156116c357600080fd5b5051919050565b6000602082840312156116dc57600080fd5b81516110e881610fb256fea264697066735822122099af66dc112b105d4c51c6f662b080d0a5c3c34faea08fe1dedf56ca8c123a2b64736f6c63430008130033";

type HelloTokensWithHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloTokensWithHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloTokensWithHelpers__factory extends ContractFactory {
  constructor(...args: HelloTokensWithHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wormholeRelayer: string,
    _tokenBridge: string,
    _wormhole: string,
    overrides?: Overrides & { from?: string }
  ): Promise<HelloTokensWithHelpers> {
    return super.deploy(
      _wormholeRelayer,
      _tokenBridge,
      _wormhole,
      overrides || {}
    ) as Promise<HelloTokensWithHelpers>;
  }
  override getDeployTransaction(
    _wormholeRelayer: string,
    _tokenBridge: string,
    _wormhole: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _wormholeRelayer,
      _tokenBridge,
      _wormhole,
      overrides || {}
    );
  }
  override attach(address: string): HelloTokensWithHelpers {
    return super.attach(address) as HelloTokensWithHelpers;
  }
  override connect(signer: Signer): HelloTokensWithHelpers__factory {
    return super.connect(signer) as HelloTokensWithHelpers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloTokensWithHelpersInterface {
    return new utils.Interface(_abi) as HelloTokensWithHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloTokensWithHelpers {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HelloTokensWithHelpers;
  }
}