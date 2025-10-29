import { DUMMY_POSTS } from '@/lib/dummy-data'; // (パスは適宜調整)
import { PostCard } from '@/components/PostCard'; // (これから作るコンポーネント)

export default function Home() {
  return (
    <main>
      {/* ダミーデータをPostCardコンポーネントに渡して一覧表示する */}
      {DUMMY_POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}