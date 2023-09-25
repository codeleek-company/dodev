import Suggestion from "@/components/suggestion";
import title from "@/utils/title";

export default function Feed() {
  title("Feed");

  return (
    <div className="section container mt-2 mb-20">
      <Suggestion
        desc="Some desc"
        title="Test"
        state="feature"
        downCount={0}
        upCount={0}
      />
      <Suggestion
        desc="Some desc"
        title="Test"
        state="issue"
        downCount={0}
        upCount={0}
      />
    </div>
  );
}
