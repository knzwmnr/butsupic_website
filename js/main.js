(function () {
  "use strict";
  var ITEMS = {
  "ashura": {
    "name": "阿修羅",
    "yomi": "あしゅら",
    "desc": "仏法を守る八部衆のひとり。もとは戦いの神でしたが、お釈迦さまの教えにふれて守護神になりました。三つの顔と六本の腕が目印です。",
    "cls": "m-ashura",
    "bg": "#F0314F",
    "fg": "#fff"
  },
  "miroku": {
    "name": "弥勒菩薩",
    "yomi": "みろくぼさつ",
    "desc": "お釈迦さまの次に仏になると約束された菩薩。56億7千万年後にこの世に現れ、人々を救うとされます。頬に指をあてて考える半跏思惟の姿で知られます。",
    "cls": "m-miroku",
    "bg": "#FFD60A",
    "fg": "#333333"
  },
  "fudo": {
    "name": "不動明王",
    "yomi": "ふどうみょうおう",
    "desc": "大日如来の化身とされる明王。怒りの表情で煩悩を断ち切り、力ずくでも人々を救います。右手に剣、左手に羂索（けんさく）という縄を持ちます。",
    "cls": "m-fudo",
    "bg": "#0A3CE6",
    "fg": "#fff"
  },
  "yakushi": {
    "name": "薬師如来",
    "yomi": "やくしにょらい",
    "desc": "病気を治し、心と体の苦しみを取りのぞく仏さま。左手に薬壺（やっこ）を持つのが目印です。東方にある浄瑠璃世界の教主とされます。",
    "cls": "m-yakushi",
    "bg": "#FF8A1F",
    "fg": "#333333"
  },
  "amida": {
    "name": "阿弥陀如来",
    "yomi": "あみだにょらい",
    "desc": "西方極楽浄土の教主。「南無阿弥陀仏」ととなえる人を極楽へ迎えるとされます。鎌倉の大仏もこの仏さまです。",
    "cls": "m-amida",
    "bg": "#7CD4FF",
    "fg": "#333333"
  },
  "dainichi": {
    "name": "大日如来",
    "yomi": "だいにちにょらい",
    "desc": "密教で宇宙そのものとされる、中心の仏さま。如来でありながら宝冠や装身具を身につけます。胸の前で結ぶ智拳印が目印です。",
    "cls": "m-dainichi",
    "bg": "#7A3CF0",
    "fg": "#fff"
  },
  "shaka": {
    "name": "釈迦如来",
    "yomi": "しゃかにょらい",
    "desc": "仏教をひらいたお釈迦さま。インドの王子として生まれ、35歳で悟りをひらきました。実在の人物をもとにした、ただひとりの如来です。",
    "cls": "m-shaka",
    "bg": "#FF9EC4",
    "fg": "#333333"
  },
  "bishamon": {
    "name": "毘沙門天",
    "yomi": "びしゃもんてん",
    "desc": "北方を守る四天王のひとり。四天王としては多聞天と呼ばれます。甲冑を着て宝塔と戟（ほこ）を持ち、七福神のひとりでもあります。",
    "cls": "m-bishamon",
    "bg": "#0B8A4B",
    "fg": "#fff"
  },
  "fugen": {
    "name": "普賢菩薩",
    "yomi": "ふげんぼさつ",
    "desc": "慈悲と実践をつかさどる菩薩。白い象に乗る姿であらわされます。文殊菩薩とともに釈迦如来の脇に控えます。",
    "cls": "m-fugen",
    "bg": "#B8F03C",
    "fg": "#333333"
  },
  "monjyu": {
    "name": "文殊菩薩",
    "yomi": "もんじゅぼさつ",
    "desc": "智慧をつかさどる菩薩。「三人寄れば文殊の知恵」の文殊さまです。獅子に乗り、剣と経巻を持ちます。",
    "cls": "m-monjyu",
    "bg": "#9A5F3C",
    "fg": "#fff"
  },
  "nyoirin": {
    "name": "如意輪観音",
    "yomi": "にょいりんかんのん",
    "desc": "願いをかなえる如意宝珠と、煩悩を砕く法輪を持つ観音さま。片ひざを立て、頬に手をあてて思いをめぐらせます。六本の腕であらわされることが多いです。",
    "cls": "m-nyoirin",
    "bg": "#00C2B2",
    "fg": "#333333"
  }
};
  var FILLS = {"ashura": "#F0314F", "fudo": "#0A3CE6", "miroku": "#F2A900", "yakushi": "#FF8A1F", "amida": "#1E9BD8", "dainichi": "#7A3CF0"};
  var $ = function (id) { return document.getElementById(id); };

  // 今日の仏ピク：日付ごとに塗りデータのある仏から1体
  var pic = $("today-pic");
  if (pic) {
    var keys = Object.keys(FILLS);
    var now = new Date();
    var day = Math.floor((now.getTime() - now.getTimezoneOffset() * 60000) / 86400000);
    var k = keys[day % keys.length], it = ITEMS[k];
    pic.className = "pic m-" + k + "-fill";
    pic.style.color = FILLS[k];
    pic.setAttribute("aria-label", it.name + "のピクトグラム");
    $("today-name").textContent = it.name;
    $("today-yomi").textContent = it.yomi;
    $("today-desc").textContent = it.desc;
  }

  // 図鑑モーダル
  var md = $("zm"), ov = $("zm-ov"), last = null;
  if (md && ov) {
    var open = function (key, from) {
      var it = ITEMS[key];
      if (!it) return;
      last = from || null;
      md.style.background = it.bg;
      md.style.color = it.fg;
      $("zm-pic").className = "pic " + it.cls;
      $("zm-name").textContent = it.name;
      $("zm-yomi").textContent = it.yomi;
      $("zm-desc").textContent = it.desc;
      md.hidden = false; ov.hidden = false;
      document.body.classList.add("lock");
      $("zm-x").focus();
    };
    var close = function () {
      md.hidden = true; ov.hidden = true;
      document.body.classList.remove("lock");
      if (last) last.focus();
    };
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-zukan]");
      if (t) { open(t.getAttribute("data-zukan"), t); return; }
      if (e.target.closest("[data-close]")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !md.hidden) close();
    });
  }

  // お問い合わせフォーム：Web3Forms にそのまま送信する
  var form = $("contact-form");
  if (form) {
    var status = $("contact-status");
    var btn = form.querySelector('button[type="submit"]');
    var say = function (kind, text) {
      status.className = "status " + kind;
      status.textContent = text;
      status.hidden = false;
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (n) { return (form.querySelector('[name="' + n + '"]') || {}).value || ""; };
      if (form.querySelector('[name="botcheck"]').checked) return;
      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = "送信中…";
      status.hidden = true;
      fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: v("access_key"),
          subject: "[仏ピク] " + v("type") + " / " + v("name"),
          from_name: "仏ピク お問い合わせ",
          "種別": v("type"),
          name: v("name"),
          email: v("email"),
          message: v("body")
        })
      }).then(function (r) { return r.json(); }).then(function (d) {
        if (!d || !d.success) throw new Error((d && d.message) || "error");
        form.reset();
        say("ok", "送信しました。お問い合わせありがとうございます。内容を確認のうえ butsuzopict@gmail.com より返信します");
      }).catch(function () {
        say("ng", "送信できませんでした。お手数ですが、時間をおいて再度お試しいただくか、info@butsupic.com まで直接ご連絡ください。");
      }).then(function () {
        btn.disabled = false;
        btn.textContent = label;
      });
    });
  }
})();
