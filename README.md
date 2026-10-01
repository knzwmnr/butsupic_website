# 仏ピク（butsupic）公式サイト

Cloudflare Pages 向けのゼロビルド静的サイトです（ビルド不要）。

## 構成

| パス | 内容 |
|------|------|
| `/` | トップ（KV・仏ピクとは・今日の仏ピク・図鑑・グッズ・SNS・お問い合わせ） |
| `/zukan/` | 図鑑一覧（タイルを押すとモーダルで説明） |
| `/contact.html` | お問い合わせフォーム（メールアプリを開く） |
| `/about.html` | 仏ピクとは（内容精査中のため、どこからもリンクしていません） |
| `/404.html` | 404 |
| `/_redirects` | 旧 `/shop.html` と旧図鑑詳細ページの転送 |

- スタイルは `css/style.css`、動きは `js/main.js`（図鑑の説明文データもここ）。
- ピクトグラムとロゴは `assets/svg/`。CSS の mask で色を付けています。
- 今日の仏ピクは日付で決まります（塗りデータのある6体を順に表示）。

## ローカルで開く

ルート相対パスを使っているため、簡易サーバで開いてください。

```bash
python3 -m http.server 8080
```

## Cloudflare Pages

- Build command: なし
- Build output directory: `.`

## 未対応・仮のもの

- グッズの写真は「COMING SOON」の枠のまま
- `hello@butsupic.com` が受信できる状態か要確認
