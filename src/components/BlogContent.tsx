export function BlogContent({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="prose prose-lg max-w-none
                prose-headings:font-medium prose-headings:tracking-[-0.02em] prose-headings:text-hormel-black
                prose-h2:text-[1.5rem] prose-h2:md:text-[1.75rem] prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-[1.25rem] prose-h3:md:text-[1.375rem] prose-h3:mt-8 prose-h3:mb-3
                prose-h4:text-[1.125rem] prose-h4:mt-6 prose-h4:mb-2
                prose-p:text-hormel-gray-600 prose-p:leading-[1.75]
                prose-a:text-hormel-green prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-hormel-black prose-strong:font-semibold
                prose-ul:text-hormel-gray-600 prose-ol:text-hormel-gray-600
                prose-li:marker:text-hormel-green
                prose-blockquote:border-l-hormel-green prose-blockquote:text-hormel-gray-600 prose-blockquote:not-italic
                prose-hr:border-hormel-gray-200
                prose-table:text-sm prose-th:text-hormel-black prose-th:font-medium prose-td:text-hormel-gray-600
                prose-img:my-8
                prose-code:text-hormel-green-dark prose-code:bg-hormel-gray-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
        >
            {children}
        </div>
    );
}
