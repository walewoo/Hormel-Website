import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog | Hormel Company Limited",
    description:
        "Expert insights on Nigerian real estate investment, market trends, due diligence, and wealth-building strategies from the Hormel advisory team.",
    openGraph: {
        title: "Blog | Hormel Company Limited",
        description:
            "Expert insights on Nigerian real estate investment, market trends, due diligence, and wealth-building strategies.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Hormel Company Limited",
        description:
            "Expert insights on Nigerian real estate investment, market trends, due diligence, and wealth-building strategies.",
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-hormel-green-dark text-white">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl">
                            <div className="section-label w-fit mb-6 text-white border-white/20">
                                Blog
                            </div>
                            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.75rem] font-medium tracking-[-0.02em] leading-[1.1] mb-5">
                                Insights &{" "}
                                <span className="font-display italic">Perspectives</span>
                            </h1>
                            <p className="text-white/70 max-w-xl">
                                Expert analysis on real estate investment, market
                                trends, and wealth-building strategies in Nigeria.
                            </p>
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* Breadcrumbs */}
            <section className="py-4 border-b border-hormel-gray-200">
                <Container>
                    <nav className="flex items-center gap-2 text-[0.75rem] text-hormel-gray-500 uppercase tracking-[0.08em] font-medium">
                        <Link
                            href="/"
                            className="hover:text-hormel-green transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-hormel-black">Blog</span>
                    </nav>
                </Container>
            </section>

            {/* Posts Grid */}
            <section className="py-16 md:py-24">
                <Container>
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post, index) => (
                                <BlogCard
                                    key={post.slug}
                                    post={post}
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <FadeIn className="text-center py-20">
                            <p className="text-hormel-gray-500 text-lg">
                                No articles published yet. Check back soon.
                            </p>
                        </FadeIn>
                    )}
                </Container>
            </section>

            <Footer />
        </main>
    );
}
