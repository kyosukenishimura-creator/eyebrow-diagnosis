// ========== 質問データ ==========
const questions = [
  {
    text: "あなたの顔の形に一番近いのは？",
    options: [
      { label: "丸顔", scores: { arch: 2, up: 1 } },
      { label: "卵型", scores: { arch: 1, parallel: 1 } },
      { label: "面長", scores: { parallel: 2, thick: 1 } },
      { label: "ベース型・四角顔", scores: { arch: 2, down: 1 } }
    ]
  },
  {
    text: "あなたの目の形に一番近いのは？",
    options: [
      { label: "つり目・キツく見られがち", scores: { parallel: 2, down: 2 } },
      { label: "たれ目・優しく見られがち", scores: { up: 2, straight: 1 } },
      { label: "丸い目・くりっとしてる", scores: { arch: 2 } },
      { label: "切れ長・シャープな目", scores: { straight: 2, up: 1 } }
    ]
  },
  {
    text: "なりたい印象は？",
    options: [
      { label: "エレガントで大人っぽい女性", scores: { arch: 2, straight: 1 } },
      { label: "優しく親しみやすい雰囲気", scores: { parallel: 2, down: 2 } },
      { label: "クールで知的な印象", scores: { straight: 2, up: 1 } },
      { label: "ナチュラルで今っぽい雰囲気", scores: { thick: 2, parallel: 1 } }
    ]
  },
  {
    text: "普段のファッションのテイストは？",
    options: [
      { label: "フェミニン・ガーリー系", scores: { arch: 2, down: 1 } },
      { label: "ナチュラル・カジュアル系", scores: { thick: 2, parallel: 1 } },
      { label: "モード・きれいめ系", scores: { straight: 2, up: 1 } },
      { label: "トラッド・上品系", scores: { arch: 1, parallel: 1, straight: 1 } }
    ]
  },
  {
    text: "周りからよく言われる印象は？",
    options: [
      { label: "優しそう・癒し系", scores: { parallel: 1, down: 2 } },
      { label: "しっかり者・キレ者", scores: { straight: 2 } },
      { label: "可愛らしい・若く見える", scores: { up: 2, arch: 1 } },
      { label: "大人っぽい・色気がある", scores: { arch: 2 } }
    ]
  },
  {
    text: "髪型・ヘアスタイルはどんな感じ？",
    options: [
      { label: "巻き髪・フェミニンロング", scores: { arch: 2 } },
      { label: "ストレートロング・大人ヘア", scores: { straight: 1, parallel: 1 } },
      { label: "ショート・ボブ", scores: { up: 2, thick: 1 } },
      { label: "レイヤー・抜け感ヘア", scores: { thick: 2 } }
    ]
  },
  {
    text: "普段のメイクの濃さは？",
    options: [
      { label: "しっかりメイク派", scores: { arch: 1, straight: 1, up: 1 } },
      { label: "ナチュラルメイク派", scores: { thick: 2, parallel: 1 } },
      { label: "目元などポイント重視", scores: { up: 1, arch: 1 } },
      { label: "すっぴん風メイク", scores: { parallel: 1, down: 1, thick: 1 } }
    ]
  },
  {
    text: "今のあなたの眉の状態は？",
    options: [
      { label: "濃くてしっかり生えてる", scores: { thick: 2 } },
      { label: "普通の濃さ", scores: { arch: 1, parallel: 1 } },
      { label: "薄め・部分的にまばら", scores: { arch: 1, straight: 1 } },
      { label: "左右の形がバラバラ", scores: { parallel: 1, arch: 1 } }
    ]
  },
  {
    text: "眉メイクで一番悩むのは？",
    options: [
      { label: "左右が対称じゃない", scores: { arch: 1 } },
      { label: "どんな形がいいか分からない", scores: { arch: 2, parallel: 1 } },
      { label: "顔とのバランスが難しい", scores: { arch: 2 } },
      { label: "眉だけ濃くなってしまう", scores: { down: 1, parallel: 1, thick: 1 } }
    ]
  },
  {
    text: "普段の表情やキャラクターは？",
    options: [
      { label: "笑顔が多い・明るい", scores: { up: 1, arch: 1 } },
      { label: "落ち着いている・物静か", scores: { straight: 2, parallel: 1 } },
      { label: "優しい雰囲気・ふんわり", scores: { down: 2, parallel: 1 } },
      { label: "個性的・マイペース", scores: { thick: 2 } }
    ]
  },
  {
    text: "憧れる女性像に近いのは？",
    options: [
      { label: "上品でエレガントな大人女性", scores: { arch: 2 } },
      { label: "ふんわり優しい癒し系", scores: { parallel: 2, down: 1 } },
      { label: "知的でかっこいいキャリア女性", scores: { straight: 2, up: 1 } },
      { label: "飾らないナチュラルな美しさ", scores: { thick: 2, parallel: 1 } }
    ]
  },
  {
    text: "眉のお手入れスタイルの好みは？",
    options: [
      { label: "きっちり形を整えたい", scores: { arch: 2, straight: 1 } },
      { label: "自然な毛流れを活かしたい", scores: { thick: 2 } },
      { label: "流行に合わせて変えたい", scores: { parallel: 2, up: 1 } },
      { label: "あまり手をかけたくない", scores: { thick: 1, parallel: 1 } }
    ]
  }
];

