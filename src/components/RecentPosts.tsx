import { Container } from "./layout/Container";
import { FadeIn } from "./animations/FadeIn";
import { BlogCard } from "./BlogCard";
import { getRecentPosts } from "@/lib/blog";
import Link from "next/link";

export function RecentPosts() {
    const posts = getRecentPosts(3);

    if (posts.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-[#F6F6F6] overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                    <FadeIn>
                        <div className="section-label w-fit mb-6">
                            Insights
                        </div>
                        <h2 className="text-[1.875rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium mb-5 tracking-[-0.02em] text-hormel-black leading-[1.1]">
                            Our{" "}
                            <span className="font-display italic">Thoughts</span>
                        </h2>
                        <p className="text-hormel-gray-500 max-w-xl">
                            Expert perspectives on real estate investment,
                            market trends, and wealth-building strategies.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.1} className="mt-6 md:mt-0">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-hormel-green hover:text-hormel-green-dark transition-colors"
                        >
                            View All Articles
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
