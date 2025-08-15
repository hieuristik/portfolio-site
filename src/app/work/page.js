import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import ProjectGrid from "@/components/ProjectGrid";
import VideoGallery from "@/components/VideoGallery";
import DEV_PROJECTS from "@/data/devProjects";

export default function Work() {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 text-center">
          <h1 id="dev-projects" className="text-3x1 font-bold">DEV PROJECTS</h1>
          <ProjectGrid projects={DEV_PROJECTS} />

          <h1 id="photography" className="mt-16 text-3xl font-bold">PHOTOGRAPHY</h1>
          <p>Lorem ipsum dolor sit amet. Qui accusantium eligendi ea ipsa delectus qui illum quibusdam ut natus voluptatem aut culpa quia sed nobis voluptas. Ad accusantium nesciunt qui quia facilis 33 iusto voluptatem. </p><p>Aut voluptas quod 33 obcaecati perferendis est nobis exercitationem sit alias debitis ut mollitia iure non laborum voluptas. Aut suscipit omnis et deserunt nesciunt ea possimus accusantium est quia aliquam est nemo ipsam sit blanditiis omnis quo nihil quia. In corrupti quia sit quia optio aut unde doloremque? </p><p>Vel quia autem ut vitae error et obcaecati consectetur sed soluta necessitatibus ut debitis deserunt non quia omnis et modi accusantium. Ut maxime nihil qui placeat laudantium et repellendus incidunt quo earum vero eum reprehenderit voluptatibus id amet fuga. Est ipsa saepe quo ipsum quia ut labore sint sed saepe distinctio in voluptatem consequatur. Et impedit voluptas At vitae pariatur id ducimus porro eos error quia? </p>
          <PhotoGallery />

          <h1 id="video" className="mt-16 text-3xl font-bold">VIDEO</h1>
          <p>Lorem ipsum dolor sit amet. Qui accusantium eligendi ea ipsa delectus qui illum quibusdam ut natus voluptatem aut culpa quia sed nobis voluptas. Ad accusantium nesciunt qui quia facilis 33 iusto voluptatem. </p><p>Aut voluptas quod 33 obcaecati perferendis est nobis exercitationem sit alias debitis ut mollitia iure non laborum voluptas. Aut suscipit omnis et deserunt nesciunt ea possimus accusantium est quia aliquam est nemo ipsam sit blanditiis omnis quo nihil quia. In corrupti quia sit quia optio aut unde doloremque? </p><p>Vel quia autem ut vitae error et obcaecati consectetur sed soluta necessitatibus ut debitis deserunt non quia omnis et modi accusantium. Ut maxime nihil qui placeat laudantium et repellendus incidunt quo earum vero eum reprehenderit voluptatibus id amet fuga. Est ipsa saepe quo ipsum quia ut labore sint sed saepe distinctio in voluptatem consequatur. Et impedit voluptas At vitae pariatur id ducimus porro eos error quia? </p>
          <VideoGallery />

          <h1 id="blogs" className="mt-16 text-3xl font-bold">BLOGS</h1>
          <p>Lorem ipsum dolor sit amet. Qui accusantium eligendi ea ipsa delectus qui illum quibusdam ut natus voluptatem aut culpa quia sed nobis voluptas. Ad accusantium nesciunt qui quia facilis 33 iusto voluptatem. </p><p>Aut voluptas quod 33 obcaecati perferendis est nobis exercitationem sit alias debitis ut mollitia iure non laborum voluptas. Aut suscipit omnis et deserunt nesciunt ea possimus accusantium est quia aliquam est nemo ipsam sit blanditiis omnis quo nihil quia. In corrupti quia sit quia optio aut unde doloremque? </p><p>Vel quia autem ut vitae error et obcaecati consectetur sed soluta necessitatibus ut debitis deserunt non quia omnis et modi accusantium. Ut maxime nihil qui placeat laudantium et repellendus incidunt quo earum vero eum reprehenderit voluptatibus id amet fuga. Est ipsa saepe quo ipsum quia ut labore sint sed saepe distinctio in voluptatem consequatur. Et impedit voluptas At vitae pariatur id ducimus porro eos error quia? </p>

        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}
