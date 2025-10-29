// ユーザー情報の「型」を定義
export type User = {
  id: string;
  username: string;
  avatarUrl: string; // アイコン画像のURL
};

// 投稿情報の「型」を定義
export type Post = {
  id: string;
  user: User; // 投稿者情報
  caption: string; // 説明文
  sourceCode: string; // ソースコード
  screenshotUrl: string; // スクショ画像URL
  likes: number; // いいねの数
  tags: string[]; // ハッシュタグ
  createdAt: string; // 投稿日時
};

// ----------------------------------------------------
// ダミーユーザーのデータ
// ----------------------------------------------------
export const DUMMY_USER_ME: User = {
  id: "user_001",
  username: "mizoguchi_kanto",
  avatarUrl: "/dummy-avatar-me.png", // publicフォルダにダミー画像を置く
};

export const DUMMY_USER_2: User = {
  id: "user_002",
  username: "tanaka_taro",
  avatarUrl: "/dummy-avatar-2.png",
};

// ----------------------------------------------------
// ダミー投稿のデータ
// ----------------------------------------------------
export const DUMMY_POSTS: Post[] = [
  {
    id: "post_001",
    user: DUMMY_USER_ME, // 自分の投稿
    caption: "Next.jsとTailwindでプロフィール画面を作ってみた！スキルマップの円グラフがお気に入り。",
    sourceCode: "<h1>Hello Next.js</h1>\n<p>My Profile...</p>",
    screenshotUrl: "/dummy-screenshot-1.png", // publicフォルダにダミー画像を置く
    likes: 43,
    tags: ["Nextjs", "TailwindCSS", "TypeScript"],
    createdAt: "2時間前",
  },
  {
    id: "post_002",
    user: DUMMY_USER_2, // 他人の投稿
    caption: "Python (Flask) で簡単なAPIサーバーを立てるテスト。#Python #Flask",
    sourceCode: "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello():\n  return 'Hello, World!'",
    screenshotUrl: "/dummy-screenshot-2.png", // publicフォルダにダミー画像を置く
    likes: 27,
    tags: ["Python", "Flask"],
    createdAt: "1日前",
  },
  // さらにダミー投稿を追加...
];