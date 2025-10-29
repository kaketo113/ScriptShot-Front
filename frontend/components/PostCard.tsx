import Image from 'next/image';
import { Post } from '@/lib/dummy-data'; // ダミーデータの「型」をインポート

// PostCardコンポーネントが受け取るデータ（props）の型を定義
type PostCardProps = {
  post: Post;
};

// 1投稿分のカードコンポーネント
export function PostCard({ post }: PostCardProps) {
  return (
    // Tailwind CSS でカードデザインを作成
    <article className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
      
      {/* 1. 投稿者の情報 */}
      <div className="p-4 flex items-center gap-3">
        <Image
          src={post.user.avatarUrl}
          alt={`${post.user.username}のアイコン`}
          width={40}
          height={40}
          className="rounded-full bg-gray-200"
        />
        <span className="font-bold">{post.user.username}</span>
      </div>

      {/* 2. スクリーンショット画像 */}
      <div className="w-full aspect-video bg-gray-100 relative">
        <Image
          src={post.screenshotUrl}
          alt="コード実行結果"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* 3. いいね・キャプション */}
      <div className="p-4">
        <div className="font-bold">{post.likes}件の「いいね！」</div>
        <p className="mt-2">
          <span className="font-bold mr-2">{post.user.username}</span>
          {post.caption}
        </p>
        <div className="flex gap-2 mt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-blue-600 text-sm">#{tag}</span>
          ))}
        </div>
      </div>

    </article>
  );
}