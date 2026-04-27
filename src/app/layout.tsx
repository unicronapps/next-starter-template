// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const SITE_URL = "https://sarkariexaminfo.com";
const SITE_NAME = "SarkariExamInfo";

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SarkariExamInfo | Sarkari Result, Sarkari Naukri, Admit Card 2026",
    template: "%s | SarkariExamInfo",
  },
  description:
    "SarkariExamInfo.com — India's No.1 portal for Sarkari Result 2026, Sarkari Naukri, Admit Card, Answer Key, Syllabus and Government Jobs. Get fastest updates on SSC, UPSC, Railway, Banking, Police and State Govt Jobs.",
  keywords: [
    "Sarkari Result", "Sarkari Naukri", "Sarkari Exam", "Government Jobs 2026",
    "Admit Card 2026", "Answer Key", "Syllabus", "SSC Result", "UPSC Vacancy",
    "Railway Jobs", "RRB NTPC", "Bank Jobs", "IBPS PO", "SBI Clerk",
    "Police Bharti", "Army Bharti", "Latest Sarkari Jobs", "SarkariExamInfo",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

// ── SEO Footer Section ──
function SeoFooter() {
  const keywords = [
    ["Sarkari Result 2026", "/result"],
    ["Latest Govt Jobs", "/latest-jobs"],
    ["Admit Card 2026", "/admit-card"],
    ["Answer Key", "/answer-key"],
    ["Syllabus", "/syllabus"],
    ["Admission 2026", "/admission"],
    ["SSC CGL 2026", "/latest-jobs"],
    ["SSC CHSL 2026", "/latest-jobs"],
    ["SSC MTS Vacancy", "/latest-jobs"],
    ["UPSC Civil Services", "/latest-jobs"],
    ["UPSC NDA Result", "/result"],
    ["Railway RRB NTPC", "/latest-jobs"],
    ["RRB Group D 2026", "/latest-jobs"],
    ["Railway ALP Vacancy", "/latest-jobs"],
    ["IBPS PO 2026", "/latest-jobs"],
    ["IBPS Clerk 2026", "/latest-jobs"],
    ["SBI PO Vacancy", "/latest-jobs"],
    ["SBI Clerk 2026", "/latest-jobs"],
    ["UP Police Bharti", "/latest-jobs"],
    ["Bihar Police Constable", "/latest-jobs"],
    ["MP Police Vacancy", "/latest-jobs"],
    ["Rajasthan Police", "/latest-jobs"],
    ["Army Bharti 2026", "/latest-jobs"],
    ["Navy Recruitment", "/latest-jobs"],
    ["Air Force Agniveer", "/latest-jobs"],
    ["CTET Result 2026", "/result"],
    ["UPTET Admit Card", "/admit-card"],
    ["BPSC Teacher", "/latest-jobs"],
    ["DSSSB Vacancy", "/latest-jobs"],
    ["10th Pass Jobs", "/latest-jobs"],
    ["12th Pass Jobs", "/latest-jobs"],
    ["Graduate Jobs", "/latest-jobs"],
    ["State PSC Jobs", "/latest-jobs"],
    ["Anganwadi Bharti", "/latest-jobs"],
    ["Post Office GDS", "/latest-jobs"],
    ["ESIC Vacancy", "/latest-jobs"],
    ["EPFO Recruitment", "/latest-jobs"],
  ];

  return (
    <div className="bg-[#111111] border-t-2 border-[#2a2a2a]" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* ── Keyword cloud ── */}
      <div className="max-w-6xl mx-auto px-3 py-5">
        <div className="text-[#f97316] font-bold text-xs uppercase mb-3 pb-1 border-b border-gray-800 tracking-wider">
          Popular Searches on SarkariExamInfo.com
        </div>
        <div className="flex flex-wrap gap-1.5">
          {keywords.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="inline-block bg-[#1e1e1e] hover:bg-[#f97316] text-gray-400 hover:text-white text-[11px] px-2 py-1 border border-gray-800 hover:border-[#f97316] transition-colors rounded-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Big SEO description block ── */}
      <div className="bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-3 py-6">
          <h2 className="text-white font-bold text-base mb-4 pb-2 border-b border-gray-800">
            SarkariExamInfo.com — भारत का नंबर 1 सरकारी नौकरी पोर्टल
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-xs leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-gray-200">SarkariExamInfo.com</strong> is India's most trusted government job portal, providing the fastest and most accurate updates on <strong className="text-gray-200">Sarkari Result 2026</strong>, <strong className="text-gray-200">Sarkari Naukri</strong>, <strong className="text-gray-200">Admit Card</strong>, <strong className="text-gray-200">Answer Key</strong>, and <strong className="text-gray-200">Syllabus</strong> for all major competitive examinations. Whether you are a 10th pass, 12th pass, Graduate or Post-Graduate candidate, we cover every government recruitment from central and state governments.
              </p>
              <p>
                हम <strong className="text-gray-200">SSC CGL, SSC CHSL, SSC MTS, SSC GD</strong> जैसी केंद्रीय भर्तियों से लेकर <strong className="text-gray-200">Railway RRB NTPC, RRB Group D, RRB ALP</strong> तक — सभी की जानकारी सबसे पहले प्रकाशित करते हैं। <strong className="text-gray-200">UPSC Civil Services, NDA, CDS</strong> और <strong className="text-gray-200">CAPF</strong> की तैयारी कर रहे छात्रों के लिए भी यह पोर्टल पूरी तरह उपयोगी है।
              </p>
              <p>
                <strong className="text-gray-200">Banking Jobs</strong> की बात करें तो <strong className="text-gray-200">IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI Grade B</strong> और <strong className="text-gray-200">NABARD</strong> की सभी भर्तियों के नोटिफिकेशन, एडमिट कार्ड और रिजल्ट यहाँ उपलब्ध हैं।
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <strong className="text-gray-200">State Government Jobs</strong> में <strong className="text-gray-200">UP Police, Bihar Police, MP Police, Rajasthan Police</strong>, UPPSC, BPSC, MPPSC, RPSC, HSSC और सभी राज्यों के PSC की वैकेंसी अपडेट्स भी हम तुरंत प्रकाशित करते हैं। <strong className="text-gray-200">Teaching Jobs</strong> के लिए CTET, UPTET, SUPER TET, BPSC Teacher, DSSSB और KVS-NVS की भर्तियों की जानकारी भी यहाँ मिलती है।
              </p>
              <p>
                <strong className="text-gray-200">Defence Jobs</strong> में Indian Army Agniveer, Navy Agniveer, Air Force Agniveer, BSF, CRPF, CISF, SSB की भर्तियों के बारे में सटीक जानकारी पाएं। साथ ही <strong className="text-gray-200">Post Office GDS, Anganwadi, ASHA Worker, ESIC, EPFO</strong> जैसी non-technical भर्तियाँ भी कवर की जाती हैं।
              </p>
              <p>
                SarkariExamInfo.com पर रोज विजिट करें और <strong className="text-gray-200">Telegram Channel</strong> व <strong className="text-gray-200">WhatsApp Channel</strong> से जुड़ें ताकि कोई भी नई वैकेंसी, रिजल्ट या एडमिट कार्ड मिस न हो।
              </p>
            </div>
          </div>

          {/* Exam category tags */}
          <div className="mt-5 pt-4 border-t border-gray-800">
            <div className="text-gray-500 text-[11px] leading-relaxed">
              <strong className="text-gray-400">Exam Categories: </strong>
              SSC Exam · UPSC Exam · Railway Exam · Banking Exam · Police Exam · Army Exam · Navy Exam · Air Force Exam · Teaching Exam · CTET · State PSC · High Court Jobs · Clerk Vacancy · Constable Bharti · SI Vacancy · Patwari Exam · VDO Vacancy · Forest Guard · Fireman Bharti · Lab Assistant · ANM GNM Nursing · ITI Jobs · Diploma Jobs · Engineering Jobs · Medical Jobs · LDC UDC Vacancy · Steno Jobs · Data Entry Jobs · Computer Operator · Multi Tasking Staff · Group C Group D Jobs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: "India's No.1 portal for Sarkari Result, Sarkari Naukri, Admit Card and Government Jobs 2026",
        inLanguage: ["hi-IN", "en-IN"],
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
            width: 600,
            height: 60,
          },
        },
      },
    ],
  };

  return (
    <html lang="hi">
      <head>
        <Script
          id="schema-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f5f5f5] text-gray-900 flex flex-col min-h-screen" style={{ fontFamily: "'Noto Sans Devanagari', Arial, sans-serif" }}>
        <Navbar />

        <main className="flex-grow pb-6 w-full" style={{ fontFamily: "Arial, sans-serif" }}>
          {children}
        </main>

        {/* ── Main footer links ── */}
        <footer className="bg-[#1b1b1b] text-gray-300 border-t-4 border-[#f97316]" style={{ fontFamily: "Arial, sans-serif" }}>
          <div className="max-w-6xl mx-auto px-3 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <div className="text-[#f97316] font-bold text-xs uppercase mb-3 pb-1 border-b border-gray-700 tracking-wider">Quick Links</div>
              <ul className="space-y-2 text-xs">
                {([["Latest Jobs","/latest-jobs"],["Sarkari Result","/result"],["Admit Card","/admit-card"],["Answer Key","/answer-key"],["Syllabus","/syllabus"],["Admission","/admission"]] as [string,string][]).map(([label,href])=>(
                  <li key={href}><a href={href} className="text-gray-400 hover:text-[#f97316] transition-colors">› {label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[#f97316] font-bold text-xs uppercase mb-3 pb-1 border-b border-gray-700 tracking-wider">हिंदी लिंक</div>
              <ul className="space-y-2 text-xs">
                {([["सरकारी नौकरी","/latest-jobs"],["सरकारी रिजल्ट","/result"],["एडमिट कार्ड","/admit-card"],["आंसर की","/answer-key"],["सिलेबस","/syllabus"],["प्रवेश","/admission"]] as [string,string][]).map(([label,href])=>(
                  <li key={href}><a href={href} className="text-gray-400 hover:text-[#f97316] transition-colors">› {label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[#f97316] font-bold text-xs uppercase mb-3 pb-1 border-b border-gray-700 tracking-wider">Information</div>
              <ul className="space-y-2 text-xs">
                {([["About Us","/about"],["Contact Us","/contact"],["Privacy Policy","/privacy-policy"],["Disclaimer","/disclaimer"],["Terms of Use","/terms"],["Sitemap","/sitemap.xml"]] as [string,string][]).map(([label,href])=>(
                  <li key={href}><a href={href} className="text-gray-400 hover:text-[#f97316] transition-colors">› {label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[#f97316] font-bold text-xs uppercase mb-3 pb-1 border-b border-gray-700 tracking-wider">Follow Us</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors">› Telegram Channel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors">› WhatsApp Channel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors">› YouTube Channel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors">› Instagram Page</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors">› Facebook Page</a></li>
              </ul>
            </div>
          </div>
        </footer>

        {/* ── SEO keyword + description footer ── */}
        <SeoFooter />

        {/* ── Copyright bar ── */}
        <div className="bg-[#0a0a0a] py-3 text-center text-xs text-gray-600 border-t border-[#1e1e1e]" style={{ fontFamily: "Arial, sans-serif" }}>
          © {new Date().getFullYear()} SarkariExamInfo.com — All Rights Reserved. |{" "}
          <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>{" "}|{" "}
          <a href="/disclaimer" className="hover:text-gray-300">Disclaimer</a>{" "}|{" "}
          <a href="/sitemap.xml" className="hover:text-gray-300">Sitemap</a>
          <br />
          <span className="text-gray-700 text-[10px]">
            SarkariExamInfo.com is an independent information portal. Not affiliated with any government body. Please verify from official websites.
          </span>
        </div>
      </body>
    </html>
  );
}
