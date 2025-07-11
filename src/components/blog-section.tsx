import { EnhancedButton } from "@/components/ui/enhanced-button";
import ScrambledText from "@/components/ui/scramble";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
}

const samplePosts: BlogPost[] = [
  {
    title: "Why Real-World Asset Tokenization Is the Next Trillion-Dollar Market",
    excerpt:
      "Explore the macro trends driving institutional adoption of tokenized real-world assets and how regulation is paving the way.",
    image: "/images/asset-tokenization.png",
    url: "#",
    date: "May 10, 2025",
  },
  {
    title: "How MPC Wallets Deliver Bank-Grade Security for Digital Assets",
    excerpt:
      "A deep dive into multi-party computation and why it’s becoming the gold standard for institutional custody.",
    image: "/images/wallets.png",
    url: "#",
    date: "Apr 22, 2025",
  },
  {
    title: "Fractionalizing Commercial Real Estate on Chain: A Step-by-Step Guide",
    excerpt:
      "We walk through the tokenization process for a flagship property — from due diligence to secondary trading.",
    image: "/images/marketplace-phone.png",
    url: "#",
    date: "Mar 30, 2025",
  },
];

export const BlogSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 relative z-10">
      <ScrambledText
        className="text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground leading-tight mx-auto max-w-max"
        radius={120}
      >
        Insights &amp; Research
      </ScrambledText>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map((post) => (
          <article
            key={post.title}
            className="bg-white/10 backdrop-blur-md border border-border/20 rounded-3xl overflow-hidden flex flex-col transition-shadow hover:shadow-xl hover:shadow-black/25"
          >
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-44"
            />
            <div className="p-6 flex flex-col gap-4 flex-1">
              <time className="text-xs uppercase text-muted-foreground tracking-wide">
                {post.date}
              </time>
              <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">
                {post.excerpt}
              </p>
              <EnhancedButton asChild variant="link" className="p-0 h-auto text-primary">
                <a href={post.url}>Read More →</a>
              </EnhancedButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection; 