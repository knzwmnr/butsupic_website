# 仏ピク（butsupic）公式サイト — 静的プレビュー

Cloudflare Pages 向けのゼロビルド静的サイトです。ロゴ確定前の仮公開用トーン（センジュ仮：ナイトシティ・グロー、ピクト主役）。

## ローカルで開く

ルート相対パス（`/css/...`）を使っているため、**ファイルを直接ダブルクリックすると CSS が外れます**。簡易サーバを使ってください。

```bash
cd /workspace/butsupic-site   # またはこのフォルダ
python3 -m http.server 8080
# → http://127.0.0.1:8080/
```

または:

```bash
npx --yes serve -l 8080 .
```

## Cloudflare Pages

1. このフォルダ一式をアップロード、または Git 連携でデプロイ
2. **Build command**: （空・なし）
3. **Build output directory**: `.`
4. プレビュー URL で確認（本番ドメインは後から）

### カスタムドメイン（別作業）

将来 `butsupic.com` を接続する場合は、Cloudflare Pages の Custom domains から設定。DNS / SSL は Pages 側の案内に従う。**本リポジトリはドメイン必須ではありません。**

## 構成

| パス | 内容 |
|------|------|
| `/` | トップ（スローガン + グローピクト + CTA） |
| `/about.html` | ABOUT（承認文面） |
| `/zukan/` | 図鑑一覧 |
| `/zukan/*.html` | 各モチーフ詳細 |
| `/shop.html` | BASE への導線のみ |
| `/contact.html` | コラボ・卸・ミュージアム用フォームスタブ |

ショップ URL: https://butsuzopict.thebase.in/  
X: https://twitter.com/butsuzo_pict

## 注意

- 「大倉取扱中」等の現行取扱主張は掲載していません
- ピクト SVG はシルエット・プレースホルダー（ロゴマークは未使用）
- お問い合わせの `hello@butsupic.com` はドメイン運用開始までのプレースホルダです
