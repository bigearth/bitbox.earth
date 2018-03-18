import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";

class Mnemonic extends Component {
  render() {
    return (
      <div className="Mnemonic">
        <h2 id='Mnemonic' className="content-head is-center"><i className="fas fa-key" /> Mnemonic</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='generateMnemonic'><code>generateMnemonic</code></h3>
            <p>Generate <a href='https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki'>BIP39</a> mnemonic from entropy</p>
            <h4>Arguments</h4>
            <ul>
              <li>1. randomBits <code>number</code>:                     number of random bits of entropy to use. The more bits the longer the mnemonic.
              </li>
              <li>2. mnemonic word list <code>array</code> <code>optional</code>:   list of words to generate the mnemonic from</li>
            </ul>
            <h4>Result</h4>
            <p>mnemonic <code>string</code>                          a random mnemonic</p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // generate 12 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(128);
    // boil lonely casino manage habit where total glory muffin name limit mansion

    // generate 15 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(160);
    // steak prevent estate save dance design close noise cheap season among train sleep ketchup gas

    // generate 18 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(192);
    // fever endorse purpose normal fashion desert blood robust prevent clean guard display raise virtual again unit banana rich

    // generate 21 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(224);
    // scan pink shock describe chicken edit budget exit camera morning awesome silk inner pair sea few flock walnut write mountain surface

    // generate 24 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(256);
    // disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid

    // generate 12 french word mnemonic
    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(128, BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().french);
    // annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne
            `}</SyntaxHighlighter>

            <h3 id='entropyToMnemonic'><code>entropyToMnemonic</code></h3>
            <p>Create mnemonic from entropy</p>
            <h4>Arguments</h4>
            <ul>
              <li>1. randomBytes <code>string</code>:   string of hex encoded random entropy. This entropy can be generated w/ BITBOX.Crypto.randomBytes.</li>
              <li>2. mnemonic word list <code>array</code> <code>optional</code>:   list of words to generate the mnemonic from</li>
            </ul>
            <h4>Result</h4>
            <p> mnemonic <code>string</code>      a random mnemonic </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    // generate 16 bytes of entropy
    let entropy = BITBOX.Crypto.randomBytes(16);
    // c2d5f2d51a4944f1c9e17f10e1b98718
    // turn entropy to 12 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(entropy)
    // security question relief cruel nephew jump chest copper axis assist gift correct

    // generate 20 bytes of entropy
    let entropy = BITBOX.Crypto.randomBytes(20);
    // 71cdd28575534807b1b477869c726a816bb1fe1b
    // turn entropy to 15 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(entropy)
    // impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt

    // generate 24 bytes of entropy
    let entropy = BITBOX.Crypto.randomBytes(24);
    // 1615e8a1c42dc008acf03d4a8d4a60467d29a1b8c5232756
    // turn entropy to 18 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(entropy)
    // bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real

    // generate 28 bytes of entropy
    let entropy = BITBOX.Crypto.randomBytes(28);
    // 9c17b186ccfddd4aa1314e1c3f0f86e60579870cb5d93fa6c100edb1
    // turn entropy to 21 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(entropy)
    // orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel

    // generate 32 bytes of entropy
    let entropy = BITBOX.Crypto.randomBytes(32);
    // f379da02cc426e6e26430d25e6cc372dfd0a1a2e4a33ac4dc6ae6d56017f642d
    // turn entropy to 24 word mnemonic
    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(entropy)
    // vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property

    // generate 16 bytes of entropy
    let entropy = BITBOX.Crypto.randomBytes(16);
    // c2d5f2d51a4944f1c9e17f10e1b98718
    // turn entropy to 12 japanese word mnemonic
    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(entropy, BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().french)
    // ぱそこん　にあう　にんめい　きどく　ちそう　せんきょ　かいが　きおく　いれる　いねむり　しいく　きかんしゃ
      `}</SyntaxHighlighter>

      <h3 id='mnemonicToEntropy'><code>mnemonicToEntropy</code></h3>
      <p>Turn mnemonic to entropy</p>
      <h4>Arguments</h4>
      <ul>
        <li>
    1. mnemonic <code>string</code>:   a mnemonic to turn to entropy.
        </li>
        <li>
    2. mnemonic word list <code>array</code> <code>optional</code>:   list of words the mnemonic was generated from 
        </li>
      </ul>
      <h4>Result</h4>
      <p>
    entropy <code>string</code>       hex encoded entropy
      </p>
      <h4>Examples</h4>
      <SyntaxHighlighter language='javascript' style={ocean}>{`
    // turn 12 word mnemonic to entropy
    let mnemonic = 'security question relief cruel nephew jump chest copper axis assist gift correct';
    BITBOX.BitcoinCash.Mnemonic.mnemonicToEntropy(mnemonic)
    // c2d5f2d51a4944f1c9e17f10e1b98718

    // turn 15 word mnemonic to entropy
    let mnemonic = 'impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt';
    BITBOX.BitcoinCash.Mnemonic.mnemonicToEntropy(mnemonic)
    // 71cdd28575534807b1b477869c726a816bb1fe1b

    // turn 18 word mnemonic to entropy
    let mnemonic = 'bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real';
    BITBOX.BitcoinCash.Mnemonic.mnemonicToEntropy(mnemonic)
    // 1615e8a1c42dc008acf03d4a8d4a60467d29a1b8c5232756

    // turn 21 word mnemonic to entropy
    let mnemonic = 'orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel';
    BITBOX.BitcoinCash.Mnemonic.mnemonicToEntropy(mnemonic)
    // 9c17b186ccfddd4aa1314e1c3f0f86e60579870cb5d93fa6c100edb1

    // turn 24 word mnemonic to entropy
    let mnemonic = 'vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property';
    BITBOX.BitcoinCash.Mnemonic.mnemonicToEntropy(mnemonic)
    // f379da02cc426e6e26430d25e6cc372dfd0a1a2e4a33ac4dc6ae6d56017f642d

            `}</SyntaxHighlighter>

            <h3 id='validateMnemonic'><code>validateMnemonic</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Validate mnemonic

    Arguments:
    1. mnemonic <code>string</code>   mnemonic phrase
    2. mnemonic word list <array>

    Result:
    valid <boolean>        If the mnemonic is valid

    BITBOX.BitcoinCash.Mnemonic.validateMnemonic('boil lonely casino manage habit where total glory muffin name limit mansion')
    // true
            `}</SyntaxHighlighter>

            <h3 id='mnemonicToSeedHex'><code>mnemonicToSeedHex</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Create root seed from mnemonic

    Arguments:
    1. mnemonic <code>string</code>   mnemonic phrase

    Result:
    seedHex <code>string</code>       seed hex encoded

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('boil lonely casino manage habit where total glory muffin name limit mansion', '');
    // e906236ab5ebec8fbff9948807a6f5d2aa6f35e8bcbcda99e22f9048323cdc0755b781782ee1cce40007bcf900593ed2667e6e9800d734fa46a8f7f51ec74818
            `}</SyntaxHighlighter>

