import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
		this.state = {
			modalShow: false,
			modalCurrent: 0,
		}
		this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
		this.setModal = this.setModal.bind(this)
	}

	handlePortfolioClick(index, e) {
		e.preventDefault()
		this.setModal(true, index)
	}

	setModal(isShown, current) {
		this.setState({
			modalShow: isShown,
			modalCurrent: current,
		})
	}

	render() {
		return (
			<Layout>
				<SEO title="Everyday Iron Workout Warehouse" />
				<section className="page-section" id="services">
					<div className="container">
						<h2 className="text-center mt-0">Rhinos Athletic Performance Is All staff Change!</h2>
						<hr className="divider my-4" />
						<div className="row">
							<div className="col-lg-4 col-md-6 text-center">
								<div className="mt-5">
									<i className="fas fa-dumbbell fa-10x mb-4 text-primary"></i>
									<h3 className="h4 mb-2">Powerlifting</h3>
									<p className="text-muted mb-0">
										We have experienced coaches who can get you to meet your goals in competition or hobby.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-center">
								<div className="mt-5">
									<i className="fas fa-heartbeat fa-10x mb-4 text-primary"></i>
									<h3 className="h4 mb-2">Personal Training</h3>
									<p className="text-muted mb-0">
										Get into the best shape of your life. Our trainers here can show you how to reach your goals.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-center">
								<div className="mt-5">
									<i className="fas fa-wheelchair fa-10x mb-4 text-primary"></i>
									<h3 className="h4 mb-2">Rehabilitation</h3>
									<p className="text-muted mb-0">
										Whether its therapy or to turn your life around we will be here to help you all the way.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="portfolio">
					<div className="container-fluid p-0">
						<div className="row no-gutters">
							<div className="col-lg-4 col-sm-6">
								<a
									className="portfolio-box"
									href="img/portfolio/fullsize/squat.jpg"
									onClick={this.handlePortfolioClick.bind(this, 0)}
								>
									<Img
										fluid={
											this.props.data.images.edges[0].node.childImageSharp.fluid
										}
									/>
									<div className="portfolio-box-caption">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">Project Name</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a
									className="portfolio-box"
									href="img/portfolio/fullsize/board_press.jpg"
									onClick={this.handlePortfolioClick.bind(this, 1)}
								>
									<Img
										fluid={
											this.props.data.images.edges[1].node.childImageSharp.fluid
										}
									/>
									<div className="portfolio-box-caption">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">Project Name</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a
									className="portfolio-box"
									href="img/portfolio/fullsize/deadlift.jpg"
									onClick={this.handlePortfolioClick.bind(this, 2)}
								>
									<Img
										fluid={
											this.props.data.images.edges[2].node.childImageSharp.fluid
										}
									/>
									<div className="portfolio-box-caption">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">Project Name</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a
									className="portfolio-box"
									href="images/portfolio/fullsize/dumbell.jpg"
									onClick={this.handlePortfolioClick.bind(this, 3)}
								>
									<Img
										fluid={
											this.props.data.images.edges[3].node.childImageSharp.fluid
										}
									/>
									<div className="portfolio-box-caption">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">Project Name</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a
									className="portfolio-box"
									href="img/portfolio/fullsize/body_building.jpg"
									onClick={this.handlePortfolioClick.bind(this, 4)}
								>
									<Img
										fluid={
											this.props.data.images.edges[4].node.childImageSharp.fluid
										}
									/>
									<div className="portfolio-box-caption">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">Project Name</div>
									</div>
								</a>
							</div>
							<div className="col-lg-4 col-sm-6">
								<a
									className="portfolio-box"
									href="img/portfolio/fullsize/cable.jpg"
									onClick={this.handlePortfolioClick.bind(this, 5)}
								>
									<Img
										fluid={
											this.props.data.images.edges[5].node.childImageSharp.fluid
										}
									/>
									<div className="portfolio-box-caption p-3">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">Project Name</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/*<section className="page-section bg-primary" id="staff">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8 text-center">
								<h2 className="text-white mt-0">Staff</h2>
								<hr className="divider light my-4" />

								<a
									className="btn btn-light btn-xl js-scroll-trigger"
									href="#contact"
									onClick={Scroller.handleAnchorScroll}
								>
									Get Started!
								</a>
							</div>
						</div>
					</div>
									</section>*/}

				<section className="page-section" id="contact">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8 text-center text-secondary">
								<h2 className="mt-0">Owned and Operated by U.S. ARMY Veteran</h2>
								<hr className="divider my-4" />
								<p className="text-white mb-5">
									Ready to start your fitness journey with us? Give us a call or send us an
									email and we will get back to you as soon as possible!
									<br></br>
									<br></br>
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
								<i className="fas fa-phone fa-3x mb-3 text-muted"></i>
								<p className="text-white">Call</p>
								<a className="text-bold" href="tel:+1-559-577-8679">+1 (559) 577-8679</a>
							</div>
							<div className="col-lg-4 mr-auto text-center">
								<i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
								<p className="text-white">Email</p>
								<a className="d-block" href="mailto:everydayiron8489@gmail.com">
									everydayiron8489@gmail.com
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="social py-5 bg-secondary" id="social">
					<div className="container">
						<div className="text-center text-bold text-white">Join us on Social Media!
							<div className="text-center p-3">
								<a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/rhinosEI" target="_blank"
									rel="noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
								<a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/everyday_iron"
									target="_blank" rel="noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i> Instagram</a>
								<a className="btn btn-dark btn-social mx-2" href="https://goo.gl/maps/KDzH3bjZMYFmi7HN9"
									target="_blank" rel="noreferrer" aria-label="Maps"><i class="fas fa-map-marker-alt"></i> Maps</a>
							</div>
						</div>
					</div>
				</section>

				<PortfolioModal
					show={this.state.modalShow}
					onHide={() => this.setModal(false, 0)}
				>
					<PortfolioCarousel
						images={this.props.data.images.edges}
						current={this.state.modalCurrent}
					/>
				</PortfolioModal>
			</Layout>
		)
	}
}

export const imageData = graphql`
	query {
		images: allFile(
			filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
			sort: { fields: name }
		) {
			edges {
				node {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
