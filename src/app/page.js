import SocialButtons from "@/components/SocialButtons";
import TableOfContents from "@/components/TableOfContents";
import EmailCopyToClipboard from "@/components/EmailCopyToClipboard";

export default function Home() {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="main-content space-y-4 max-w-4xl">
          <h1 id="greetings">GREETINGS!</h1>
          <p>Lorem ipsum dolor sit amet. Qui accusantium eligendi ea ipsa delectus qui illum quibusdam ut natus voluptatem aut culpa quia sed nobis voluptas. Ad accusantium nesciunt qui quia facilis 33 iusto voluptatem. </p><p>Aut voluptas quod 33 obcaecati perferendis est nobis exercitationem sit alias debitis ut mollitia iure non laborum voluptas. Aut suscipit omnis et deserunt nesciunt ea possimus accusantium est quia aliquam est nemo ipsam sit blanditiis omnis quo nihil quia. In corrupti quia sit quia optio aut unde doloremque? </p><p>Vel quia autem ut vitae error et obcaecati consectetur sed soluta necessitatibus ut debitis deserunt non quia omnis et modi accusantium. Ut maxime nihil qui placeat laudantium et repellendus incidunt quo earum vero eum reprehenderit voluptatibus id amet fuga. Est ipsa saepe quo ipsum quia ut labore sint sed saepe distinctio in voluptatem consequatur. Et impedit voluptas At vitae pariatur id ducimus porro eos error quia? </p>
          <SocialButtons />
          <br></br>
          <h1 id="different-greeting">DIFFERENT GREETING</h1>
          <p>Lorem ipsum dolor sit amet. Et voluptates nemo est modi autem aut molestias eligendi hic provident beatae. Id ullam dolor ex laudantium laudantium in exercitationem voluptas non galisum excepturi ea nemo quam. </p><p>Qui autem vitae ea distinctio suscipit non dolores cupiditate? Hic fugiat blanditiis est quas delectus et galisum voluptas ab placeat corrupti eum harum laboriosam qui dolore nihil sed dolorum sint. Cum pariatur quia ut repellat quia sit deserunt praesentium nam voluptas iste aut voluptatibus illum et nesciunt autem id dolorem omnis. </p><p>Ut rerum suscipit ut voluptas voluptatibus ut quas sint et totam dolores et dolorem soluta quo earum minus. Id cupiditate nulla sit dolorum quos et maiores ducimus non ullam quae id vero quos sed dolor itaque ab voluptatibus impedit. </p>
          <br></br>
          <h1 id="yet-another-greeting">YET ANOTHER GREETING</h1>
          <p>Lorem ipsum dolor sit amet. Et voluptates nemo est modi autem aut molestias eligendi hic provident beatae. Id ullam dolor ex laudantium laudantium in exercitationem voluptas non galisum excepturi ea nemo quam. </p><p>Qui autem vitae ea distinctio suscipit non dolores cupiditate? Hic fugiat blanditiis est quas delectus et galisum voluptas ab placeat corrupti eum harum laboriosam qui dolore nihil sed dolorum sint. Cum pariatur quia ut repellat quia sit deserunt praesentium nam voluptas iste aut voluptatibus illum et nesciunt autem id dolorem omnis. </p><p>Ut rerum suscipit ut voluptas voluptatibus ut quas sint et totam dolores et dolorem soluta quo earum minus. Id cupiditate nulla sit dolorum quos et maiores ducimus non ullam quae id vero quos sed dolor itaque ab voluptatibus impedit. </p>
          <br></br>
          <h1 id="and-yet-another-greeting">AND YET ANOTHER GREETING</h1>
          <p>Lorem ipsum dolor sit amet. Et voluptates nemo est modi autem aut molestias eligendi hic provident beatae. Id ullam dolor ex laudantium laudantium in exercitationem voluptas non galisum excepturi ea nemo quam. </p><p>Qui autem vitae ea distinctio suscipit non dolores cupiditate? Hic fugiat blanditiis est quas delectus et galisum voluptas ab placeat corrupti eum harum laboriosam qui dolore nihil sed dolorum sint. Cum pariatur quia ut repellat quia sit deserunt praesentium nam voluptas iste aut voluptatibus illum et nesciunt autem id dolorem omnis. </p><p>Ut rerum suscipit ut voluptas voluptatibus ut quas sint et totam dolores et dolorem soluta quo earum minus. Id cupiditate nulla sit dolorum quos et maiores ducimus non ullam quae id vero quos sed dolor itaque ab voluptatibus impedit. </p>
          <br></br>
          <EmailCopyToClipboard />
        </div>
      </div>
      <TableOfContents />
    </div>
  );
}
