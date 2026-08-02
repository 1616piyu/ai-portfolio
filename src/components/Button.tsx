type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        bg-cyan-500
        hover:bg-cyan-600
        transition-all
        duration-300
        px-8
        py-4
        rounded-xl
        font-semibold
        shadow-lg
      "
    >
      {text}
    </button>
  );
}