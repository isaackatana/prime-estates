type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2">
      <h3 className="mb-4 text-xl font-bold">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}