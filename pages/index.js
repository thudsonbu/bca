import Jumbotron       from "../components/jumbotron/jumbotron";
import ImageStatement  from "../components/image-statement/image-statement";
import SectionTitle    from "../components/section-title/section-title";
import SectionSubtitle from "../components/section-subtitle/section-subtitle";
import ImageGrid       from "../components/image-grid/image-grid";
import Partners        from "../components/partners/partners";
import ImageCard       from "../components/image-card/image-card";

import layout_styles from "../styles/layouts.module.scss";

const Home = () => {
  return (
    <>
      <Jumbotron
        title={"Bentley Consulting Association"}
      />
      <div className={layout_styles.section}>
        <ImageStatement
          src="./images/BCALogo.png"
          title={"About"}
          description={
            "The Bentley Consulting Association is the premiere consulting organization on the Bentley University Campus. The organization has created a community that works together to achieve their goals in the consulting space, including generating awareness about consulting, and finding internships and full-time positions. Launched in 2019, BCA has undergone a number of transformations. The recently re-branded organization has grown exponentially, created a Bootcamp program, hosted case competitions, and engaged in numerous probono consulting projects with real world clients. If you are interested in consulting, learning about the field or preparing for a career, the Bentley Consulting Association is the organization for you!"
          }
        />
      </div>
      <SectionTitle title={"What We Do"} background={"blue"} />
      <div className={layout_styles.section}>
        <ImageGrid
          items={[
            {
              src: "./images/education.jpg",
              title: "Real Experience, Real Skills",
              description:
                "Our members reinforce concepts taught through our Bootcamp and Associate Consultant programming by working on actual client projects. These engagements vary across business segments, allowing our members to develop diverse technical skills along with important soft skills needed to be successful in consulting. These include presentation skills, professionalism, and many more!",
              link: "./students",
              link_text: "Learn more",
            },
            {
              src: "./images/charts.jpg",
              title: "Consulting Bootcamps",
              description:
                "Our 5-week Bootcamp serves as the primary source of entry for the organization. In the BCA Bootcamp, students learn fundamental skills necessary for completing the consulting process. This program culminates in a client project where members apply their skills to develop real world experience.",
              link: "./students",
              link_text: "Learn more",
            },
            {
              src: "./images/events.jpg",
              title: "Case Competitions",
              description:
                "BCA hosts a case competition each semester: freshman case competition in the fall, and an intercollegiate competition in the spring. These case competitions give participants valuable experience in solving complex business problems and creating final presentations for a panel of judges working in consulting.",
              link: "./students",
              link_text: "Learn more",
            },
            {
              src: "./images/team.jpg",
              title: "Client Projects",
              description:
                "As both a Bootcamp Participant and an Associate Consultant, members have the opportunity to work with real life businesses to complete probono consulting projects. These engagements allow our members to apply skills taught by BCA and expand their knowledge in a variety of business segments. ",
              link: "./clients",
              link_text: "Learn more",
            },
          ]}
        />
      </div>
      <SectionTitle title={"Our Partners"} background={"blue"} />
      <div className={layout_styles.section}>
        <Partners
          partners={[
            { src: "./images/slalom.png", style: "slalom" },
            { src: "./images/rsm.png", style: "rsm" },
            { src: "./images/deloitte.png", style: "deloitte" },
            { src: "./images/ey.png", style: "ey" },
            { src: "./images/pwc.png", style: "pwc" },
          ]}
        />
      </div>
      <SectionTitle title={"Learn More"} background={"blue"} />
      <div className={layout_styles.section}>
        <SectionSubtitle title={"Meet our team or see our upcoming events"} />
        <div className={layout_styles.flex}>
          <ImageCard
            title={"Our Team"}
            description={
              "Meet our executive board and consultants or reach out directly."
            }
            src={"./images/team.jpg"}
            href={"./team"}
          />
          <ImageCard
            title={"Events"}
            description={"See what events the BCA has planned this semester"}
            src={"./images/events.jpg"}
            href={"./events"}
          />
        </div>
      </div>
      <div className={layout_styles.section}>
        <SectionSubtitle title={"Reach out to us"} />
        <ImageGrid
          items={[
            {
              src: "./images/education.jpg",
              title: "Join the BCA",
              description:
                "Joining the BCA is a great way to get started in consulting. Follow the link below to get started.",
              link: "./team",
              link_text: "Sign Up",
            },
            {
              src: "./images/charts.jpg",
              title: "Contact Us",
              description:
                "Would you like to work with the BCA or schedule en event? Click the link below.",
              link: "./team",
              link_text: "Contact Us",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
