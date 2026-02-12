import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog/posts");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    featuredImage: string;
    excerpt: string;
    author: string;
    tags: string[];
    content: string;
    readingTime: string;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    date: string;
    featuredImage: string;
    excerpt: string;
    author: string;
    tags: string[];
    readingTime: string;
}

function getReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

function getPostFiles(): string[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs
        .readdirSync(postsDirectory)
        .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
    const files = getPostFiles();

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.(mdx|md)$/, "");
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title || "",
            date: data.date || "",
            featuredImage: data.featuredImage || "",
            excerpt: data.excerpt || "",
            author: data.author || "Hormel Team",
            tags: data.tags || [],
            readingTime: getReadingTime(content),
        };
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getRecentPosts(count: number = 3): BlogPostMeta[] {
    return getAllPosts().slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | null {
    const files = getPostFiles();
    const filename = files.find(
        (file) => file.replace(/\.(mdx|md)$/, "") === slug
    );

    if (!filename) return null;

    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || "",
        date: data.date || "",
        featuredImage: data.featuredImage || "",
        excerpt: data.excerpt || "",
        author: data.author || "Hormel Team",
        tags: data.tags || [],
        content,
        readingTime: getReadingTime(content),
    };
}

export function getAllPostSlugs(): string[] {
    return getPostFiles().map((file) => file.replace(/\.(mdx|md)$/, ""));
}

export function getRelatedPosts(
    currentSlug: string,
    tags: string[],
    count: number = 3
): BlogPostMeta[] {
    const allPosts = getAllPosts();
    return allPosts
        .filter((post) => post.slug !== currentSlug)
        .filter((post) => post.tags.some((tag) => tags.includes(tag)))
        .slice(0, count);
}
