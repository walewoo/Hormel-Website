import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogCard({
    post,
    index = 0,
}: {
    post: BlogPostMeta;
    index?: number;
}) {
    return (
        <FadeIn delay={index * 0.1}>
            <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-hormel-gray-200 hover:border-hormel-gray-300 transition-all duration-300 h-full"
            >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-hormel-gray-100">
                    {post.featuredImage ? (
                        <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-hormel-gray-400">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="0" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <path d="m21 15-5-5L5 21" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-[0.75rem] text-hormel-gray-500 uppercase tracking-[0.08em] font-medium">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="w-1 h-1 bg-hormel-gray-300" />
                        <span>{post.readingTime}</span>
                    </div>

                    <h3 className="text-[1.125rem] md:text-[1.25rem] font-medium text-hormel-black mb-3 leading-[1.3] group-hover:text-hormel-green transition-colors duration-200">
                        {post.title}
                    </h3>

                    <p className="text-hormel-gray-500 line-clamp-2 mb-4">
                        {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-hormel-green">
                        Read More
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </Link>
        </FadeIn>
    );
}
