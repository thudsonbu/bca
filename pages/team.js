import Jumbotron from '../components/jumbotron/jumbotron';
import CardGrid from '../components/card-grid/card-grid';
import ModalCard from '../components/modal-card/modal-card';
import SectionTitle from '../components/section-title/section-title';
import styles from '../styles/team.module.scss';

const Team = () => {
  return (
    <>
      <Jumbotron
        title={'Our Team'}
        description={'Meet our leadership and consultants.'}
      />
      <div className={ styles.card_grid }>
        <CardGrid className={ styles.card_grid }>
          <SectionTitle title={'Presidents'} />
          <ModalCard
            name={'Brenna Masterson'}
            src="./images/headshots/brenna_masterson.jpg"
            title={'President'}
            description={'Originally from Voorhees, New Jersey, Brenna is an Honors Quantitative Economics major with minors in Computer Information Systems and Spanish. She has served as Freshman Liaison and Head of Internal Development, prior to becoming Co Presidents with Sandhya for the Bentley Consulting Association. Brenna has served as Project Leader on several different client projects. On campus, she is also a tutor in the LEAF Lab, in Bentley’s selective Women’s Leadership Program and part of both the 2021 and 2022 Fed Challenge Teams. In the summer of 2023, Brenna has accepted an offer from PwC on the Finance Transformation Consulting Team.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
          <ModalCard
            name={'Sandya Sangappa'}
            src="./images/headshots/sandhya_sangappa.jpg"
            title={'President'}
            description={'Sandhya is from Marlborough, Massachusetts and studies Data Analytics with minors in Business and Mathematics. Her previous BCA client engagements have spanned social media analytics to strategy for Y-Combinator start-ups. Beyond the organization, Sandhya serves as an Advisor for Bentley’s Actuarial and Analytics Club and works as a tutor for various math and computer science courses. This summer, she is interning with IBM as a Data Analyst.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
        </CardGrid>
        <CardGrid className={ styles.card_grid }>
          <SectionTitle title={'Executive Board'} />
          <ModalCard
            name={'Maria Campbell'}
            src="./images/headshots/celia_schurman.jfif"
            title={'Head of Marketing'}
            description={'Maria Campbell is from Long Island, New York. Maria is a second-year student at Bentley University. She is a Marketing major with an Information Design and Corporate Communication minor. Maria also serves as the Head of Operations for the Bentley Marketing Association and as a Marketing Assistant for the Bentley Blockchain Association. Maria Campbell is a diligent college student who is passionate about Marketing and is enthusiastic for the future of Bentley Consulting Association.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
          <ModalCard
            name={'Alon Yacovi'}
            src="./images/headshots/alon_yacovi.jpg"
            title={'Head of Finance'}
            description={'Alon, originally from Newton, Massachusetts, is an Economics and Finance major with a minor in Computer Information Systems. His BCA client engagement experience has ranged from long-term growth strategy to marketing analytics. Beyond Alon’s involvement in BCA, he is currently a Summer Associate at EY-Parthenon’s Software Strategy Group and recently wrapped up an externship with Deloitte Consulting.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
          <ModalCard
            name={'Christian Zarka'}
            src="./images/headshots/christian_zarka.jpg"
            title={'Head of Corporate Development'}
            description={'Christian is from Derry, New Hampshire and studies Economics-Finance. He previously served as Freshman Liaison and maintained his position on the Corporate Development Team this year. Christian also served as a Project Leader and enjoys participating in case competitions. Outside of the organization, he serves as an Analyst for Bentley Investment Group, a Falcon Discovery Seminar Peer Leader, part of the 2022 Fed Challenge Team and a member of the varsity soccer team. This summer he is interning at Strategic Risk Solutions as a Risk Analyst.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
          <ModalCard
            name={'David Daniels'}
            src="./images/headshots/david_daniels.jpg"
            title={'Head of Corporate Development'}
            description={'David is from Utica, New York and a senior at Bentley University studying economics-finance and data technologies. As part of the Corporate Development Team for BCA, he works to recruit projects from Bentley alum and other business owners and maintain client relationships. At Bentley, he serves as Student Affairs Committee Chair for Student Government (SGA), Board Member for the Senior Class Cabinet, and a Career Colleague for the Pulsifer Career Center. This summer, he is interning at Management Solutions as a business consultant.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
          <ModalCard
            name={'Connor Martins'}
            src="./images/headshots/connor_martins.jpg"
            title={'Head of Recruiting'}
            description={'Connor is from Ludlow, Massachusetts and is pursuing an undergraduate degree in both Quantitative Economics and Earth, Environment, and Global Sustainability from Bentley University\'s honors program. He currently serves as the Head of Recruitment for the Bentley Consulting Association, his first executive position since being welcomed as an associate consultant. Connor also served as a Bentley Consulting Association project manager for a small client that produces a unique, organic hot sauce in the ecommerce space. Connor is involved on campus as an economics tutor for the LEAF lab and is currently working as a Market Research & Consulting Intern for technology market intelligence and consulting firm, VDC Research Group, this summer.'}
            linkedinLink={'starry.com'}
            emailLink={'email.com'}
          />
        </CardGrid>
      </div>
    </>
  );
};

export default Team;
