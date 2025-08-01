import SocialButtons from "@/components/SocialButtons";
import TableOfContents from "@/components/TableOfContents";

export default function Home() {
  return (
    <div className="pt-24 px-6 flex justify-between items-start">
      <div className="main-content space-y-4">
        <h1 id="greetings">Greetings Visitor</h1>
        <h1 id="different-greeting">Different Greeting for Visitors!!</h1>
        <SocialButtons />
      </div>


      <div className="table-of-contents-wrapper">
        <TableOfContents />
      </div>
    </div>
  );
}
