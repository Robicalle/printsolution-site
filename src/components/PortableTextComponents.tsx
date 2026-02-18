import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-dark-800 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-dark-800 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-dark-800 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-dark-800 mb-2">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold text-dark-800 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-semibold text-dark-800 mb-2">{children}</h6>,
    normal: ({ children }) => <p className="text-gray-500 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-600 my-4">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-dark-800">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} className="text-cyan-500 hover:text-cyan-600 underline" target={value?.href?.startsWith("http") ? "_blank" : undefined} rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 text-gray-500 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-gray-500 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};
