import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 text-gray-300">
            <div className="container mx-auto px-6 py-14">

                {/* About */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h3 className="text-2xl text-[#e3bb45] font-semibold">
                        About the Developer
                    </h3>

                    <p className="leading-relaxed text-gray-400">
                        I'm Ramzan, a passionate WordPress and Laravel Developer focused on building
                        modern, scalable, and high-performance web applications. I love turning ideas
                        into clean, functional, and user-friendly digital experiences.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">

                    <a
                        href="https://github.com/Ramzan8898"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#e3bb45] transition border border-[#e3bb45] px-3 py-1 rounded-md"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/muhammad-ramzan-344aa8276/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#e3bb45] transition border border-[#e3bb45] px-3 py-1 rounded-md"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://wa.me/923068518898"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#e3bb45] transition border border-[#e3bb45] px-3 py-1 rounded-md"
                    >
                        WhatsApp
                    </a>
                </div>

                {/* Bottom */}
                <div className="mt-12 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Ramzan — Web Developer. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
