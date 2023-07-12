import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';




export const Containers = styled.div`
	max-width: 1200px;
	height: auto;
	margin: 0 auto;
	padding: 20px;
`;

export const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;

export const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

export const HeroSection = styled.section`
	background-color: #f4f4f4;
	padding: 100px 0;
	text-align: center;
`;

export const HeroText = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 20px;
`;

export const AboutSection = styled.section`padding: 100px 0;`;

export const ServicesSection = styled.section`
	background-color: #f4f4f4;
	padding: 100px 0;
	text-align: center;
`;

export const ContactSection = styled.section`padding: 100px 0;`;

export const ProjectsSection = styled.section`
	background-color: #f4f4f4;
	padding: 100px 0;
	text-align: center;
`;

export const ProjectItem = styled.div`
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin-bottom: 40px;
`;

export const SkillsSection = styled.section`padding: 100px 0;`;

export const Footer = styled.footer`
	background-color: #333;
	color: #fff;
	padding: 20px 0;
	text-align: center;
`;

 const Portfolio = () => {

  return (
    <div>
      <Container>
				<Navbar>
					<Logo>Rabin Shah</Logo>
                    <MenuItems/>
					{/* <Menu>
						<MenuItem > <Link className='content' to={"/portfolio"}>Home</Link></MenuItem>
						<MenuItem><Link className='content' to={"/about"}>About</Link></MenuItem>
						<MenuItem><Link className='content' to={"/contact"}>Contact</Link></MenuItem>
						<MenuItem><Link className='content' to={"/projects"}>Projects</Link></MenuItem>
						<MenuItem><Link className='content' to={"/skills"}>Skills</Link></MenuItem>
					</Menu> */}
				</Navbar>
				<HeroSection>
					<HeroText>Welcome to My Portfolio</HeroText>
					<p>This is a brief description of who I am and what I do.</p>
				</HeroSection>
				<AboutSection>
					<h2>About Me</h2>
					<p>Some information about yourself and your background.</p>
				</AboutSection>
                <ServicesSection>
                <h2>Services</h2>
					<p>Services you provides.</p>
                </ServicesSection>
				<ContactSection>
					<h2>Contact</h2>
					<p>Contact form or contact details.</p>
				</ContactSection>
                
				<ProjectsSection>
					<Container>
						<Row>
							<Col>
								<h2>My Projects</h2>
                                <br />
                                <ProjectItem>
                                <Link className='content' to={"/cricketScore"}>Cricket Score App</Link>
                                </ProjectItem>
                               <ProjectItem>
                               <Link className='content' to={"/todoApp"}>Todo App</Link>
                               </ProjectItem>
                                 
								{/* {projects.map((project) => (
									<ProjectItem key={project.id}>
										<h3>{project.title}</h3>
										<p>{project.description}</p>
									</ProjectItem>
								))} */}
							</Col>
						</Row>
					</Container>
				</ProjectsSection>
				<SkillsSection>
					<h2>My Skills</h2>
					<p>Your skills and expertise.</p>
				</SkillsSection>
				<Footer>
					<p>&copy; 2023 My Portfolio. All rights reserved.</p>
				</Footer>
			</Container>
    </div>
  )
}
export default Portfolio;