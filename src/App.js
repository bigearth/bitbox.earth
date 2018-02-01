// react imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

// custom models
import Blockchain from './models/Blockchain';
import Block from './models/Block';
import Transaction from './models/Transaction';
import Output from './models/Output';
import Utxo from './models/Utxo';

// custom components
import Wallet from './components/Wallet';
import Blocks from './components/Blocks';
import BlockDetails from './components/BlockDetails';
// import AddressDetails from './components/AddressDetails';
import Transactions from './components/Transactions';
import Configuration from './components/Configuration';
import Faq from './components/Faq';

// utilities
import Crypto from './utilities/Crypto';
import BitcoinCash from './utilities/BitcoinCash';

// css
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.totalAccounts = 10;
    this.mnemonic = '';
    this.path = '';
    this.autogenerateMnemonic = true;
    this.autogeneratePath = true;

    this.state = {
      mnemonic: '',
      addresses: [],
      blockchainInstance: '',
      utxoSet: new Utxo(),
      displayCashaddr: true,
      configuration: {
        wallet: {
          createNewWallet: true,
          network: 'bitcoin'
        }
      },
      showCreateBtn: false
    };
  }

  componentDidMount() {
    if(this.state.configuration.wallet.createNewWallet) {
    //   let [mnemonic, path, addresses] = BitcoinCash.createHDWallet({
    //     totalAccounts: this.totalAccounts,
    //     autogenerateMnemonic: this.autogenerateMnemonic,
    //     autogeneratePath: this.autogeneratePath
    //   });
    //   let config = this.state.configuration;
    //   this.setState({
    //     mnemonic: mnemonic,
    //     path: path,
    //     addresses: addresses,
    //     configuration: config
    //   });
    //   this.createBlockchain(addresses);
    }
  }

  // rng() {
  //   return Buffer.from('YT8dAtK4d16A3P1z+TpwB2jJ4aFH3g9M1EioIBkLEV4=', 'base64')
  // }
  //
  createBlockchain(addresses) {

  //   // // create new tx
  //   // let owner = Bitcoin.ECPair.fromWIF(addresses[1].privateKeyWIF);
  //   // let newTxb = new Bitcoin.TransactionBuilder();
  //   //
  //   // newTxb.addInput(txHash, 0);
  //   // newTxb.addOutput(addresses[2].publicKey, 12000);
  //   // newTxb.sign(0, owner)
  //   // let newTxHex = newTxb.build().toHex();
  //   // console.log(newTxHex);
  //
  //   // let testnet = Bitcoin.networks.testnet;
  //   // var txb = new Bitcoin.TransactionBuilder(testnet)
  //   // var alice1 = Bitcoin.ECPair.makeRandom({ network: testnet })
  //   // var aliceChange = Bitcoin.ECPair.makeRandom({ rng: this.rng, network: testnet })
  //   //
  //   //
  //   // console.log(alice1, aliceChange);
  //
  //   // GetHash()      =
  //   // hashMerkleRoot = 0x4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b
  //   // txNew.vin[0].scriptSig     = 486604799 4 0x736B6E616220726F662074756F6C69616220646E6F63657320666F206B6E697262206E6F20726F6C6C65636E61684320393030322F6E614A2F33302073656D695420656854
  //   // txNew.vout[0].nValue       = 5000000000
  //   // txNew.vout[0].scriptPubKey = 0x5F1DF16B2B704C8A578D0BBAF74D385CDE12C11EE50455F3C438EF4C3FBCF649B6DE611FEAE06279A60939E028A8D65C10B73071A6F16719274855FEB0FD8A6704 OP_CHECKSIG
  //   // block.nVersion = 1
  //   // block.nTime    = 1231006505
  //   // block.nBits    = 0x1d00ffff
  //   // block.nNonce   = 2083236893
  //   //
  //   //
  //   // CBlock(hash=000000000019d6, ver=1, hashPrevBlock=00000000000000, hashMerkleRoot=4a5e1e, nTime=1231006505, nBits=1d00ffff, nNonce=2083236893, vtx=1)
  //   //   CTransaction(hash=4a5e1e, ver=1, vin.size=1, vout.size=1, nLockTime=0)
  //   //     CTxIn(COutPoint(000000, -1), coinbase 04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73)
  //   //     CTxOut(nValue=50.00000000, scriptPubKey=0x5F1DF16B2B704C8A578D0B)
  //   // vMerkleTree: 4a5e1e
    let keyPair = BitcoinCash.fromWIF(addresses[0].privateKeyWIF);
    let address = keyPair.getAddress();
    let ripemd160 = Crypto.createRIPEMD160Hash(address);
    let output = new Output({
      value: 5000000000,
      ripemd160: ripemd160
    });

    let genesisTx = new Transaction({
      versionNumber: 1,
      inputs: [],
      outputs: [output],
      time: Date.now(),
      address: address
    }, true);

    let genesisBlock = {
      hash: '0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
      version: 1,
      hashPrevBlock: '00000000000000',
      hashMerkleRoot: '0x4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
      time: 1231006505,
      bits: '0x1d00ffff',
      nonce: '2083236893',
      vtx: 1,
      index: 0,
      transactions: [genesisTx],
      previousHash: '00000000000000'
    };
    // console.log(genesisBlock);
    let blockchainInstance = new Blockchain(genesisBlock);

    let utxoSet = this.state.utxoSet;
    utxoSet.addUtxo(address, genesisBlock.transactions[0].outputs[0].value);
    // console.log(utxoSet);
  //   // let coinbase = BitcoinCash.fromWIF(addresses[0].privateKeyWIF);
  //   // let txb = BitcoinCash.transactionBuilder();
  //   //
  //   // // console.log(genesisTx.createTransactionHash(genesisTx));
  //   // txb.addInput(Crypto.createSHA256Hash(genesisTx), 0);
  //   // // f5a5ce5988cc72b9b90e8d1d6c910cda53c88d2175177357cc2f2cf0899fbaad
  //   // txb.addOutput(addresses[1].publicKey, 12000);
  //   //
  //   // txb.sign(0, coinbase)
  //   // let txHex = txb.build().toHex();
  //   // // console.log(txHex)
  //   // let txHash = Crypto.createSHA256Hash(txHex);
  //   // console.log(txHash);
  //
    this.handleBlockchainUpdate(blockchainInstance);
    this.handleUtxoUpdate(utxoSet);
  }

  resetBitbox(config) {
    config.totalAccounts = this.totalAccounts;

    if(!config.mnemonic && this.mnemonic !== '') {
      config.mnemonic = this.mnemonic;
    }

    if(!config.autogenerateMnemonic && this.autogenerateMnemonic !== false) {
      config.autogenerateMnemonic = this.autogenerateMnemonic;
    }

    if(!config.autogeneratePath && this.autogeneratePath === false) {
      config.autogeneratePath = this.autogeneratePath;
      config.path = this.path;
    } else {
      config.autogeneratePath = true;
    }
    let [mnemonic, path, addresses] = BitcoinCash.createHDWallet(config);
    this.setState({
      mnemonic: mnemonic,
      path: path,
      addresses: addresses
    });
    this.createBlockchain(addresses);
  }

  handleMnemonicChange(mnemonic) {
    this.mnemonic = mnemonic;
  }

  handlePathChange(path) {
    this.path = path;
  }

  handleTotalAccountsChange(totalAccounts) {
    this.totalAccounts = +totalAccounts;
  }

  handleAutoGenerateMnemonicChange(autogenerateMnemonic) {
    this.autogenerateMnemonic = autogenerateMnemonic;
  }

  handleAutoGeneratePathChange(autogeneratePath) {
    this.autogeneratePath = autogeneratePath;
  }

  handleDisplayCashaddrChange(displayCashaddr) {
    this.setState({
      displayCashaddr: displayCashaddr
    });
  }

  handlePathMatch(path) {
    if(path === '/' || path === '/blocks' || path === '/transactions' || path === '/logs' || path === '/configuration/accounts-and-keys') {
      return true;
    } else {
      return false;
    }
  }

  handleBlockchainUpdate(blockchainInstance) {
    this.setState({
      blockchainInstance: blockchainInstance
    })
  }

  handleUtxoUpdate(utxoSet) {
    this.setState({
      utxoSet: utxoSet
    })
  }

  createBlock() {
    let blockchainInstance = this.state.blockchainInstance;

    let keyPair = BitcoinCash.fromWIF(this.state.addresses[0].privateKeyWIF);
    let address = keyPair.getAddress();
    let ripemd160 = Crypto.createRIPEMD160Hash(address);

    let output = new Output({
      value: 5000000000,
      ripemd160: ripemd160
    });

    let tx = new Transaction({
      versionNumber: 1,
      inputs: [],
      outputs: [output],
      time: Date.now(),
      address: address
    }, true);

    let block = {
      hash: '0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
      version: 1,
      hashPrevBlock: '00000000000000',
      hashMerkleRoot: '0x4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
      time: Date.now(),
      bits: '0x1d00ffff',
      nonce: '2083236893',
      vtx: 1,
      index: blockchainInstance.chain.length,
      transactions: [tx],
      previousHash: blockchainInstance.getLatestBlock().blockheader.hashMerkleRoot
    };

    blockchainInstance.addBlock(new Block(block));
    let utxoSet = this.state.utxoSet;
    utxoSet.addUtxo(address, output.value);
    this.handleBlockchainUpdate(blockchainInstance);
    this.handleUtxoUpdate(utxoSet);
  }

  render() {

    const pathMatch = (match, location) => {
      if (!match) {
        return false
      }
      return this.handlePathMatch(match.path);
    }

    let list = []
    if (this.state.addresses.length) {
      this.state.addresses.forEach(address => {
        list.push(<li>Address: {address} | Balance: 0 | TX Count: 0 |</li>);
      });
    }

    const WalletPage = (props) => {
      return (
        <Wallet
          mnemonic={this.state.mnemonic}
          path={this.state.path}
          blockchainInstance={this.state.blockchainInstance}
          addresses={this.state.addresses}
          utxoSet={this.state.utxoSet}
          displayCashaddr={this.state.displayCashaddr}
        />
      );
    };

    const BlocksPage = (props) => {
      return (
        <Blocks
          match={props.match}
          blockchainInstance={this.state.blockchainInstance}
          handleBlockchainUpdate={this.handleBlockchainUpdate.bind(this)}
          handleUtxoUpdate={this.handleUtxoUpdate.bind(this)}
          addresses={this.state.addresses}
          utxoSet={this.state.utxoSet}
        />
      );
    };

    const BlockPage = (props) => {
      return (
        <BlockDetails
          blockchainInstance={this.state.blockchainInstance}
          match={props.match}
        />
      );
    };

    const AddressPage = (props) => {
      return (
        <AddressDetails
          blockchainInstance={this.state.blockchainInstance}
          match={props.match}
        />
      );
    };

    const TransactionsPage = (props) => {
      return (
        <Transactions
          addresses={this.state.addresses}
        />
      );
    };

    const ConfigurationPage = (props) => {
      return (
        <Configuration
          match={props.match}
          resetBitbox={this.resetBitbox.bind(this)}
          totalAccounts={this.totalAccounts}
          mnemonic={this.state.mnemonic}
          path={this.state.path}
          displayCashaddr={this.state.displayCashaddr}
          autogenerateMnemonic={this.autogenerateMnemonic}
          autogeneratePath={this.autogeneratePath}
          handleTotalAccountsChange={this.handleTotalAccountsChange.bind(this)}
          handleMnemonicChange={this.handleMnemonicChange.bind(this)}
          handlePathChange={this.handlePathChange.bind(this)}
          handleAutoGenerateMnemonicChange={this.handleAutoGenerateMnemonicChange.bind(this)}
          handleAutoGeneratePathChange={this.handleAutoGeneratePathChange.bind(this)}
          handleDisplayCashaddrChange={this.handleDisplayCashaddrChange.bind(this)}
        />
      );
    };

    const FAQPage = (props) => {
      return (
        <Faq
        />
      );
    };

    let chainlength = 0;
    if(this.state.blockchainInstance.chain) {
      chainlength = this.state.blockchainInstance.chain.length - 1;
    }

  //   // <Route path="/addresses/:address_id" component={AddressPage}/>
            // <Route path="/transactions" component={TransactionsPage}/>
                // <li className="pure-menu-item">
                //   <NavLink
                //     isActive={pathMatch}
                //     activeClassName="pure-menu-selected"
                //     className="pure-menu-link"
                //     to="/transactions">
                //     <i className="fas fa-exchange-alt"></i> Transactions
                //   </NavLink>
                // </li>
          // <Switch>
          //   <Route exact path="/blocks" component={BlocksPage}/>
          //   <Route path="/blocks/:block_id" component={BlockPage}/>
          //   <Route path="/configuration" component={ConfigurationPage}/>
          //   <Route path="/faq" component={FAQPage}/>
          //   <Route exact path="/" component={WalletPage}/>
          //   <Redirect from='*' to='/' />
          // </Switch>
    return (
      <Router>
        <div>
          <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <Link className="pure-menu-heading header-logo" to="/">
                <img src={'assets/logo.png'} /> <br />BitBox
              </Link>
            </div>
          </div>
          <div className="splash-container">
              <div className="splash">
                  <h1 className="splash-head">YOUR $BCH TOOLKIT</h1>
                  <p className="splash-subhead">
                      SUPERCHARGE your Bitcoin Cash workflow.
                  </p>
                  <p>
                    <a href="https://github.com/bigearth/bitbox-electron/releases/download/0.0.1/BITBOX-0.0.1.dmg" className="pure-button pure-button-primary">
                      <i className="fab fa-apple"></i> Download (MacOS)
                    </a>
                  </p>
                  <div>
                    <p className="splash-subhead install">
                    INSTALL VIA NPM
                    </p>
                    <p>
                      <code>npm install bitbox-cli --global</code>
                    </p>
                  </div>
              </div>
          </div>

          <div className="content-wrapper">
            <div className="content features">
                <h2 className="content-head is-center">Features</h2>

                <div className="pure-g">
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                      <p className="header-icon"><i className="fa fa-cube" /></p>
                      <h3 className="content-subhead">
                        One Click Blockchain
                      </h3>
                      <p>
                        Quickly fire up a personal Bitcoin Cash blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.
                      </p>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                      <p className="header-icon"><i className="fa fa-eye" /></p>
                      <h3 className="content-subhead">
                        Visual Mnemonic &amp; Account Info
                      </h3>
                      <p>
                        Quickly see the current status of all accounts, including their addresses, private keys, transactions and balances.
                      </p>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                      <p className="header-icon"><i className="fa fa-clock" /></p>
                      <h3 className="content-subhead">
                        Advanced Mining Controls
                      </h3>
                      <p>
                        Configure advanced mining with a single click, setting block times to best suit your development needs.
                      </p>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
                      <p className="header-icon"><i className="fab fa-sistrix" /></p>
                      <h3 className="content-subhead">
                        Built-in Block Explorer
                      </h3>
                      <p>
                        Examine all blocks and transactions to gain insight about what’s happening under the hood.
                      </p>
                    </div>
                </div>
            </div>

            <div className="ribbon l-box-lrg pure-g">
                <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-16-24">
                  <img alt="File Icons" className="pure-img-responsive" src={'assets/screenshot.png'} />
                </div>
                <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-8-24 screenshot-desc">
                  <p>
                    <a href="https://github.com/bigearth/bitbox-electron/releases/download/0.0.1/BITBOX-0.0.1.dmg" className="pure-button pure-button-primary">
                      <i className="fab fa-apple"></i> Download (MacOS)
                    </a>
                  </p>
                <div>
                  <p className="splash-subhead install">INSTALL VIA NPM</p>
                  <p><code>npm install bitbox-cli --global</code></p>
                </div>

                </div>
            </div>

            <div className="content">
                <h2 className="content-head is-center">Like what you see?</h2>

                <div className="pure-g">
                    <div className="l-box-lrg pure-u-1 pure-u-md-8-24 download">
                      <h4>It&rsquo;s open source</h4>
                      <p>BITBOX is on GitHub under the MIT Open Source License. We welcome any and all contributions, and feature suggestions.</p>
                      <ul>
                        <li>
                          <a href='https://github.com/bigearth/bitbox-electron'>https://github.com/bigearth/bitbox-electron</a>
                        </li>
                        <li>
                          <a href='https://github.com/bigearth/bitbox-cli'>https://github.com/bigearth/bitbox-cli</a>
                        </li>
                        <li>
                          <a href='https://github.com/bigearth/bitbox.earth'>https://github.com/bigearth/bitbox.earth</a>
                        </li>
                      </ul>
                    </div>
                    <div className="l-box-lrg pure-u-1 pure-u-md-16-24 github">
                      <i className="fab fa-github-square"></i>
                    </div>
                </div>

            </div>

            <div className="footer l-box is-center">
              Created w/ ❤️ on EARTH by <a href='https://twitter.com/cgcardona'>Gabriel Cardona</a>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
