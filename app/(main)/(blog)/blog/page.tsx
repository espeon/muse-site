import { posts } from '#site/content'
import Link from 'next/link';
import { Key } from 'react';


function PostCard({ post }: { post: typeof posts[0] }) {
    return (
        <div className="mb-8">
          <h2 className="mb-1 text-xl">
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-700 hover:text-blue-300 dark:text-blue-400"
            >
              {post.title}
            </Link>
          </h2>
          <div className="text-sm mb-2 dark:text-gray-100 text-gray-800">
            <span className="text-sm mb-8 dark:text-gray-400 text-gray-700">
            </span>
          </div>
          <div className="text-sm mb-2"> {post.excerpt} </div>
        </div>
      );
}

export default function PostPage() {
    return (
        <div className="max-w-prose w-full px-8 max-h-max h-5/6">
        <h1 className="text-5xl font-semibold pb-4">Blog</h1>
        <div>
            {posts.map((post) => (
                <PostCard post={post} key={post.date + post.title} />
            ))}
        </div>
        </div>
    )
  }
  