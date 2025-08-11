import Footer from "@/components/Footer";
import ProjectGrid from "@/components/ProjectGrid";

const DEV_PROJECTS = [
    {
      title: "Brewin Language Interpreter",
      description:
        "A small interpreted, statically typed language in Python with I/O, objects, scoping, and error handling.",
      imageSrc: "/images/brewin-card.jpg",
      imageAlt: "Brewin language hero card",
      githubUrl: "https://github.com/you/brewin",
      demoUrl: "",
      tags: ["Python", "Interpreter", "Compilers"],
    },
    {
      title: "Brewin Language Interpreter",
      description:
        "A small interpreted, statically typed language in Python with I/O, objects, scoping, and error handling.",
      imageSrc: "/images/brewin-card.jpg",
      imageAlt: "Brewin language hero card",
      githubUrl: "https://github.com/you/brewin",
      demoUrl: "",
      tags: ["Python", "Interpreter", "Compilers"],
    },
    {
      title: "Brewin Language Interpreter",
      description:
        "A small interpreted, statically typed language in Python with I/O, objects, scoping, and error handling.",
      imageSrc: "/images/brewin-card.jpg",
      imageAlt: "Brewin language hero card",
      githubUrl: "https://github.com/you/brewin",
      demoUrl: "",
      tags: ["Python", "Interpreter", "Compilers"],
    },
    {
      title: "Brewin Language Interpreter",
      description:
        "A small interpreted, statically typed language in Python with I/O, objects, scoping, and error handling.",
      imageSrc: "/images/brewin-card.jpg",
      imageAlt: "Brewin language hero card",
      githubUrl: "https://github.com/you/brewin",
      demoUrl: "",
      tags: ["Python", "Interpreter", "Compilers"],
    },
    {
      title: "Brewin Language Interpreter",
      description:
        "A small interpreted, statically typed language in Python with I/O, objects, scoping, and error handling.",
      imageSrc: "/images/brewin-card.jpg",
      imageAlt: "Brewin language hero card",
      githubUrl: "https://github.com/you/brewin",
      demoUrl: "",
      tags: ["Python", "Interpreter", "Compilers"],
    },
];

export default function Work() {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="main-content space-y-4 max-w-4xl">
          <h1 id="dev-projects">DEV PROJECTS</h1>
          <ProjectGrid projects={DEV_PROJECTS}/>
          <br></br>
          <h1 id="photography">PHOTOGRAPHY</h1>
          <p>Lorem ipsum dolor sit amet. Qui accusantium eligendi ea ipsa delectus qui illum quibusdam ut natus voluptatem aut culpa quia sed nobis voluptas. Ad accusantium nesciunt qui quia facilis 33 iusto voluptatem. </p><p>Aut voluptas quod 33 obcaecati perferendis est nobis exercitationem sit alias debitis ut mollitia iure non laborum voluptas. Aut suscipit omnis et deserunt nesciunt ea possimus accusantium est quia aliquam est nemo ipsam sit blanditiis omnis quo nihil quia. In corrupti quia sit quia optio aut unde doloremque? </p><p>Vel quia autem ut vitae error et obcaecati consectetur sed soluta necessitatibus ut debitis deserunt non quia omnis et modi accusantium. Ut maxime nihil qui placeat laudantium et repellendus incidunt quo earum vero eum reprehenderit voluptatibus id amet fuga. Est ipsa saepe quo ipsum quia ut labore sint sed saepe distinctio in voluptatem consequatur. Et impedit voluptas At vitae pariatur id ducimus porro eos error quia? </p>
          <br></br>
          <h1 id="video">VIDEO</h1>
          <p>Lorem ipsum dolor sit amet. Qui accusantium eligendi ea ipsa delectus qui illum quibusdam ut natus voluptatem aut culpa quia sed nobis voluptas. Ad accusantium nesciunt qui quia facilis 33 iusto voluptatem. </p><p>Aut voluptas quod 33 obcaecati perferendis est nobis exercitationem sit alias debitis ut mollitia iure non laborum voluptas. Aut suscipit omnis et deserunt nesciunt ea possimus accusantium est quia aliquam est nemo ipsam sit blanditiis omnis quo nihil quia. In corrupti quia sit quia optio aut unde doloremque? </p><p>Vel quia autem ut vitae error et obcaecati consectetur sed soluta necessitatibus ut debitis deserunt non quia omnis et modi accusantium. Ut maxime nihil qui placeat laudantium et repellendus incidunt quo earum vero eum reprehenderit voluptatibus id amet fuga. Est ipsa saepe quo ipsum quia ut labore sint sed saepe distinctio in voluptatem consequatur. Et impedit voluptas At vitae pariatur id ducimus porro eos error quia? </p>
          <br></br>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}