            <h3 id='mnemonicToSeedBuffer'><code>mnemonicToSeedBuffer</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Create root seed from mnemonic

    Arguments:
    1. mnemonic <code>string</code>   mnemonic phrase

    Result:
    rootSeed               rootSeed

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('enable stem left method one submit coach bid inspire cluster armed bracket')
    // <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >
            `}</SyntaxHighlighter>

            <h3 id='translateMnemonic'><code>translateMnemonic</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Translate mnemonic

    Arguments:
    1. mnemonic <code>string</code>       mnemonic phrase
    2. fromLanguage <code>string</code>   language mnemonic is being translated from
    3. toLanguage <code>string</code>     language mnemonic is being translated to

    Result:
    mnemonic <code>string</code>        translated mnemonic

    // create korean mnemonic
    let koreanMnemonic = BITBOX.BitcoinCash.Mnemonic.generateMnemonic(256, BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().korean);
    // 상대 조직 피곤 기간 장면 저런 서쪽 신고 연예인 고춧가루 활짝 세종대왕 거울 대충 벨트 제일 저곳 남녀 수술 수학 학원 금년 유학 인공
    // translate it to spanish
    let spanishMnemonic = BITBOX.BitcoinCash.Mnemonic.translateMnemonic(koreanMnemonic, 'korean', 'spanish')
    // gato razón torero bobina pintor poema grieta leer mirar aparato vivaz hembra alambre cielo esencia rabia poder buscar incapaz instante trofeo bicho oído pájaro
    // translate back to korean
    BITBOX.BitcoinCash.Mnemonic.translateMnemonic(spanishMnemonic, 'spanish', 'korean')
    // 상대 조직 피곤 기간 장면 저런 서쪽 신고 연예인 고춧가루 활짝 세종대왕 거울 대충 벨트 제일 저곳 남녀 수술 수학 학원 금년 유학 인공
            `}</SyntaxHighlighter>

            <h3 id='mnemonicWordLists'><code>mnemonicWordLists</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Return mnemonic word lists

    Result:
    wordlists <object>      an object with wordlists in the following languages english (default), japanese, chinese simplified, chinese traditional, french, italian, japanese, korean, spanish

    BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists();
    // {
    //   EN: [],
    //   JA: [],
    //   chinese_simplified: [],
    //   chinese_traditional: [],
    //   english: [],
    //   french: [],
    //   italian: [],
    //   japanese: [],
    //   korean: [],
    //   spanish: []
    // }
            `}</SyntaxHighlighter>

          <h3 id='keypairsFromMnemonic'><code>keypairsFromMnemonic</code></h3>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: m/44'/145'/0'/0/n

    Arguments:
    1. mnemonic <code>string</code>                        mnemonic to use
    2. numberOfKeypairs <number> optional       number of keypairs to return. Default is 1

    Result:
    keypairs <array>                            array of privateKeyWIF/publicAddress pairs

    // First create a mnemonic from 32 bytes of random entropy
    let mnemonic = BITBOX.BitcoinCash.entropyToMnemonic(32);
    // symptom owner ridge follow buffalo choose stem depend million jar lemon claw color credit remove model pudding slot fiber west heavy ranch bird wet

    // Then call keypairsFromMnemonic and pass in your mnemonic and how many keypairs you'd like
    BITBOX.BitcoinCash.keypairsFromMnemonic(mnemonic, 5))
    // it returns the following array.

    [ { privateKeyWIF: 'Kz6b1TszeUGaypUpRCnfD2L17bQSW93o4j3VMpvT5e5BqaF9XkyP',
    address: 'bitcoincash:qp8a4vzfk9kstwsl4ud4ym3z2tckdf7a4gfwkxvtfq' },
    { privateKeyWIF: 'L5ZHQ2BdTQaTq2A8HNsdkHYKPLsfrHgvJyrVxHFFZyN9K3fmeoiG',
    address: 'bitcoincash:qq5nxh27up6hcm0nn36lxtu7n8a7l6jsj52s8dvtex' },
    { privateKeyWIF: 'KwyY3Z7STwbxnmQXe1vVmXhT8Y3W1BJQpRgteRhTWCyvvdro2j33',
    address: 'bitcoincash:qzj9n9jmnmyeqfdc5k65kxta3c7ch0g3wudeyjeg3y' },
    { privateKeyWIF: 'KxMG2mjL8DZQCaoXz8aFw5XYqguKiDHBb16JwDQMGa7ga7kfy9cE',
    address: 'bitcoincash:qrhj0lesz6sn7l4hc5arh5tt8k583ahdaun6mcdjx8' },
    { privateKeyWIF: 'Kz3qqJ8GFSSbDrBqtV7mfhBoDPkSmMKtp7Yk62psDgmRjyU8id8J',
    address: 'bitcoincash:qp8xjllc75c2hgrpjy3f6kegtfqgmn72dqs0y20anv' } ]
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Mnemonic;