// ========== 診断タイプデータ ==========
const resultTypes = {
  arch: {
    name: "アーチ眉タイプ",
    icon: "🌙",
    badge: "エレガントタイプ",
    description: "女性らしい曲線美が魅力のアーチ眉が一番似合うタイプです。大人っぽい色気とエレガントな印象を引き立て、丸顔やベース型の輪郭をやわらかく見せてくれます。フェミニンなファッションとも好相性。",
    features: [
      "大人っぽくエレガントな印象が際立つ",
      "丸みのある曲線が顔立ちを引き締める",
      "フェミニンなファッションと相性◎",
      "上品な色気と華やかさを演出できる"
    ],
    cares: [
      { icon: "🌙", title: "ゆるやかなアーチを意識", text: "眉山を黒目外側〜眉尻の間に置き、自然なカーブを描く" },
      { icon: "✏️", title: "太さは中間でバランス良く", text: "黒目の縦幅の3分の2の太さで、自然にキープしましょう。" },
      { icon: "💄", title: "ブラウン系で柔らかく仕上げ", text: "グレージュやアッシュブラウンで肌になじませて" }
    ],
    checks: [
      "眉山が黒目の外側よりも目頭側にありますか？",
      "眉尻が眉頭よりやや高めの位置にありますか？",
      "全体的に丸みのあるカーブが描けていますか？"
    ]
  },
  parallel: {
    name: "平行眉タイプ",
    icon: "➖",
    badge: "フレンドリータイプ",
    description: "ナチュラルで親しみやすい平行眉が一番似合うタイプです。優しく若々しい印象を作り、つり目をやわらかく見せたり、面長を緩和したりする効果も。韓国風メイクやナチュラルメイクとの相性も抜群です。",
    features: [
      "若々しく優しい印象を作れる",
      "つり目をやわらかく中和する",
      "ナチュラルメイクと相性◎",
      "親しみやすくフレンドリーな雰囲気に"
    ],
    cares: [
      { icon: "➖", title: "水平ラインを意識", text: "眉頭と眉尻をほぼ同じ高さに揃えて描きましょう" },
      { icon: "🎨", title: "太さを均一にキープ", text: "眉頭から眉尻まで太さを保って優しい印象に" },
      { icon: "🌿", title: "明るめカラーで抜け感", text: "ライトブラウンで自然で軽やかな印象に仕上げ" }
    ],
    checks: [
      "眉頭と眉尻の高さが揃っていますか？",
      "眉山があまり目立たない自然な形になっていますか？",
      "全体の太さが均一に保てていますか？"
    ]
  },
  straight: {
    name: "ストレート眉タイプ",
    icon: "⚡",
    badge: "クールタイプ",
    description: "クールで知的なストレート眉が一番似合うタイプです。シャープで凛とした印象を作り、たれ目を引き締めたり、切れ長の目をより印象的に見せたりします。モード系やきれいめスタイルとの相性も抜群。",
    features: [
      "クールで知的な印象が際立つ",
      "たれ目をきりっと引き締める",
      "モード・きれいめスタイルと相性◎",
      "顔立ちにメリハリと芯のある印象を与える"
    ],
    cares: [
      { icon: "⚡", title: "まっすぐなラインを意識", text: "眉山を強く作らず、直線的なラインで描く" },
      { icon: "✏️", title: "眉尻はやや長めに", text: "シャープな印象を強調するために眉尻を長く" },
      { icon: "🖤", title: "濃いめカラーで芯のある印象", text: "ダークブラウンやアッシュで凛々しく仕上げ" }
    ],
    checks: [
      "眉のラインが直線的に保てていますか？",
      "眉尻まで太さが極端に細くなっていませんか？",
      "メリハリのある濃さで描けていますか？"
    ]
  },
  up: {
    name: "上がり眉タイプ",
    icon: "✨",
    badge: "シャープタイプ",
    description: "キリッとした上がり眉が一番似合うタイプです。シャープで凛々しい印象を作り、たれ目を引き締め、若々しく元気な雰囲気を演出します。ショートヘアやアクティブなスタイルとも好相性。",
    features: [
      "シャープで凛々しい印象が際立つ",
      "たれ目をきりっと引き締める",
      "若々しく元気な雰囲気を演出",
      "ショート〜ボブの髪型と好相性"
    ],
    cares: [
      { icon: "✨", title: "眉尻を上向きに設定", text: "眉頭より眉尻を高めの位置に置きましょう" },
      { icon: "📐", title: "角度をつけて立体感", text: "眉山をしっかり作りシャープさを強調" },
      { icon: "💪", title: "スクリューブラシで毛流れを整える", text: "毛流れを上向きに整えて活き活きとした印象に" }
    ],
    checks: [
      "眉尻が眉頭より高い位置にありますか？",
      "眉山がしっかり立ち上がっていますか？",
      "角度がきつすぎず、自然な上がり方になっていますか？"
    ]
  },
  down: {
    name: "下がり眉タイプ",
    icon: "🌸",
    badge: "ソフトタイプ",
    description: "優しく癒し系の下がり眉が一番似合うタイプです。やわらかく親しみやすい印象を作り、つり目を中和して柔らかな雰囲気を演出します。ふんわりとした空気感を持つ方にぴったり。",
    features: [
      "優しく親しみやすい印象が際立つ",
      "つり目をやわらかく中和する",
      "癒し系の柔らかい雰囲気を演出",
      "表情全体がやわらかく見える"
    ],
    cares: [
      { icon: "🌸", title: "ゆるやかな下がりラインで", text: "眉尻を眉頭よりやや低めの位置に設定" },
      { icon: "🤍", title: "ふんわりとした太さで", text: "パウダーでぼかして柔らかく仕上げる" },
      { icon: "🌷", title: "明るめカラーでやわらかく", text: "ベージュやライトブラウンで優しい印象に" }
    ],
    checks: [
      "眉尻が下がりすぎていませんか？",
      "ふんわりとした優しい印象になっていますか？",
      "顔全体のバランスが取れていますか？"
    ]
  },
  thick: {
    name: "太め自然眉タイプ",
    icon: "🌿",
    badge: "ナチュラルタイプ",
    description: "今っぽい太め自然眉が一番似合うタイプです。トレンド感あふれる抜け感を作り、ナチュラルで飾らない美しさを演出します。素材を活かしたメイクが似合うあなたにぴったりの眉スタイル。",
    features: [
      "トレンド感のある今っぽい印象に",
      "ナチュラルで抜け感のある雰囲気",
      "素材を活かしたメイクと相性◎",
      "個性と存在感をしっかり引き出す"
    ],
    cares: [
      { icon: "🌿", title: "自然な毛流れを活かす", text: "抜きすぎず、本来の眉を活かしてケアしましょう" },
      { icon: "🖌️", title: "パウダー＆眉マスカラで仕上げ", text: "立体感と自然な毛流れを意識して仕上げる" },
      { icon: "✂️", title: "産毛は残して立体感をキープ", text: "不要な毛だけカットして自然さを残す" }
    ],
    checks: [
      "眉の毛を抜きすぎていませんか？",
      "自然な毛流れが整えられていますか？",
      "太さと長さのバランスが取れていますか？"
    ]
  }
};

