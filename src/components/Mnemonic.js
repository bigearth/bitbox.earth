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
            <ol>
              <li>randomBits <code>number</code>:                     number of random bits of entropy to use. The more bits the longer the mnemonic.
              </li>
              <li>mnemonic word list <code>array</code> <code>optional</code>:   list of words to generate the mnemonic from</li>
            </ol>
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
            <ol>
              <li>randomBytes <code>string</code>:   string of hex encoded random entropy. This entropy can be generated w/ BITBOX.Crypto.randomBytes.</li>
              <li>mnemonic word list <code>array</code> <code>optional</code>:   list of words to generate the mnemonic from</li>
            </ol>
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
      <ol>
        <li>
    mnemonic <code>string</code>:   a mnemonic to turn to entropy.
        </li>
        <li>
    mnemonic word list <code>array</code> <code>optional</code>:   list of words the mnemonic was generated from
        </li>
      </ol>
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
      <p>Validate mnemonic</p>
      <h4>Arguments</h4>
      <ol>
        <li>
    mnemonic <code>string</code>   mnemonic phrase
        </li>
        <li>
    mnemonic word list <code>array</code>:   list of words the mnemonic was generated from
        </li>
      </ol>
      <h4>Result</h4>
      <p>
    valid <code>boolean</code>        If the mnemonic is valid
      </p>
      <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Mnemonic.validateMnemonic('ca', BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().english)
    // ca is not in wordlist, did you mean cabbage?

    BITBOX.BitcoinCash.Mnemonic.validateMnemonic('boil lonely casino manage habit where total glory muffin name limit mansion', BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().english)
    // Valid mnemonic

    BITBOX.BitcoinCash.Mnemonic.validateMnemonic('boil lonely casino manage habit where total glory muffin name limit mansion boil lonely casino manage habit where total glory muffin name limit mansion', BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().english)
    // Invalid mnemonic
            `}</SyntaxHighlighter>

      <h3 id='mnemonicToSeedHex'><code>mnemonicToSeedHex</code></h3>
      <p>Create root seed from mnemonic</p>
      <h4>Arguments</h4>
      <ol>
        <li>
    mnemonic <code>string</code>:                         mnemonic phrase
        </li>
        <li>
    passphrase <code>string</code> <code>optional</code>:   passphrase. Defaults to ''
        </li>
      </ol>
      <h4>Result</h4>
      <p>
    seedHex <code>string</code>       seed hex encoded
      </p>
      <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('boil lonely casino manage habit where total glory muffin name limit mansion', '');
    // e906236ab5ebec8fbff9948807a6f5d2aa6f35e8bcbcda99e22f9048323cdc0755b781782ee1cce40007bcf900593ed2667e6e9800d734fa46a8f7f51ec74818

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('vendor talk alone sick balance tissue number armor frequent plug transfer chest', 'password');
    // 2da5465236a41c90bfc538c9781603261f707c6744aae097fa961ba12316a0e20cf6acb609cc2faf9a9950b3f9a9bec9f4194037e5189d4c9762e49c38fa68ee

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('idea relax weird defense body bronze champion ancient vocal peanut similar dose grit company peasant gate sunset deal library act include penalty annual main', '');
    // c156365b0f2a1604dd6f53ad7d0a4c14ba38f981fb180fdfc3146e6afcd8af2f1fc42cb2d3658a312ea8485912bdf0f18de45cf932f6704aa8bbd9eaace1fbee

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('bus aware census desk orphan zebra fashion host try muscle pig close jealous slice elegant prison reject ship great program trumpet syrup tray remove', '');
    // f42ce8e188d15a665c18c0cfaedf093c75d24c479d5287f4bec06b13e7da0401a3503687221feecfc857e86eaebb174b83607a665040254e99574a138eebeb42

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedHex('frost deliver coin clutch upon round scene wonder various wise luggage country', 'yayayayay');
    // 1d009fa3a88651a404d5033deb6db101e2f13bc3c86d1fb993b4d133dc8421122c9b5210bad89615e0b09a343352f807c8c44540f2ad425c9a9a33f81a36b71f
            `}</SyntaxHighlighter>

      <h3 id='mnemonicToSeedBuffer'><code>mnemonicToSeedBuffer</code></h3>
      <p>
      Create root seed from mnemonic
      </p>
      <h4>Arguments</h4>
      <ol>
        <li>
    mnemonic <code>string</code>   mnemonic phrase
        </li>
        <li>
    passphrase <code>string</code> <code>optional</code>:   passphrase. Defaults to ''
        </li>
      </ol>
      <h4>Result</h4>
      <p>
    rootSeedBuffer                    rootSeed
      </p>
      <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('enable stem left method one submit coach bid inspire cluster armed bracket')
    // <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('vendor talk alone sick balance tissue number armor frequent plug transfer chest', 'password');
    // <Buffer 2d a5 46 52 36 a4 1c 90 bf c5 38 c9 78 16 03 26 1f 70 7c 67 44 aa e0 97 fa 96 1b a1 23 16 a0 e2 0c f6 ac b6 09 cc 2f af 9a 99 50 b3 f9 a9 be c9 f4 19 ... >

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('idea relax weird defense body bronze champion ancient vocal peanut similar dose grit company peasant gate sunset deal library act include penalty annual main', '');
    // <Buffer c1 56 36 5b 0f 2a 16 04 dd 6f 53 ad 7d 0a 4c 14 ba 38 f9 81 fb 18 0f df c3 14 6e 6a fc d8 af 2f 1f c4 2c b2 d3 65 8a 31 2e a8 48 59 12 bd f0 f1 8d e4 ... >

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('bus aware census desk orphan zebra fashion host try muscle pig close jealous slice elegant prison reject ship great program trumpet syrup tray remove', '');
    // <Buffer f4 2c e8 e1 88 d1 5a 66 5c 18 c0 cf ae df 09 3c 75 d2 4c 47 9d 52 87 f4 be c0 6b 13 e7 da 04 01 a3 50 36 87 22 1f ee cf c8 57 e8 6e ae bb 17 4b 83 60 ... >

    BITBOX.BitcoinCash.Mnemonic.mnemonicToSeedBuffer('frost deliver coin clutch upon round scene wonder various wise luggage country', 'yayayayay');
    // <Buffer 1d 00 9f a3 a8 86 51 a4 04 d5 03 3d eb 6d b1 01 e2 f1 3b c3 c8 6d 1f b9 93 b4 d1 33 dc 84 21 12 2c 9b 52 10 ba d8 96 15 e0 b0 9a 34 33 52 f8 07 c8 c4 ... >
            `}</SyntaxHighlighter>

      <h3 id='translateMnemonic'><code>translateMnemonic</code></h3>
      <p>
      Translate mnemonic
      </p>
      <h4>Arguments</h4>
      <ol>
        <li>
    mnemonic <code>string</code>:       mnemonic phrase
        </li>
        <li>
    fromLanguage <code>string</code>:   language mnemonic is being translated from
        </li>
        <li>
    toLanguage <code>string</code>:    language mnemonic is being translated to
        </li>
      </ol>
      <h4>Result</h4>
      <p>
    mnemonic <code>string</code>        translated mnemonic
      </p>
      <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
      <p>
    Return mnemonic word lists
      </p>
      <h4>Result</h4>
      <p>
    wordlists <code>object</code>      an object with wordlists in the following languages english (default), japanese, chinese simplified, chinese traditional, french, italian, japanese, korean, spanish
      </p>
      <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
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
      <p>
    Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: <code>m/44&rsquo;/145&rsquo;/0&rsquo;/0/n</code>
      </p>
      <h4>Arguments</h4>
      <ol>
        <li>
    mnemonic <code>string</code>:                                      mnemonic to use
        </li>
        <li>
    numberOfKeypairs <code>number</code> <code>optional</code>:        number of keypairs to return. Default is 1
        </li>
      </ol>
      <h4>Result</h4>
      <p>
    keypairs <code>array</code>                            array of privateKeyWIF/publicAddress pairs
      </p>
      <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // First create a mnemonic from 32 bytes of random entropy
    let mnemonic = BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(32);
    // symptom owner ridge follow buffalo choose stem depend million jar lemon claw color credit remove model pudding slot fiber west heavy ranch bird wet

    // Then call keypairsFromMnemonic and pass in your mnemonic and how many keypairs you'd like
    BITBOX.BitcoinCash.Mnemonic.keypairsFromMnemonic(mnemonic, 5)
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

    // again
    let mnemonic = BITBOX.BitcoinCash.Mnemonic.entropyToMnemonic(32);
    // equip owner slim sibling panther future amazing inside rain boss work cup way debate monkey promote impact palace mansion idle embrace custom grocery stumble
    BITBOX.BitcoinCash.Mnemonic.keypairsFromMnemonic(mnemonic, 5)
    // returns
    [ { privateKeyWIF: 'L51kvKUZ6CqGMBV6Ew7dPosK83rPcgXZZ3YBHwpRVPuCZSXuFfuy',
    address: 'bitcoincash:qraws64rf3sxddh9frw5gjum9m7p2xqpxgk6qluhrt' },
    { privateKeyWIF: 'L4rzcGNUgz1oDh6nZobdr1t5yyWNRQfL29MJtFMksjaG5qBN1NBi',
      address: 'bitcoincash:qqpqhs5fqt2jfequqppytfemuh03fl493qljsepkue' },
    { privateKeyWIF: 'KzxX4SAp53kjVqqV65GPTUxvuaKKuhAJZqyfZ51ogYvnfSiyrjah',
      address: 'bitcoincash:qqua0de65f2ug3xxz0vyj0v4sp43qjg33qh6zqu5ld' },
    { privateKeyWIF: 'L5SJXmhdd9wK6pYWAnNEr4uF8xZaPagzYrA3x8Wq6ykRj9kYwHcC',
      address: 'bitcoincash:qpnfdl5umwl39u263kkxxnk6aa30cwrymg8v8p5j2f' },
    { privateKeyWIF: 'KyWmctVJndJf59bpmgc5GUqfaNXn6RFMRCJGPK8aDGWLF4PzVf1x',
      address: 'bitcoincash:qr8y2lgpf4dmr7w6rvlywm8e27w5jef42y3rg5ncg7' } ]
          `}</SyntaxHighlighter>

      <h3 id='findNearestWord'><code>findNearestWord</code></h3>
      <p>
      Returns nearest matching word from provided word list
      </p>
      <h4>Arguments</h4>
      <ol>
        <li>
    word <code>string</code>:            mnemonic to use
        </li>
        <li>
    wordlist <code>array</code>:         wordlist to search
        </li>
      </ol>
      <h4>Result</h4>
      <p>
    word <code>string</code>             nearest matching word from profided wordlist
      </p>
      <h4>Examples</h4>
          <SyntaxHighlighter language='javascript' style={ocean}>{`
    // english
    let word = 'ab';
    let wordlist = BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().english;
    BITBOX.BitcoinCash.Mnemonic.findNearestWord(word, wordlist);
    // abandon

    // french
    let word = 'octu';
    let wordlist = BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().french;
    BITBOX.BitcoinCash.Mnemonic.findNearestWord(word, wordlist);
    // octupler

    // spanish
    let word = 'foobaro';
    let wordlist = BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().spanish;
    BITBOX.BitcoinCash.Mnemonic.findNearestWord(word, wordlist);
    // forro

    // italian
    let word = 'nv';
    let wordlist = BITBOX.BitcoinCash.Mnemonic.mnemonicWordLists().italian;
    BITBOX.BitcoinCash.Mnemonic.findNearestWord(word, wordlist);
    // neve
          `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Mnemonic;
