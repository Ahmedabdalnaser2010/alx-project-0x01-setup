import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [allPosts, setAllPosts] = useState(posts);

    const handleAddPost = (newPost: PostData) => {
        const postWithId = { ...newPost, id: allPosts.length + 1 };
        setAllPosts([postWithId, ...allPosts]);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Post Content</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white"
                    >
                        Add Post
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {allPosts?.map((post: PostProps) => (
                        <PostCard key={post.id} {...post} />
                    ))}
                </div>
            </main>

            {isModalOpen && (
                <PostModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Posts;