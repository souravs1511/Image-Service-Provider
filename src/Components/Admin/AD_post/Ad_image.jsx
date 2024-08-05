/* eslint-disable react/prop-types */
export default function Ad_image({ allPosts }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">User Posts</h1>
      {allPosts?.length > 0 &&
        allPosts?.map((post) => (
          <div
            key={post.id}
            className="shadow-lg border border-1 border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs"
          >
            <span className="text-sm font-semibold block leading-tight p-3 bg-gray-100">
              {post.username}
            </span>
            <img
              src={post.Image}
              alt={post.Title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-bold mb-2">{post.Title}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}
