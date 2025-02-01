interface IMiniAttributesProps {
  attributes: {
    key: string;
    value: string;
  }[];
}

export function MiniAttributes(props: IMiniAttributesProps) {
  return (
    <section className="min-w-36">
      <div className="flex items-center gap-1">
        <p className="mb-1 text-xsp font-bold text-gray-400">ویژگی های محصول</p>
        <span className="h-px grow bg-[#e6e9ee]" />
      </div>
      <div className="flex flex-col text-xsp font-medium text-gray-400">
        {props.attributes.map((item) => {
          return (
            <div key={item.key} className="flex justify-between">
              <p className="text-gray-400">{item.key}</p>
              <p className="text-gray-500">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
