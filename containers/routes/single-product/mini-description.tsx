interface IDescriptionProps {
  description: string;
}

export function MiniDescription(props: IDescriptionProps) {
  return (
    <section>
      <div className="flex items-center gap-1">
        <p className="mb-1 text-xsp font-bold text-gray-400">توضیح محصول</p>
        <span className="h-px grow bg-[#e6e9ee]" />
      </div>
      <p className="text-xsp font-medium text-gray-400">
        توضیحات {props.description}
      </p>
    </section>
  );
}
