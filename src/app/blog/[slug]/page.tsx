import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { BlogContent } from "@/components/BlogContent";
import { BlogCard } from "@/components/BlogCard";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import {
    getPostBySlug,
    getAllPostSlugs,
    getRelatedPosts,
} from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hormelcompany.com";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found | Hormel Company Limited",
        };
    }

    const url = `${SITE_URL}/blog/${post.slug}`;

    return {
        title: `${post.title} | Hormel Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: post.featuredImage
                ? [{ url: `${SITE_URL}${post.featuredImage}`, width: 1200, height: 630 }]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: post.featuredImage
                ? [`${SITE_URL}${post.featuredImage}`]
                : [],
        },
        alternates: {
            canonical: url,
        },
    };
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.slug, post.tags, 3);
    const url = `${SITE_URL}/blog/${post.slug}`;

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <ArticleJsonLd
                title={post.title}
                description={post.excerpt}
                image={post.featuredImage ? `${SITE_URL}${post.featuredImage}` : ""}
                datePublished={post.date}
                author={post.author}
                url={url}
            />

            {/* Hero */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-hormel-gray-50">
                <Container>
                    {/* Breadcrumbs */}
                    <FadeIn>
                        <nav className="flex items-center gap-2 text-[0.75rem] text-hormel-gray-500 uppercase tracking-[0.08em] font-medium mb-8">
                            <Link
                                href="/"
                                className="hover:text-hormel-green transition-colors"
                            >
                                Home
                            </Link>
                            <span>/</span>
                            <Link
                                href="/blog"
                                className="hover:text-hormel-green transition-colors"
                            >
                                Blog
                            </Link>
                            <span>/</span>
                            <span className="text-hormel-black truncate max-w-[200px]">
                                {post.title}
                            </span>
                        </nav>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="max-w-3xl">
                            {/* Tags */}
                            {post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-block px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-hormel-green-dark bg-hormel-green/10 border border-hormel-green/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-medium tracking-[-0.02em] text-hormel-black leading-[1.15] mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 text-[0.8125rem] text-hormel-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-hormel-gray-200 flex items-center justify-center text-hormel-black font-bold text-[0.6875rem]">
                                        {post.author.charAt(0)}
                                    </div>
                                    <span className="font-medium text-hormel-black">
                                        {post.author}
                                    </span>
                                </div>
                                <span className="w-1 h-1 bg-hormel-gray-300" />
                                <time dateTime={post.date}>
                                    {formatDate(post.date)}
                                </time>
                                <span className="w-1 h-1 bg-hormel-gray-300" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Featured Image */}
            {post.featuredImage && (
                <section className="border-b border-hormel-gray-200">
                    <Container>
                        <FadeIn delay={0.2}>
                            <div className="relative aspect-[21/9] w-full overflow-hidden bg-hormel-gray-100 -mt-1">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </FadeIn>
                    </Container>
                </section>
            )}

            {/* Article Content */}
            <section className="py-16 md:py-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <FadeIn delay={0.15}>
                            <BlogContent>
                                <MDXRemote source={post.content} />
                            </BlogContent>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 md:py-24 bg-hormel-gray-50 border-t border-hormel-gray-200">
                    <Container>
                        <FadeIn>
                            <h2 className="text-[1.5rem] md:text-[2rem] font-medium tracking-[-0.02em] text-hormel-black mb-10">
                                Related{" "}
                                <span className="font-display italic">Articles</span>
                            </h2>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost, index) => (
                                <BlogCard
                                    key={relatedPost.slug}
                                    post={relatedPost}
                                    index={index}
                                />
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            <Footer />
        </main>
    );
}
