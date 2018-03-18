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
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Generate entropy

    Arguments:
    1. randomBits <number>   number of random bits of entropy to use. The more bits the longer the mnemonic.
    Entropy (bits)	Mnemonic length (words)
    128             12

    160             15

    192             18

    224             21

    256             24
    2. mnemonic word list <array>

    Result:
    mnemonic <string>      a random mnemonic

    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(128);
    // boil lonely casino manage habit where total glory muffin name limit mansion

    BITBOX.BitcoinCash.Mnemonic.generateMnemonic(128, BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().french);
    // annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne
            `}</SyntaxHighlighter>

            <h3 id='entropyToMnemonic'><code>entropyToMnemonic</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Create mnemonic from entropy

    Arguments:
    1. randomBytes <string>   string of hex encoded random entropy. This entropy can be generated w/ BITBOX.Crypto.randomBytes.
    2. mnemonic word list <array>

    Result:
    mnemonic <string>      a random mnemonic

    BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic('f379da02cc426e6e26430d25e6cc372dfd0a1a2e4a33ac4dc6ae6d56017f642d')
    // vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property
      `}</SyntaxHighlighter>

      <h3 id='mnemonicToEntropy'><code>mnemonicToEntropy</code></h3>
      <SyntaxHighlighter language='javascript' style={ocean}>{`
    Turn mnemonic to entropy

    Arguments:
    1. mnemonic <string>   a menmonic to turn to entropy.
    2. mnemonic word list <array>

    Result:
    entropy <string>       hex encoded entropy

    BITBOX.BitcoinCash.Mnemonic.mnemonicToEntropy('boil lonely casino manage habit where total glory muffin name limit mansion');
    // 1910748dc37683f4b9731c91325a07c3
            `}</SyntaxHighlighter>

            <h3 id='validateMnemonic'><code>validateMnemonic</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Validate mnemonic

    Arguments:
    1. mnemonic <string>   mnemonic phrase
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
    1. mnemonic <string>   mnemonic phrase

    Result:
    seedHex <string>       seed hex encoded

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('boil lonely casino manage habit where total glory muffin name limit mansion', '');
    // e906236ab5ebec8fbff9948807a6f5d2aa6f35e8bcbcda99e22f9048323cdc0755b781782ee1cce40007bcf900593ed2667e6e9800d734fa46a8f7f51ec74818
            `}</SyntaxHighlighter>

            <h3 id='mnemonicToSeedBuffer'><code>mnemonicToSeedBuffer</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Create root seed from mnemonic

    Arguments:
    1. mnemonic <string>   mnemonic phrase

    Result:
    rootSeed               rootSeed

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('enable stem left method one submit coach bid inspire cluster armed bracket')
    // <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >
            `}</SyntaxHighlighter>

            <h3 id='translateMnemonic'><code>translateMnemonic</code></h3>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    Translate mnemonic

    Arguments:
    1. mnemonic <string>       mnemonic phrase
    2. fromLanguage <string>   language mnemonic is being translated from
    3. toLanguage <string>     language mnemonic is being translated to

    Result:
    mnemonic <string>        translated mnemonic

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
    1. mnemonic <string>                        mnemonic to use
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
