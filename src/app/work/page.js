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
          <p>A list of technical/engineering projects</p>
          <ProjectGrid projects={DEV_PROJECTS} />

          <h1 id="photography" className="mt-16 text-3xl font-bold">PHOTOGRAPHY</h1>
          <p>A gallery of my photographic work</p>
          <PhotoGallery />

          <h1 id="video" className="mt-16 text-3xl font-bold">VIDEO</h1>
          <p>A gallery of my video projects</p>
          <VideoGallery />

          <h1 id="blogs" className="mt-16 text-3xl font-bold">BLOGS</h1>
          <p>A list of my personal writing and ramblings</p>

        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}
