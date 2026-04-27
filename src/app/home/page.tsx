import Link from "next/link";

export const dynamic = "force-dynamic";

const API_BASE_URL = "https://sjl6h1nlyh.execute-api.ap-south-1.amazonaws.com";

async function getCategoryPosts(category: string, limit = 15) {
  const params = new URLSearchParams({ category, limit: String(limit) });
  const res = await fetch(
    `${API_BASE_URL}/api/category-posts/home?${params.toString()}`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const { posts } = await res.json() as { posts?: any[] };
  return posts ?? [];
}

const SectionBox = ({
  title,
  accentColor,
  posts,
  link,
  mobileLimit = 8,
}: {
  title: string;
  accentColor: string;
  posts: any[];
  link: string;
  mobileLimit?: number;
}) => (
  <div
    className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm"
    style={{ fontFamily: "Arial, sans-serif" }}
  >
    <div
      className="flex items-center justify-between px-3 py-2"
      style={{ background: accentColor, borderBottom: `3px solid rgba(0,0,0,0.15)` }}
    >
      <h2 className="text-white font-black text-sm uppercase tracking-wide m-0">{title}</h2>
      <Link
        href={link}
        className="text-white text-[11px] font-bold bg-black/20 hover:bg-black/40 px-2 py-0.5 rounded-sm transition-colors whitespace-nowrap"
      >
        View All »
      </Link>
    </div>

    <ul className="divide-y divide-gray-100">
      {posts.map((post: any, i: number) => (
        <li
          key={post._id}
          className={`group hover:bg-orange-50 transition-colors${i >= mobileLimit ? " hidden md:block" : ""}`}
        >
          <Link
            href={`/post/${post.slug}`}
            className="flex items-start gap-2 px-3 py-2 text-[13px] text-[#1a56db] hover:text-[#f97316] leading-snug"
          >
            <span className="text-[#f97316] shrink-0 mt-0.5 text-[10px]">▶</span>
            <span className="group-hover:underline underline-offset-2">{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>

    <div className="border-t border-gray-200 px-3 py-1.5 bg-gray-50">
      <Link
        href={link}
        className="text-[12px] font-bold text-[#f97316] hover:underline"
      >
        View All {title} »
      </Link>
    </div>
  </div>
);

const TrendingTable = ({ jobs }: { jobs: any[] }) => (
  <div
    className="bg-white border border-gray-200 rounded-sm shadow-sm mb-4 overflow-hidden"
    style={{ fontFamily: "Arial, sans-serif" }}
  >
    <div className="bg-[#1b1b1b] px-3 py-2 flex items-center justify-between">
      <h2 className="text-white font-black text-sm uppercase tracking-wide m-0">
        🔥 Trending Government Jobs 2026
      </h2>
      <Link href="/latest-jobs" className="text-[#f97316] text-[11px] font-bold hover:underline">
        View All »
      </Link>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-[13px]" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr className="bg-[#f3f4f6]">
            <th className="text-left px-3 py-2 font-bold text-gray-700 border-b border-gray-200 w-8">#</th>
            <th className="text-left px-3 py-2 font-bold text-gray-700 border-b border-gray-200">Exam / Post Name</th>
            <th className="text-center px-3 py-2 font-bold text-gray-700 border-b border-gray-200 whitespace-nowrap">Status</th>
            <th className="text-center px-3 py-2 font-bold text-gray-700 border-b border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.slice(0, 10).map((job: any, i: number) => (
            <tr key={job._id} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
              <td className="px-3 py-2 text-gray-400 border-b border-gray-100">{i + 1}</td>
              <td className="px-3 py-2 border-b border-gray-100">
                <Link href={`/post/${job.slug}`} className="text-[#1a56db] hover:text-[#f97316] font-medium hover:underline">
                  {job.title}
                </Link>
              </td>
              <td className="px-3 py-2 text-center border-b border-gray-100">
                <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Active
                </span>
              </td>
              <td className="px-3 py-2 text-center border-b border-gray-100">
                <Link
                  href={`/post/${job.slug}`}
                  className="inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white text-[11px] font-bold px-3 py-1 rounded-sm transition-colors"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const QuickLinks = () => {
  const links = [
    { href: "/latest-jobs", label: "Latest Jobs", icon: "💼" },
    { href: "/result", label: "Sarkari Result", icon: "📋" },
    { href: "/admit-card", label: "Admit Card", icon: "🪪" },
    { href: "/answer-key", label: "Answer Key", icon: "🔑" },
    { href: "/syllabus", label: "Syllabus", icon: "📚" },
    { href: "/admission", label: "Admission", icon: "🎓" },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="flex flex-col items-center justify-center gap-1 bg-white border-2 border-gray-200 hover:border-[#f97316] hover:bg-orange-50 rounded-sm py-2.5 px-1 text-center transition-colors group"
        >
          <span className="text-xl">{l.icon}</span>
          <span className="text-[11px] font-bold text-gray-700 group-hover:text-[#f97316] leading-tight">
            {l.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

const SeoBlock = () => (
  <div
    className="mt-4 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden"
    style={{ fontFamily: "Arial, sans-serif" }}
  >
    <div className="bg-[#1b1b1b] px-3 py-2">
      <h2 className="text-white font-black text-sm uppercase m-0">
        About SarkariExamInfo.com
      </h2>
    </div>
    <div className="p-4 text-[13px] text-gray-600 leading-relaxed space-y-2">
      <p>
        <strong className="text-gray-800">SarkariExamInfo.com</strong> भारत का सबसे
        भरोसेमंद सरकारी जॉब पोर्टल है। यहाँ आपको{" "}
        <strong className="text-gray-800">Sarkari Result 2026</strong>,{" "}
        <strong className="text-gray-800">Sarkari Naukri</strong>,{" "}
        <strong className="text-gray-800">Admit Card</strong>,{" "}
        <strong className="text-gray-800">Answer Key</strong> और{" "}
        <strong className="text-gray-800">Syllabus</strong> की सटीक और
        सबसे तेज़ जानकारी मिलती है।
      </p>
      <p>
        <strong className="text-gray-800">SSC, UPSC, Railway RRB, Banking
        IBPS/SBI, Army, Police, Teaching</strong> — सभी सरकारी भर्तियों की
        जानकारी सबसे पहले पाने के लिए रोज़ विजिट करें।
      </p>
      <p className="text-[11px] text-gray-400 border-t border-gray-100 pt-3 mt-1">
        <strong>Disclaimer:</strong> SarkariExamInfo.com एक स्वतंत्र सूचना पोर्टल
        है। यह केंद्र या किसी राज्य सरकार से संबद्ध नहीं है। कृपया आधिकारिक
        वेबसाइट से जानकारी सत्यापित करें।
      </p>
    </div>
  </div>
);

export default async function HomePage() {
  const [results, jobs, admitCards, answerKeys, syllabus, admission] =
    await Promise.all([
      getCategoryPosts("result", 15),
      getCategoryPosts("latest-jobs", 15),
      getCategoryPosts("admit-card", 15),
      getCategoryPosts("answer-key", 10),
      getCategoryPosts("syllabus", 10),
      getCategoryPosts("admission", 10),
    ]);

  const marqueeText = [
    jobs[0] ? `🔔 New Job: ${jobs[0].title}` : "",
    results[0] ? `📋 Result Out: ${results[0].title}` : "",
    admitCards[0] ? `🪪 Admit Card: ${admitCards[0].title}` : "",
    answerKeys[0] ? `🔑 Answer Key: ${answerKeys[0].title}` : "",
  ]
    .filter(Boolean)
    .join("      ◆      ");

  return (
    <div
      className="max-w-6xl mx-auto px-2 sm:px-4 py-3 min-h-screen"
      style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}
    >
      <div className="flex items-center bg-white border border-gray-200 rounded-sm mb-3 overflow-hidden shadow-sm">
        <span className="bg-[#f97316] text-white text-[11px] font-black px-3 py-2 shrink-0 uppercase tracking-wider">
          Live
        </span>
        <div className="overflow-hidden flex-1 py-2 px-2 border-l border-gray-200">
          <div
            className="whitespace-nowrap text-[#1b1b1b] text-[13px] font-semibold"
            style={{ animation: "marquee 50s linear infinite" }}
          >
            {marqueeText}
          </div>
        </div>
      </div>

      <QuickLinks />
      <TrendingTable jobs={jobs} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <SectionBox accentColor="#dc2626" title="Latest Jobs" posts={jobs} link="/latest-jobs" />
        <SectionBox accentColor="#16a34a" title="Sarkari Result" posts={results} link="/result" />
        <SectionBox accentColor="#2563eb" title="Admit Card" posts={admitCards} link="/admit-card" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <SectionBox accentColor="#d97706" title="Answer Key" posts={answerKeys} link="/answer-key" mobileLimit={6} />
        <SectionBox accentColor="#7c3aed" title="Syllabus" posts={syllabus} link="/syllabus" mobileLimit={6} />
        <SectionBox accentColor="#0f766e" title="Admission" posts={admission} link="/admission" mobileLimit={6} />
      </div>

      <SeoBlock />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
