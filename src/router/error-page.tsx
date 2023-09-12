export default function Error() {
  return (
    <div className="flex justify-center items-center text-4xl flex-col gap-4 h-screen">
      Not found
      <a href="/" className="text-2xl p-2 bg-gray-500 px-4 rounded-lg">
        Go back
      </a>
    </div>
  );
}
