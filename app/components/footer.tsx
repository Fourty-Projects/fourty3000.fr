"use client";

import React from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "../lib/config";
import { getDictionary } from "../lib/dictionaries";
import type { Locale } from "../lib/i18n";

const YEAR = new Date().getFullYear();

const legalPaths = [
  { path: "/mentions-legales", labelKey: "legalTitle" },
  { path: "/cgu", labelKey: "termsTitle" },
  { path: "/politique-confidentialite", labelKey: "privacyTitle" },
] as const;

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
      <SocialLink href={socialLinks.tiktok} icon={FaTiktok} />
      <SocialLink href={socialLinks.discord} icon={FaDiscord} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <footer className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <small>
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline"
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title} | {dictionary.footer.madeWith}{" "}
          <span className="font-bold">Fourty3000</span>{" "}
          {dictionary.footer.thanksTo} <span className="font-bold">Next.js</span>{" "}
          {dictionary.footer.and}{" "}
          <span className="font-bold">TailwindCSS</span>.
        </a>
        <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
        <SocialLinks />
      </small>

      <nav
        aria-label={dictionary.footer.legalLinks}
        className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs"
      >
        {legalPaths.map(({ path, labelKey }) => (
          <Link
            key={path}
            href={`/${locale}${path}`}
            className="no-underline hover:underline"
          >
            {dictionary.meta[labelKey]}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
