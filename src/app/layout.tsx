import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'AsiaGrill 168 – Buffet Asiatique à Volonté à Herblay',
  description: 'Découvrez AsiaGrill 168 à Herblay-sur-Seine. Buffet asiatique à volonté frais, varié et convivial. Idéal familles, groupes et à emporter. Réservez votre table !',
  keywords: ["restaurant asiatique Herblay, buffet asiatique à volonté Herblay, restaurant chinois Herblay, Herblay-sur-Seine, sushis, wok, à emporter"],
  openGraph: {
    "title": "AsiaGrill 168 – Buffet Asiatique à Volonté à Herblay",
    "description": "Découvrez AsiaGrill 168 à Herblay-sur-Seine. Buffet asiatique à volonté frais, varié et convivial. Idéal familles, groupes et à emporter. Réservez votre table !",
    "url": "https://www.asiagrill168.fr",
    "siteName": "AsiaGrill 168",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/woman-eating-food-restaurant_23-2150520105.jpg",
        "alt": "Intérieur du restaurant AsiaGrill 168 avec buffet"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AsiaGrill 168 – Buffet Asiatique à Volonté à Herblay",
    "description": "Découvrez AsiaGrill 168 à Herblay-sur-Seine. Buffet asiatique à volonté frais, varié et convivial. Idéal familles, groupes et à emporter. Réservez votre table !",
    "images": [
      "http://img.b2bpic.net/free-photo/woman-eating-food-restaurant_23-2150520105.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
