# Plantica

Plantica (プランティカ) は、家計簿 Web アプリケーションです。

## 動作環境

Plantica を動作させるための基本環境は以下の通りです。

- Bun: 1.0.28

## セットアップ方法

### 初回セットアップ

プロジェクトの初期セットアップを行うには、以下のコマンドを実行してください。

```bash
make bs
```

### 開発サーバーの起動

開発を始める際は、以下のコマンドでローカルサーバーを起動できます。

```bash
bun run dev
```

## 技術スタック

Plantica では、以下の技術スタックを採用しています。

#### フロントエンド

- フレームワーク: [Remix (React)](https://remix.run/)
  - モード: SPA モードを使用
- スタイリング: [UnoCss](https://unocss.dev/)

#### 開発ツール

- バージョン管理: mise によるバージョン管理
- リンター: [Biome](https://biomejs.dev/ja/)
- 依存関係管理: Renovate で自動更新
- CI/CD: GitHub Actions による継続的インテグレーション

#### ホスティング

- ホスティングサービス: [Vercel](https://vercel.com/)
