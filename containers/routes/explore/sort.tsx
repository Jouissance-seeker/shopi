export function Sort() {
  return (
    <div>
      <ul className="flex gap-3 text-sm font-medium text-gray-500">
        <li className="hover:text-green">
          <button>جدید ترین</button>
        </li>
        <li className="hover:text-green">
          <button>گران ترین</button>
        </li>
        <li className="hover:text-green">
          <button>ارزان ترین</button>
        </li>
      </ul>
    </div>
  );
}
