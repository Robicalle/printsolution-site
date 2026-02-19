import Image from "next/image";

interface Props {
  block: any;
  locale: string;
}

export default function TeamSectionBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-dark-800 mb-4 text-center">
        {it ? block.heading : (block.heading_en || block.heading)}
      </h2>
      {block.description && (
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
          {it ? block.description : (block.description_en || block.description)}
        </p>
      )}
      {block.teamPhoto && (
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-10">
          <Image
            src={block.teamPhoto}
            alt={it ? "Il team di Print Solution" : "The Print Solution team"}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-6">
        {(block.roles || []).map((t: any) => {
          const role = it ? t.role : (t.role_en || t.role);
          return (
            <div key={role} className="bg-surface-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {role?.[0]}
              </div>
              <h4 className="font-bold text-dark-800 mb-2">{role}</h4>
              <p className="text-gray-500 text-sm">
                {it ? t.desc : (t.desc_en || t.desc)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