// ========== アプリの状態管理 ==========
let currentQuestion = 0;
let answers = [];
let scores = {};

function initScores() {
  scores = { arch: 0, parallel: 0, straight: 0, up: 0, down: 0, thick: 0 };
}

// ========== 画面切り替え ==========
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ========== 診断開始 ==========
function startDiagnosis() {
  currentQuestion = 0;
  answers = [];
  initScores();
  showScreen('screen-question');
  renderQuestion();
}

// ========== 質問表示 ==========
function renderQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('questionNumber').textContent = `QUESTION ${currentQuestion + 1}/${questions.length}`;
  document.getElementById('questionText').textContent = q.text;
  document.getElementById('progressFill').style.width = `${((currentQuestion) / questions.length) * 100}%`;

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.label;

    if (answers[currentQuestion] === i) {
      btn.classList.add('selected');
    }

    btn.addEventListener('click', () => selectOption(i));
    container.appendChild(btn);
  });

  document.getElementById('btnBack').style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
}

// ========== 選択肢クリック ==========
function selectOption(index) {
  answers[currentQuestion] = index;
  recalcScores();

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });

  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 350);
}

// ========== スコア再計算 ==========
function recalcScores() {
  initScores();
  answers.forEach((ansIndex, qIndex) => {
    if (ansIndex !== undefined) {
      const optScores = questions[qIndex].options[ansIndex].scores;
      for (const [key, val] of Object.entries(optScores)) {
        scores[key] = (scores[key] || 0) + val;
      }
    }
  });
}

// ========== 前の質問 ==========
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

// ========== 結果表示 ==========
function showResult() {
  recalcScores();

  let maxType = 'arch';
  let maxScore = -1;
  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  }

  const result = resultTypes[maxType];

  document.getElementById('resultIcon').textContent = result.icon;
  document.getElementById('resultType').textContent = result.name;
  document.getElementById('resultBadge').textContent = result.badge;
  document.getElementById('resultDescription').textContent = result.description;

  const featureList = document.getElementById('featureList');
  featureList.innerHTML = result.features.map(f => `<li>${f}</li>`).join('');

  const careList = document.getElementById('careList');
  careList.innerHTML = result.cares.map(c => `
    <div class="care-item">
      <span class="care-icon">${c.icon}</span>
      <div class="care-text">
        <strong>${c.title}</strong>
        ${c.text}
      </div>
    </div>
  `).join('');

  const checklist = document.getElementById('checklist');
  checklist.innerHTML = result.checks.map(ch => `<li>${ch}</li>`).join('');

  document.getElementById('progressFill').style.width = '100%';

  showScreen('screen-result');
}

// ========== リセット ==========
function resetDiagnosis() {
  currentQuestion = 0;
  answers = [];
  initScores();
  showScreen('screen-top');
}
